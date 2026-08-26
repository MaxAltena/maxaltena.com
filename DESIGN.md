# Design language

How maxaltena.com looks and behaves. The stack is in `TECH.md`.

This is the design language of `~/code/garden`, applied to a web page instead of a macOS window. The thesis, the type rules, the colour ramp and the smell test carry over as they are. A personal site has no chrome, sidebars, controls or dialogs, so those parts are left out rather than imitated. Where the two differ, section 9 says so and says why.

## 1. The thesis

A page that reads as an instrument, not a brochure.

One column of text. Hairlines for structure. Monospace for everything that is a value, the system font for everything that is a sentence. Nothing is decorative and nothing animates on arrival.

Four rules do most of the work:

1. **Monospace every token; keep sentences proportional.** URLs, timestamps, section headers and the footer are tokens, so they are set in SF Mono. My name, the sentence about what I do and the names of the places I am on are language, so they are set in SF Pro.
2. **Structure with hairlines, not shadows.** Sections divide with a 1px line at low opacity. There is no shadow on the page.
3. **Colour is signal.** The page has a warm neutral ramp and one accent, and the accent only appears on keyboard focus. A link is text with an underline, not a blue word.
4. **Density is not difficulty.** Tight rows are fine. Every link says where it goes, in full.

## 2. What the page says

Show the real thing. A link to a profile shows the full host and path, `github.com/MaxAltena`, not an icon. The clock is the time where I am, not "online" or "available".

Sentence case, no exclamation marks, no personality in the copy. The page states facts. I find that more honest than a tagline, and it is easier to keep true.

Each row in the list is a link and the whole row is the target.

## 3. Typography

Sentences use the system font, which is SF Pro on Apple platforms and whatever the platform ships elsewhere. Tokens use SF Mono, falling back to Menlo, then the platform's monospace. No webfont.

Five sizes. The garden runs at 13px because that is the macOS medium; a page read in a browser, often on a phone at arm's length, runs one step larger.

| Name      | Size / line | Use                                             |
| --------- | ----------- | ----------------------------------------------- |
| `micro`   | 11 / 1.36   | Uppercase section headers and the footer, mono  |
| `small`   | 12 / 1.40   | Secondary metadata, like the URL beside a name  |
| `base`    | 14 / 1.50   | Body                                            |
| `title`   | 16 / 1.35   | Reserved, unused on the current page            |
| `display` | 22 / 1.25   | The name, once, tracking tightened by 0.01em    |

Weights are 400, 500 and 600. 600 for the name, 500 for the one label in a row that matters most. Nothing bolder.

Numerals are tabular where they change, which on this page means the clock.

Uppercase micro-labels are mono with open tracking in the tertiary colour. They are signage, not content.

Prose caps at 65 characters per line.

## 4. Colour

The neutral ramp sits at roughly 45° hue, a warm sand, in every surface, hairline and ink. No cool grey anywhere.

| Token    | Light       | Dark        | Use                                     |
| -------- | ----------- | ----------- | --------------------------------------- |
| `canvas` | `#FDFCF7`   | `#1D1B15`   | The page                                |
| `sunken` | `#27241C0A` | `#F2EFE30D` | A row under the pointer                 |
| `line`   | `#27241C2B` | `#F2EFE324` | Section separator                       |
| `line-2` | `#27241C14` | `#F2EFE314` | Row separator inside a list             |
| `fg`     | `#27241C`   | `#EFECE0`   | Primary text, warm charcoal, not black  |
| `fg-2`   | `#535046`   | `#ACA699`   | Secondary text, still readable content  |
| `fg-3`   | `#A19D91`   | `#787365`   | Signage only. Fails 4.5:1 on purpose    |
| `accent` | `#007AFF`   | `#0A84FF`   | Keyboard focus. Nothing else            |

The garden's state colours (`ok`, `warn`, `bad`) are not defined here because nothing on this page passes, waits or fails. If a state ever appears, take the values from the garden rather than inventing new ones.

No raw colour value in a component. Tokens only.

## 5. Surface and structure

Hairlines are the only structural device. A section starts with a `line`; rows inside a list divide with `line-2`. Nothing floats, so nothing has a shadow.

The radius is 4px, on a row's hover wash and on the focus halo. Fully round is reserved for the portrait.

Rows are full-bleed within the column and 44px tall, which is the two-line maximum from the garden, here holding a name and a URL side by side. Padding lives inside the row and the divider spans its full width. No cards.

## 6. Layout

A 4px grid. Spacing runs `2 4 6 8 12 16 24 32` and nothing in between.

One column, 36rem wide at most, centred, and vertically centred in the viewport when the content is shorter than it. 24px of horizontal padding on small screens. 24px between sections, 12px between related blocks.

## 7. The portrait and the links

The portrait is 64px and fully round, on a `sunken` ground with a hairline ring. The photo has a transparent background, so it needs a floor, and the ring says where the circle ends on either scheme. It is a photo, not a button, and it links nowhere.

Inline links in a sentence are underlined in the `line` colour and take the full text colour on hover. They are not coloured.

List links are rows. Hover fills the row with `sunken`. The name is proportional at weight 500. The URL, or the email address, is mono at `small` in the secondary colour. A trailing `↗` in the tertiary colour says the link leaves the site.

Focus is visible at every stop as a 2px accent halo offset by a pixel.

## 8. Motion

Nothing animates on arrival. The only thing that changes on the page is the clock, which updates in place at the turn of the minute. Under reduced motion, durations go to zero.

## 9. Where this differs from the garden

Named here so they stay decisions rather than drift.

Text is selectable. The garden disables selection on chrome because selectable chrome is a web artifact in a native app. This is a web page and selecting text is the point.

The scale runs one step larger, 14px body and 22px display. See section 3.

The system font is whatever the platform has. The garden targets macOS only and can assume SF. This page is read on anything, so the stack falls through to `system-ui` and `monospace`. The design still asks for the platform's own face rather than a shipped one.

There are no controls. No buttons, inputs, menus or dialogs exist here, so their rules (the 2px edge, the four states, native menus) do not apply. If one is ever needed, take it from the garden's section 7 as is.

## 10. Smell test

Signs the page has drifted:

- A shadow anywhere
- A hue that is not the accent on a focus ring
- A URL, timestamp or section header in a proportional font
- A sentence in monospace
- A link shown as an icon instead of its address
- A cool grey anywhere in the ramp
- Content that fades, slides or staggers in
- A raw colour value inside a component
- Bold used for emphasis
- A row taller than 44px, or a gap between rows
- A webfont
