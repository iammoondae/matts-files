package dev.matteo.learninghub

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.webkit.JavascriptInterface
import android.webkit.PermissionRequest
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.net.Uri
import android.content.ClipData
import android.widget.Button
import android.widget.ImageButton
import android.widget.LinearLayout
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.firebase.auth.FirebaseAuth

class MainActivity : AppCompatActivity() {

    private lateinit var mWebView: WebView
    private var mUploadMessage: ValueCallback<Array<Uri>>? = null
    private val auth = FirebaseAuth.getInstance()

    companion object {
        private const val FILECHOOSER_RESULTCODE = 1
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Hide status and navigation bar for immersive experience
        hideSystemUI()

        mWebView = findViewById(R.id.webview)

        val settings = mWebView.settings

        // Core WebView Settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        settings.allowFileAccess = true
        settings.allowContentAccess = true

        // Crucial: Allow file:// URLs to load resources and bypass CORS for local files
        @Suppress("DEPRECATION")
        settings.allowFileAccessFromFileURLs = true
        @Suppress("DEPRECATION")
        settings.allowUniversalAccessFromFileURLs = true

        // Autoplay music and audio effects
        settings.mediaPlaybackRequiresUserGesture = false

        // Enable responsive viewport metadata support
        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true

        // Add JavaScript bridge for auth info
        mWebView.addJavascriptInterface(AuthBridge(), "AndroidAuth")

        mWebView.webViewClient = object : WebViewClient() {
            @Suppress("DEPRECATION")
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                if (url != null && (url.startsWith("http://") || url.startsWith("https://"))) {
                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                    view?.context?.startActivity(intent)
                    return true
                }
                return false
            }

            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString()
                if (url != null && (url.startsWith("http://") || url.startsWith("https://"))) {
                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                    view?.context?.startActivity(intent)
                    return true
                }
                return false
            }
        }

        mWebView.webChromeClient = object : WebChromeClient() {
            override fun onPermissionRequest(request: PermissionRequest?) {
                request?.grant(request.resources)
            }

            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                mUploadMessage?.onReceiveValue(null)
                mUploadMessage = filePathCallback

                val intent = fileChooserParams?.createIntent() ?: Intent(Intent.ACTION_GET_CONTENT).apply {
                    addCategory(Intent.CATEGORY_OPENABLE)
                    type = "*/*"
                }

                try {
                    @Suppress("DEPRECATION")
                    startActivityForResult(intent, FILECHOOSER_RESULTCODE)
                } catch (e: android.content.ActivityNotFoundException) {
                    mUploadMessage = null
                    return false
                }
                return true
            }
        }

        // Setup guest banner
        setupGuestBanner()

        // Load the local index.html packaged in assets
        mWebView.loadUrl("file:///android_asset/index.html")
    }

    // ─── GUEST BANNER ─────────────────────────────────────────────

    private fun setupGuestBanner() {
        val banner = findViewById<LinearLayout>(R.id.guest_banner)
        val btnSignIn = findViewById<Button>(R.id.btn_banner_sign_in)
        val btnDismiss = findViewById<ImageButton>(R.id.btn_banner_dismiss)

        // Show banner only for anonymous/guest users
        val user = auth.currentUser
        if (user != null && user.isAnonymous) {
            banner.visibility = View.VISIBLE
        } else {
            banner.visibility = View.GONE
        }

        // "Sign In" button → sign out anonymous, go to login screen
        btnSignIn.setOnClickListener {
            auth.signOut()
            val intent = Intent(this, LoginActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            startActivity(intent)
            finish()
        }

        // "X" dismiss button → hide the banner for this session
        btnDismiss.setOnClickListener {
            banner.visibility = View.GONE
        }
    }

    // ─── JAVASCRIPT BRIDGE ────────────────────────────────────────

    /**
     * JavaScript bridge that exposes user auth info to the WebView.
     *
     * From JavaScript, call:
     *   AndroidAuth.getUserId()       → returns the Firebase UID
     *   AndroidAuth.getUserName()     → returns the display name
     *   AndroidAuth.getUserEmail()    → returns the email
     *   AndroidAuth.getUserPhoto()    → returns the profile photo URL
     *   AndroidAuth.isLoggedIn()      → returns "true" or "false"
     *   AndroidAuth.isGuest()         → returns "true" if anonymous user
     *   AndroidAuth.logout()          → signs out and returns to login screen
     */
    inner class AuthBridge {
        @JavascriptInterface
        fun getUserId(): String {
            return auth.currentUser?.uid ?: ""
        }

        @JavascriptInterface
        fun getUserName(): String {
            return auth.currentUser?.displayName ?: "Guest"
        }

        @JavascriptInterface
        fun getUserEmail(): String {
            return auth.currentUser?.email ?: ""
        }

        @JavascriptInterface
        fun getUserPhoto(): String {
            return auth.currentUser?.photoUrl?.toString() ?: ""
        }

        @JavascriptInterface
        fun isLoggedIn(): String {
            return (auth.currentUser != null).toString()
        }

        @JavascriptInterface
        fun isGuest(): String {
            return (auth.currentUser?.isAnonymous == true).toString()
        }

        @JavascriptInterface
        fun logout() {
            // Sign out from Firebase
            auth.signOut()
            // Sign out from Google (to show account picker next time)
            val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail()
                .build()
            GoogleSignIn.getClient(this@MainActivity, gso).signOut()

            // Navigate back to LoginActivity
            runOnUiThread {
                val intent = Intent(this@MainActivity, LoginActivity::class.java)
                intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                startActivity(intent)
                finish()
            }
        }
    }

    // ─── SYSTEM UI ────────────────────────────────────────────────

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

    @Suppress("DEPRECATION")
    @Deprecated("Use OnBackPressedCallback instead")
    override fun onBackPressed() {
        if (mWebView.canGoBack()) {
            mWebView.goBack()
        } else {
            super.onBackPressed()
        }
    }

    @Suppress("DEPRECATION")
    @Deprecated("Use Activity Result APIs")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == FILECHOOSER_RESULTCODE) {
            if (mUploadMessage == null) return
            var results: Array<Uri>? = null
            if (resultCode == RESULT_OK && data != null) {
                val clipData: ClipData? = data.clipData
                if (clipData != null) {
                    results = Array(clipData.itemCount) { i -> clipData.getItemAt(i).uri }
                } else {
                    data.dataString?.let { results = arrayOf(Uri.parse(it)) }
                }
            }
            mUploadMessage?.onReceiveValue(results)
            mUploadMessage = null
        }
    }
}
