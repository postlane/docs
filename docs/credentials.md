---
sidebar_position: 4
title: Credentials
---

# Credentials

Postlane stores all API keys and tokens in your operating system's built-in credential store. They are never written to a file on disk.

## Where your credentials are stored

The OS credential store is a secure, encrypted vault managed by your operating system. Applications can ask the OS to store and retrieve credentials by name, but they cannot read each other's credentials.

| Platform | Credential store | Where to find it |
|----------|-----------------|------------------|
| macOS | Keychain | **Keychain Access** app |
| Windows | Credential Manager | **Control Panel → Credential Manager → Windows Credentials** |
| Linux | GNOME Keyring (or libsecret) | Unlocked automatically at login on GNOME desktops; requires `gnome-keyring` on other desktop environments |

## Why credentials are not stored in config files

Configuration files (including `.postlane/config.json`) are committed to version control. An API key written to a config file would be visible to anyone who can read the repository -- including future contributors, CI systems, and anyone you share the repo with publicly.

The OS keyring is locked to your user account and never leaves your machine. Even if someone copies your `.postlane/` directory, they get no credentials.

## What Postlane stores

Postlane stores the following in the OS keyring:

- **Scheduler API keys** -- one per connected provider (Zernio, Ayrshare, etc.)
- **License token** -- the token that activates your Postlane account
- **Substack session cookie** -- if you use Substack Notes, the `substack.sid` cookie (see [Substack Notes](/scheduling/substack-notes))

Postlane does not store social platform passwords or OAuth tokens for LinkedIn, Bluesky, or Mastodon -- those credentials live in your scheduling provider's account.

## What to do if credentials are lost

Credentials can be lost if your OS keyring is reset, if you log in as a different user, or if you migrate to a new machine.

To re-enter credentials:

1. Open **Settings → Scheduler** in the desktop app
2. Select the provider whose key you need to re-enter
3. Paste the API key and click **Save**
4. Click **Test connection** to verify

For the license token, go to **Settings → Account** and click **Re-activate** to sign in again via the web.

## Linux keyring setup

On Linux, Postlane uses `libsecret` to access the OS keyring. Most GNOME-based desktops have this set up automatically. If you see an error about the keyring being locked or unavailable:

1. Install `gnome-keyring` if it is not already present:

```bash
sudo apt install gnome-keyring   # Debian/Ubuntu
sudo pacman -S gnome-keyring     # Arch
```

2. Make sure a keyring daemon is running. On GNOME this happens automatically at login. On other desktop environments you may need to start it:

```bash
eval $(gnome-keyring-daemon --start --components=secrets)
```

3. Restart Postlane.

If you are running Postlane in a headless environment (no GUI), credentials cannot be stored in the OS keyring. Postlane is designed for interactive desktop use and does not support headless credential storage.
