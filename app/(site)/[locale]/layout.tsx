import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Navigation } from "@/components/sections/Navigation"
import { Footer } from "@/components/sections/Footer"
import { getCompanyInfo } from "@/sanity/lib/fetch"
import "../../globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// Pages are prerendered but regenerate at most once a minute, so content
// published in the Sanity Studio goes live without a redeploy.
export const revalidate = 60

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.home' })

  return {
    title: {
      default: t('title'),
      template: '%s | MSV',
    },
    description: t('description'),
    keywords: t('keywords').split(', '),
    alternates: {
      canonical: locale === 'vi' ? 'https://www.dma-msv.com/vi' : 'https://www.dma-msv.com',
      languages: {
        'en': 'https://www.dma-msv.com',
        'vi': 'https://www.dma-msv.com/vi',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: 'https://www.dma-msv.com',
    },
    icons: {
      icon: [
        { url: '/logos/favicon.svg', type: 'image/svg+xml' },
        { url: '/logos/favicon.png', type: 'image/png' },
      ],
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const [messages, companyInfo] = await Promise.all([
    getMessages(),
    getCompanyInfo(locale),
  ])

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer companyInfo={companyInfo} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
