import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui/Container'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedComponents'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react'
import type { SanityJobListItem } from '@/sanity/lib/types'

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function excerpt(text: string, max = 180) {
  if (!text) return ''
  const flat = text.replace(/\s+/g, ' ').trim()
  return flat.length <= max ? flat : `${flat.slice(0, max - 1).trimEnd()}…`
}

export function CareersListContent({
  jobs,
  locale,
}: {
  jobs: SanityJobListItem[]
  locale: string
}) {
  const tHero = useTranslations('CareersPage.Hero')
  const t = useTranslations('CareersPage.list')

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 border border-white/10">
              <span className="text-sm font-medium text-white/90">{tHero('badge')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {tHero('headingLine1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msv-gold via-msv-gold-light to-msv-gold">
                {tHero('headingHighlight')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-msv-light-2 leading-relaxed">
              {tHero('subheading')}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection className="max-w-3xl mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-msv-dark-2 mb-3">
              {t('sectionTitle')}
            </h2>
            <p className="text-base md:text-lg text-msv-dark-2/80 leading-relaxed">
              {t('sectionLead')}
            </p>
          </AnimatedSection>

          {jobs.length === 0 ? (
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center bg-msv-light-2-subtle rounded-2xl p-8 md:p-12 border border-msv-light-2/60">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-msv-blue/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-msv-blue" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-2">
                  {t('emptyTitle')}
                </h3>
                <p className="text-msv-gray-blue leading-relaxed mb-6">
                  {t('emptyBody')}
                </p>
                <Link href="/contact">
                  <Button variant="primary">{t('emptyCta')}</Button>
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {jobs.map((job) => (
                <StaggerItem key={job._id}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-msv-light-2/60 p-6 md:p-7 hover:shadow-xl hover:shadow-msv-light-2/40 hover:border-msv-blue/30 transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="inline-flex items-center text-[11px] tracking-wider uppercase font-semibold text-msv-blue bg-msv-blue/10 rounded-full px-2.5 py-1">
                          {job.jobCode}
                        </span>
                        {job.closingDate && (
                          <span className="inline-flex items-center gap-1 text-xs text-msv-gray-blue">
                            <Calendar className="w-3.5 h-3.5" />
                            {t('cardClosingLabel')}: {formatDate(job.closingDate, locale)}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-lg md:text-xl text-msv-dark-2 mb-2 leading-tight group-hover:text-msv-blue transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-sm text-msv-gray-blue mb-4">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{job.location}</span>
                      </div>

                      <p className="text-sm text-msv-dark-2/75 leading-relaxed flex-1 mb-5">
                        {excerpt(job.description)}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-msv-gray-blue">
                          {t('cardPostedLabel')}: {formatDate(job.postedAt, locale)}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-msv-blue group-hover:gap-2 transition-all">
                          {t('cardCta')}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </section>
    </>
  )
}
