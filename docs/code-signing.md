---
sidebar_position: 6
title: Code Signing
---

# Code Signing

Postlane binaries are signed to prevent OS security warnings during installation. This page documents how signing is configured for each platform and how to verify a release.

---

## macOS

### Prerequisites

- Apple Developer Program membership ($99/year at [developer.apple.com](https://developer.apple.com))
- A **Developer ID Application** certificate (not a development certificate)

### Certificate setup

1. Sign in to [developer.apple.com](https://developer.apple.com) and go to **Certificates, Identifiers & Profiles**
2. Click **+** and choose **Developer ID Application**
3. Follow the prompts to generate and download the certificate
4. Double-click the downloaded `.cer` file to install it in your macOS Keychain

### CI environment variables

Add these secrets to your CI environment:

| Variable | Description |
|----------|-------------|
| `APPLE_CERTIFICATE` | The Developer ID Application certificate, base64-encoded |
| `APPLE_CERTIFICATE_PASSWORD` | The password used when exporting the certificate as `.p12` |
| `APPLE_SIGNING_IDENTITY` | The certificate name, for example `Developer ID Application: Your Name (TEAMID)` |
| `APPLE_ID` | Your Apple ID email address |
| `APPLE_ID_PASSWORD` | An app-specific password generated at [appleid.apple.com](https://appleid.apple.com) |
| `APPLE_TEAM_ID` | Your 10-character Apple team ID |

### Tauri configuration

In `tauri.conf.json`, set:

```json
{
  "bundle": {
    "macOS": {
      "signingIdentity": "$APPLE_SIGNING_IDENTITY",
      "notarize": {
        "appleId": "$APPLE_ID",
        "appleIdPassword": "$APPLE_ID_PASSWORD",
        "appleTeamId": "$APPLE_TEAM_ID"
      }
    }
  }
}
```

### Notarization

Tauri handles notarization automatically when the `notarize` block is present and the environment variables are set. After signing, Tauri submits the binary to Apple's notarization service via `xcrun notarytool` and staples the notarization ticket to the `.dmg`.

### Verifying a signed build

To verify that a `.dmg` is correctly signed and notarized:

```bash
# Check the signature
codesign --verify --deep --strict /Applications/Postlane.app

# Check Gatekeeper acceptance
spctl --assess --type execute /Applications/Postlane.app
```

Both commands should exit with no error output and exit code 0.

---

## Windows

### Certificate options

**Option 1 -- Trusted Signing (Microsoft, recommended for open-source)**

Microsoft offers Trusted Signing for open-source projects at no cost. Apply at [developer.microsoft.com/en-us/trusted-signing](https://developer.microsoft.com/en-us/trusted-signing).

**Option 2 -- Extended Validation (EV) certificate**

EV certificates from commercial CAs (Sectigo, DigiCert, etc.) cost $200--500/year and eliminate SmartScreen warnings immediately upon first use.

### CI environment variables

| Variable | Description |
|----------|-------------|
| `WINDOWS_CERTIFICATE` | The code signing certificate, base64-encoded |
| `WINDOWS_CERTIFICATE_PASSWORD` | The certificate export password |

### Tauri configuration

In `tauri.conf.json`:

```json
{
  "bundle": {
    "windows": {
      "certificateThumbprint": null,
      "digestAlgorithm": "sha256",
      "timestampUrl": "http://timestamp.digicert.com"
    }
  }
}
```

### Verifying a signed build

Right-click the downloaded `.exe` or `.msi`, click **Properties → Digital Signatures**, and confirm the signature shows as valid.

---

## Linux

Linux releases are GPG-signed. Users can verify the AppImage before running it.

### Signing releases

1. Generate a GPG key if you do not have one:
   ```bash
   gpg --full-generate-key
   ```
2. Export and publish the public key:
   ```bash
   gpg --armor --export your@email.com | gpg --send-keys --keyserver keys.openpgp.org
   ```
3. Sign the AppImage as part of the release process:
   ```bash
   gpg --detach-sign --armor Postlane_*.AppImage
   ```
   This produces a `.AppImage.asc` file alongside the binary.

### Verifying a signed release

1. Import the Postlane signing key:
   ```bash
   gpg --keyserver keys.openpgp.org --recv-keys POSTLANE_KEY_FINGERPRINT
   ```
   (The fingerprint is listed on [postlane.dev/security](https://postlane.dev/security))

2. Verify the AppImage:
   ```bash
   gpg --verify Postlane_*.AppImage.asc Postlane_*.AppImage
   ```

A successful verification shows `Good signature from "Postlane <releases@postlane.dev>"`.
