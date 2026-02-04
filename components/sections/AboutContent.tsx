'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Globe, Award, Shield, Users, Target, Leaf, Heart, Compass, Database, Building2, Settings, FileText, Users2 } from 'lucide-react'

const differentiators = [
  {
    icon: Globe,
    title: 'Regional Presence',
    description: 'Strong local presence across 5 Southeast Asian countries with established networks and deep market knowledge.',
  },
  {
    icon: Award,
    title: 'International Standards',
    description: 'Western technical standards with local cost structures, ensuring quality without compromise.',
  },
  {
    icon: Shield,
    title: 'JORC/NI43-101 Certified',
    description: 'Competent Persons for resource and reserve reporting with robust governance and compliance.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: '30+ years combined executive mining experience across multiple commodities and jurisdictions.',
  },
]

const capabilities = [
  {
    icon: Compass,
    title: 'Exploration & Geological Services',
    description: 'From grassroots exploration through geophysics and drilling, including full program design, execution, and reporting.',
  },
  {
    icon: Database,
    title: 'Resource & Reserve Development',
    description: 'Compliant with local reporting requirements as well as JORC and NI43-101 standards.',
  },
  {
    icon: Building2,
    title: 'EPCM Services',
    description: 'Engineering, Procurement and Construction Management services across the project lifecycle.',
  },
  {
    icon: Settings,
    title: 'Engineering Services',
    description: 'Including mining, civil, and mechanical disciplines with practical, fit-for-purpose solutions.',
  },
  {
    icon: Users2,
    title: 'HR & Admin Management',
    description: 'Supporting both project and operational teams with local expertise and compliance.',
  },
  {
    icon: FileText,
    title: 'Operational Readiness',
    description: 'Helping establish personnel, operating procedures, and systems for smooth transitions.',
  },
]

const countries = [
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'Cambodia', flag: '🇰🇭' },
  { name: 'Laos', flag: '🇱🇦' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Malaysia', flag: '🇲🇾' },
]

const commodities = [
  { name: 'Gold', symbol: 'Au' },
  { name: 'Copper', symbol: 'Cu' },
  { name: 'Nickel', symbol: 'Ni' },
  { name: 'Antimony', symbol: 'Sb' },
  { name: 'PGE', symbol: 'Pt' },
  { name: 'Lead', symbol: 'Pb' },
  { name: 'Zinc', symbol: 'Zn' },
]

export function AboutContent() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">About MSV</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Delivering Excellence<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-amber-400 to-msv-gold">
                Across Southeast Asia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Practical, high-quality mining solutions from a trusted regional partner
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-6">
                Company Overview
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Mining Services Vietnam (MSV) is a Vietnam-based mining services company delivering 
                  practical, high-quality solutions to uncover potential and drive progress for our 
                  clients across Southeast Asia.
                </p>
                <p>
                  Leveraging our strong local presence, regional experience, and international technical 
                  capability, MSV provides cost-effective, practical mining solutions that meet Western 
                  technical and safety standards, while remaining aligned with local cost structures and 
                  operating conditions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative bg-gradient-to-br from-msv-blue/5 to-msv-cyan/5 rounded-3xl p-8 border border-msv-blue/10">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-msv-gold/10 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-msv-dark-2">Our Vision</h3>
                </div>
                
                <p className="text-lg text-msv-dark-2 leading-relaxed mb-6 font-medium">
                  To deliver high-standard, cost-effective mining services while protecting the 
                  environment and ensuring the safety and wellbeing of people and communities.
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-msv-blue/10">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Leaf className="w-5 h-5 text-msv-mint" />
                    <span className="text-sm">Environmental Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Heart className="w-5 h-5 text-rose-400" />
                    <span className="text-sm">Community Safety</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-msv-blue">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Integrated mining services across the full project lifecycle
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <div className="group bg-white rounded-2xl p-6 h-full border border-slate-100 hover:border-msv-blue/20 hover:shadow-xl hover:shadow-msv-blue/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-msv-dark-2 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
              Why Choose MSV
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What sets us apart in the Southeast Asian mining services landscape
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-6">
                    <item.icon className="w-8 h-8 text-msv-blue" />
                  </div>
                  <h3 className="font-semibold text-msv-dark-2 mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
              Operating Across Southeast Asia
            </h2>
            <p className="text-xl text-white/80">
              Regional expertise with international standards
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="font-semibold text-lg mb-6 text-white/90">Our Jurisdictions</h3>
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
                <h3 className="font-semibold text-lg mb-6 text-white/90">Our Commodities</h3>
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
