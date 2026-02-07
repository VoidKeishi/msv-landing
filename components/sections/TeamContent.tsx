'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { teamMembers, type TeamMember } from '@/data/team'
import { Mail, Users, Award, Shield, Briefcase, X } from 'lucide-react'

const categories = [
  { id: 'board', title: 'Board of Directors', icon: Users, description: 'Leadership team driving MSV\'s strategic vision and operations' },
  { id: 'advisory', title: 'Advisory Board', icon: Award, description: 'Industry leaders providing strategic oversight and independent advice' },
  { id: 'technical', title: 'Senior Technical Advisors', icon: Shield, description: 'JORC and NI 43-101 specialists ensuring technical excellence' },
  { id: 'executive', title: 'Executive Management Team', icon: Briefcase, description: 'Experienced professionals managing day-to-day operations' },
] as const

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer shadow-sm"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-56 md:w-64 aspect-[3/4] sm:aspect-auto sm:min-h-[320px] flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col min-w-0">
            <h3 className="font-bold text-xl md:text-2xl text-msv-dark-2 mb-1 leading-tight">
              {member.name}
            </h3>
            <p className="text-msv-blue font-semibold text-sm md:text-base mb-4">
              {member.title}
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
              {member.bio}
            </p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-msv-blue hover:text-msv-cyan transition-colors mt-auto"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>{member.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TeamContent() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Experienced Mining<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-amber-400 to-msv-gold">
                Professionals
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Delivering excellence across Southeast Asia with decades of combined experience
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              MSV has established a strong local technical and management team, supported by 
              experienced and highly respected mining professionals. The company is guided by 
              an Advisory Board of accomplished industry leaders, providing strategic oversight 
              and independent advice.
            </p>
          </AnimatedSection>

          {categories.map((category, categoryIndex) => {
            const members = teamMembers.filter(m => m.category === category.id)
            if (members.length === 0) return null

            return (
              <div key={category.id} className={categoryIndex > 0 ? 'mt-16 md:mt-24' : ''}>
                <AnimatedSection className="mb-8 md:mb-12">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-msv-blue to-msv-cyan flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-msv-dark-2 text-center sm:text-left">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-slate-500 text-center max-w-xl mx-auto text-sm md:text-base px-4">
                    {category.description}
                  </p>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {members.map((member) => (
                    <StaggerItem key={member.name}>
                      <button
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full w-full text-left cursor-pointer"
                      >
                        <div className="flex flex-col sm:flex-row h-full">
                          <div className="relative w-full sm:w-36 md:w-40 aspect-[3/4] sm:aspect-auto sm:h-full flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col min-w-0">
                            <h3 className="font-bold text-lg md:text-xl text-msv-dark-2 mb-1 leading-tight">
                              {member.name}
                            </h3>
                            <p className="text-msv-blue font-semibold text-sm mb-3">
                              {member.title}
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1">
                              {member.shortBio}
                            </p>
                          </div>
                        </div>
                      </button>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )
          })}
        </Container>
      </section>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}
