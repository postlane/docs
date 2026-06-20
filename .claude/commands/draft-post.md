<!-- postlane-version: 1.2.0 -->
<!-- See base/forbidden-phrases.md for the full list of phrases to avoid -->

# /draft-post

Draft short-form social posts for X, Bluesky, and Mastodon. This is a two-phase command: you propose angles first, then write posts only after the user picks one.

---

## Phase 1 — Propose angles (do this first, always)

### Context to read (in priority order)

1. `.postlane/config.json` — voice guide path, platforms, UTM campaign, author
2. `.postlane/voice_guide.md` if present — the user's established voice
3. Most recent `CHANGELOG.md` entry if present — prefer this over raw git log; it is already curated
4. `README.md` if present — for project context
5. `git log --oneline` since the last commit that generated a post (look for the most recent `.postlane/posts/*/meta.json` to find the watermark; if none, use the last 10 commits)

### Empty context fallbacks

**No commits in range / empty git log:** Do not proceed to angle proposals. Respond with:
> No recent commits found. Stage or push at least one commit, then run `/draft-post` again.

**README absent or empty:** Proceed without project context. Use the repository name and any description from `config.json` as a substitute. Note the absence when choosing angles that would normally require project background.

**CHANGELOG absent or empty:** Skip CHANGELOG context entirely. Fall back to git log as the sole source of what changed. Do not invent changelog entries.

**Voice guide absent:** Use the default voice (see Voice section below). Do not ask the user to create a voice guide — proceed silently.

### Analyse and propose

Read the context above. Identify 2–3 distinct angles on the work. An angle is a point of view, not a topic — the same commit can be told as a technical decision, a product improvement, or a process story.

Output the proposals in this format and nothing else. Do not write any post copy yet.

---

**Angle proposals for [brief description of the trigger]**

**[1] [Angle name] — [platform best fit: X · Bluesky · Mastodon or "all"]**
[One sentence: the hook. What's the most interesting thing about this angle?]
[One sentence: why this angle works for the audience right now.]

**[2] [Angle name] — [platform best fit]**
[Hook sentence.]
[Why it works sentence.]

**[3] [Angle name] — [platform best fit]** *(optional — only include if genuinely distinct)*
[Hook sentence.]
[Why it works sentence.]

---

After outputting the proposals, ask:

> Pick an angle (1, 2, or 3), a combination (e.g. 1,3), or type your own direction. To generate A/B variants of an angle, append `--ab` (e.g. `2 --ab`).

Then stop. Do not write any posts until the user responds.

---

## Phase 2 — Write posts (only after user picks)

Once the user picks an angle, write the posts.

### If `--ab` was requested

Generate **two variants** (A and B) of the chosen angle for each platform. Variants must differ meaningfully — different hook, different framing, or different CTA. Label them clearly:

```
VARIANT A — [brief angle descriptor]
[platform posts]

VARIANT B — [brief angle descriptor]
[platform posts]
```

Write both variants to disk (see Output section). Use `variant: "a"` and `variant: "b"` in each `meta.json`.

### Attribution footer

Read the `attribution` field from `config.json` (default `true` if absent).

When attribution is enabled:
- Append `📮 postlane.dev` as the final line of each platform post
- For X (280 chars): **CRITICAL — body must be 264 characters or fewer.** The footer uses the remaining 16 characters.
- For Bluesky (300 chars) and Mastodon (500 chars): no special headroom required

Omit the footer when:
- `attribution: false` is explicitly set in config
- The active profile has `client: true` in `config.json`

### Character limits (hard limits, not targets)

- X: 280 characters total (including footer)
- Bluesky: 300 characters
- Mastodon: 500 characters

### Voice

Write in the user's voice as described in the voice guide. Default when no voice guide is present: direct, technically precise, no marketing language.

Never use these phrases:
- "Excited to share" / "Thrilled to announce"
- "Game-changing" / "Revolutionary" / "Groundbreaking"
- "Dive into" / "Delve into"
- "Leverage" (as a verb)
- "Seamlessly"
- "The future of [category]"
- Any sentence starting with "I'm proud to" or "I'm humbled to"

### Output

Write one directory per angle selected (or two for `--ab`). Directory name format: `YYMMDD-{slug}` where `YYMMDD` is today's date and `{slug}` is the slugified angle name (e.g. `260515-atomic-file-writes`). For webhook-triggered drafts use `YYMMDD-webhook-{commit-short-sha}`. Keep slugs lowercase, hyphen-separated, 1–5 words.

For each directory write:
- `x.md` — X post text only
- `bluesky.md` — Bluesky post text only
- `mastodon.md` — Mastodon post text only
- `meta.json`:

```json
{
  "version": 1,
  "status": "draft",
  "platforms": ["x", "bluesky", "mastodon"],
  "trigger": "<short description of what prompted this post>",
  "angle": "<angle name from Phase 1>",
  "variant": null,
  "utm_campaign": "<from config.json>",
  "author": "<from config.json>"
}
```

Set `"variant": "a"` or `"variant": "b"` for A/B pairs. Set `"variant": null` for single-angle drafts.

After writing, confirm:

> Written to `.postlane/posts/{folder-name}/`. The draft will appear in the Postlane desktop app queue.
