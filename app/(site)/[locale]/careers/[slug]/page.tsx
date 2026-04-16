import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { CareersDetailContent } from '@/components/sections/CareersDetailContent'
import { getJobBySlug } from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const job = await getJobBySlug(slug, locale)

  if (!job) {
    return {}
  }

  const t = await getTranslations({ locale, namespace: 'Metadata.careerDetail' })

  return {
    title: t('titleTemplate', { title: job.title }),
    description: t('description', { title: job.title }),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/careers/${slug}`,
      languages: {
        en: `https://www.dma-msv.com/careers/${slug}`,
        vi: `https://www.dma-msv.com/vi/careers/${slug}`,
      },
    },
  }
}

export default async function CareerDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const job = await getJobBySlug(slug, locale)

  if (!job) {
    notFound()
  }

  return <CareersDetailContent job={job} locale={locale} />
}
