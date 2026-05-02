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

Your first 1,000 posts are free -- plenty to get started. After that, each post costs $0.01 with no monthly minimum. You pay only for what you send, making Outstand a natural choice as a fallback provider once a free-tier primary hits its limit.

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

To use a different Outstand account for a specific repository, open the Postlane desktop app and go to **Settings → Repos → [repo name] → Configure → Scheduler**. See [Per-repo Scheduler](/scheduling/per-repo) for full details.

## 6. Using Outstand as a fallback

To add Outstand to your fallback chain, open the Postlane desktop app and go to **Settings → Scheduler → Fallback order**. See [Fallback Chain](/scheduling/fallback-chain) for full details.

## 7. Troubleshooting

**Posts not delivered**

Check the Outstand dashboard for failed delivery logs. Outstand shows the platform's error response alongside each post.

**API key rejected**

Re-generate the API key in the Outstand dashboard -- keys can be revoked if you rotate them. Enter the new key in Postlane Settings.
