---
sidebar_position: 3
title: Installation
---

# Installation

## Requirements

- macOS 12 or later, Windows 10 or later, or Ubuntu 20.04 LTS or later
- Node.js 22 or later (for the CLI step)
- A GitHub, GitLab, or Google account

Check your Node.js version by running `node --version` in a terminal. If you need to install it, download the LTS release from [nodejs.org](https://nodejs.org).

---

## macOS

### Download and install

1. Go to [postlane.dev](https://postlane.dev) and click **Download for macOS**, or download directly from the [GitHub releases page](https://github.com/postlane/desktop/releases)
2. Open the downloaded `.dmg` file
3. Drag the Postlane icon into your Applications folder
4. Open Postlane from your Applications folder or Spotlight

### First-launch dialog

On first open, macOS may show: "Postlane is an app downloaded from the internet. Are you sure you want to open it?" Click **Open**. This is a standard one-time prompt for any newly downloaded app; Postlane is notarised by Apple so no further steps are needed.

---

## Windows

### Download and install

1. Go to [postlane.dev](https://postlane.dev) and click **Download for Windows**, or download directly from the [GitHub releases page](https://github.com/postlane/desktop/releases)
2. Run the downloaded `.exe` installer
3. If Windows SmartScreen shows a warning, click **More info**, then **Run anyway**
4. Follow the installer prompts

---

## Linux

### AppImage (recommended)

Download the latest `.AppImage` from [postlane.dev/download](https://postlane.dev/download) or the [GitHub releases page](https://github.com/postlane/desktop/releases), then:

```bash
chmod +x Postlane_*.AppImage
./Postlane_*.AppImage
```

No install step needed. Move the file anywhere convenient.

---

## Sign in

Open Postlane. The onboarding wizard appears. Click **Get started**, then choose **Sign in with GitHub**, **GitLab**, or **Google**.

Your browser opens to complete authentication. Once you sign in and authorise Postlane, the browser shows a confirmation and returns you to the app automatically.

---

## Set up your first repository

The wizard walks you through adding a repository. Before you add one, the repository needs a `.postlane/` directory. If yours does not have one, open a terminal in the repo and run:

```bash
npx @postlane/cli init
```

This creates `.postlane/config.json` and `.postlane/voice-guide.md`. Commit these files:

```bash
git add .postlane
git commit -m "Add Postlane configuration"
```

Then continue in the wizard.

---

## Scheduling providers

To queue posts for a specific time, you need a scheduling provider. Postlane works with Zernio, Publer, Outstand, Buffer, Ayrshare, Substack Notes, and custom webhooks. You can set accounts up before or after installing Postlane -- the onboarding wizard walks you through connecting one.

If you plan to use a third-party provider, it is worth connecting your social media profiles in that provider's dashboard in advance. You will need the API key during the wizard.

If you manage multiple clients or projects with separate social accounts, each Postlane workspace has its own scheduler configuration. You can also assign a different provider to individual repositories. See [Scheduling](/scheduling) and [Per-repo Scheduler](/scheduling/per-repo) for details.

---

## Your credentials stay on your machine

Postlane never stores your social media credentials or API keys on our servers. All keys are saved in your operating system's secure keyring -- they never leave your machine. See [Security](/security) for the full breakdown.

---

## Next steps

- [Your First Post](/getting-started) -- draft and send your first post end to end
- [Scheduling](/scheduling) -- connect a provider and queue posts for a specific time
