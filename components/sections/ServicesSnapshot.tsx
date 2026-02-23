'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Compass, Database, Building2, Settings, ArrowRight } from 'lucide-react'

export function ServicesSnapshot() {
  const t = useTranslations('HomePage.ServicesSnapshot')

  const services = [
    { icon: Compass, title: t('serviceExplorationTitle'), description: t('serviceExplorationDesc') },
    { icon: Database, title: t('serviceResourceTitle'), description: t('serviceResourceDesc') },
    { icon: Building2, title: t('serviceProjectTitle'), description: t('serviceProjectDesc') },
    { icon: Settings, title: t('serviceOperationalTitle'), description: t('serviceOperationalDesc') },
  ]

  return (
    <section className="py-24 bg-msv-light-2-subtle">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-msv-blue">{t('badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-msv-dark-2 mb-6">
            {t('heading')}
          </h2>
          <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-msv-light-2/50 transition-all duration-500 h-full border border-msv-light-2/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-msv-light-2-subtle to-transparent rounded-bl-full opacity-50" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-msv-dark-2 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-msv-gray-blue leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-msv-blue font-semibold hover:gap-4 transition-all duration-300 group"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
