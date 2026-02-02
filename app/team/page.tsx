import type { Metadata } from 'next'
import { TeamContent } from '@/components/sections/TeamContent'

export const metadata: Metadata = {
  title: 'Leadership Team | Mining Professionals | MSV Vietnam',
  description: '31+ years combined expertise across mining, geology, engineering. JORC Competent Persons, regional operational experience.',
}

export default function TeamPage() {
  return <TeamContent />
}
