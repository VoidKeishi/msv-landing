'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Globe, Award, TrendingUp, Shield, Download } from 'lucide-react'

export function CompanyOverview() {
  const t = useTranslations('HomePage.CompanyOverview')

  const features = [
    { icon: Globe, title: t('featureRegionalTitle'), description: t('featureRegionalDesc') },
    { icon: Award, title: t('featureStandardsTitle'), description: t('featureStandardsDesc') },
    { icon: TrendingUp, title: t('featureLifecycleTitle'), description: t('featureLifecycleDesc') },
    { icon: Shield, title: t('featureCertifiedTitle'), description: t('featureCertifiedDesc') },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-msv-light-2/20 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-msv-blue">{t('badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-msv-dark-2 mb-6 leading-tight">
              {t('headingLine1')} <br />
              <span className="text-msv-blue">{t('headingHighlight')}</span>
            </h2>

            <p className="text-lg text-msv-dark-2/80 mb-6 leading-relaxed">
              {t('paragraph1')}
            </p>

            <p className="text-msv-gray-blue leading-relaxed">
              {t('paragraph2')}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://gdp0phlejbs9naup.public.blob.vercel-storage.com/Mining%20Services%20Vietnam%20Company%20Profile%20%28Feb%202026%29.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold border-2 border-msv-blue bg-msv-blue text-white hover:bg-msv-blue/90 hover:border-msv-blue/90 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                {t('downloadProfile')}
              </a>
              <a
                href="https://gdp0phlejbs9naup.public.blob.vercel-storage.com/Mining%20Services%20Vietnam%20Capability%20Statement%20%28Mar%2026%29.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold border-2 border-msv-blue text-msv-blue hover:bg-msv-blue hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                {t('downloadCapability')}
              </a>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group p-6 bg-white rounded-2xl border border-msv-light-2/30 hover:border-msv-blue/20 hover:shadow-xl hover:shadow-msv-blue/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-msv-dark-2 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-msv-gray-blue leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
