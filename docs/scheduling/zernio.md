---
sidebar_position: 2
title: Zernio
---

# Zernio

Zernio is the recommended scheduling provider for Postlane. It supports X, LinkedIn, Bluesky, Mastodon, Instagram, Facebook, and Pinterest.

Postlane is a bring-your-own-key service -- you will need your own Zernio account. We recommend creating a separate Zernio account for each project or client. See [zernio.io](https://zernio.io) for current pricing.

## 1. What Postlane uses it for

Postlane sends post content and a scheduled time to Zernio's API. Zernio delivers the post to the social network at the scheduled time. Your social account credentials live in Zernio -- Postlane only passes the content and the time.

## 2. Pricing

You need your own Zernio account to use this provider. See [zernio.io](https://zernio.io) for current pricing.

For teams managing multiple clients or projects, we recommend a separate Zernio account per project. Postlane's [per-repo scheduler](/scheduling/per-repo) lets you assign a different API key to each repository.

## 3. Connect your social profiles in Zernio

1. Sign up or sign in at [zernio.io](https://zernio.io)
2. Go to **Profiles → Add Profile** and connect your social accounts (LinkedIn, X, Bluesky, etc.)
3. Note the profile IDs -- you will need them when mapping platforms in Postlane

If you connected profiles during the Postlane onboarding wizard, this step is already done.

## 4. Enter your API key

1. In the Zernio dashboard, go to **Settings → API → API Key**
2. Copy the key
3. In the Postlane desktop app, go to **Settings → Scheduler**
4. Select **Zernio**, paste the API key, and click **Save**
5. Click **Test connection** to confirm

## 5. Per-repo override

To use a different Zernio account for a specific repository:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Zernio** and enter the API key for that account
4. Click **Save**

Click **Use default** to remove the override and return to the workspace key.

## 6. Using Zernio as a fallback

To add Zernio to your fallback chain:

1. Go to **Settings → Scheduler → Fallback order**
2. Click **Add fallback** and select **Zernio**
3. Enter the API key and drag it to the position you want

See [Fallback Chain](/scheduling/fallback-chain) for details.

## 7. Supported platforms

| Platform | Schedule | Immediate | Notes |
|----------|----------|-----------|-------|
| X | Yes | Yes | |
| LinkedIn | Yes | Yes | |
| Bluesky | Yes | Yes | |
| Mastodon | Yes | Yes | Instance URL required |
| Instagram | Yes | Yes | Business account required |
| Facebook | Yes | Yes | Page required |
| Pinterest | Yes | Yes | Business account required |

## 8. Troubleshooting

**Test connection fails**

Re-copy the API key from the Zernio dashboard. Keys are shown once on generation -- if you did not save it, generate a new one.

**Rate-limit error (429)**

Zernio imposes per-minute and per-day limits depending on your plan. If you hit a rate limit, Postlane's fallback chain will try the next configured provider. See [Fallback Chain](/scheduling/fallback-chain).

**Post delivered but not appearing on the platform**

Check the delivery log in the Zernio dashboard. The platform may have rejected the post due to character count, formatting, or duplicate content.
