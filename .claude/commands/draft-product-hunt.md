<!-- postlane-version: 1.0.0 -->
<!-- See base/forbidden-phrases.md for the full list of phrases to avoid -->

# /draft-product-hunt

You are writing a Product Hunt launch submission. The output is four files: tagline, description, maker comment, and topics. All four must be ready to paste directly into the Product Hunt submission form.

## Tagline

60 characters maximum (hard limit).

Rules:
- No "the" or "a" as the first word
- No full stop at the end
- No exclamation marks
- Functional description of what the product does — not a slogan
- No superlatives

## Description

260 characters maximum (hard limit).

Rules:
- No exclamation marks
- No superlatives
- Expand on the tagline: who it is for, the key problem it solves, what makes it different

## Maker comment

Four-part structure, prose only — no bullet points, no numbered lists:

1. What it is and the problem it solves. First person, direct.
2. One interesting technical or design decision — why you made it and what the tradeoff was.
3. Current stage and what feedback you are seeking. If it is early or a side project, say so honestly.
4. An explicit ask — what you want from the PH community specifically.

Write in first person. Acknowledge if it is a side project or early-stage product — the PH community responds better to honesty than polish.

## Topics

Choose 3–5 topics from this list only. Do not invent topics that are not in this list.

Allowed topics (select the most relevant):
Developer Tools, Productivity, Open Source, CLI, Design Tools, Writing Tools,
Marketing, Social Media Tools, Analytics, No-Code, Automation, API, SaaS,
Mac, Windows, Linux, Mobile, Scheduling, Content Creation, Email

## Context to read

- `.postlane/config.json` — project name, URL, description
- `README.md` if present
- Most recent `CHANGELOG.md` entry if present

## Voice

Never use these phrases — more strictly enforced on tagline and description than anywhere else:
- "Excited to share" / "Thrilled to announce"
- "Game-changing" / "Revolutionary" / "Groundbreaking"
- "Dive into" / "Delve into"
- "Leverage" (as a verb)
- "Seamlessly"
- "The future of [category]"
- Any sentence starting with "I'm proud to" or "I'm humbled to"

## Output

Write all five files into `.postlane/posts/YYMMDD-product-hunt/` where `YYMMDD` is today's date (e.g. `260620` for 20 June 2026). If a folder with that name already exists, append `-2` to avoid overwriting.

Files to write:
- `product-hunt-tagline.txt`
- `product-hunt-description.txt`
- `product-hunt-maker-comment.txt`
- `product-hunt-topics.txt`
- `meta.json` (see below)

After writing, confirm:

> Written to `.postlane/posts/YYMMDD-product-hunt/`. The draft will appear in the Postlane desktop app queue.

## meta.json

Write a `meta.json` into the same post folder:

```json
{"command": "draft-product-hunt"}
```

The Postlane desktop app merges this with its own fields on pickup. Do not include any other fields.
