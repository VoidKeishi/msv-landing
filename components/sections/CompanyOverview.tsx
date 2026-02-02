'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Globe, Award, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Regional Expertise',
    description: 'Operating across Vietnam, Cambodia, Laos, Malaysia, and Thailand with deep local knowledge and established networks.',
  },
  {
    icon: Award,
    title: 'International Standards',
    description: 'Western technical and safety standards seamlessly aligned with local cost structures and operating conditions.',
  },
  {
    icon: TrendingUp,
    title: 'Full Lifecycle',
    description: 'Integrated services from early exploration through development, construction, and into operations.',
  },
  {
    icon: Shield,
    title: 'Certified Excellence',
    description: 'JORC and NI 43-101 competent persons providing robust governance and technical assurance.',
  },
]

export function CompanyOverview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-msv-light-2/20 to-transparent" />
      
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-msv-blue">About MSV</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-msv-dark-2 mb-6 leading-tight">
              Mining Services <br />
              <span className="text-msv-blue">Vietnam</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A Vietnam-based mining services company delivering practical, high-quality solutions 
              to uncover potential and drive progress for our clients across Southeast Asia.
            </p>
            
            <p className="text-slate-500 leading-relaxed">
              Leveraging our strong local presence, regional experience, and international technical 
              capability, MSV provides cost-effective, practical mining solutions that meet Western 
              technical and safety standards, while remaining aligned with local cost structures and 
              operating conditions.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-msv-blue/20 hover:shadow-xl hover:shadow-msv-blue/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-msv-dark-2 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
