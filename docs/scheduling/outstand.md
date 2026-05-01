---
sidebar_position: 6
title: Outstand
---

# Outstand

**Free tier:** 1,000 posts included. After that, $0.01 per post with no monthly minimum.

Outstand is a scheduling API that supports LinkedIn, X, Instagram, Facebook, and other major platforms.

## 1. What Postlane uses it for

Postlane sends post content and a scheduled time to Outstand's API. Outstand delivers the post to the social network at the scheduled time. Your social account credentials live in Outstand -- Postlane only passes the content.

## 2. Pricing

Your first 1,000 posts are free. After that, each post costs $0.01 -- $10 for the next 1,000. There is no monthly subscription. You pay only for what you send.

See [outstand.io/pricing](https://outstand.io/pricing) for current pricing.

## 3. Create an account and get your API key

1. Sign up at [outstand.io](https://outstand.io) and connect your social profiles
2. In the Outstand dashboard, go to **Account → API**
3. Generate an API key and copy it

## 4. Enter the key in Postlane

1. Open the Postlane desktop app and go to **Settings → Scheduler**
2. Click **Add provider** and select **Outstand**
3. Paste the API key and click **Save**
4. Click **Test connection** -- a green checkmark confirms the key is valid

## 5. Per-repo override

To use a different Outstand account for a specific repository:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Outstand** and enter the API key for that account
4. Click **Save**

Posts from this repository will use the repo-specific key. All other repositories continue to use the global default.

Click **Use default** to remove the per-repo override.

## 6. Using Outstand as a fallback

To add Outstand to your fallback chain:

1. Go to **Settings → Scheduler → Fallback order**
2. Click **Add fallback** and select **Outstand**
3. Enter the API key and drag it to the position you want

See [Fallback Chain](/scheduling/fallback-chain) for details.

## 7. Troubleshooting

**Posts not delivered**

Check the Outstand dashboard for failed delivery logs. Outstand shows the platform's error response alongside each post.

**API key rejected**

Re-generate the API key in the Outstand dashboard -- keys can be revoked if you rotate them. Enter the new key in Postlane Settings.
