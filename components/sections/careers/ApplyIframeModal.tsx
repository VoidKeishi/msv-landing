'use client'

import { useCallback, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { X } from 'lucide-react'

type Props = {
  jobCode: string
  jobTitle: string
  onClose: () => void
}

const FORM_BASE_URL = process.env.NEXT_PUBLIC_CAREERS_FORM_URL ?? ''

export function ApplyIframeModal({ jobCode, jobTitle, onClose }: Props) {
  const t = useTranslations('CareersPage.modal')

  const iframeSrc = FORM_BASE_URL
    ? `${FORM_BASE_URL}?jobCode=${encodeURIComponent(jobCode)}`
    : ''

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-iframe-modal-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-5 border-b border-msv-light-2/60 flex-shrink-0">
          <div>
            <h2
              id="apply-iframe-modal-title"
              className="text-lg md:text-xl font-bold text-msv-dark-2 leading-tight pr-8"
            >
              {t('title', { title: jobTitle })}
            </h2>
            <p className="text-xs text-msv-gray-blue mt-0.5">{jobCode}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-msv-light-2/20 text-msv-gray-blue hover:text-msv-dark-2 transition-colors cursor-pointer shadow-sm"
            aria-label={t('close')}
          >
            <X size={18} />
          </button>
        </div>

        {/* iframe body */}
        <div className="flex-1 min-h-0 overflow-hidden rounded-b-2xl">
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title={`Application form — ${jobTitle}`}
              className="w-full h-full min-h-[520px] border-0"
              allow="camera; microphone"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-64 text-msv-gray-blue text-sm">
              Application form is not configured yet.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
