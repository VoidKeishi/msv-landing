'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import type { Locale } from '@/i18n/routing'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const locales: { value: Locale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'vi', label: 'VI' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const switchTo = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLabel = locales.find((l) => l.value === locale)?.label ?? 'EN'

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-0.5 px-2 py-1.5 text-xs font-semibold text-msv-dark-2 hover:text-msv-blue rounded-md transition-colors duration-200"
        aria-label="Switch language"
      >
        {currentLabel}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-1 min-w-[3rem] bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden z-50"
          >
            {locales.map((l) => (
              <button
                key={l.value}
                onClick={() => switchTo(l.value)}
                className={`block w-full px-3 py-1.5 text-xs font-medium text-left transition-colors duration-150 ${
                  locale === l.value
                    ? 'text-msv-blue bg-msv-blue/5'
                    : 'text-msv-dark-2 hover:text-msv-blue hover:bg-msv-light-2/30'
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
