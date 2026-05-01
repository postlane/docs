---
sidebar_position: 9
title: Fallback Chain
---

# Fallback Chain

The fallback chain lets you configure multiple scheduling providers in priority order. If your primary provider fails -- because it has reached its free-tier limit, returned a rate-limit error, or is temporarily unavailable -- Postlane automatically tries the next provider in the chain.

## How it works

When you approve a post, Postlane tries your primary provider. If that provider returns an error that indicates the post can be retried (a rate limit, a free-tier limit, or a transient server error), Postlane moves to the next provider in the chain and tries again. This continues until a provider succeeds or all providers are exhausted.

Permanent errors (invalid credentials, an unsupported platform) do not trigger fallback -- Postlane surfaces the error immediately so you can fix the configuration.

## How to configure the fallback chain

1. Open the Postlane desktop app and go to **Settings → Scheduler → Fallback order**
2. Your currently configured providers are listed. Click **Add fallback** to add another
3. Drag providers up and down to set the priority order -- the topmost provider is tried first
4. Click **Save**

You can configure as many fallback providers as you have accounts with. Each provider in the chain uses its own API key.

## Usage warnings

Postlane tracks how many posts each provider has sent this month against known free-tier limits. When a provider is approaching its limit, you will see a warning in Settings before posts start failing. Providers that display usage counts:

| Provider | Free-tier limit | Warning threshold |
|----------|----------------|-------------------|
| Publer | 10 posts/month | 8 posts |
| Make (webhook) | 1,000 operations/month | 900 operations |
| Zapier (webhook) | 100 tasks/month | 90 tasks |

Outstand, Zernio, Buffer, and Ayrshare do not impose per-month post limits at the account level -- their limits are based on subscription tier or API rate limits.

## What happens when all providers are exhausted

If every provider in the chain fails or has reached its limit, Postlane shows an error banner on the post with a link to **Settings → Scheduler**. The post is left in an error state -- it is not deleted. Once you have resolved the provider issue (upgraded a plan, switched providers, or added a new one), you can re-approve the post.

## Fallback banner

When a post falls back to a secondary provider, Postlane shows a banner in the Published view:

> "Posted via Publer -- your primary provider Zernio returned a rate-limit error."

This makes it easy to see which provider delivered each post and spot when your primary provider is struggling.

## Substack Notes and the fallback chain

Substack Notes posts immediately and cannot be scheduled for a future time. It does not participate in time-based fallback chains. If you need a fallback for time-sensitive posts, use providers that support scheduling (Zernio, Publer, Outstand, etc.).
