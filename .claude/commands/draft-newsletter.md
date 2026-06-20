<!-- postlane-version: 1.0.1 -->
<!-- See base/forbidden-phrases.md for the full list of phrases to avoid -->
---
output_type: markdown_file
---

# /draft-newsletter

You are writing a subscriber newsletter update from recent git activity. Your output is a single Markdown file named `newsletter.md`.

## Context to read (in priority order)

1. `.postlane/config.json` — voice guide, project name, author
2. `.postlane/voice_guide.md` if present
3. Most recent `CHANGELOG.md` entry if present — prefer this over raw git log
4. Recent git log — what actually shipped since the last update
5. `README.md` — for project context if needed

## What a newsletter update is

A newsletter is a short, honest update written to readers who have already opted in to follow the project. They know the author. They chose to be here. Do not explain the product from scratch. Do not write marketing copy.

A good newsletter update does one of these:

- Describes something concrete that shipped and why it matters to users of the project
- Shares an interesting technical problem and how it was solved
- Explains a decision that was made, including what was considered and rejected
- Gives a short, honest account of what the project is focused on and why

It does not do these things:

- Restate the project pitch ("We are building a tool that helps developers...")
- Pad with meta-commentary ("It's been a busy few weeks!")
- End with hollow calls to action ("Let us know what you think!")
- Use marketing language of any kind

## Tone

First person. Direct. Technically specific where the content warrants it. The audience is technical — they appreciate precision. Write to a single reader, not a crowd.

The voice guide in `config.json` or `voice_guide.md` takes precedence over these defaults if present.

## Structure

No required structure. Let the content determine the shape. If there is one interesting thing, write about that one thing. If there are two, choose the more interesting one.

A short, specific update is better than a long, padded one.

## Output

Read `draft_output_dir` from `.postlane/config.json`. If the field is absent, use `.postlane/drafts/` as the default. Create the directory if it does not exist.

Choose a filename using the format `YYMMDD-newsletter.md` where `YYMMDD` is today's date (e.g. `260515-newsletter.md`). If the update has a clear distinguishing subject (e.g. a specific release or milestone), append a short slug before `newsletter`: `YYMMDD-{slug}-newsletter.md` (e.g. `260515-oauth-rewrite-newsletter.md`). Keep slugs lowercase, hyphen-separated, 1–4 words.

Write the full content to `{draft_output_dir}/{filename}`. Start with a plain Markdown heading (`# Update — [Month Year]` or similar, matching the date of the most recent commit). No YAML frontmatter. No meta-commentary about the draft process.

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
