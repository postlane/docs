---
sidebar_position: 1
title: Direct Channels
slug: /direct-channels
---

# Direct Channels

Some social platforms can be connected directly to Postlane without going through a scheduling provider. When you post to a direct channel, Postlane sends the content straight to the platform using its own API access -- no third-party scheduler sits in between.

## How it differs from scheduling providers

[Scheduling providers](/scheduling) like Zernio hold your social account credentials and deliver posts at a scheduled time. Your credentials live in the provider's system, not on your machine.

Direct channels work the other way around: Postlane handles the API connection itself. You authorise Postlane once using OAuth, and your access token is stored locally in your system keychain. Nothing is sent to a third-party service.

| | Scheduling provider | Direct channel |
|---|---|---|
| Where credentials live | Provider's servers | Your local keychain |
| Scheduling support | Yes | Immediate only |
| Requires provider account | Yes | No |

Use a direct channel when you want to avoid a provider dependency, or when the platform is not supported by your current provider.

## Supported platforms

| Platform | Notes |
|----------|-------|
| [Mastodon](/direct-channels/mastodon) | Any self-hosted or managed instance |

More platforms may be added in future releases.

## Setting up a direct channel

1. In the desktop app, go to **Settings** for your organisation
2. Scroll to **Direct social channels**
3. Find the platform you want to connect and click **Connect**
4. Follow the platform-specific steps below

## Posting to a direct channel

Once connected, posts approved in Postlane will be sent immediately to the platform. Direct channels do not support scheduling -- if you need posts to go out at a specific time, use a [scheduling provider](/scheduling) instead.
