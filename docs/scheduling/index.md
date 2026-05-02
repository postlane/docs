---
sidebar_position: 1
title: Scheduling
slug: /scheduling
---

# Scheduling

Postlane can queue posts through a scheduling provider so they go out at the right time rather than immediately on approval.

## How it works

Approvals happen in the Postlane desktop app -- open the app, review the draft, and click Approve. After you approve, Postlane hands the post to your connected provider with a scheduled time. The provider delivers it to the social network. You can close the desktop app after approving; the provider's server handles delivery at the scheduled time.

Postlane never holds social platform credentials -- it only passes the post content and time to the provider via their API.

## Providers

| Provider | Free tier | Best for |
|----------|-----------|----------|
| [Zernio](/scheduling/zernio) | See zernio.io | All users -- recommended starting point |
| [Publer](/scheduling/publer) | 10 posts/month | Teams already using Publer |
| [Outstand](/scheduling/outstand) | 1,000 posts free | Pay-per-use after free tier |
| [Buffer](/scheduling/buffer) | 10 posts across 3 channels | Existing Buffer users |
| [Ayrshare](/scheduling/ayrshare) | None ($29/month) | Existing Ayrshare users |
| [Substack Notes](/scheduling/substack-notes) | Free | Substack publishers (immediate only) |
| [Webhook](/scheduling/webhook) | Depends on automation platform | Custom automation via Zapier or Make |

If you are starting fresh, choose Zernio -- it supports the widest range of platforms and has a straightforward API key setup.

## Making the most of free tiers

Most providers offer a free tier -- enough to get started without a paid subscription:

- **Zernio** -- free tier available (see [zernio.io](https://zernio.io) for current details)
- **Publer** -- 10 posts/month
- **Outstand** -- 1,000 posts included, then $0.01/post
- **Buffer** -- 10 posts across 3 channels
- **Zapier / Make (webhook)** -- 100 tasks/month (Zapier) or 1,000 operations/month (Make)

Postlane's [fallback chain](/scheduling/fallback-chain) automatically switches to your next configured provider when one hits its limit. By connecting two or three providers in a fallback chain, you can combine their free tiers and post more without paying -- Postlane handles the switching automatically.

For consistent daily posting or production use, a paid plan at your primary provider removes rate limits and ensures reliable delivery. Even then, keeping a free-tier provider as a fallback is a useful safety net.

## Connecting a provider

The first time you open Postlane, the onboarding wizard walks you through connecting a provider. To add or change providers later:

1. Go to **Settings → Scheduler** in the desktop app
2. Click **Add provider** and select one from the list
3. Enter the API key and click **Test connection**

## Advanced

- [Fallback Chain](/scheduling/fallback-chain) -- automatically try a second provider when your primary fails or hits its limit
- [Per-repo Scheduler](/scheduling/per-repo) -- use a different provider or account for a specific repository
