# Tech stack

What this site is built with. How it should look and behave is in `DESIGN.md`.

TypeScript in strict mode, bun as the package manager, a static build that Vercel deploys from `main`.

## The stack

| #   | Library          | Role                                   |
| --- | ---------------- | -------------------------------------- |
| 1   | Astro            | The site: routing, layout, static HTML |
| 2   | React            | Islands, for the parts that need state |
| 3   | Tailwind CSS     | Styling and the design-token layer     |
| 4   | Vercel Analytics | Page views                             |

### 1. Astro

Static output. Every page is HTML at build time, and a page ships no JavaScript unless a component on it asks for some.

`.astro` files own the document and the layout. Markup without state, which is nearly all of it, lives here rather than in React.

### 2. React

Version 19, function components only, loaded as Astro islands with `client:load`. A component becomes a React island when it needs the browser. If it only renders props, it is an `.astro` component.

There is no state library and no data-fetching library. The page has two islands and each holds one piece of state: the clock, and the email row at the top of the list.

The email address is not in the HTML. `Email.tsx` takes the user and the domain as separate props and joins them into text and a `mailto:` only after hydration. A scraper reading the served page finds an empty row. Keep it that way, which means the address does not go in a meta tag, a `rel="me"` link or the description either.

### 3. Tailwind CSS

Version 4, through the Vite plugin and configured in CSS. The tokens from `DESIGN.md` are defined once in `src/styles/global.css` as theme variables and components use only those. No raw hex values, no arbitrary colour values in class names, and none of Tailwind's stock palette.

Dark mode follows `prefers-color-scheme`. There is no toggle.

### 4. Vercel Analytics

The `@vercel/analytics/astro` component in the document head. It sends nothing in development.

## Left out on purpose

A component library. `DESIGN.md` is specific enough that adopting someone else's defaults means fighting them.

Webfonts. The system font stack is a design requirement.

A CMS, a database, API routes. The content is a name, a sentence and four links, and it lives in the page.

Environment variables. Nothing here is secret and nothing varies by environment.

## Dev server

`bun run dev` runs `astro dev` through [portless](https://portless.sh), so the site is at https://maxaltena.localhost instead of on a port that shifts whenever something else is listening on 4321.

One thing to know. Astro 7 daemonises its dev server when it detects an AI agent started it, and portless then sees the command exit and drops the route. An agent should start it with `ASTRO_DEV_BACKGROUND=1` to keep it in the foreground. `bunx astro dev stop` kills a stray daemon. `bun run dev:port` is plain `astro dev` for when the proxy is in the way.

## Conventions

Strict TypeScript via Astro's `strictest` preset.

oxlint and oxfmt instead of ESLint and Prettier. Both finish in well under a second, so they gate the build: `bun run build` runs `check` first and a tree that does not lint, format or typecheck cannot deploy.

Commits use Gitmoji plus Conventional Commits, as `<emoji> <type>: <description>`.

## Versions

Pin majors, take minors freely. `package.json` has the numbers.
