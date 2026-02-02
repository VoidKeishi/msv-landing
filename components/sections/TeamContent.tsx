'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { teamMembers } from '@/data/team'
import { Mail, Users, Award, Shield, Briefcase } from 'lucide-react'

const categories = [
  { id: 'board', title: 'Board of Directors', icon: Users, description: 'Leadership team driving MSV\'s strategic vision and operations' },
  { id: 'advisory', title: 'Advisory Board', icon: Award, description: 'Industry leaders providing strategic oversight and independent advice' },
  { id: 'technical', title: 'Senior Technical Advisors', icon: Shield, description: 'JORC and NI 43-101 specialists ensuring technical excellence' },
  { id: 'executive', title: 'Executive Management Team', icon: Briefcase, description: 'Experienced professionals managing day-to-day operations' },
] as const

export function TeamContent() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experienced Mining<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-amber-400 to-msv-gold">
                Professionals
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Delivering excellence across Southeast Asia with decades of combined experience
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-slate-600 leading-relaxed">
              MSV has established a strong local technical and management team, supported by 
              experienced and highly respected mining professionals. The company is guided by 
              an Advisory Board of accomplished industry leaders, providing strategic oversight 
              and independent advice.
            </p>
          </AnimatedSection>

          {categories.map((category, categoryIndex) => {
            const members = teamMembers.filter(m => m.category === category.id)
            if (members.length === 0) return null

            const gridCols = members.length === 1 
              ? 'max-w-xl mx-auto' 
              : 'grid grid-cols-1 lg:grid-cols-2 gap-6'

            return (
              <div key={category.id} className={categoryIndex > 0 ? 'mt-24' : ''}>
                <AnimatedSection className="mb-12">
                  <div className="flex items-center gap-4 justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-msv-dark-2">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-slate-500 text-center max-w-xl mx-auto">
                    {category.description}
                  </p>
                </AnimatedSection>

                <StaggerContainer className={gridCols}>
                  {members.map((member) => (
                    <StaggerItem key={member.name}>
                      <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full">
                        <div className="flex flex-col sm:flex-row h-full">
                          <div className="relative w-full sm:w-32 h-40 sm:h-auto flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="p-5 flex-1 flex flex-col min-w-0">
                            <h3 className="font-bold text-lg text-msv-dark-2 mb-0.5 leading-tight">
                              {member.name}
                            </h3>
                            <p className="text-msv-blue font-semibold text-xs mb-3">
                              {member.title}
                            </p>
                            <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-3 flex-1">
                              {member.bio}
                            </p>
                            {member.email && (
                              <a 
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-1.5 text-xs text-msv-blue hover:text-msv-cyan transition-colors group/email"
                              >
                                <Mail size={14} className="group-hover/email:scale-110 transition-transform flex-shrink-0" />
                                <span className="truncate">{member.email}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}
