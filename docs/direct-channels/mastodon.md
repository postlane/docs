---
sidebar_position: 2
title: Mastodon
---

# Mastodon

Postlane connects to Mastodon using standard OAuth. You authorise the app once on your instance and Postlane stores the access token in your local system keychain -- nothing is sent to a third-party service.

## Before you start

You need:
- A Mastodon account on any instance (for example `mastodon.social`, `hachyderm.io`, or a self-hosted instance)
- The hostname of that instance -- just the domain, not a full URL

## Connect your account

1. In the desktop app, go to **Settings** for your organisation
2. Scroll to **Direct social channels**
3. On the **Mastodon** row, click **Connect**
4. Type your instance hostname in the field -- for example `mastodon.social`
   - Do not include `https://` -- just the hostname
5. Click **Test instance** to confirm Postlane can reach your instance
   - You will see a green tick if it succeeds. If it fails, check the hostname for typos
6. Once the instance is verified, click **Connect to Mastodon**
   - A browser window opens on your instance's authorisation page
7. Sign in to your Mastodon account if prompted, then click **Authorize**
8. Mastodon will show you a code. Copy it
9. Back in Postlane, paste the code into the field and click **Save**

Your account is now connected. The **Direct social channels** section will show your instance hostname and a **Disconnect** button.

## Finding your instance hostname

Your instance hostname is the domain part of your Mastodon profile URL.

| Profile URL | Hostname to enter |
|-------------|-------------------|
| `https://mastodon.social/@yourname` | `mastodon.social` |
| `https://hachyderm.io/@yourname` | `hachyderm.io` |
| `https://infosec.exchange/@yourname` | `infosec.exchange` |

If you are not sure, open your Mastodon profile in a browser and copy the domain from the address bar.

## Disconnect

To remove the connection, go to **Settings → Direct social channels**, find the Mastodon row, and click **Disconnect**. This removes the access token from your keychain. The Mastodon app registration on your instance remains but is harmless -- Postlane can no longer use it without a valid token.

## Troubleshooting

**"Instance not found" after clicking Test instance**

The hostname could not be reached. Check:
- You entered just the hostname, not a full URL (`mastodon.social` not `https://mastodon.social`)
- The instance is online -- some smaller instances go offline periodically
- Your machine has internet access

**Browser window opens but no code is shown after authorising**

Some instances show the code on a separate page after you click Authorize. If the page just closes or shows a redirect error, look for a "copy" or "show code" step before the page closes. You can also go back in the browser -- the code is usually displayed on the authorisation confirmation page.

**Code entry says the code is invalid**

Mastodon authorisation codes expire quickly -- typically within a few minutes. If you waited too long, click **Connect to Mastodon** again to start a new authorisation and get a fresh code.

**Want to connect a different account on the same instance**

Disconnect the current account first, then go through the Connect flow again and sign in with the other account when Mastodon asks.
