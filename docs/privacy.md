---
sidebar_position: 6
title: Privacy
---

# Privacy

This page explains what personal data Postlane holds, where it goes, and how to delete it. For the full legal text, see [postlane.dev/privacy](https://postlane.dev/privacy).

## What data Postlane holds about you

### Account data

When you sign in with GitHub, GitLab, or Google, the provider passes your name and email address to Postlane. We store these in our database (Supabase) to create and manage your account.

### Licence data

Postlane issues a licence token when your account is created. This token is used to verify your subscription is active. It is stored in your OS keyring on your machine and sent to `postlane.dev` at startup and periodically in the background. See [Credentials](/credentials).

### Webhook and post history

If you connect a repository via the GitHub App, GitHub sends push event metadata (commit SHA, branch, repository name, author name) to Postlane's webhook endpoint when you push code. This is stored in your account's webhook event log on our servers.

Post history — what you approved, when, and to which platforms — is written to `meta.json` files on your machine. Postlane's servers do not receive or store post content.

### Analytics (opt-in)

If you opted in to product telemetry during onboarding, the desktop app sends anonymous usage events to Postlane (for example, "post approved"). No post content or repository data is included. You can opt out at any time in **Settings → Account → Product telemetry**.

---

## What Postlane cannot see

| Data | Where it lives | Does Postlane see it? |
|------|---------------|----------------------|
| Your source code | Your machine | No |
| Post drafts and meta.json files | Your machine | No |
| Scheduler API keys (Zernio, etc.) | Your OS keyring | No |
| Social platform passwords | Your scheduling provider | No |
| LLM API keys | Your IDE's credential store | No |
| `.postlane/config.json` | Your repo | No |

Postlane reads your Git history and `.postlane/` directory to generate drafts. This processing happens locally in the desktop app. The content of your commits is never sent to Postlane's servers.

---

## GDPR and your rights

Postlane is operated from the United Kingdom and processes personal data under UK GDPR. We act as data controller for the personal data described above.

You have the right to:

- **Access** the personal data we hold about you
- **Correct** inaccurate data
- **Delete** your account and all associated data (see below)
- **Restrict or object** to processing in certain circumstances
- **Receive your data** in a portable format
- **Lodge a complaint** with the [Information Commissioner's Office (ICO)](https://ico.org.uk)

We do not sell personal data to third parties and do not use it for advertising.

For the full legal text covering legal bases, sub-processors, international transfers, and data retention periods, see [postlane.dev/privacy](https://postlane.dev/privacy).

---

## Deleting your account

You can delete your Postlane account and all associated data from within the desktop app at **Settings → Account → Danger Zone**.

Deleting your account:

- Removes your account record and licence data from Postlane's servers
- Deletes all project data and post history stored under your account
- Disconnects any GitHub App or GitLab OAuth connection
- Clears all scheduler credentials Postlane holds on your behalf
- Signs you out on all devices

Post drafts, `meta.json` files, and `.postlane/` directories on your machine are not touched — they are your files and remain on your machine after account deletion.

If you prefer, you can request deletion by emailing [privacy@postlane.dev](mailto:privacy@postlane.dev). We will action your request within 30 days.

---

## Contact

Privacy queries: [privacy@postlane.dev](mailto:privacy@postlane.dev)

Full legal policy: [postlane.dev/privacy](https://postlane.dev/privacy)
