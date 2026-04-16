'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/Button'
import { AlertCircle, CheckCircle, Loader2, Mail, X } from 'lucide-react'

type Props = {
  jobSlug: string
  jobCode: string
  jobTitle: string
  recruitmentEmail: string
  ctaLabel: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MAX_BYTES = 8 * 1024 * 1024
const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])
const ALLOWED_EXT = new Set(['pdf', 'doc', 'docx'])

function getExt(name: string) {
  const dot = name.lastIndexOf('.')
  return dot === -1 ? '' : name.slice(dot + 1).toLowerCase()
}

export function ApplyButton({ jobSlug, jobCode, jobTitle, recruitmentEmail, ctaLabel }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        variant="primary"
        className="w-full"
        onClick={() => setOpen(true)}
      >
        {ctaLabel}
      </Button>

      {open && (
        <ApplyModal
          jobSlug={jobSlug}
          jobCode={jobCode}
          jobTitle={jobTitle}
          recruitmentEmail={recruitmentEmail}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

function ApplyModal({
  jobSlug,
  jobCode,
  jobTitle,
  recruitmentEmail,
  onClose,
}: {
  jobSlug: string
  jobCode: string
  jobTitle: string
  recruitmentEmail: string
  onClose: () => void
}) {
  const t = useTranslations('CareersPage.modal')

  const [status, setStatus] = useState<Status>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [applicantName, setApplicantName] = useState('')

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && status !== 'submitting') onClose()
    },
    [onClose, status]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [handleKeyDown])

  const validateFile = (file: File | null): string | null => {
    if (!file) return t('errors.required')
    if (file.size > MAX_BYTES) return t('errors.fileSize')
    const ext = getExt(file.name)
    if (!ALLOWED_EXT.has(ext)) return t('errors.fileType')
    if (file.type && !ALLOWED_MIME.has(file.type)) return t('errors.fileType')
    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const fullName = String(data.get('fullName') ?? '').trim()
    const cvFile = data.get('cv') as File | null
    const consent = data.get('consent') === 'on'

    const nextErrors: Record<string, string> = {}
    if (!consent) nextErrors.consent = t('errors.consent')
    const fileError = validateFile(cvFile)
    if (fileError) nextErrors.cv = fileError

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors)
      return
    }

    setFieldErrors({})
    setApplicantName(fullName)
    setStatus('submitting')

    data.append('jobSlug', jobSlug)
    data.append('jobCode', jobCode)
    data.append('jobTitle', jobTitle)
    data.append('recruitmentEmail', recruitmentEmail)

    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: data,
      })

      // 501 is the current stub state — show the graceful email-fallback UI.
      // 2xx would be the future wired state; we treat both the same for now.
      if (response.ok || response.status === 501) {
        setStatus('success')
        return
      }

      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${recruitmentEmail}?subject=${encodeURIComponent(
    t('mailtoSubject', { title: jobTitle, name: applicantName || '—' })
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={status === 'submitting' ? undefined : onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          disabled={status === 'submitting'}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-msv-light-2/20 text-msv-gray-blue hover:text-msv-dark-2 transition-colors cursor-pointer shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label={t('close')}
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-8">
          <h2 id="apply-modal-title" className="text-xl md:text-2xl font-bold text-msv-dark-2 pr-10 leading-tight">
            {t('title', { title: jobTitle })}
          </h2>
          <p className="text-sm text-msv-gray-blue mt-1.5">{t('subtitle')}</p>

          {status === 'success' ? (
            <div className="mt-6">
              <div className="flex items-start gap-3 p-5 bg-msv-mint/10 border border-msv-mint/30 rounded-xl">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-msv-green mt-0.5" />
                <div>
                  <p className="font-semibold text-msv-dark-2 mb-1">{t('successTitle')}</p>
                  <p className="text-sm text-msv-dark-2/80 leading-relaxed">
                    {t('successFallbackBody', { email: recruitmentEmail })}
                  </p>
                </div>
              </div>

              <a
                href={mailtoHref}
                className="mt-5 inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-md font-semibold bg-msv-blue text-white hover:bg-opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" />
                {t('mailtoCta')}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="apply-fullName" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                    {t('fields.fullName.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apply-fullName"
                    name="fullName"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    disabled={status === 'submitting'}
                    placeholder={t('fields.fullName.placeholder')}
                    className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="apply-email" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                    {t('fields.email.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    placeholder={t('fields.email.placeholder')}
                    className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="apply-phone" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                    {t('fields.phone.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apply-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+()\s-]{7,20}"
                    disabled={status === 'submitting'}
                    placeholder={t('fields.phone.placeholder')}
                    className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="apply-years" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                    {t('fields.yearsExperience.label')}
                  </label>
                  <input
                    id="apply-years"
                    name="yearsExperience"
                    type="number"
                    min={0}
                    max={60}
                    step={1}
                    disabled={status === 'submitting'}
                    placeholder={t('fields.yearsExperience.placeholder')}
                    className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="apply-currentPosition" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                  {t('fields.currentPosition.label')}
                </label>
                <input
                  id="apply-currentPosition"
                  name="currentPosition"
                  type="text"
                  maxLength={120}
                  disabled={status === 'submitting'}
                  placeholder={t('fields.currentPosition.placeholder')}
                  className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="apply-coverLetter" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                  {t('fields.coverLetter.label')}
                </label>
                <textarea
                  id="apply-coverLetter"
                  name="coverLetter"
                  maxLength={5000}
                  rows={5}
                  disabled={status === 'submitting'}
                  placeholder={t('fields.coverLetter.placeholder')}
                  className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all resize-none disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="apply-cv" className="block text-sm font-semibold text-msv-dark-2 mb-2">
                  {t('fields.cv.label')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="apply-cv"
                  name="cv"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  disabled={status === 'submitting'}
                  onChange={(e) => {
                    const file = e.currentTarget.files?.[0] ?? null
                    const err = validateFile(file)
                    setFieldErrors((prev) => {
                      const next = { ...prev }
                      if (err) next.cv = err
                      else delete next.cv
                      return next
                    })
                  }}
                  className="w-full text-sm text-msv-dark-2 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-msv-blue/10 file:text-msv-blue hover:file:bg-msv-blue/20 file:cursor-pointer cursor-pointer disabled:cursor-not-allowed"
                />
                <p className="text-xs text-msv-gray-blue mt-1.5">{t('cvHelp')}</p>
                {fieldErrors.cv && (
                  <p className="text-xs text-red-600 mt-1.5">{fieldErrors.cv}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm text-msv-dark-2 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    disabled={status === 'submitting'}
                    className="mt-0.5 w-4 h-4 flex-shrink-0 accent-msv-blue cursor-pointer"
                  />
                  <span>
                    {t('fields.consent.labelPre')}{' '}
                    <Link
                      href="/legal/recruitment-privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-msv-blue underline hover:text-msv-cyan"
                    >
                      {t('fields.consent.labelLink')}
                    </Link>{' '}
                    {t('fields.consent.labelPost')} <span className="text-red-500">*</span>
                  </span>
                </label>
                {fieldErrors.consent && (
                  <p className="text-xs text-red-600 mt-1.5">{fieldErrors.consent}</p>
                )}
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{t('errors.generic')}</p>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 text-sm underline mt-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {t('mailtoCta')}
                    </a>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('submitting')}
                  </span>
                ) : (
                  t('submit')
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
