import { useEffect, useState } from 'react'

const TIME_ZONE = 'Europe/Amsterdam'

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})

/**
 * The clock where I am. Rendered empty on the server — a build-time value
 * would be a wrong number, and a wrong number is worse than a short wait — and
 * filled in on the client, then kept in step at the turn of every minute.
 */
export function LocalTime(): React.JSX.Element {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = (): void => {
      const date = new Date()
      setNow(date)
      timer = setTimeout(tick, 60_000 - (date.getTime() % 60_000))
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  return (
    <time className="nums" dateTime={now?.toISOString()}>
      {now ? format.format(now) : '--:--'}
    </time>
  )
}
