---
sidebar_position: 1
title: Overview
slug: /analytics
---

# Analytics Overview

Postlane has two separate analytics systems. Understanding the difference matters before you install anything.

**The tracking snippet (`p.js`)** is for you. It measures whether your posts are driving traffic to your site -- sessions that arrive via a Postlane post link. Install it once and you will see traffic attribution in the Postlane dashboard.

**Product telemetry** is for Postlane. With your permission, the desktop app sends anonymous usage signals (such as "post approved" or "provider configured") so we can understand which features are actually used. You can opt out in **Settings → Account → Product telemetry**. This page covers the tracking snippet only.

---

## What the tracking snippet measures

`p.js` fires on every page load of your site, but it only records an event when the visitor arrived via a Postlane post link -- identified by `utm_source=postlane` in the URL.

A Postlane post link looks like this:

```
https://yoursite.com/blog/my-post?utm_source=postlane&utm_content=posts%2F2024-01-15-my-post
```

Postlane appends these parameters automatically to every link it generates. The `utm_content` parameter identifies which post drove the visit.

The snippet does **not** track:
- Visitors who arrived from direct traffic, organic search, or other UTM sources
- Anything about what visitors do after they land on your site
- Any visitor across multiple sessions or devices

`p.js` is not a replacement for Google Analytics, Plausible, or any general analytics tool. It answers one specific question: which Postlane posts are driving traffic to your site?

---

## Privacy model

The tracking snippet is designed to be GDPR-friendly by default:

- **No cookies.** Session deduplication uses `sessionStorage` only -- data that is cleared when the browser tab closes and never shared across sites.
- **No PII collected.** No IP addresses, user agents, or identifiers are stored beyond what is needed to count the session.
- **No cross-site tracking.** The snippet has no tracking state that persists across your visitors' sessions or devices.
- **Fires only on Postlane traffic.** The snippet loads on every page but only sends an event when `utm_source=postlane` is present. Ordinary visitors generate no events.

If you are in a jurisdiction that requires a cookie banner for analytics, `p.js` does not require one -- it uses no cookies and collects no personal data.

---

## Next steps

- [Install the snippet](/analytics/install) -- add `p.js` to your site
- [Dashboard](/analytics/dashboard) -- understand the metrics in the Postlane dashboard
