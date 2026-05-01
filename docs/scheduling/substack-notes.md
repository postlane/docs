---
sidebar_position: 7
title: Substack Notes
---

# Substack Notes

**Free tier:** Substack Notes is free to use. No API subscription required.

Substack Notes posts immediately -- there is no scheduling API. Posts sent via this provider go out at the moment you approve them.

## 1. What Postlane uses it for

Postlane uses your Substack session cookie to post directly to Substack Notes. This is the same mechanism your browser uses when you are logged in to Substack -- there is no official API.

Because this uses a browser session cookie and not a stable API key, it is less reliable than other providers. The cookie expires when you sign out of Substack and must be re-entered. If reliability matters, use Substack Notes as a secondary provider alongside a more stable one.

## 2. Pricing

None. Posting to Substack Notes is free.

## 3. Limitations

- **Immediate posting only** -- posts go out when approved, not at a scheduled time
- **No delete via API** -- Postlane cannot delete a Substack Note after it is posted
- **No fallback chain support for scheduled posts** -- because Notes posts immediately, it cannot participate in time-based fallback chains
- **Cookie expires on sign-out** -- you must re-enter the cookie every time you sign out of Substack

## 4. Extract your session cookie

You need the `substack.sid` cookie from a browser where you are signed in to Substack.

### Chrome or Edge

1. Go to [substack.com](https://substack.com) and sign in if you are not already
2. Press **F12** to open DevTools
3. Click the **Application** tab
4. In the left panel, expand **Cookies** and click `https://substack.com`
5. Find the row where the **Name** column shows `substack.sid`
6. Click that row and copy the full value from the **Value** column

### Firefox

1. Go to [substack.com](https://substack.com) and sign in if you are not already
2. Press **F12** to open DevTools
3. Click the **Storage** tab
4. In the left panel, expand **Cookies** and click `https://substack.com`
5. Find the row where the **Name** column shows `substack.sid`
6. Copy the full value from the **Value** column

### Safari

1. Go to [substack.com](https://substack.com) and sign in if you are not already
2. Open **Develop → Show Web Inspector** (enable the Develop menu first in **Safari → Settings → Advanced → Show features for web developers**)
3. Click the **Storage** tab
4. In the left panel, click **Cookies → substack.com**
5. Find `substack.sid` and copy its value

The cookie value is a long string starting with `s%3A` or similar. Copy the entire value.

## 5. Enter the cookie in Postlane

1. Open the Postlane desktop app and go to **Settings → Scheduler**
2. Click **Add provider** and select **Substack Notes**
3. Paste the full cookie value into the text area
4. Click **Save**

:::warning Session expiry
This cookie expires when you sign out of Substack. If Substack Notes posts start failing, sign back in to Substack and repeat the steps above to get a fresh cookie.
:::

## 6. Per-repo override

To use Substack Notes for only specific repositories:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Substack Notes** and paste the cookie
4. Click **Save**

## 7. Troubleshooting

**Posts are failing with an authentication error**

Your session cookie has expired. Sign back in to Substack, extract a fresh `substack.sid` cookie following the steps above, and re-enter it in Settings.

**Still signed in to Substack but posts are failing**

Substack may have rotated your session. Sign out of Substack completely, sign back in, then extract a fresh cookie.
