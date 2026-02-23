import { setRequestLocale } from 'next-intl/server'
import { Hero } from "@/components/sections/Hero"
import { CompanyOverview } from "@/components/sections/CompanyOverview"
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { CallToAction } from "@/components/sections/CallToAction"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesSnapshot />
      <FeaturedProjects />
      <CallToAction />
    </>
  )
}
