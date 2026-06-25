package dev.matteo.learninghub

import android.app.AlertDialog
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.util.Patterns
import android.view.LayoutInflater
import android.view.View
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.android.material.textfield.TextInputEditText
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException
import com.google.firebase.auth.FirebaseAuthInvalidUserException
import com.google.firebase.auth.FirebaseAuthUserCollisionException
import com.google.firebase.auth.FirebaseAuthWeakPasswordException
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions

class LoginActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth
    private lateinit var googleSignInClient: GoogleSignInClient
    private lateinit var firestore: FirebaseFirestore

    private lateinit var btnGoogle: Button
    private lateinit var btnEmail: Button
    private lateinit var btnSignUp: Button
    private lateinit var btnGuest: Button
    private lateinit var progressBar: ProgressBar
    private lateinit var tvStatus: TextView

    companion object {
        private const val TAG = "LoginActivity"
        private const val RC_SIGN_IN = 9001
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        hideSystemUI()

        // Initialize Firebase
        auth = FirebaseAuth.getInstance()
        firestore = FirebaseFirestore.getInstance()

        // Configure Google Sign-In
        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.default_web_client_id))
            .requestEmail()
            .build()
        googleSignInClient = GoogleSignIn.getClient(this, gso)

        // Bind views
        btnGoogle = findViewById(R.id.btn_sign_in_google)
        btnEmail = findViewById(R.id.btn_sign_in_email)
        btnSignUp = findViewById(R.id.btn_sign_up_email)
        btnGuest = findViewById(R.id.btn_guest)
        progressBar = findViewById(R.id.progress_bar)
        tvStatus = findViewById(R.id.tv_status)

        // Button click listeners
        btnGoogle.setOnClickListener { signInWithGoogle() }
        btnEmail.setOnClickListener { showEmailDialog(startInSignUpMode = false) }
        btnSignUp.setOnClickListener { showEmailDialog(startInSignUpMode = true) }
        btnGuest.setOnClickListener { showGuestWarning() }
    }

    override fun onStart() {
        super.onStart()
        // Check if user is already signed in
        val currentUser = auth.currentUser
        if (currentUser != null) {
            goToMainActivity()
        }
    }

    // ─── GOOGLE SIGN-IN ───────────────────────────────────────────

    private fun signInWithGoogle() {
        showLoading("Signing in with Google...")
        val signInIntent = googleSignInClient.signInIntent
        @Suppress("DEPRECATION")
        startActivityForResult(signInIntent, RC_SIGN_IN)
    }

    @Suppress("DEPRECATION")
    @Deprecated("Use Activity Result APIs")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (requestCode == RC_SIGN_IN) {
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)
            try {
                val account = task.getResult(ApiException::class.java)!!
                Log.d(TAG, "Google sign in succeeded: ${account.id}")
                firebaseAuthWithGoogle(account.idToken!!)
            } catch (e: ApiException) {
                Log.w(TAG, "Google sign in failed", e)
                showError("Sign in cancelled.")
            }
        }
    }

    private fun firebaseAuthWithGoogle(idToken: String) {
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    Log.d(TAG, "signInWithCredential:success")
                    saveUserProfile()
                    goToMainActivity()
                } else {
                    Log.w(TAG, "signInWithCredential:failure", task.exception)
                    showError("Google authentication failed.")
                }
            }
    }

    // ─── EMAIL/PASSWORD SIGN-IN ───────────────────────────────────

    private fun showEmailDialog(startInSignUpMode: Boolean) {
        val dialogView = LayoutInflater.from(this).inflate(R.layout.dialog_email_login, null)

        val dialog = AlertDialog.Builder(this, R.style.DarkDialog)
            .setView(dialogView)
            .setCancelable(true)
            .create()

        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)

        val tvDialogTitle = dialogView.findViewById<TextView>(R.id.tv_dialog_title)
        val etEmail = dialogView.findViewById<TextInputEditText>(R.id.et_email)
        val etPassword = dialogView.findViewById<TextInputEditText>(R.id.et_password)
        val tvError = dialogView.findViewById<TextView>(R.id.tv_email_error)
        val progressEmail = dialogView.findViewById<ProgressBar>(R.id.progress_email)
        val emailButtons = dialogView.findViewById<View>(R.id.email_buttons)
        val btnSignIn = dialogView.findViewById<Button>(R.id.btn_email_sign_in)
        val btnCreate = dialogView.findViewById<Button>(R.id.btn_create_account)

        var isSignUpMode = startInSignUpMode

        fun updateDialogUI() {
            if (isSignUpMode) {
                tvDialogTitle.text = "Create Account"
                btnSignIn.text = "Create Account"
                btnCreate.text = "Already have an account? Sign In"
            } else {
                tvDialogTitle.text = "Sign in with Email"
                btnSignIn.text = "Sign In"
                btnCreate.text = "Need an account? Sign Up"
            }
            tvError.visibility = View.GONE
        }

        updateDialogUI()

        fun showDialogLoading() {
            progressEmail.visibility = View.VISIBLE
            emailButtons.visibility = View.GONE
            tvError.visibility = View.GONE
        }

        fun showDialogError(msg: String) {
            progressEmail.visibility = View.GONE
            emailButtons.visibility = View.VISIBLE
            tvError.text = msg
            tvError.visibility = View.VISIBLE
        }

        fun validateInputs(): Boolean {
            val email = etEmail.text.toString().trim()
            val password = etPassword.text.toString()

            if (email.isEmpty()) {
                showDialogError("Please enter your email address.")
                return false
            }
            if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                showDialogError("Please enter a valid email address.")
                return false
            }
            if (password.length < 6) {
                showDialogError("Password must be at least 6 characters.")
                return false
            }
            return true
        }

        // Primary action button (either Sign In or Create Account)
        btnSignIn.setOnClickListener {
            if (!validateInputs()) return@setOnClickListener
            val email = etEmail.text.toString().trim()
            val password = etPassword.text.toString()

            showDialogLoading()

            if (isSignUpMode) {
                // Sign Up / Create Account - verify if email is already registered first
                auth.fetchSignInMethodsForEmail(email)
                    .addOnCompleteListener { fetchTask ->
                        if (fetchTask.isSuccessful) {
                            val signInMethods = fetchTask.result?.signInMethods
                            if (!signInMethods.isNullOrEmpty()) {
                                // Already registered!
                                showDialogError("This email is already registered! Please sign in instead.")
                                isSignUpMode = false
                                updateDialogUI()
                            } else {
                                // Not registered yet, proceed to create account
                                auth.createUserWithEmailAndPassword(email, password)
                                    .addOnCompleteListener { task ->
                                        if (task.isSuccessful) {
                                            Log.d(TAG, "Email create account: success")
                                            saveUserProfile()
                                            dialog.dismiss()
                                            goToMainActivity()
                                        } else {
                                            val errorMsg = when (task.exception) {
                                                is FirebaseAuthWeakPasswordException -> "Password is too weak. Use at least 6 characters."
                                                is FirebaseAuthUserCollisionException -> "This email is already registered! Please sign in instead."
                                                is FirebaseAuthInvalidCredentialsException -> "Invalid email format."
                                                else -> "Account creation failed: ${task.exception?.localizedMessage}"
                                            }
                                            showDialogError(errorMsg)
                                        }
                                    }
                            }
                        } else {
                            // Offline or other error, try direct creation and let Firebase return error
                            auth.createUserWithEmailAndPassword(email, password)
                                .addOnCompleteListener { task ->
                                    if (task.isSuccessful) {
                                        Log.d(TAG, "Email create account: success")
                                        saveUserProfile()
                                        dialog.dismiss()
                                        goToMainActivity()
                                    } else {
                                        val errorMsg = when (task.exception) {
                                            is FirebaseAuthWeakPasswordException -> "Password is too weak. Use at least 6 characters."
                                            is FirebaseAuthUserCollisionException -> "This email is already registered! Please sign in instead."
                                            is FirebaseAuthInvalidCredentialsException -> "Invalid email format."
                                            else -> "Account creation failed: ${task.exception?.localizedMessage}"
                                        }
                                        showDialogError(errorMsg)
                                    }
                                }
                        }
                    }
            } else {
                // Sign In
                auth.signInWithEmailAndPassword(email, password)
                    .addOnCompleteListener { task ->
                        if (task.isSuccessful) {
                            Log.d(TAG, "Email sign in: success")
                            saveUserProfile()
                            dialog.dismiss()
                            goToMainActivity()
                        } else {
                            val errorMsg = when (task.exception) {
                                is FirebaseAuthInvalidUserException -> "No account found with this email."
                                is FirebaseAuthInvalidCredentialsException -> "Incorrect password."
                                else -> "Sign in failed: ${task.exception?.localizedMessage}"
                            }
                            showDialogError(errorMsg)
                        }
                    }
            }
        }

        // Toggle button (switching modes)
        btnCreate.setOnClickListener {
            isSignUpMode = !isSignUpMode
            updateDialogUI()
        }

        dialog.show()
        val width = (resources.displayMetrics.widthPixels * 0.85).toInt()
        val maxWidth = (480 * resources.displayMetrics.density).toInt() // cap at 480dp
        val finalWidth = if (width > maxWidth) maxWidth else width
        dialog.window?.setLayout(finalWidth, android.view.ViewGroup.LayoutParams.WRAP_CONTENT)
    }

    // ─── GUEST MODE ───────────────────────────────────────────────

    private fun showGuestWarning() {
        AlertDialog.Builder(this, R.style.DarkDialog)
            .setTitle("⚠️ Guest Mode")
            .setMessage(
                "Your progress will be saved on this device only.\n\n" +
                "If you uninstall the app or switch devices, your progress will be lost.\n\n" +
                "You can sign in later to save your progress to the cloud."
            )
            .setPositiveButton("Continue as Guest") { _, _ ->
                signInAsGuest()
            }
            .setNegativeButton("Cancel", null)
            .show()
    }

    private fun signInAsGuest() {
        showLoading("Starting guest mode...")
        auth.signInAnonymously()
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    Log.d(TAG, "Anonymous sign in: success")
                    goToMainActivity()
                } else {
                    Log.w(TAG, "Anonymous sign in: failure", task.exception)
                    showError("Could not start guest mode. Please try again.")
                }
            }
    }

    // ─── HELPERS ──────────────────────────────────────────────────

    private fun saveUserProfile() {
        val user = auth.currentUser ?: return
        if (user.isAnonymous) return  // Don't save profile for anonymous users

        val userMap = hashMapOf(
            "email" to (user.email ?: ""),
            "displayName" to (user.displayName ?: ""),
            "photoUrl" to (user.photoUrl?.toString() ?: ""),
            "lastLogin" to com.google.firebase.Timestamp.now()
        )
        firestore.collection("users").document(user.uid)
            .set(userMap, SetOptions.merge())
            .addOnSuccessListener { Log.d(TAG, "User profile saved") }
            .addOnFailureListener { e -> Log.w(TAG, "Error saving profile", e) }
    }

    private fun goToMainActivity() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }

    private fun showLoading(message: String) {
        btnGoogle.visibility = View.GONE
        btnEmail.visibility = View.GONE
        btnGuest.visibility = View.GONE
        progressBar.visibility = View.VISIBLE
        tvStatus.text = message
    }

    private fun showError(message: String) {
        btnGoogle.visibility = View.VISIBLE
        btnEmail.visibility = View.VISIBLE
        btnGuest.visibility = View.VISIBLE
        progressBar.visibility = View.GONE
        tvStatus.text = message
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }

    private fun hideSystemUI() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false)
            window.insetsController?.let { controller ->
                controller.hide(WindowInsets.Type.statusBars() or WindowInsets.Type.navigationBars())
                controller.systemBarsBehavior =
                    WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
            }
        } else {
            @Suppress("DEPRECATION")
            window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_FULLSCREEN
                )
        }
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) hideSystemUI()
    }
}
