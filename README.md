# [maxaltena.com](https://maxaltena.com)

One page: who I am, where I am, and where else to find me.

```
DESIGN.md       how it looks and behaves. Read it before touching the UI
TECH.md         what it is built with
src/pages/      the page
src/layouts/    the document shell
src/components/ the React islands
src/assets/     the portrait
src/styles/     the design tokens, as Tailwind theme variables
public/         favicons and the social card
```

## Working here

```sh
bun install
bun run dev        # https://maxaltena.localhost, via portless
bun run dev:port   # plain astro dev on http://localhost:4321
bun run check      # lint, format, typecheck
bun run build      # check, then a static build into dist/
```

Vercel deploys `main`.
