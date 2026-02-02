import type { Metadata } from 'next'
import { ServicesContent } from '@/components/sections/ServicesContent'

export const metadata: Metadata = {
  title: 'Mining Services | Exploration, EPCM, Engineering | MSV Vietnam',
  description: 'Comprehensive mining services: exploration & drilling (150,000m+), resource estimation (JORC/NI43-101), EPCM project delivery, operational support.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
