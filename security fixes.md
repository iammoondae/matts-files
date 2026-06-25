# Agent Instructions: Security & Architecture Fixes

Paste this entire file (or relevant sections) to your AI coding agent (e.g. Claude Code). Work through the phases **in order** — each phase is designed to be reviewed and approved before moving to the next. Do not let the agent commit or push anything automatically; review every change first.

**Status note:** Phase 0 below addresses a `google-services.json` that has already been committed to a public GitHub repo. Run Phase 0 first, before Phase 1, since it deals with something that has already happened rather than something to prevent going forward.

---

## Phase 0 — Remove an already-leaked `google-services.json` and lock down access

```
A google-services.json file has already been committed to a public GitHub
repo for this project (Firebase project ID: matteo-s-learning-hub). I need
to clean this up properly. Please do the following, in order, and show me
the results of each step before moving to the next:

1. Find every commit in this repo's git history that added or modified a
   file named google-services.json (or GoogleService-Info.plist, in case
   an iOS equivalent exists). List the commits and confirm whether the file
   is still present in the current working tree.

2. Do NOT rewrite git history yet. First just confirm: is this repo the
   one currently pushed to GitHub as a public repo, and is google-services.json
   still reachable in its history on GitHub right now? Tell me clearly,
   because the next step is irreversible.

3. If confirmed, walk me through using git filter-repo (preferred over the
   older BFG/filter-branch approach) to permanently remove google-services.json
   from all commits in this repo's history — not just delete it going
   forward. Explain each command before running it, and confirm with me
   before running anything that rewrites history or force-pushes.

4. After history is cleaned and force-pushed, remind me that anyone who
   forked or cloned the repo before this point may still have a copy of
   the old history — rewriting history on GitHub does not retroactively
   remove copies others may have already pulled.

5. Add google-services.json and GoogleService-Info.plist to .gitignore if
   they aren't already covered (these should already be in SECURITY.md
   patterns from Phase 1, but confirm here independently in case Phase 1
   hasn't been run yet).

6. Do not push or force-push anything without my explicit confirmation at
   each step.
```

**Two things to do yourself (not the agent) right after this, and don't skip them — they matter more than the git history cleanup:**

1. **Check Firebase Security Rules now, regardless of git cleanup progress.** Go to the Firebase Console → Firestore Database → Rules, and Storage → Rules. Confirm they require authentication (e.g. `allow read, write: if request.auth != null;` at minimum) rather than open testing-mode rules (`allow read, write: if true;`). This is the actual access control — the leaked file itself does not grant data access if your rules are locked down properly.
2. **Restrict the API key in Google Cloud Console.** Go to console.cloud.google.com → APIs & Services → Credentials → find the key starting `AIzaSyAIjI...` → under "Application restrictions" select Android apps → add your package name (`dev.matteo.learninghub`) and SHA-1 certificate fingerprint. This stops the key from being usable from outside your actual app.

You generally do **not** need to regenerate this specific API key the way you would a leaked password — Google's own guidance treats Firebase client config as expected to be visible inside shipped apps. Rotate it only if you later see suspicious usage on your Firebase usage dashboard.

---

## Phase 1 — Repo hygiene & SECURITY.md (no app logic changes)

```
Create a SECURITY.md file in the root of this project.

This file should document our security practices for the project. Include a
section titled "Files That Must Never Be Committed" listing the following
patterns, with a one-line plain-English explanation next to each of why it's
sensitive:

# Secrets & credentials
.env
.env.*
*.keystore
*.jks
google-services.json
GoogleService-Info.plist
firebase-adminsdk-*.json
**/secrets.xml
local.properties

# Signing keys (Android release signing)
*.pepk
keystore.properties

# Build artifacts (not secrets, but shouldn't be committed)
/build
/.gradle
*.apk
*.aab

# IDE/OS noise
.idea/
*.iml
.DS_Store

Also do the following:
1. Check if a .gitignore file already exists in this project. If it does,
   show me its current contents before changing anything.
2. Add any of the above patterns that are missing from .gitignore — do not
   remove or alter any existing entries that aren't related to this list.
3. Search the current git history for any files matching these patterns
   that may have already been committed in the past, and report back what
   you find. Do not delete or rewrite any git history without asking me
   first.
4. Do not commit or push anything automatically — show me the changes and
   wait for my approval.
```

**Before moving to Phase 2:** review what the agent reports in step 3. If it finds anything already committed in the past (e.g. an old `google-services.json`), stop and ask for help removing it from history — that's a different, more delicate operation than just updating `.gitignore` going forward.

---

## Phase 2 — Repo structure: separate public update content from private app source

```
I currently fetch app update content (week data, review data, images, and a
manifest.json) at runtime from a public GitHub repo at:
https://raw.githubusercontent.com/iammoondae/matts-files/main

I want to restructure so that:
1. A repo containing ONLY update content (weeks, reviews, images, manifest)
   stays public, since the app needs to fetch it without authentication.
2. My main app source code (this repository) is private, and contains no
   update-payload data mixed in with it.

Please:
1. Search this codebase for REMOTE_UPDATE_URL and show me everywhere it's
   referenced.
2. Confirm whether any of the update-payload content (week*.js, review_*.js,
   images, manifest.json) currently lives inside THIS repository, or
   whether it's already fully separate in the matts-files repo.
3. If any update-payload files are mixed into this repo, list them so I can
   decide what to move.
4. Do not change visibility settings on GitHub yourself — just report
   findings and recommendations. I will change repo visibility manually in
   GitHub's settings.
```

**Manual step (you do this, not the agent):** once you confirm the split is clean, go to GitHub settings and set your main app repo to Private. Leave the `matts-files` (update content) repo Public, since the app fetches from it without authentication.

---

## Phase 3 — Replace blind `eval()` with hash-verified execution

```
This codebase uses eval() to execute remotely-fetched JavaScript content
in 7 locations, fetched from a public GitHub repo via REMOTE_UPDATE_URL.
This is a security risk: if that repo were ever compromised, malicious code
would run automatically on every user's device with no verification.

Find all 7 eval() call sites in app.js (search for "eval(") and do the
following:

1. For each one, show me the surrounding function and tell me whether the
   fetched content is genuinely executable logic, or whether it's actually
   just structured data (e.g. arrays/objects of quiz questions, word lists)
   that happens to be wrapped in JavaScript syntax.

2. For any call site where the content is just data: convert that content
   to plain JSON format instead of JS, and replace the eval() call with
   JSON.parse(). This removes the security risk entirely for those cases
   because JSON cannot execute code.

3. For any call site where genuine executable logic is required and JSON
   can't replace it: implement SHA-256 hash verification before execution.
   Specifically:
   a. Each remote file (week*.js, review_*.js) should have a matching hash
      published alongside it in the manifest.json (e.g. manifest lists
      {"file": "week1.js", "sha256": "..."}).
   b. Before calling eval() on downloaded content, compute the SHA-256 hash
      of the downloaded text and compare it against the hash listed in the
      manifest for that file.
   c. If the hashes don't match, reject the file, do not eval() it, log a
      clear error, and show the user a "content verification failed" message
      instead of crashing silently.
   d. Use the Web Crypto API (crypto.subtle.digest) for hashing, since it's
      already available in the browser/WebView with no extra dependency.

4. Show me a summary of which call sites became JSON.parse() and which
   became hash-verified eval(), before making any changes, so I can approve
   the approach for each one.

5. Do not change the manifest.json format on the GitHub repo side yet —
   just write the app-side code to expect a "sha256" field per file. I will
   handle adding the actual hashes to the manifest separately, since that
   lives in a different repo.
```

**Manual step (you do this after Phase 3):** once the app-side code expects hashes in the manifest, you'll need to generate SHA-256 hashes for your existing `week*.js`/`review_*.js` files and add them to `manifest.json` in the `matts-files` repo. Ask your agent for a small one-off script to generate these hashes for your existing files if you're not sure how — that's a quick follow-up request once Phase 3 is approved.

---

## Phase 4 — Deduplicate the update-checking logic

```
There are two near-identical copies of the update-checking logic in app.js:
one around the "Check for Updates" settings button (the function that fetches
manifest.json and downloads weeks/reviews/images), and one used during the
onboarding flow. They differ only in how they report progress to the user
(one disables a button and shows static text, the other updates a progress
bar with a running count).

Please refactor this into a single shared function that contains the actual
fetch/download/verify logic once, and accepts a callback or reporter object
as a parameter so each calling screen can supply its own way of displaying
progress (button text vs. progress bar) without duplicating the underlying
logic.

Apply this AFTER Phase 3's hash-verification changes are in place, so the
verification logic also only exists in one place going forward.

Show me the proposed shared function signature before rewriting both call
sites, so I can confirm it covers both use cases correctly.
```

---
