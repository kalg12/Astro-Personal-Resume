import { ui, defaultLang } from '@/i18n/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const translation = (ui[lang] as any)[key]
    if (translation) {
      return translation
    }
    const defaultTranslation = (ui[defaultLang] as any)[key]
    return defaultTranslation || key
  }
}
