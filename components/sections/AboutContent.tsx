'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Globe, Award, Shield, Users, Target, Leaf, Heart, Compass, Database, Building2, Settings, FileText, Users2 } from 'lucide-react'

export function AboutContent() {
  const t = useTranslations('AboutPage')

  const differentiators = [
    { icon: Globe, title: t('WhyChoose.presenceTitle'), description: t('WhyChoose.presenceDesc') },
    { icon: Award, title: t('WhyChoose.standardsTitle'), description: t('WhyChoose.standardsDesc') },
    { icon: Shield, title: t('WhyChoose.certifiedTitle'), description: t('WhyChoose.certifiedDesc') },
    { icon: Users, title: t('WhyChoose.teamTitle'), description: t('WhyChoose.teamDesc') },
  ]

  const capabilities = [
    { icon: Compass, title: t('Capabilities.explorationTitle'), description: t('Capabilities.explorationDesc') },
    { icon: Database, title: t('Capabilities.resourceTitle'), description: t('Capabilities.resourceDesc') },
    { icon: Building2, title: t('Capabilities.epcmTitle'), description: t('Capabilities.epcmDesc') },
    { icon: Settings, title: t('Capabilities.engineeringTitle'), description: t('Capabilities.engineeringDesc') },
    { icon: Users2, title: t('Capabilities.hrTitle'), description: t('Capabilities.hrDesc') },
    { icon: FileText, title: t('Capabilities.operationalTitle'), description: t('Capabilities.operationalDesc') },
  ]

  const countries = [
    { name: t('Region.countryVietnam'), flag: '\u{1F1FB}\u{1F1F3}' },
    { name: t('Region.countryCambodia'), flag: '\u{1F1F0}\u{1F1ED}' },
    { name: t('Region.countryLaos'), flag: '\u{1F1F1}\u{1F1E6}' },
    { name: t('Region.countryThailand'), flag: '\u{1F1F9}\u{1F1ED}' },
    { name: t('Region.countryMalaysia'), flag: '\u{1F1F2}\u{1F1FE}' },
  ]

  const commodities = [
    { name: t('Region.commodityGold'), symbol: 'Au' },
    { name: t('Region.commodityCopper'), symbol: 'Cu' },
    { name: t('Region.commodityNickel'), symbol: 'Ni' },
    { name: t('Region.commodityAntimony'), symbol: 'Sb' },
    { name: t('Region.commodityPGE'), symbol: 'Pt' },
    { name: t('Region.commodityLead'), symbol: 'Pb' },
    { name: t('Region.commodityZinc'), symbol: 'Zn' },
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">{t('Hero.badge')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('Hero.headingLine1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold">
                {t('Hero.headingHighlight')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-msv-light-2 leading-relaxed">
              {t('Hero.subheading')}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-6">
                {t('Overview.heading')}
              </h2>
              <div className="space-y-6 text-msv-dark-2/80 leading-relaxed">
                <p>{t('Overview.paragraph1')}</p>
                <p>{t('Overview.paragraph2')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative bg-gradient-to-br from-msv-blue/5 to-msv-cyan/5 rounded-3xl p-8 border border-msv-blue/10">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-msv-gold/10 rounded-full blur-2xl" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-msv-dark-2">{t('Vision.heading')}</h3>
                </div>

                <p className="text-lg text-msv-dark-2 leading-relaxed mb-6 font-medium">
                  {t('Vision.statement')}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-msv-blue/10">
                  <div className="flex items-center gap-2 text-msv-dark-2/80">
                    <Leaf className="w-5 h-5 text-msv-mint" />
                    <span className="text-sm">{t('Vision.environmental')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-msv-dark-2/80">
                    <Heart className="w-5 h-5 text-msv-gold" />
                    <span className="text-sm">{t('Vision.community')}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-msv-light-2-subtle">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-msv-blue">{t('Capabilities.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
              {t('Capabilities.heading')}
            </h2>
            <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
              {t('Capabilities.subheading')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <div className="group bg-white rounded-2xl p-6 h-full border border-msv-light-2/30 hover:border-msv-blue/20 hover:shadow-xl hover:shadow-msv-blue/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-msv-dark-2 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-msv-gray-blue leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
              {t('WhyChoose.heading')}
            </h2>
            <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
              {t('WhyChoose.subheading')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group text-center p-8 bg-msv-light-2-subtle rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-6">
                    <item.icon className="w-8 h-8 text-msv-blue" />
                  </div>
                  <h3 className="font-semibold text-msv-dark-2 mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-msv-gray-blue leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-msv-blue to-msv-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

        <Container className="relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('Region.heading')}
            </h2>
            <p className="text-xl text-white/80">
              {t('Region.subheading')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="font-semibold text-lg mb-6 text-white/90">{t('Region.jurisdictions')}</h3>
                <div className="flex flex-wrap gap-3">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm font-medium">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="font-semibold text-lg mb-6 text-white/90">{t('Region.commodities')}</h3>
                <div className="flex flex-wrap gap-3">
                  {commodities.map((commodity) => (
                    <div
                      key={commodity.name}
                      className="bg-white/10 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2"
                    >
                      <span className="w-6 h-6 rounded-full bg-msv-gold/20 flex items-center justify-center text-xs font-bold text-msv-gold">
                        {commodity.symbol}
                      </span>
                      <span>{commodity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
