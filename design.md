# Writers' Haven — Design System

A terminal-meets-editorial aesthetic. Monospace structure, serif voice, one accent color, motion that earns its place.

## Why this direction

The previous UI had every cliché of a generative landing page: emerald-to-purple gradient text, floating blurred orbs, "✨ Welcome to the Future of" badges, glowing CTAs. Visually loud, character-less. This system trades that for restraint — fewer colors, more typographic contrast, ASCII as real layout, and motion used only to communicate (not decorate).

## Palette

A near-black warm base with a single hot accent. No multi-stop gradients anywhere.

| Token            | Value     | Use                                         |
|------------------|-----------|---------------------------------------------|
| `ink`            | `#0b0b0a` | Page background                             |
| `ink-2`          | `#141412` | Cards, raised surfaces                      |
| `ink-3`          | `#1c1b18` | Hover surfaces                              |
| `paper`          | `#f5f1e8` | Primary text (warm off-white, never #fff)   |
| `paper-2`        | `#a8a39a` | Secondary text                              |
| `paper-3`        | `#6b665d` | Tertiary / meta text                        |
| `rule`           | `#2a2925` | Borders, hairlines, ASCII glyphs            |
| `accent`         | `#e8590c` | Single accent (rust/amber). Links, focus.   |
| `accent-soft`    | `#3a1f0f` | Accent backgrounds at low intensity         |

Rules:
- No `bg-gradient-*` of any kind. Solid fills only.
- Never use pure white or pure black. Use `paper` and `ink`.
- The accent is precious — one per viewport, max two.

## Type

Three families, each with a job. No more.

- **Display** — `Fraunces` (variable serif, optical sizing). Headlines only. Tracks tight at large sizes (`-0.04em`).
- **Body** — `Inter`. Paragraphs, UI. Default `400`, headings `500`, never `700` in body.
- **Mono** — `JetBrains Mono`. Labels, captions, ASCII frames, meta. ALL-CAPS labels at `0.7rem` with `0.18em` tracking.

Scale (rem):
```
display-xl  4.5    leading 0.95   tracking -0.04em   Fraunces 400
display-lg  3.25   leading 1.0    tracking -0.035em  Fraunces 400
display     2.25   leading 1.05   tracking -0.03em   Fraunces 500
title       1.5    leading 1.2    tracking -0.02em   Fraunces 500
body-lg     1.125  leading 1.6                       Inter 400
body        1.0    leading 1.6                       Inter 400
small       0.875  leading 1.5                       Inter 400
label       0.7    leading 1.4    tracking 0.18em    Mono 500 UPPER
```

## ASCII as layout

The frame is the feature. Use real box-drawing characters (`─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼`) and dot-leader rules (`· · · · ·`). They live in the `Mono` family at `paper-3` color.

Patterns:
- **Section header**: `┌── 01 / FEATURES ───────────────────────`
- **Divider**: a full-width line of `─` at the rule color, or dotted `· · ·` for soft breaks.
- **Bracket label**: `[ READ ARTICLE ]` styled as a button, not an icon-pill.
- **Spec block**: a 2-column mono table for stats / metadata, prefixed `>` or `›`.
- **Caret indicator**: `▸` for list bullets instead of svg checkmarks.

## Components

- **Buttons**: rectangular, 1px border, no rounded corners > `2px`. Default is bordered + transparent; primary is `accent` fill with `ink` text. Hover shifts background only.
- **Cards**: 1px `rule` border, `ink-2` fill, no shadow. Corner ASCII brackets (`┌` `┐` `└` `┘`) as decorative outline marks.
- **Inputs**: bottom-border only, mono font, blinking caret accent.
- **Links**: underlined with `accent`, offset 4px, decoration-thickness 1px.

## Motion

Subtle, fast, purposeful. No infinitely looping floats or pulses.

- Page enter: 180ms opacity + 8px y-translate, ease-out. Stagger 40ms per child.
- Hover: 120ms. Only border color or background, never scale or translate > 4px.
- Marquee / typewriter effects allowed for ASCII strings (terminal feel) at slow tempo.
- Reduce-motion: respect it. Replace all transforms with opacity-only.
- No `whileInView` scale pops. No `boxShadow` glows. No `rotate: 360` on hover.

## What's gone

- Gradient text and gradient backgrounds
- Floating blurred orbs
- Emoji decoration in headlines
- "Powered by", "✨", "🚀" badges
- Multiple competing accent colors
- `rounded-2xl` everywhere
- `whileHover={{ scale: 1.05 }}` on everything
