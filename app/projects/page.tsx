import type { Metadata } from 'next'
import { ProjectsContent } from '@/components/sections/ProjectsContent'

export const metadata: Metadata = {
  title: 'Mining Projects | Cambodia, Laos, Vietnam | MSV',
  description: 'Current mining projects: SAMBO Cambodia gold, Cavico Laos exploration, Vietnam nickel refinery.',
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
