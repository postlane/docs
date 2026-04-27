---
sidebar_position: 1
title: Scheduling
slug: /scheduling
---

# Scheduling

Postlane can queue posts through a scheduling provider so they go out at the right time rather than immediately on approval.

## How it works

After you approve a post, Postlane hands it to your connected provider with a scheduled time. The provider delivers it to the social network. Postlane never holds social platform credentials — it only passes the post content and time to the provider via their API.

## Providers

| Provider | Status | Cost |
|----------|--------|------|
| [Zernio](/scheduling/zernio) | Recommended | Included in Postlane Pro |
| [Buffer](/scheduling/buffer) | Informational | Separate subscription |
| [Ayrshare](/scheduling/ayrshare) | Informational | Separate subscription |

Zernio is the only provider with a bundled allocation included in Postlane Pro — you do not need a separate account. Buffer and Ayrshare are documented for users who already have an account with one of them.

## Connecting a provider

Go to **Settings > Scheduler** in the desktop app and select a provider. You will be prompted for the API key for that provider.
