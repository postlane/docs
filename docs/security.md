---
sidebar_position: 5
title: Security
---

# Security

This page explains what Postlane can and cannot access, what data stays on your machine, and what is sent to external services.

## What Postlane has access to

Postlane reads the Git history of repositories you explicitly add to the app. It reads the `.postlane/` directory in each repo for configuration and voice guides. It writes drafts and post metadata to `.postlane/posts/` within each repo.

Postlane does not read anything outside the repositories you add. It has no access to your file system beyond those paths, no access to your browser, and no access to your email or contacts.

## What stays on your machine

The following never leaves your machine:

- Your repository file system and Git history
- All post drafts and published post metadata (`meta.json`)
- Your `.postlane/` configuration directory
- All API keys and tokens (stored in the OS keyring -- see [Credentials](/credentials))

## What goes to third-party services

When you approve and send a post, the post content is sent to your connected scheduling provider (Zernio, Buffer, Ayrshare, Publer, Outstand, or a webhook URL). Postlane passes the content and a scheduled time -- your social platform credentials never leave your scheduling provider's account.

If you use the Postlane tracking snippet (`p.js`) on your site, page-view events are sent to Postlane's analytics backend when a visitor arrives via a Postlane post link. This data belongs to your account and is not shared. See [Analytics](/analytics/overview) for the full privacy model.

## What goes to Postlane's backend

Postlane communicates with `postlane.dev` for the following purposes:

- **License validation** -- the desktop app sends your license token to verify your account is active. This happens at startup and periodically in the background.
- **Analytics events** -- if you opt in to product telemetry during onboarding, the desktop app sends anonymous usage events (for example, "post approved" or "provider configured"). No post content is included. You can opt out at any time in **Settings → Account → Product telemetry**.

Postlane does not sell data to third parties and does not use your post content to train models.

## URL validation and SSRF protection

When Postlane fetches a URL -- for example, to generate an Open Graph image preview -- it validates the URL before making the request. Requests to private network ranges are blocked:

- `127.x.x.x` (loopback)
- `10.x.x.x`
- `172.16.x.x` through `172.31.x.x`
- `192.168.x.x`
- `169.254.x.x` (link-local)
- IPv6 private ranges (`fd00::/8`)

Only `https://` URLs are accepted. `http://` and bare IP addresses are rejected.

## Code signing

Postlane binaries are signed and notarized for macOS and signed for Windows. The Linux AppImage is GPG-signed. See [Code Signing](/code-signing) for verification instructions.

## Reporting a security issue

If you find a security vulnerability in Postlane, please report it privately:

- Email: security@postlane.dev
- GitHub: open a private security advisory at `github.com/postlane/desktop/security/advisories`

Do not open a public GitHub issue for security reports. We aim to respond within 48 hours and will coordinate a disclosure timeline with you.
