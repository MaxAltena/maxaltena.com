import { useSyncExternalStore } from 'react'

const subscribe = (): (() => void) => () => {}

/**
 * The address is never in the HTML. The server renders an empty row and the
 * client assembles user and domain into text and a mailto: after hydration,
 * so a scraper reading the page source finds nothing to harvest. Someone with
 * JavaScript off sees the row label and nothing beside it — the profiles
 * above it still say where to find me.
 */
export function Email({
  user,
  domain,
  className
}: {
  user: string
  domain: string
  className: string
}): React.JSX.Element {
  // false on the server and during hydration, true once the client owns the tree.
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
  const address = hydrated ? `${user}@${domain}` : null

  return (
    <a href={address ? `mailto:${address}` : undefined} className={className}>
      <span className="w-20 shrink-0 font-medium">Email</span>
      <span className="min-w-0 flex-1 truncate font-mono text-small text-fg-2">{address}</span>
      <span className="font-mono text-small text-fg-3" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
