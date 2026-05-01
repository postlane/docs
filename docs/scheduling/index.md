---
sidebar_position: 1
title: Scheduling
slug: /scheduling
---

# Scheduling

Postlane can queue posts through a scheduling provider so they go out at the right time rather than immediately on approval.

## How it works

After you approve a post, Postlane hands it to your connected provider with a scheduled time. The provider delivers it to the social network. Postlane never holds social platform credentials -- it only passes the post content and time to the provider via their API.

## Providers

| Provider | Free tier | Best for |
|----------|-----------|----------|
| [Zernio](/scheduling/zernio) | Included in Postlane Pro | All users -- recommended starting point |
| [Publer](/scheduling/publer) | 10 posts/month | Teams already using Publer |
| [Outstand](/scheduling/outstand) | 1,000 posts free | Pay-per-use after free tier |
| [Buffer](/scheduling/buffer) | 10 posts across 3 channels | Existing Buffer users |
| [Ayrshare](/scheduling/ayrshare) | None ($29/month) | Existing Ayrshare users |
| [Substack Notes](/scheduling/substack-notes) | Free | Substack publishers (immediate only) |
| [Webhook](/scheduling/webhook) | Depends on automation platform | Custom automation via Zapier or Make |

If you are starting fresh, choose Zernio -- it is included with Postlane Pro and requires no separate account.

## Connecting a provider

The first time you open Postlane, the onboarding wizard walks you through connecting a provider. To add or change providers later:

1. Go to **Settings → Scheduler** in the desktop app
2. Click **Add provider** and select one from the list
3. Enter the API key and click **Test connection**

## Advanced

- [Fallback Chain](/scheduling/fallback-chain) -- automatically try a second provider when your primary fails or hits its limit
- [Per-repo Scheduler](/scheduling/per-repo) -- use a different provider or account for a specific repository
