'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Calendar, ArrowRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import type { SanityProject } from '@/sanity/lib/types'

export function FeaturedProjects({ projects }: { projects: SanityProject[] }) {
  const t = useTranslations('HomePage.FeaturedProjects')
  const ts = useTranslations('Data.services')

  return (
    <section className="py-24 bg-white">
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

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <StaggerItem key={project._id}>
              <Link href="/projects" className="group relative block h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-msv-blue/5 to-msv-cyan/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />

                <div className="relative bg-white rounded-2xl h-full border border-msv-light-2/30 group-hover:border-msv-blue/20 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    {project.coverImage && (
                      <Image
                        src={urlFor(project.coverImage).width(640).auto('format').url()}
                        alt={`${project.title} project`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {project.commodity}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-msv-dark-2 mb-2 group-hover:text-msv-blue transition-colors">
                      {project.title}
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
                      {project.services.slice(0, 2).map((serviceId) => (
                        <span
                          key={serviceId}
                          className="text-xs bg-msv-light-2-subtle text-msv-dark-2/80 px-2 py-1 rounded-md"
                        >
                          {ts(`${serviceId}.title`)}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="text-xs text-msv-gray-blue">
                          {t('more', { count: project.services.length - 2 })}
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
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
