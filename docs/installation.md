---
sidebar_position: 2
title: Installation
---

# Installation

## Requirements

- macOS 12 or later (Windows and Linux coming in a future release)
- Node.js 18 or later (for the CLI)
- A GitHub, GitLab, or Google account

## Download the desktop app

Download the latest release from [postlane.dev](https://postlane.dev) and open the `.dmg`.

## Sign in

Open the app and click **Sign in at postlane.dev**. You will be taken to the browser to authenticate with GitHub, GitLab, or Google. Once authenticated, the browser will redirect back to the app automatically via the `postlane://` deep link.

## Add your first repository

Click **Add repo** and select a local Git repository. Postlane reads the `.postlane/` directory at the root of that repo for voice and formatting configuration.

## Initialise a repository with the CLI

If you have not set up a repo with Postlane before, run:

```bash
npx @postlane/cli init
```

This creates a `.postlane/` directory with a default voice guide and config. Commit it to version control.

## Next steps

- [Quick Start](/quick-start) — draft and send your first post
