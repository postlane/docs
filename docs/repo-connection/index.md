---
sidebar_position: 1
title: Connecting Repos
slug: /repo-connection
---

# Connecting repos

Postlane monitors your repositories for new commits and generates draft posts from them. There are three ways to connect a repo. They are not mutually exclusive — you can use all three in the same workspace.

## The three methods

### GitHub App

The GitHub App monitors your repos directly on GitHub via webhooks. When anyone pushes a commit to a connected repo, GitHub notifies Postlane's server within seconds — regardless of whether the desktop app is running.

**Use this when:**
- You want monitoring that works 24/7, even when your Mac is off
- Other people contribute to the repo (teammates, collaborators, bots)
- You want to cover multiple repos in an org without any per-repo setup
- You push from CI/CD pipelines or remote machines

**How it works:** You install the Postlane GitHub App on your GitHub org and select which repos to include. GitHub sends a webhook to Postlane's server on every push. The desktop app polls for new events and adds them to your draft queue.

[Set up the GitHub App →](/repo-connection/github-app)

---

### Desktop folder

The desktop folder method watches a local copy of a repo on your machine. When you commit locally, Postlane detects the new commit and generates a draft within a few seconds.

**Use this when:**
- You are the only contributor (or the only one whose commits should generate posts)
- You want zero server-side configuration
- You are on GitLab, a self-hosted Git server, or any host other than GitHub

**How it works:** In the wizard (or Settings → Repos), click **Choose folder** and select the repo directory on your machine. Postlane watches for new commits while the desktop app is open.

**Limitation:** Monitoring pauses when the desktop app is closed or your machine is off. Commits made while Postlane is not running are picked up the next time the app opens.

---

### CLI

The CLI method runs `npx @postlane/cli init` inside a repo. It writes a `.postlane/config.json` file that the desktop app uses to identify the repo and connect it to your workspace.

**Use this when:**
- You are setting up a repo on a machine where you do not want to run the full desktop app
- You want to script repo setup as part of a CI or onboarding process
- You are on GitLab or a self-hosted server and cannot use the GitHub App

See [CLI setup](/getting-started) for the full walkthrough.

---

## Choosing between methods

| | GitHub App | Desktop folder | CLI |
|---|---|---|---|
| Works when app is closed | Yes | No | N/A |
| Catches other contributors' commits | Yes | No | N/A |
| Requires GitHub | Yes | No | No |
| Per-repo setup required | No | Yes | Yes |
| Works with GitLab / self-hosted | No | Yes | Yes |

For most users on GitHub, the GitHub App is the better long-term choice. The desktop folder method is a good starting point if you want to try Postlane without installing the GitHub App, or if you use a host other than GitHub.

Both methods feed the same draft queue in the desktop app. There is no difference in how drafts are generated or approved.
