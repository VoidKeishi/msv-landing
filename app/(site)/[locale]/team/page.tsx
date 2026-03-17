import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { TeamContent } from '@/components/sections/TeamContent'
import { getTeamMembers } from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.team' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/team`,
      languages: {
        en: 'https://www.dma-msv.com/team',
        vi: 'https://www.dma-msv.com/vi/team',
      },
    },
  }
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const members = await getTeamMembers(locale)
  return <TeamContent members={members} />
}
