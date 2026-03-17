'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ChevronDown, MapPin, Award, Pickaxe } from 'lucide-react'
import type { SanityHeroSection } from '@/sanity/lib/types'

const iconMap = {
  pickaxe: Pickaxe,
  award: Award,
  mapPin: MapPin,
} as const

export function Hero({ data }: { data?: SanityHeroSection | null }) {
  const t = useTranslations('HomePage.Hero')

  const badge = data?.badge || t('badge')
  const slogan = data?.slogan || t('slogan')
  const headingLine1 = data?.headingLine1 || t('headingLine1')
  const headingHighlight = data?.headingHighlight || t('headingHighlight')
  const headingLine2 = data?.headingLine2 || t('headingLine2')
  const description = data?.description || t('description')
  const ctaServices = data?.ctaServicesLabel || t('ctaServices')
  const ctaContact = data?.ctaContactLabel || t('ctaContact')
  const trackRecord = data?.trackRecordLabel || t('trackRecord')

  const stats = data?.stats?.length
    ? data.stats.map((s) => ({
        value: s.value,
        label: s.label,
        icon: iconMap[s.icon as keyof typeof iconMap] || Pickaxe,
      }))
    : [
        { value: t('statMetresValue'), label: t('statMetresLabel'), icon: Pickaxe },
        { value: t('statCertifiedValue'), label: t('statCertifiedLabel'), icon: Award },
        { value: t('statOperationsValue'), label: t('statOperationsLabel'), icon: MapPin },
      ]

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-msv-cyan/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/10"
            >
              <span className="w-2 h-2 bg-msv-mint rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">{badge}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold mb-6"
            >
              {slogan}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              {headingLine1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold">
                {headingHighlight}
              </span>
              <br />
              {headingLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl mb-8 text-msv-light-2 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/services">
                <Button variant="primary" className="w-full sm:w-auto bg-msv-blue hover:bg-msv-blue/90 text-white transition-colors">
                  {ctaServices}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  {ctaContact}
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/logos/MSV Logo Only (Transparent).png"
                alt="MSV Logo"
                width={280}
                height={220}
                className="w-52 lg:w-64 h-auto mb-4"
                priority
              />
              <Image
                src="/logos/MSV Mining Services Vietnam (Horizontal).png"
                alt="Mining Services Vietnam"
                width={600}
                height={100}
                className="h-auto w-80 lg:w-[450px] brightness-0 invert"
              />
            </div>

            <h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-widest">{trackRecord}</h3>
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-msv-blue/30 to-msv-cyan/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-4 h-4 text-msv-gold" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg text-white">{stat.value}</span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 2.5, ease: 'easeOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
