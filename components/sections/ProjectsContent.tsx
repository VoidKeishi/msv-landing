'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedComponents'
import { projects } from '@/data/projects'
import { Calendar, Briefcase, ArrowRight, ChevronLeft, ChevronRight, Compass, Database, Building2, Settings } from 'lucide-react'

const countryData: Record<string, { flag: string }> = {
  'Cambodia': { flag: '🇰🇭' },
  'Laos': { flag: '🇱🇦' },
  'Vietnam': { flag: '🇻🇳' },
}

const serviceIcons: Record<string, typeof Compass> = {
  'Exploration & Geological Services': Compass,
  'Resource & Reserve Development': Database,
  'Project Delivery (Owner\'s Team & EPCM)': Building2,
  'Operational Readiness & Support': Settings,
}

export function ProjectsContent() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">Our Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Delivering Value<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold">
                Across the Region
              </span>
            </h1>
            <p className="text-lg md:text-xl text-msv-light-2 leading-relaxed">
              Active projects across multiple commodities and jurisdictions in Southeast Asia
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-msv-dark-2/80 max-w-2xl mx-auto">
              Swipe or use arrows to explore our active projects
            </p>
          </AnimatedSection>

          <div className="relative">
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-msv-light-2/30 flex items-center justify-center hover:bg-msv-light-2-subtle transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-0 sm:-ml-2 lg:-ml-6"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-msv-dark-2" />
            </button>
            
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-msv-light-2/30 flex items-center justify-center hover:bg-msv-light-2-subtle transition-colors disabled:opacity-50 disabled:cursor-not-allowed mr-0 sm:-mr-2 lg:-mr-6"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-msv-dark-2" />
            </button>

            <div className="overflow-hidden mx-4 sm:mx-8" ref={emblaRef}>
              <div className="flex">
                {projects.map((project) => {
                  const country = countryData[project.country] || { flag: '🌏' }
                  
                  return (
                    <div
                      key={project.id}
                      className="flex-[0_0_100%] min-w-0 px-4"
                    >
                      <div className="bg-white rounded-3xl border border-msv-light-2/30 overflow-hidden shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:min-h-[400px]">
                          <div className="relative lg:col-span-2 min-h-[280px] overflow-hidden">
                            <Image
                              src={project.images.length > 1 ? project.images[1] : project.images[0]}
                              alt={`${project.name} project`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20 lg:bg-gradient-to-r lg:from-slate-900/90 lg:via-slate-900/50 lg:to-slate-900/20" />
                            
                            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-white">
                              <div className="flex items-center gap-3 mb-5">
                                <span className="text-4xl">{country.flag}</span>
                                <div>
                                  <p className="text-white/70 text-sm font-medium">{project.country}</p>
                                  <p className="text-lg font-bold">{project.commodity}</p>
                                </div>
                              </div>
                              
                              <h3 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                                {project.name}
                              </h3>
                              <p className="text-white/80 font-medium mb-4">
                                {project.client}
                              </p>
                              
                              <div className="flex items-center gap-2 text-white/70 text-sm">
                                <Calendar size={16} />
                                <span>{project.status}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="lg:col-span-3 p-8 lg:p-12">
                            <p className="text-lg text-msv-dark-2/80 mb-8 leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-sm font-semibold text-msv-dark-2 mb-4 flex items-center gap-2">
                                  <div className="w-1 h-4 bg-msv-blue rounded-full" />
                                  Services Provided
                                </h4>
                                <div className="space-y-2">
                                  {project.services.map((service) => {
                                    const Icon = serviceIcons[service] || Compass
                                    return (
                                      <div key={service} className="flex items-center gap-3 text-sm text-msv-dark-2/80">
                                        <Icon size={16} className="text-msv-blue flex-shrink-0" />
                                        <span>{service}</span>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-semibold text-msv-dark-2 mb-4 flex items-center gap-2">
                                  <div className="w-1 h-4 bg-msv-cyan rounded-full" />
                                  Delivery Model
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.deliveryModel.map((model) => (
                                    <span 
                                      key={model}
                                      className="inline-flex items-center gap-1.5 bg-msv-blue/10 text-msv-blue px-3 py-1.5 rounded-full text-sm font-medium"
                                    >
                                      <Briefcase size={14} />
                                      {model}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-msv-blue w-8'
                      : 'bg-msv-light-2/40 hover:bg-msv-light-2/60'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-msv-light-2-subtle">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-6">
              Interested in Working With Us?
            </h2>
            <p className="text-lg text-msv-dark-2/80 mb-10 leading-relaxed">
              Contact our team to discuss how MSV can support your mining project 
              from exploration through to production.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-msv-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-msv-blue/90 transition-colors group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
