# Design language

How maxaltena.com looks and behaves. Nothing technical lives here — see `TECH.md` for the stack.

This is the design language of `~/code/garden`, applied to a web page instead of a macOS window. The thesis, the type rules, the colour ramp and the smell test carry over unchanged; what a personal site does not have — chrome, sidebars, controls, dialogs — is left out rather than imitated. Where the two differ, this file says so and says why.

---

## 1. The thesis

**A page that reads as an instrument, not a brochure.**

Dense, flat, structural. One column of text, hairlines for structure, monospace for everything that is a value, the system font for everything that is a sentence. Nothing decorative, nothing animated on arrival, nothing that exists to seem approachable.

The four rules that carry most of the weight:

1. **Monospace every token; keep sentences proportional.** URLs, timestamps, section headers and the footer are tokens — SF Mono. My name, the sentence about what I do, and the names of the places I am are language — SF Pro.
2. **Structure with hairlines, not shadows.** Sections are divided by a 1px line at low opacity. There is no shadow anywhere on the page.
3. **Colour is signal, never decoration.** The page has a warm neutral ramp and one accent, used for focus only. A link is text with an underline, not a blue word.
4. **Density is not difficulty.** Tight rows are fine. Every link says where it goes, in full.

## 2. What the page says

- **Show the real thing.** A link to a profile shows the full host and path — `github.com/MaxAltena` — not an icon. Time is shown as a clock in the place I am, not "online" or "available".
- **Sentence case everywhere.** No Title Case, no exclamation marks, no personality in the copy. The page states facts.
- **One obvious action per section.** Each row is a link; the whole row is the target.

## 3. Typography

**Sentences:** the system font — SF Pro on Apple platforms, the platform default elsewhere. **Tokens:** SF Mono, falling back to Menlo, then the platform's monospace. Never a webfont.

**Scale.** Five sizes, no more. The garden runs at 13px because that is the macOS medium; a page read in a browser, often on a phone at arm's length, runs one step larger:

| Name      | Size / line | Use                                               |
| --------- | ----------- | ------------------------------------------------- |
| `micro`   | 11 / 1.36   | Uppercase section headers and the footer — mono   |
| `small`   | 12 / 1.40   | Secondary metadata: the URL under a link's name   |
| `base`    | 14 / 1.50   | Body — the default                                |
| `title`   | 16 / 1.35   | Reserved; unused on the current page              |
| `display` | 22 / 1.25   | The name, once, slightly tightened                |

**Weights:** 400, 500, 600. 600 for the name; 500 for the one most important label in a row; nothing bold.

**Numerals** are tabular where they change — the clock.

**Uppercase micro-labels** are mono, open tracking, tertiary colour. Structural signage, never content.

**Prose** caps at 65 characters per line.

## 4. Colour

The neutral ramp sits at roughly 45° hue — a warm sand — in every surface, hairline and ink. Never a cool grey.

| Token    | Light       | Dark        | Use                                     |
| -------- | ----------- | ----------- | --------------------------------------- |
| `canvas` | `#FDFCF7`   | `#1D1B15`   | The page                                |
| `sunken` | `#27241C0A` | `#F2EFE30D` | A row under the pointer                 |
| `line`   | `#27241C2B` | `#F2EFE324` | Section separator                       |
| `line-2` | `#27241C14` | `#F2EFE314` | Row separator inside a list             |
| `fg`     | `#27241C`   | `#EFECE0`   | Primary — warm charcoal, not black      |
| `fg-2`   | `#535046`   | `#ACA699`   | Secondary — still readable content      |
| `fg-3`   | `#A19D91`   | `#787365`   | Structural signage only, never content  |
| `accent` | `#007AFF`   | `#0A84FF`   | Keyboard focus. Nothing else.           |

The three state colours from the garden (`ok`, `warn`, `bad`) are not defined here: nothing on this page passes, waits or fails. If a state ever appears, take the values from the garden rather than inventing new ones.

**Never a raw colour value in a component.** Tokens only.

## 5. Surface and structure

- **Hairlines are the only structural device.** A section starts with a `line`; rows inside a list divide with `line-2`.
- **No shadows.** Nothing floats.
- **Radius** is 4px, on a row's hover wash and on the focus halo. Fully round is reserved for the portrait and nothing else.
- **Rows are full-bleed** within the column, 44px tall — the two-line maximum, here holding a name and a URL side by side — with padding inside the row and the divider spanning its full width. No cards.

## 6. Layout

A 4px grid. Spacing runs `2 4 6 8 12 16 24 32` — nothing between those steps.

One column, 36rem wide at most, centred, vertically centred in the viewport when the content is shorter than it. 24px of horizontal padding on small screens. 24px between sections, 12px between related blocks.

## 7. Links

- **The portrait** is 64px, fully round, on a `sunken` ground with a hairline ring — the transparent photo needs a floor, and the ring says where the circle ends on either scheme. It is a photo, not an icon: it never links anywhere.

- **Inline links** in a sentence are underlined with the `line` colour and take the full text colour on hover. They are not coloured.
- **List links** are rows. The whole row is the target; hover fills it with `sunken`. The name is proportional at weight 500; the URL — or the email address — is mono, `small`, secondary colour; a trailing `↗` in tertiary colour says the link leaves the site.
- **Focus is never invisible.** A 2px accent halo, offset by a pixel, at every stop.

## 8. Motion

Nothing animates on arrival. The only thing that changes on the page is the clock, which updates in place at the turn of the minute. Under reduced motion, durations go to zero.

## 9. Divergences from the garden

Named, so they are decisions rather than drift:

- **Text is selectable.** The garden disables selection on chrome because that is a web artifact in a native app. This is a web page; selecting text is the point.
- **The scale runs one step larger** (14px body, 22px display). See §3.
- **The system font is whatever the platform has.** The garden targets macOS only, so it can assume SF. This page is read on anything, so the stack falls through to `system-ui` and `monospace` — the design still asks for the platform's own face rather than a shipped one.
- **No controls.** No buttons, inputs, menus or dialogs exist here, so their rules (the 2px edge, the four states, native menus) do not apply. If one is ever needed, take it from the garden's §7 unchanged.

## 10. Smell test

Signs the page has drifted:

- A shadow anywhere
- A hue that is not the accent on a focus ring
- A URL, timestamp or section header set in a proportional font
- A sentence set in monospace
- A link shown as an icon instead of its address
- A cool grey anywhere in the ramp
- Content that fades, slides or staggers in
- A raw colour value inside a component
- Bold used for emphasis
- A row taller than 44px, or a gap between rows
- A webfont
