import React, { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageProvider'

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage()

  useEffect(() => {
    // helps verify the toggle rendered in the client
    // eslint-disable-next-line no-console
    console.log('[LanguageToggle] mounted, lang=', lang)
  }, [lang])

  return (
    <button
      onClick={toggle}
      className="fixed top-2 right-2 z-[9999] inline-flex items-center gap-1 px-2 py-1 rounded-md text-[#093656] border border-white text-[16px] bg-white/95 shadow-lg sm:top-4 sm:right-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-[22px]"
      aria-label="Toggle language"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#093656]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15 15 0 0 1 0 20"></path>
      </svg>
      <span>{lang.toUpperCase()}</span>
    </button>
  )
}
