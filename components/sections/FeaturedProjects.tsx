'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Calendar, ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-msv-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-msv-blue">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-msv-dark-2 mb-6">
            Current Projects
          </h2>
          <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
            Delivering value across multiple commodities and jurisdictions in Southeast Asia
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Link href="/projects" className="group relative block h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-msv-blue/5 to-msv-cyan/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative bg-white rounded-2xl h-full border border-msv-light-2/30 group-hover:border-msv-blue/20 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={`${project.name} project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {project.commodity}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-msv-dark-2 mb-2 group-hover:text-msv-blue transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-msv-blue font-medium text-sm mb-3">
                      {project.client}
                    </p>

                    <p className="text-msv-gray-blue text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-msv-gray-blue mb-4">
                      <Calendar size={14} />
                      <span>{project.status}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 2).map((service) => (
                        <span 
                          key={service}
                          className="text-xs bg-msv-light-2-subtle text-msv-dark-2/80 px-2 py-1 rounded-md"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="text-xs text-msv-gray-blue">
                          +{project.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-msv-blue font-semibold hover:gap-4 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
