---
sidebar_position: 3
title: Quick Start
---

# Quick Start

This guide walks through writing, previewing, and sending your first post from an existing repository.

## Before you start

- The desktop app is installed and you are signed in
- At least one repository is added to the app
- The repo has been initialised with `npx @postlane/cli init` (or you have a `.postlane/` directory already)

## 1. Create a draft

Open your IDE in the repository and run `/draft-post`. Postlane reads your recent git context and generates a draft for each configured platform.

Once the draft is written, switch to the Postlane desktop app. Select the repository from the left sidebar -- the new draft will appear in the **Drafts** tab. A dot in the repo row confirms the watcher is active and picked up the file.

## 2. Review a draft

Click a draft to open the post editor. You will see:

- The generated text alongside a preview for each platform
- Character counts and any platform-specific warnings
- The source commit that generated it

From here you can:

- **Edit the text directly** -- click into any platform's text area and type. Changes save automatically.
- **Customise per platform** -- each channel (LinkedIn, X, Bluesky, etc.) has its own version of the post. Adjust tone, length, and hashtags independently for each audience.
- **Add or change images** -- attach an image from your machine, or search Unsplash and other royalty-free sources directly from the editor.

## 3. Approve and send

Click **Approve** to mark the post as ready. If you have a scheduling provider connected, the post is handed to the provider with a scheduled time -- you can close the desktop app after approving; the provider's server handles delivery at the right time. If no provider is connected, click **Send now**.

## 4. Check Published

Switch to the **Published** tab to see what has gone out and when.

## Next steps

- [Scheduling](/scheduling) — connect a provider and automate timing
- [Analytics](/analytics) — track engagement after posts go live
