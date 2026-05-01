---
sidebar_position: 2
title: Install the Snippet
---

# Install the Tracking Snippet

`p.js` is a single script tag. Install it once and Postlane will automatically track sessions that arrive from your posts.

## Step 1 — Copy your snippet

Go to **Settings → Analytics** in the Postlane desktop app. You will see a pre-generated snippet with your site token already included:

```html
<script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN"></script>
```

Each repository has its own site token. If you have multiple repositories, generate a snippet for each one from the Settings for that repo.

## Step 2 — Add the snippet to your site

Paste the snippet before the closing `</head>` tag on every page of your site. The exact steps depend on your stack.

### Plain HTML

Open your HTML file and paste just before `</head>`:

```html
<head>
  <!-- your existing tags -->
  <script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN"></script>
</head>
```

### Next.js (App Router)

Add the snippet to your root `layout.tsx`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Jekyll

Add the snippet to `_includes/head.html` (or create it if it does not exist), then include it in your `_layouts/default.html`:

```html
<!-- _includes/head.html -->
<script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN"></script>
```

### Hugo

Add the snippet to `layouts/partials/head.html` (or `layouts/_default/baseof.html`):

```html
<script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN"></script>
```

### Google Tag Manager

1. In GTM, go to **Tags → New**
2. Click **Tag Configuration** and choose **Custom HTML**
3. Paste the full script tag:
   ```html
   <script src="https://cdn.postlane.dev/p.js" data-token="YOUR_SITE_TOKEN"></script>
   ```
4. Under **Triggering**, choose **All Pages**
5. Name the tag "Postlane Analytics" and click **Save**
6. Click **Submit** to publish the container

No additional configuration needed. The snippet handles everything.

## Step 3 — Verify the install

1. Click a Postlane post link that points to your site (the URL must include `utm_source=postlane`)
2. Open the **Analytics** tab for that repository in the Postlane desktop app
3. A session event should appear within 60 seconds

If no event appears after 60 seconds, check that:
- The snippet is on the page you landed on (use browser DevTools → Sources to search for `p.js`)
- The URL you clicked contained `utm_source=postlane`
- Your site token in the snippet matches the one shown in Settings

## Coexisting with other analytics tools

`p.js` is independent of GA4, Plausible, Umami, Fathom, or any other analytics tool on your page. It does not interfere with their data collection, and they do not interfere with it. You can run all of them on the same page without conflict.

`p.js` only records Postlane-attributed sessions. It does not replace general analytics tools that measure all traffic.
