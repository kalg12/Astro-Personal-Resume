import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  timezone: string
  text: string
  lang: string // ej: "es" | "en" | "es-MX" | "en-US"
}

function normalizeLocale(lang: string) {
  const l = (lang || '').toLowerCase()
  if (l.startsWith('es')) return 'es-MX'
  return 'en-US'
}

const Timezone: React.FC<Props> = ({ timezone, text, lang }) => {
  const [dateTime, setDateTime] = useState('')

  const locale = useMemo(() => normalizeLocale(lang), [lang])

  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      timeZone: timezone,
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  }, [locale, timezone])

  useEffect(() => {
    const tick = () => {
      const formatted = formatter.format(new Date())
      // Ej: "jueves, 25 de diciembre de 2025, 10:34:15 p. m."
      // Si quieres exactamente tu string (con "a" y AM/PM), lo podemos customizar,
      // pero esto ya respeta el idioma 100%.
      setDateTime(formatted)
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [formatter])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  )
}

export default Timezone
