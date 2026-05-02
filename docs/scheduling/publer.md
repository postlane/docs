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

Publer's free tier allows 10 posts per month. When you reach the limit, Publer returns a 403 error and Postlane will show: "You have reached Publer's 10 posts/month free tier limit." At that point you can upgrade your Publer plan or Postlane's [fallback chain](/scheduling/fallback-chain) will automatically try your next configured provider.

Paid plans start at approximately $12/month. See [publer.io/pricing](https://publer.io/pricing) for current pricing. A paid plan is recommended if you post daily or need guaranteed delivery.

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

To use a different Publer account for a specific repository:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Publer** and enter the API key for that account
4. Click **Save**

Posts from this repository will use the repo-specific key. All other repositories continue to use the key from the global default.

Click **Use default** to remove the per-repo override and return to the global key.

## 6. Using Publer as a fallback

To add Publer to your fallback chain:

1. Go to **Settings → Scheduler → Fallback order**
2. Click **Add fallback** and select **Publer**
3. Enter the API key and drag it to the position in the chain you want

If your primary provider fails or reaches its limit, Postlane tries Publer next. See [Fallback Chain](/scheduling/fallback-chain) for details.

## 7. Troubleshooting

**403 error -- free tier limit reached**

Upgrade your Publer plan or configure a fallback provider. Postlane will show a banner on the affected post with a link to your Publer billing page.

**401 error -- invalid API key**

Re-copy the API key from Publer's dashboard. Make sure you are copying the key from **Settings → Developer**, not from another section.

**Post not appearing on the social platform**

Check Publer's dashboard directly -- the post may be pending, failed, or held for review. Publer's activity log shows the delivery status.
