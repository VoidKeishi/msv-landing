import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container } from '@/components/ui/Container'
import { Link } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.recruitmentPrivacy' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.dma-msv.com${locale === 'vi' ? '/vi' : ''}/legal/recruitment-privacy`,
      languages: {
        en: 'https://www.dma-msv.com/legal/recruitment-privacy',
        vi: 'https://www.dma-msv.com/vi/legal/recruitment-privacy',
      },
    },
  }
}

export default async function RecruitmentPrivacyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'RecruitmentPrivacyPage' })
  const retentionMonths = 12

  return (
    <section className="py-12 md:py-20 bg-white">
      <Container>
        <article className="max-w-3xl mx-auto">
          <header className="mb-10 md:mb-12 pb-6 border-b border-msv-light-2/60">
            <h1 className="text-3xl md:text-4xl font-bold text-msv-dark-2 mb-3 leading-tight">
              {t('heading')}
            </h1>
            <p className="text-sm text-msv-gray-blue">
              {t('lastUpdatedLabel')}: {t('lastUpdated')}
            </p>
          </header>

          <div className="space-y-8 md:space-y-10 text-msv-dark-2/85 leading-relaxed">
            <p className="text-base md:text-lg">{t('intro')}</p>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('purposeHeading')}
              </h2>
              <p>{t('purposeBody')}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('dataCollectedHeading')}
              </h2>
              <p>{t('dataCollectedBody')}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('retentionHeading')}
              </h2>
              <p>{t('retentionBody', { months: retentionMonths })}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('controllerHeading')}
              </h2>
              <div className="bg-msv-light-2-subtle rounded-xl p-5 md:p-6 border border-msv-light-2/60 space-y-2 text-sm md:text-base">
                <p className="font-semibold text-msv-dark-2">{t('controllerName')}</p>
                <p>
                  <span className="text-msv-gray-blue">{t('controllerEmailLabel')}: </span>
                  <a
                    href={`mailto:${t('controllerEmail').replace('[CLIENT TO CONFIRM] ', '')}`}
                    className="text-msv-blue hover:text-msv-cyan underline"
                  >
                    {t('controllerEmail')}
                  </a>
                </p>
                <p>
                  <span className="text-msv-gray-blue">{t('controllerAddressLabel')}: </span>
                  {t('controllerAddress')}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('rightsHeading')}
              </h2>
              <p>{t('rightsBody')}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-msv-dark-2 mb-3">
                {t('contactHeading')}
              </h2>
              <p>{t('contactBody')}</p>
            </section>
          </div>

          <footer className="mt-12 pt-6 border-t border-msv-light-2/60">
            <Link
              href="/careers"
              className="text-sm text-msv-blue hover:text-msv-cyan underline"
            >
              ← {locale === 'vi' ? 'Quay lại trang tuyển dụng' : 'Back to Careers'}
            </Link>
          </footer>
        </article>
      </Container>
    </section>
  )
}
