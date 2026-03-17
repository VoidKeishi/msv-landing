import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ContactContent } from '@/components/sections/ContactContent'
import { getCompanyInfo } from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.contact' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/contact`,
      languages: {
        en: 'https://www.dma-msv.com/contact',
        vi: 'https://www.dma-msv.com/vi/contact',
      },
    },
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const companyInfo = await getCompanyInfo(locale)
  return <ContactContent companyInfo={companyInfo} />
}
