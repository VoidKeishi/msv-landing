import type { Metadata } from 'next'
import { ContactContent } from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact MSV | Mining Services Vietnam | Hanoi Office',
  description: 'Contact Mining Services Vietnam for exploration, EPCM, or engineering services. Email: info@dma-msv.com | Hanoi, Vietnam',
}

export default function ContactPage() {
  return <ContactContent />
}
