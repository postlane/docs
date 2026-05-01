---
sidebar_position: 1
title: Your First Post
slug: /getting-started
---

# Your First Post

This guide takes you from a fresh Postlane install to your first sent post. Every step is shown exactly as you will perform it. No prior Postlane knowledge assumed.

## What you need before starting

- A macOS, Windows, or Linux machine
- Node.js 18 or later installed (`node --version` to check)
- A Git repository with at least one commit

If you do not have Node.js installed, download it from [nodejs.org](https://nodejs.org) and install the LTS release.

---

## Step 1 — Download and install the desktop app

Go to [postlane.dev](https://postlane.dev) and click **Download**.

**macOS:** Open the downloaded `.dmg`, drag Postlane to your Applications folder, and open it from there.

If you see "Postlane can't be opened because Apple cannot check it for malicious software," do the following:

1. Open **System Settings** (macOS 13 and later) or **System Preferences** (macOS 12)
2. Go to **Privacy & Security**
3. Scroll down to the Security section and click **Open Anyway** next to the Postlane message
4. Click **Open** in the confirmation dialog

**Windows:** Run the downloaded `.exe` installer. If Windows SmartScreen shows a warning, click **More info**, then **Run anyway**.

**Linux:** Download the `.AppImage`, make it executable, and run it:

```bash
chmod +x Postlane_*.AppImage
./Postlane_*.AppImage
```

---

## Step 2 — Sign in

When Postlane opens, the onboarding wizard appears. Click **Get started**, then **Sign in with GitHub** (or GitLab or Google — whichever you use).

Your browser opens. Sign in and authorise Postlane. The browser shows a confirmation message and automatically returns to the app.

You will see "Signed in" in the wizard. Click **Next**.

---

## Step 3 — Name your workspace

A workspace groups your repositories under one set of scheduling credentials and a voice guide. Give it a name — your name, your company name, or a project name works fine. Click **Next**.

---

## Step 4 — Connect a scheduling provider (or skip for now)

Postlane needs a scheduling provider to queue posts for a future time. If you want to send posts immediately, click **Set up later** and continue.

To connect Zernio (recommended, included with Postlane Pro):

1. Select **Zernio** from the provider list
2. Enter your Zernio API key (find it at **zernio.io → Settings → API**)
3. Click **Test connection** — you will see a green checkmark
4. Click **Next**

See [Scheduling providers](/scheduling) for all supported providers.

---

## Step 5 — Add your repository

Click **Add repo** and select a folder on your machine. Postlane checks that it contains a `.git` directory.

If you see "Run `npx @postlane/cli init` in this directory first," open a terminal, navigate to your repo, and run:

```bash
npx @postlane/cli init
```

This creates a `.postlane/` directory with a default configuration. Commit it:

```bash
git add .postlane
git commit -m "Add Postlane configuration"
```

Then click **Back** and select the repo again.

---

## Step 6 — Describe the repo

Enter a short description of the repository — one sentence is enough. This helps Postlane generate posts that match the repo's purpose. Click **Next**, then **Open Postlane**.

---

## Step 7 — Draft and send a post

The main app is now open. Select your repository from the left sidebar and click the **Drafts** tab.

If no drafts appear yet:
- Make sure the repo has at least one commit after `.postlane/` was added
- The watcher icon next to the repo name should show as active (filled circle)
- Wait up to 30 seconds for Postlane to generate drafts from recent commits

Click a draft to open the post editor. You will see:

- The generated text alongside a preview for each platform
- Character counts and any platform-specific warnings
- The source commit that generated the draft

Edit the text directly if you want to change anything.

Click **Approve**, then:
- **Send now** — publishes immediately to the connected platforms
- **Schedule** — picks a time and hands it to your scheduling provider

The post moves to the **Published** tab once it goes out.

---

## What to do when something goes wrong

**No drafts appear after waiting**

Check that `.postlane/` exists in the root of your repo and has been committed. Run `ls .postlane/` — you should see `config.json` and `voice-guide.md`. If not, run `npx @postlane/cli init` and commit the result.

**"App is damaged" on macOS**

Run this command in Terminal, replacing the path if Postlane is not in Applications:

```bash
xattr -cr /Applications/Postlane.app
```

Then try opening the app again.

**Scheduler not connected — posts fail to schedule**

Go to **Settings → Scheduler** and check that your API key is saved. Click **Test connection** to verify. If the test fails, re-copy the API key from your provider's dashboard.

**Post not appearing in app after approval**

Refresh the Published tab. If the post still does not appear, check the Activity log in **Settings → Activity** for the error message.

---

## Next steps

- [Scheduling providers](/scheduling) — connect providers and set up a fallback chain
- [Analytics](/analytics/overview) — track traffic driven by your posts
- [Credentials](/credentials) — understand how Postlane stores your API keys
