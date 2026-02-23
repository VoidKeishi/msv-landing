'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/about' as const, label: t('about') },
    { href: '/services' as const, label: t('services') },
    { href: '/team' as const, label: t('team') },
    { href: '/projects' as const, label: t('projects') },
    { href: '/contact' as const, label: t('contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20 md:h-[72px]">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink">
            <Image
              src="/logos/MSV Logo Only (Transparent).png"
              alt="MSV Logo"
              width={56}
              height={56}
              priority
              className="h-10 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
            />
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="text-lg font-bold text-msv-blue leading-tight tracking-tight">
                {t('companyName')}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">
                <span className="text-msv-gold">{t('sloganUncovering')}</span>{' '}
                <span className="text-msv-blue">{t('sloganPotential')}</span>
                <span className="text-msv-blue"> · </span>
                <span className="text-msv-gold">{t('sloganDriving')}</span>{' '}
                <span className="text-msv-blue">{t('sloganProgress')}</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-msv-blue'
                      : 'text-msv-dark-2 hover:text-msv-blue hover:bg-msv-blue/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-msv-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <div className="ml-auto pl-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-msv-dark-2 hover:text-msv-blue hover:bg-msv-blue/5 rounded-md transition-colors flex-shrink-0"
              aria-label={t('toggleMenu')}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href))

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 font-medium rounded-md transition-colors ${
                          isActive
                            ? 'text-msv-blue bg-msv-blue/10'
                            : 'text-msv-dark-2 hover:text-msv-blue hover:bg-msv-blue/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  )
}
