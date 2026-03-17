import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { AboutContent } from '@/components/sections/AboutContent'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.about' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/about`,
      languages: {
        en: 'https://www.dma-msv.com/about',
        vi: 'https://www.dma-msv.com/vi/about',
      },
    },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutContent />
}
