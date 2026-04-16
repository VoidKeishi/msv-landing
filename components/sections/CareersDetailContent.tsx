import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedComponents'
import { ArrowLeft, Calendar, CalendarX, Mail, MapPin } from 'lucide-react'
import { ApplyButton } from '@/components/sections/careers/ApplyButton'
import type { SanityJob } from '@/sanity/lib/types'

function formatDate(iso: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function BodySection({ title, body }: { title: string; body: string | null }) {
  if (!body || !body.trim()) return null
  return (
    <section className="mb-10 md:mb-12">
      <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-4">{title}</h2>
      <div className="text-msv-dark-2/85 leading-relaxed whitespace-pre-line text-base md:text-[17px]">
        {body}
      </div>
    </section>
  )
}

export function CareersDetailContent({
  job,
  locale,
}: {
  job: SanityJob
  locale: string
}) {
  const t = useTranslations('CareersPage.detail')

  return (
    <>
      <section className="pt-10 md:pt-14 pb-8 md:pb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-msv-blue/20 via-transparent to-transparent" />
        <Container className="relative">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 md:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToList')}
          </Link>

          <AnimatedSection className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center text-[11px] tracking-wider uppercase font-semibold text-white bg-msv-blue rounded-full px-2.5 py-1">
                {t('jobCodeLabel')}: {job.jobCode}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-msv-light-2">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {t('postedLabel')}: {formatDate(job.postedAt, locale)}
              </span>
              {job.closingDate && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarX className="w-4 h-4" />
                  {t('closingLabel')}: {formatDate(job.closingDate, locale)}
                </span>
              )}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <BodySection title={t('sectionDescription')} body={job.description} />
              <BodySection title={t('sectionRequirements')} body={job.requirements} />
              <BodySection title={t('sectionBenefits')} body={job.benefits} />

              {job.closingNote && job.closingNote.trim() && (
                <p className="text-sm text-msv-gray-blue italic mt-8 pt-6 border-t border-msv-light-2/60">
                  {job.closingNote}
                </p>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 bg-msv-light-2-subtle rounded-2xl p-6 md:p-7 border border-msv-light-2/60">
                <h2 className="text-lg md:text-xl font-bold text-msv-dark-2 mb-2">
                  {t('sectionHowToApply')}
                </h2>
                <p className="text-sm text-msv-dark-2/75 leading-relaxed mb-5">
                  {t('howToApplyLead')}
                </p>

                <ApplyButton
                  jobSlug={job.slug}
                  jobCode={job.jobCode}
                  jobTitle={job.title}
                  recruitmentEmail={job.recruitmentEmail}
                  ctaLabel={t('applyCta')}
                />

                <div className="mt-5 pt-5 border-t border-msv-light-2/60 text-sm">
                  <div className="text-msv-gray-blue mb-1">{t('emailFallbackLabel')}</div>
                  <a
                    href={`mailto:${job.recruitmentEmail}`}
                    className="inline-flex items-center gap-1.5 text-msv-blue hover:text-msv-cyan font-semibold break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {job.recruitmentEmail}
                  </a>
                </div>

                <div className="mt-5 pt-5 border-t border-msv-light-2/60 text-xs">
                  <Link
                    href="/legal/recruitment-privacy"
                    className="text-msv-gray-blue hover:text-msv-blue underline"
                  >
                    {t('privacyNoticeLink')}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
