import { setRequestLocale } from 'next-intl/server'
import { Hero } from "@/components/sections/Hero"
import { CompanyOverview } from "@/components/sections/CompanyOverview"
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { CallToAction } from "@/components/sections/CallToAction"
import { getFeaturedProjects, getHeroSection, getCompanyOverview, getCompanyInfo } from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const [featuredProjects, heroData, overviewData, companyInfo] = await Promise.all([
    getFeaturedProjects(locale),
    getHeroSection(locale),
    getCompanyOverview(locale),
    getCompanyInfo(locale),
  ])

  return (
    <>
      <Hero data={heroData} />
      <CompanyOverview data={overviewData} companyInfo={companyInfo} />
      <ServicesSnapshot />
      <FeaturedProjects projects={featuredProjects} />
      <CallToAction companyInfo={companyInfo} />
    </>
  )
}
