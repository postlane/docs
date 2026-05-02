---
sidebar_position: 3
title: Buffer
---

# Buffer

**Free tier:** 10 scheduled posts across 3 channels.

Buffer is a social media scheduling tool. Postlane supports it for users who already have an existing Buffer account.

:::info
If you do not already have a Buffer account, [Zernio](/scheduling/zernio) is included in Postlane at no extra cost and requires no additional setup.
:::

:::caution
Buffer does not publish an official public API for scheduling posts. Postlane uses Buffer's unofficial scheduling mechanism, which may change or break without notice. Buffer is provided as a convenience for existing Buffer users. For a reliable, supported integration, use Zernio.
:::

## 1. What Postlane uses it for

Postlane submits post content to your Buffer queue via Buffer's internal scheduling interface. Buffer delivers the post to the connected social channel at the scheduled time.

## 2. Pricing

Buffer's free tier includes 10 scheduled posts across 3 channels. Paid plans start at $6/month per channel. See [buffer.com/pricing](https://buffer.com/pricing) for current pricing.

## 3. Connect Postlane to Buffer

1. Sign in to [buffer.com](https://buffer.com) and connect your social profiles
2. In Buffer, go to **Settings → API** to find your access token
3. Copy the access token
4. In the Postlane desktop app, go to **Settings → Scheduler**
5. Select **Buffer**, paste the access token, and click **Save**
6. Click **Test connection** to confirm

## 4. Per-repo override

To use a different Buffer account for a specific repository:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Buffer** and enter the access token for that account
4. Click **Save**

Click **Use default** to remove the override.

## 5. Using Buffer as a fallback

To add Buffer to your fallback chain:

1. Go to **Settings → Scheduler → Fallback order**
2. Click **Add fallback** and select **Buffer**
3. Enter the access token and drag it to the position you want

See [Fallback Chain](/scheduling/fallback-chain) for details.

## 6. Troubleshooting

**Free tier limit reached**

Buffer's free plan allows 10 scheduled posts. Once the queue is full, new posts will fail until older ones are sent. Upgrade your Buffer plan or configure a fallback provider.

**Authentication error**

Your Buffer access token may have expired or been revoked. Generate a new one in Buffer's Settings and re-enter it in Postlane.

**Posts failing unexpectedly**

Because Buffer's scheduling mechanism is unofficial, it can change without notice. If Buffer posts are failing consistently, switch to Zernio or another supported provider.
