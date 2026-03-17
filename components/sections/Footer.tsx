'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui/Container'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import type { SanityCompanyInfo } from '@/sanity/lib/types'

export function Footer({ companyInfo }: { companyInfo?: SanityCompanyInfo | null }) {
  const t = useTranslations('Footer')

  const email = companyInfo?.email || 'info@dma-msv.com'
  const phone = companyInfo?.phone || '+84 24 62500426'
  const addressLine1 = companyInfo?.addressLine1 || t('addressLine1')
  const addressLine2 = companyInfo?.addressLine2 || t('addressLine2')
  const addressLine3 = companyInfo?.addressLine3 || t('addressLine3')

  const quickLinks = [
    { href: '/about' as const, label: t('aboutUs') },
    { href: '/services' as const, label: t('services') },
    { href: '/team' as const, label: t('team') },
    { href: '/projects' as const, label: t('projects') },
    { href: '/contact' as const, label: t('contact') },
  ]

  const serviceLinks = [
    t('serviceExploration'),
    t('serviceResource'),
    t('serviceProjectDelivery'),
    t('serviceOperational'),
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white mt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logos/MSV Logo Only (Transparent).png"
                alt="MSV Logo"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold text-white leading-tight">
                {t('companyName')}
              </span>
            </div>
            <p className="text-msv-light-2 text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-msv-gold font-semibold">{t('metresDrilledValue')}</span>
              <span className="text-white/50">{t('metresDrilledLabel')}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-msv-light-2 hover:text-white transition-colors duration-200 flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              {t('servicesHeading')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="text-msv-light-2 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              {t('contactHeading')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 text-msv-light-2 hover:text-white transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                  <span className="text-sm">{email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-msv-light-2 hover:text-white transition-colors"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                  <span className="text-sm">{phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-msv-cyan" />
                <address className="text-msv-light-2 text-sm not-italic leading-relaxed">
                  {addressLine1}<br />
                  {addressLine2}<br />
                  {addressLine3}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} {t('copyright')}
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/50">
              <span>Vietnam</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>Cambodia</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>Laos</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>Thailand</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>Malaysia</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
