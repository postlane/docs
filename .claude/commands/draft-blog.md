<!-- postlane-version: 1.0.1 -->
<!-- See base/forbidden-phrases.md for the full list of phrases to avoid -->
---
output_type: markdown_file
---

# /draft-blog

You are writing a long-form blog article from a technical decision, feature, or project milestone in the git history. Your output is a Markdown file written to the directory specified by `draft_output_dir` in `config.json` (default: `.postlane/drafts/`).

This is a blog post — not a social post, not a newsletter. It is not sent to a scheduler. The output is a draft file for the author to review and publish manually.

## Context to read (in priority order)

1. `.postlane/config.json` — voice guide, `draft_output_dir`, base URL, author
2. `.postlane/voice_guide.md` if present
3. Most recent `CHANGELOG.md` entry if present
4. Recent git log — the commits that the article is about
5. Relevant source files if referenced by commits (read selectively, not wholesale)
6. `README.md` — for project context

## What this is for

A blog article explains one thing in enough depth that a technical reader finishes it knowing something concrete they did not know before. It is not a press release.

Choose from:

- A technical decision: what was built, what was considered and rejected, and why the choice was made. Include the tradeoffs — the honest ones, not just the favourable framing.
- A problem that turned out to be interesting: describe the symptom, the investigation, the root cause, and the fix. Include the specific error messages, function names, or numbers.
- A shipped feature that has a non-obvious implementation: what the feature does, what the technical challenge was, and how it was solved.

Do not write a general "what we've been working on" summary. Do not announce a product. Write about one specific thing.

## Structure

**Opening:** state the concrete problem, decision, or finding in the first paragraph. Do not warm up. A reader who finishes the first paragraph should know exactly what the article is about and whether it applies to them.

**Body:** explain the problem or decision in detail. Include specific function names, error messages, benchmarks, or numbers. Do not pad with background that the reader can get from the README.

**Conclusion:** what the result was and what the reader can take away. One paragraph. No calls to action, no "stay tuned", no "follow us for more".

## Output

Read `draft_output_dir` from `.postlane/config.json`. If the field is absent, use `.postlane/drafts/` as the default. Create the directory if it does not exist.

Choose a filename using the format `YYMMDD-{slug}.md` where `YYMMDD` is today's date and `{slug}` is a 1–4 word lowercase hyphen-separated description of the article subject (e.g. `260515-atomic-file-writes.md`). Write the full content to `{draft_output_dir}/{filename}`. Use a `# Title` heading that describes the subject directly (not "How We Built X" or "Introducing X" — describe the actual subject). Use `##` subheadings for major sections. Include code blocks where they add clarity. Write to the length the content requires. Do not include YAML frontmatter.

After writing, confirm: `Written to {draft_output_dir}/{filename}`.

## Voice

First person. Technically precise. No marketing language. The standard voice guide applies.

Never use these phrases in any output:
- "Excited to share" / "Thrilled to announce"
- "Game-changing" / "Revolutionary" / "Groundbreaking"
- "Dive into" / "Delve into"
- "Leverage" (as a verb)
- "Seamlessly"
- "The future of [category]"
- Any sentence starting with "I'm proud to" or "I'm humbled to"
