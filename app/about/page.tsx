import type { Metadata } from 'next'
import { AboutContent } from '@/components/sections/AboutContent'

export const metadata: Metadata = {
  title: 'About MSV | Mining Services Vietnam - Regional Expertise',
  description: 'MSV operates across Vietnam, Cambodia, Laos, Malaysia & Thailand, delivering cost-effective mining solutions to international standards.',
}

export default function AboutPage() {
  return <AboutContent />
}
