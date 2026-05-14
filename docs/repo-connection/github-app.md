---
sidebar_position: 2
title: GitHub App
---

# GitHub App

The Postlane GitHub App monitors selected repos on GitHub via webhooks. Drafts are generated from pushes made by any contributor, on any machine, whether or not the Postlane desktop app is open at the time.

## Before you start

- You need a Postlane account and a workspace linked to a GitHub organisation or personal account
- You need permission to install GitHub Apps on the org (org owner, or an owner must approve the installation)

## Installing the app

1. Open the Postlane desktop app and go to step 5 of the setup wizard, or go to **Settings → Repos → Add via GitHub App**
2. Click **Install GitHub App** — your browser opens the GitHub App installation page
3. Choose the organisation or personal account to install on
4. Under **Repository access**, select **Only select repositories** and choose the repos you want Postlane to monitor
5. Click **Install**

Your browser briefly shows "Redirecting to Postlane…" and then the desktop app comes to the foreground. The wizard advances automatically.

:::tip Select repos, not all repos
Granting access to all repositories in your org works, but it gives Postlane more access than it needs. Select only the repos you intend to post about. You can add more later from the GitHub App settings.
:::

## What happens after install

When someone pushes a commit to a connected repo, GitHub sends a webhook to Postlane within 30 seconds. The desktop app polls for new events and adds them to your draft queue. Drafts appear in the same queue as commits detected by the desktop folder method — there is no difference in how they look or how you approve them.

The desktop app does not need to be running for the webhook to be received. Events queue up on Postlane's server and are delivered the next time the app opens.

## Adding or removing repos

To change which repos are connected:

1. Go to [github.com/settings/installations](https://github.com/settings/installations) (personal account) or your org's settings → **Installed GitHub Apps**
2. Find **Postlane** and click **Configure**
3. Under **Repository access**, add or remove repos
4. Click **Save**

Changes take effect immediately. Repos you remove stop sending webhooks; repos you add start sending webhooks on the next push.

## Uninstalling

To stop all webhook delivery and remove Postlane's access to your repos:

1. Go to your org's settings → **Installed GitHub Apps**
2. Find **Postlane** and click **Configure**
3. Scroll to the bottom and click **Uninstall**

Uninstalling removes GitHub's access grant. Existing drafts in your queue are not deleted.

## Troubleshooting

**The wizard did not advance after installing**

This means the deep link from `postlane.dev/github/installed` did not reach the desktop app. Try:

1. Check that the Postlane desktop app is open and in the foreground
2. Click the **Install GitHub App** button again — if the app is already installed, GitHub takes you to the configuration page, and the deep link fires again on save

**No drafts are appearing after a push**

Check that the repo appears in Postlane's **Settings → Repos** list. If it does not:
- Verify the repo is selected under your GitHub App installation (see *Adding or removing repos* above)
- Push a new commit and wait 60 seconds

If the repo is listed but drafts still do not appear, check **Settings → Activity** for any error messages from the webhook handler.

**"Installation ID missing" in the browser**

This means GitHub redirected to `postlane.dev/github/installed` without an `installation_id` query parameter. This can happen if you navigate directly to the Setup URL rather than completing the install flow through GitHub. Close the browser tab and click **Install GitHub App** in the Postlane wizard to start the flow from the beginning.
