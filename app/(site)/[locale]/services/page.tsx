import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ServicesContent } from '@/components/sections/ServicesContent'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.services' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/services`,
      languages: {
        en: 'https://www.dma-msv.com/services',
        vi: 'https://www.dma-msv.com/vi/services',
      },
    },
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ServicesContent />
}
