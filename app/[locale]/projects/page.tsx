import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ProjectsContent } from '@/components/sections/ProjectsContent'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.projects' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/projects`,
      languages: {
        en: 'https://www.dma-msv.com/projects',
        vi: 'https://www.dma-msv.com/vi/projects',
      },
    },
  }
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ProjectsContent />
}
