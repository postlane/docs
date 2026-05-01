---
sidebar_position: 10
title: Per-repo Scheduler
---

# Per-repo Scheduler

By default, all repositories in a workspace share the same scheduling provider and API key. Per-repo configuration lets you assign a different provider or account to a specific repository -- useful when you manage multiple clients, organisations, or projects with separate social accounts.

## What per-repo configuration does

When you set a per-repo scheduler, posts from that repository use the repo-specific provider and API key instead of the workspace default. All other repositories are unaffected.

## How to configure

1. Open the Postlane desktop app and go to **Settings → Repos**
2. Click the repository you want to configure
3. Click **Configure → Scheduler**
4. Select a provider from the dropdown
5. Enter the API key for that account
6. Click **Save**

The repository row in Settings will show a "Custom scheduler" badge to confirm the override is active.

## Switching back to the default

To remove a per-repo override and return to the workspace scheduler:

1. Go to **Settings → Repos → [repo name] → Configure → Scheduler**
2. Click **Use default**
3. Click **Save**

The repository will now use the workspace-level provider and key.

## How per-repo interacts with the fallback chain

The per-repo primary provider is used first. If it fails, Postlane moves to the workspace-level fallback chain -- it does not fall back to the workspace primary provider first, then to the chain. The fallback chain is shared across the workspace.

Example:

- Workspace primary: Zernio
- Workspace fallback: Publer
- Repo A: per-repo primary: Ayrshare

When a post from Repo A is approved, Postlane tries Ayrshare first. If Ayrshare fails with a retriable error, Postlane tries Publer (the workspace fallback). It does not try Zernio.

## Common use cases

**Managing client social accounts**

Each client has their own Zernio or Ayrshare account. Create a per-repo override for each client repository with their account's API key. Posts from that repo are delivered to their social channels, not yours.

**Different platforms per repo**

A company blog repo posts to LinkedIn; a developer tools repo posts to X and Bluesky. Configure per-repo overrides with providers that support those specific platforms.

**Testing a new provider**

Set up a fallback provider on one repository to test it before rolling it out across the whole workspace.
