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

## 1. Open the Drafts view

Select a repository from the left sidebar. The **Drafts** tab shows posts that Postlane has generated from recent commits.

If no drafts appear, make sure the repo has recent commits and the watcher is active (a dot in the repo row indicates it is watching for changes).

## 2. Review a draft

Click a draft to open the post editor. You will see:

- The generated text alongside a preview for each platform
- Character counts and any platform-specific warnings
- The source commit that generated it

Edit the text directly in the editor. Changes are saved automatically.

## 3. Approve and send

Click **Approve** to mark the post as ready. If you have a scheduling provider connected, you can queue it for a specific time. Otherwise, click **Send now**.

## 4. Check Published

Switch to the **Published** tab to see what has gone out and when.

## Next steps

- [Scheduling](/scheduling) — connect a provider and automate timing
- [Analytics](/analytics) — track engagement after posts go live
