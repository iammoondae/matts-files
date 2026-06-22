#!/bin/bash
set -e

WORKSPACE_DIR="/home/moondae/Antigravity Projects/Matts Files_apk"
BUILD_TOOLS_DIR="/home/moondae/build_tools_matts"
ANDROID_PROJECT_DIR="${WORKSPACE_DIR}/android-project"
ASSETS_DIR="${ANDROID_PROJECT_DIR}/app/src/main/assets"

echo "=== Running Database Quality Check Gate ==="
python3 "${WORKSPACE_DIR}/scratch/validate_db.py"

echo "=== Cleaning and creating assets directory ==="
rm -rf "${ASSETS_DIR}"
mkdir -p "${ASSETS_DIR}"

# Calculate dynamic build version and date based on current local system date/time
BUILD_TIME=$(date +"%H%M")
BUILD_DATE_YEAR=$(date +"%y")
BUILD_DATE_MONTH=$(date +"%m")
BUILD_DATE_DAY=$(date +"%d")
BUILD_VERSION="v${BUILD_DATE_YEAR}.${BUILD_DATE_MONTH}.${BUILD_DATE_DAY}.${BUILD_TIME}"
BUILD_DATE_FULL=$(date +"%B %d, %Y")

echo "=== Generating Build Version: ${BUILD_VERSION} ==="
echo "=== Generating Build Date: ${BUILD_DATE_FULL} ==="

echo "=== Copying web app assets to Android project ==="
cp "${WORKSPACE_DIR}/index.html" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/index.css" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/app.js" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/icon.png" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/grade_3_matatag_hub.html" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/correct.wav" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/incorrect.wav" "${ASSETS_DIR}/"
cp "${WORKSPACE_DIR}/background5.mp3" "${ASSETS_DIR}/"

# Copy subdirectories
cp -r "${WORKSPACE_DIR}/data" "${ASSETS_DIR}/"
cp -r "${WORKSPACE_DIR}/images" "${ASSETS_DIR}/"
cp -r "${WORKSPACE_DIR}/Worksheets" "${ASSETS_DIR}/"

echo "=== Injecting Build Info into app.js asset ==="
sed -i "s/__APP_BUILD_VERSION__/${BUILD_VERSION}/g" "${ASSETS_DIR}/app.js"
sed -i "s/__APP_BUILD_DATE__/${BUILD_DATE_FULL}/g" "${ASSETS_DIR}/app.js"

echo "=== Setting environment variables ==="
export JAVA_HOME="${BUILD_TOOLS_DIR}/jdk-17.0.10+7"
export ANDROID_HOME="${BUILD_TOOLS_DIR}/android-sdk"
export PATH="${JAVA_HOME}/bin:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${PATH}"

echo "=== Updating versionName in build.gradle ==="
sed -i "s/versionName \".*\"/versionName \"${BUILD_VERSION}\"/g" "${ANDROID_PROJECT_DIR}/app/build.gradle"

echo "=== Running Gradle Build ==="
cd "${ANDROID_PROJECT_DIR}"

# Initialize gradle wrapper files if missing by copying from local gradle
if [ ! -f "gradlew" ]; then
    echo "Initializing Gradle Wrapper..."
    "${BUILD_TOOLS_DIR}/gradle-8.5/bin/gradle" wrapper
fi

chmod +x gradlew

# Clean previous build files to ensure no stale cached assets remain
./gradlew clean

# Run gradlew assembleDebug to compile the APK
./gradlew assembleDebug

echo "=== APK Build Complete! ==="
APK_PATH="${ANDROID_PROJECT_DIR}/app/build/outputs/apk/debug/app-debug.apk"
if [ -f "${APK_PATH}" ]; then
    echo "Successfully generated APK at: ${APK_PATH}"
    ls -lh "${APK_PATH}"
    cp "${APK_PATH}" "${WORKSPACE_DIR}/Matteo's Learning Hub ${BUILD_VERSION}.apk"
    cp "${APK_PATH}" "${WORKSPACE_DIR}/app-debug.apk"
    echo "Copied APK to workspace root as: Matteo's Learning Hub ${BUILD_VERSION}.apk and app-debug.apk"

    echo "=== Auto-committing and pushing build updates to GitHub ==="
    cd "${WORKSPACE_DIR}"
    git add -A
    git commit -m "Build and release: ${BUILD_VERSION}"
    git push origin main
else
    echo "Error: APK file was not generated."
    exit 1
fi
