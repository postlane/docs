---
sidebar_position: 4
title: Ayrshare
---

# Ayrshare

**Pricing:** No free tier. Plans start at $29/month.

Ayrshare is a social media API that supports LinkedIn, X, Instagram, Facebook, TikTok, YouTube, Pinterest, Reddit, and others. Postlane supports it for users who already have an Ayrshare account.

:::info
If you do not already have an Ayrshare account, [Zernio](/scheduling/zernio) is the recommended alternative and supports most of the same platforms.
:::

## 1. What Postlane uses it for

Postlane sends post content and a scheduled time to Ayrshare's API. Ayrshare delivers the post to the social network at the scheduled time. Your social account credentials live in Ayrshare.

## 2. Pricing

Ayrshare has no free tier. Plans start at $29/month. See [ayrshare.com/pricing](https://ayrshare.com/pricing) for current pricing.

## 3. Get your API key

1. Sign in to your Ayrshare account at [app.ayrshare.com](https://app.ayrshare.com)
2. Go to **API Key** in the left sidebar
3. Copy the API key

## 4. Enter the key in Postlane

1. Open the Postlane desktop app and go to **Settings → Scheduler**
2. Select **Ayrshare**, paste the API key, and click **Save**
3. Click **Test connection** to confirm

## 5. Per-repo override

To use a different Ayrshare account for a specific repository, open the Postlane desktop app and go to **Settings → Repos → [repo name] → Configure → Scheduler**. See [Per-repo Scheduler](/scheduling/per-repo) for full details.

## 6. Using Ayrshare as a fallback

To add Ayrshare to your fallback chain, open the Postlane desktop app and go to **Settings → Scheduler → Fallback order**. See [Fallback Chain](/scheduling/fallback-chain) for full details.

## 7. Supported platforms

Ayrshare supports: LinkedIn, X, Instagram, Facebook, TikTok, YouTube, Pinterest, Reddit, Telegram, and more. Check the [Ayrshare platform list](https://www.ayrshare.com/social-media-api/) for the current complete list.

## 8. Troubleshooting

**Authentication error**

Re-copy the API key from the Ayrshare dashboard. Ensure you are using the key from the correct Ayrshare profile if you have multiple.

**Platform not supported error**

Not every Ayrshare plan includes every platform. Check that your Ayrshare plan includes the platform you are trying to post to.
