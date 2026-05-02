---
sidebar_position: 5
title: Publer
---

# Publer

**Free tier:** 10 posts per month across all platforms. Upgrading starts at $12/month.

Publer is a social media scheduling tool that supports X, LinkedIn, Facebook, Instagram, Pinterest, TikTok, YouTube, and Google Business Profile.

## 1. What Postlane uses it for

Postlane sends post content and a scheduled time to Publer's API. Publer delivers the post to the social network at the scheduled time. Your social account credentials live in Publer -- Postlane only passes the content.

## 2. Pricing

Publer's free tier allows 10 posts per month. When you reach the limit, Postlane's [fallback chain](/scheduling/fallback-chain) will automatically try your next configured provider -- so pairing Publer with another free-tier provider keeps posts flowing without upgrading.

Paid plans start at approximately $12/month and are recommended if you post daily. See [publer.io/pricing](https://publer.io/pricing) for current pricing.

## 3. Create an account and get your API key

1. Sign up at [publer.io](https://publer.io) and connect your social profiles
2. In the Publer dashboard, go to **Settings → Developer → API Key**
3. Copy the API key

## 4. Enter the key in Postlane

1. Open the Postlane desktop app and go to **Settings → Scheduler**
2. Click **Add provider** and select **Publer**
3. Paste the API key and click **Save**
4. Click **Test connection** -- a green checkmark confirms the key is valid

## 5. Per-repo override

To use a different Publer account for a specific repository, open the Postlane desktop app and go to **Settings → Repos → [repo name] → Configure → Scheduler**. See [Per-repo Scheduler](/scheduling/per-repo) for full details.

## 6. Using Publer as a fallback

To add Publer to your fallback chain, open the Postlane desktop app and go to **Settings → Scheduler → Fallback order**. See [Fallback Chain](/scheduling/fallback-chain) for full details.

## 7. Troubleshooting

**403 error -- free tier limit reached**

Upgrade your Publer plan or configure a fallback provider. Postlane will show a banner on the affected post with a link to your Publer billing page.

**401 error -- invalid API key**

Re-copy the API key from Publer's dashboard. Make sure you are copying the key from **Settings → Developer**, not from another section.

**Post not appearing on the social platform**

Check Publer's dashboard directly -- the post may be pending, failed, or held for review. Publer's activity log shows the delivery status.
