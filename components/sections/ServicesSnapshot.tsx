'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Compass, Database, Building2, Settings, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Exploration & Geological Services',
    description: 'End-to-end exploration from grassroots through to drilling and reporting with over 150,000m delivered.',
  },
  {
    icon: Database,
    title: 'Resource & Reserve Development',
    description: 'JORC and NI 43-101 compliant resource estimation, reserve studies, and geological modelling.',
  },
  {
    icon: Building2,
    title: 'Project Delivery (EPCM)',
    description: 'Owner\'s team or EPCM services managing engineering, procurement, construction, and commissioning.',
  },
  {
    icon: Settings,
    title: 'Operational Readiness',
    description: 'Establishing robust, compliant operating organisations with HR, procurement, and governance systems.',
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-24 bg-msv-light-2-subtle">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-msv-blue">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-msv-dark-2 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
            Integrated mining services across the full project lifecycle, 
            from early-stage exploration through to steady-state operations.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-msv-light-2/50 transition-all duration-500 h-full border border-msv-light-2/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-msv-light-2-subtle to-transparent rounded-bl-full opacity-50" />
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
