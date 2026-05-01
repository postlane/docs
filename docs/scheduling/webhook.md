---
sidebar_position: 8
title: Webhook
---

# Webhook

**Free tier:** Depends on the automation platform you use (Zapier: 100 tasks/month; Make: 1,000 credits/month).

The Webhook provider lets you connect Postlane to any automation platform that accepts HTTP webhooks. When a post is approved, Postlane sends the post content to your webhook URL. You configure an automation (in Zapier, Make, or n8n) to forward it to the social platform of your choice.

No extra software to install on your machine. The automation platform handles social credentials and delivery.

## 1. What Postlane sends

When a post is approved, Postlane makes a `POST` request to your webhook URL with a JSON body:

```json
{
  "content": "The post text goes here",
  "platform": "linkedin",
  "profile_id": "your-profile-id",
  "scheduled_at": "2024-01-15T10:00:00Z",
  "repo": "yourname/your-repo",
  "post_id": "posts/2024-01-15-my-post"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | The full post text |
| `platform` | string | The target social network (`linkedin`, `x`, `bluesky`, `mastodon`) |
| `profile_id` | string | The profile identifier configured in Settings |
| `scheduled_at` | string | ISO 8601 datetime, or `null` for immediate posting |
| `repo` | string | The repository name |
| `post_id` | string | The post folder path within the repo |

## 2. Zapier setup

Zapier's free tier includes 100 tasks per month -- approximately 100 posts.

1. Sign in to [zapier.com](https://zapier.com) and click **Create Zap**
2. For the trigger, search for **Webhooks by Zapier** and choose **Catch Hook**
3. Click **Continue** -- Zapier generates a webhook URL. Copy it.
4. In Postlane, go to **Settings → Scheduler**, click **Add provider**, select **Webhook**, and paste the URL
5. Back in Zapier, click **Test trigger** -- then approve a test post in Postlane to send a payload
6. Once Zapier receives the payload, add an **Action** step: search for your social platform (LinkedIn, Twitter/X, etc.) and configure the post content using the `content` field from the trigger
7. Turn the Zap on

Repeat from step 6 if you want to post to multiple platforms from the same webhook.

## 3. Make (formerly Integromat) setup

Make's free tier includes 1,000 operations per month (approximately 500 posts at 2 operations each) and up to 2 active scenarios.

:::note
Make dropped X/Twitter support in May 2025. To post to X, use a direct provider such as Zernio, Publer, or Outstand instead of Make.
:::

1. Sign in to [make.com](https://make.com) and click **Create a new scenario**
2. Add a **Webhooks** module and choose **Custom webhook**
3. Click **Add** -- Make generates a webhook URL. Copy it.
4. In Postlane, go to **Settings → Scheduler → Webhook** and paste the URL
5. Click **Redetermine data structure** in Make, then approve a test post in Postlane
6. Make will detect the payload fields. Add a second module for your social platform (LinkedIn, Bluesky, Mastodon) and map the `content` field to the post body
7. Save and activate the scenario

## 4. n8n (not recommended)

n8n supports webhooks and has integrations for most social platforms. However, n8n requires self-hosting -- you would be maintaining a server to run your posting automation. For a tool that sends social posts, this is significant operational overhead.

If you already run n8n self-hosted and want to use it, configure it the same way as Zapier or Make: create a webhook trigger, copy the URL, paste it into Postlane Settings, and map the `content` field to your social posting node.

If you are interested in a hosted n8n option managed by Postlane, register interest at [postlane.dev/interest](https://postlane.dev/interest).

## 5. Per-repo override

To use a different webhook URL for a specific repository:

1. Go to **Settings → Repos** and click the repository name
2. Click **Configure → Scheduler**
3. Select **Webhook** and enter the URL
4. Click **Save**

## 6. Troubleshooting

**Webhook not receiving requests**

In Postlane Settings, click **Test connection** on the webhook provider. This sends a test payload. Check your automation platform's history to confirm it arrived.

**Posts arriving at Zapier/Make but not posting to social platform**

Check the task/operation history in your automation platform for errors. The social platform module may need reconnecting if your OAuth credentials have expired.
