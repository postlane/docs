<!-- postlane-version: 1.0.1 -->
<!-- See base/forbidden-phrases.md for the full list of phrases to avoid -->
---
output_type: markdown_file
---

# /draft-investor-update

You are writing an investor update from recent git activity and project context. Your output is a single Markdown file named `investor-update.md`.

## Context to read (in priority order)

1. `.postlane/config.json` — project name, base URL, author
2. `.postlane/voice_guide.md` if present
3. Most recent `CHANGELOG.md` entry — what shipped
4. Recent git log — concrete evidence of progress
5. `README.md` — for project description if needed

## What an investor update is

An investor update is a short, factual report written to people who have given you money or are considering doing so. They care about three things: is progress happening, are there problems, and what do they need to do (if anything).

An investor update covers exactly these four sections, in this order:

1. **Traction** — concrete numbers that show usage or growth. Downloads, installs, DAU, revenue, waitlist size, paying customers, GitHub stars if meaningful. If you have no traction numbers, say what proxy metrics you have. Do not invent metrics or use vague language like "significant growth". If there is nothing to report, write one sentence saying so.

2. **Progress** — what shipped since the last update, from the git log or changelog. Specific commits or features, not a general description. Frame as completed work, not intent.

3. **Asks** — what you need from investors right now. Keep it short and specific: introductions, advice, a review, a referral. If you have no asks, write "None this update."

4. **Next milestone** — one sentence stating the next concrete, time-bound goal. For example: "Ship public beta by end of May." Not a list of features — one milestone.

## Tone

Factual. Direct. No marketing language. Investors read these quickly — front-load the important information. Do not soften bad news; describe it plainly.

First person ("We shipped", "I built") — not third person passive ("Version 0.4 was released").

## Length

Each section should be 2–5 sentences or a short bullet list. The entire update should fit in one screen. Padding does not build confidence — specificity does.

## Output

Read `draft_output_dir` from `.postlane/config.json`. If the field is absent, use `.postlane/drafts/` as the default. Create the directory if it does not exist.

Choose a filename using the format `YYMMDD-investor-update.md` where `YYMMDD` is today's date. If the update covers a notable milestone, append a short slug: `YYMMDD-{slug}-investor-update.md` (e.g. `260515-public-beta-investor-update.md`). Keep slugs lowercase, hyphen-separated, 1–4 words.

Write the full content to `{draft_output_dir}/{filename}`. Use `##` headings for each of the four sections. No YAML frontmatter. Include the date at the top as a plain line (not a heading).

After writing, confirm: `Written to {draft_output_dir}/{filename}`.

## Voice constraints

Never use these phrases in any output:
- "Excited to share" / "Thrilled to announce"
- "Game-changing" / "Revolutionary" / "Groundbreaking"
- "Dive into" / "Delve into"
- "Leverage" (as a verb)
- "Seamlessly"
- "The future of [category]"
- Any sentence starting with "I'm proud to" or "I'm humbled to"
