# Update — May 2026

Added documentation for repo connection — the GitHub App setup guide and an overview of the three connection methods.

The overview compares the GitHub App, the desktop folder watcher, and the CLI. The tradeoffs are worth spelling out: only the GitHub App catches commits from other contributors and works when the desktop app is closed. The desktop folder method is the right starting point if you want to try Postlane first, or if you're not on GitHub.

The GitHub App guide covers installation, webhook behavior, and managing repos after setup. The troubleshooting section documents one non-obvious behavior: **re-configuring an existing installation does not trigger the deep link back to the desktop app.** The redirect only fires on initial install. Adding or removing repos from the GitHub App settings on GitHub does not advance the wizard — that's expected, and you don't need to reinstall.

The docs are at [docs.postlane.dev](https://docs.postlane.dev).
