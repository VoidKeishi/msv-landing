import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { CareersListContent } from '@/components/sections/CareersListContent'
import { getJobs } from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.careers' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/careers`,
      languages: {
        en: 'https://www.dma-msv.com/careers',
        vi: 'https://www.dma-msv.com/vi/careers',
      },
    },
  }
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const jobs = await getJobs(locale)
  return <CareersListContent jobs={jobs} locale={locale} />
}
