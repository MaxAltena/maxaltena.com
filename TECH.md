# Tech stack

What this site is built with. For how it should look and behave, see `DESIGN.md`.

**Baseline:** TypeScript in strict mode, bun as the package manager, a static build deployed to Vercel from `main`.

---

## The stack

| #   | Library              | Role                                   |
| --- | -------------------- | -------------------------------------- |
| 1   | **Astro**            | The site: routing, layout, static HTML |
| 2   | **React**            | Islands, for the parts that need state |
| 3   | **Tailwind CSS**     | Styling and the design-token layer     |
| 4   | **Vercel Analytics** | Page views, nothing more               |

### 1. Astro

Static output. Every page is HTML at build time; a page ships no JavaScript unless a component on it asks for some.

`.astro` files own the document and the layout. Markup that has no state — which is nearly all of it — lives here, not in React.

### 2. React

Version 19, function components only, loaded as Astro islands with `client:load`. A component becomes a React island when it needs the browser: a clock, a live value, something that responds to input. If it only renders props, it is an `.astro` component.

No state library, no data-fetching library. The page has two islands, each holding one `useState`: the clock, and the email row at the top of the list.

**The email address is never in the HTML.** `Email.tsx` takes the user and the domain as separate props and joins them — text and `mailto:` — only after hydration. A scraper reading the served page finds an empty row; a person with JavaScript gets the address. Keep it that way: don't put the address in a meta tag, a `rel="me"` link or the description.

### 3. Tailwind CSS

Version 4, through the Vite plugin and configured in CSS. **The tokens in `DESIGN.md` are defined once in `src/styles/global.css` as theme variables, and components use only those.** No raw hex values, no arbitrary colour values in class names, no use of Tailwind's stock palette.

Dark mode runs off `prefers-color-scheme`. There is no toggle; the site follows the system.

### 4. Vercel Analytics

The `@vercel/analytics/astro` component in the document head. It is inert in development.

## Not in the stack, deliberately

- **A component library.** `DESIGN.md` is specific enough that adopting someone else's defaults means fighting them.
- **Webfonts.** The system font stack is a design requirement.
- **A CMS, a database, an API route.** The content is a name, a sentence and three links. It lives in the page.
- **Environment variables.** Nothing here is secret and nothing varies by environment.

## Dev server

`bun run dev` runs `astro dev` through [portless](https://portless.sh), so the site is at **https://maxaltena.localhost** rather than on a port that shifts when something else is already listening. Astro 7 daemonises its dev server when it detects it was started by an AI agent, which makes portless think the command exited and drop the route — an agent should start it with `ASTRO_DEV_BACKGROUND=1` to keep it in the foreground. `bunx astro dev stop` stops a stray daemon. `bun run dev:port` is the plain `astro dev` for when the proxy is in the way.

## Conventions

- **Strict TypeScript** via Astro's `strictest` preset.
- **oxlint + oxfmt**, not ESLint and Prettier. Both run in well under a second and gate the build.
- **`bun run build` runs `check` first** — a tree that does not lint, format or typecheck cannot be deployed.
- **Commits use Gitmoji plus Conventional Commits** (`<emoji> <type>: <description>`).

## Versions

Pin majors, take minors freely. `package.json` is the source of truth for numbers.
