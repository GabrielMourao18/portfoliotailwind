import React, { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'
import type { Lang } from '../i18n/translations'

type ContextType = {
  lang: Lang
  toggle: () => void
  t: (path: string) => any
}

const LanguageContext = createContext<ContextType | undefined>(undefined)

function getByPath(obj: any, path: string) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const toggle = () => setLang(l => (l === 'pt' ? 'en' : 'pt'))

  const t = (path: string) => {
    const val = getByPath(translations[lang], path)
    return val === undefined ? path : val
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export default LanguageProvider
