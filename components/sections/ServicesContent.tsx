'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { services } from '@/data/services'
import { CheckCircle2, Compass, Database, Building2, Settings, ArrowRight, Users, Briefcase, Clock } from 'lucide-react'

const serviceIcons: Record<string, typeof Compass> = {
  'exploration': Compass,
  'resource': Database,
  'project': Building2,
  'operations': Settings,
}

const deliveryModels = [
  {
    icon: Users,
    title: 'Advisory',
    description: 'Technical and commercial advice, reviews, studies, and owner\'s team support',
  },
  {
    icon: Building2,
    title: 'EPCM',
    description: 'Integrated delivery of engineering, procurement, construction management, and commissioning',
  },
  {
    icon: Briefcase,
    title: 'Embedded Teams',
    description: 'MSV personnel embedded within client teams for targeted capability and continuity',
  },
]

const phases = [
  { title: 'Exploration', description: 'Program design, execution, and reporting' },
  { title: 'Studies & Development', description: 'Resource, reserve, mine planning, project definition' },
  { title: 'Execution', description: 'EPCM delivery and owner\'s team representation' },
  { title: 'Operations', description: 'Operational readiness, ramp-up, and optimisation' },
]

export function ServicesContent() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Integrated Mining<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-amber-400 to-msv-gold">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Full project lifecycle support from exploration through to steady-state operations
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {services.map((service, index) => {
        const IconComponent = serviceIcons[service.id] || Compass
        const isEven = index % 2 === 0
        
        return (
          <section 
            key={service.id} 
            className={`py-24 ${isEven ? 'bg-white' : 'bg-slate-50'}`}
          >
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <AnimatedSection className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </AnimatedSection>
                
                <StaggerContainer className={`grid gap-4 ${!isEven ? 'lg:col-start-1' : ''}`}>
                  {service.features.map((feature, featureIndex) => (
                    <StaggerItem key={featureIndex}>
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-msv-blue/20 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-8 h-8 rounded-lg bg-msv-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-msv-green/20 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-msv-green" />
                        </div>
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Container>
          </section>
        )
      })}

      <section className="py-24 bg-gradient-to-br from-msv-light-2/30 to-white">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-msv-blue">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
              Service Delivery Model
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible engagement options aligned to project stage, risk profile, and client objectives
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {deliveryModels.map((model) => (
              <StaggerItem key={model.title}>
                <div className="group bg-white rounded-2xl p-8 h-full border border-slate-100 hover:border-msv-blue/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <model.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-msv-dark-2 mb-3">
                    {model.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-msv-gold/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-msv-gold" />
                </div>
                <h3 className="text-2xl font-bold text-msv-dark-2">Phase-Based Support</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {phases.map((phase, index) => (
                  <div key={phase.title} className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-msv-blue to-msv-cyan text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-msv-dark-2">{phase.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-11">{phase.description}</p>
                    
                    {index < phases.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-2 -right-2 w-4 h-4 text-msv-blue/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 bg-gradient-to-br from-msv-blue to-msv-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        <Container className="relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Practical, Cost-Effective Solutions
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Across all engagement models, MSV delivers practical, cost-effective solutions 
              to international standards, aligned with local operating conditions and project objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="font-semibold">Fee-for-Service</span>
                <span className="text-white/60 ml-2">Primary model</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="font-semibold">Equity Participation</span>
                <span className="text-white/60 ml-2">Selective projects</span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
