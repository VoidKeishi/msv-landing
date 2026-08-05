'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ApplyIframeModal } from '@/components/sections/careers/ApplyIframeModal'

type Props = {
  jobCode: string
  jobTitle: string
  ctaLabel: string
  className?: string
}

export function ApplyButton({ jobCode, jobTitle, ctaLabel, className }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        variant="primary"
        className={className ?? 'w-full'}
        onClick={() => setOpen(true)}
      >
        {ctaLabel}
      </Button>

      {open && (
        <ApplyIframeModal
          jobCode={jobCode}
          jobTitle={jobTitle}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
