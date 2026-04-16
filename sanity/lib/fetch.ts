import { client } from './client'
import {
  teamMembersQuery,
  projectsQuery,
  featuredProjectsQuery,
  companyInfoQuery,
  heroSectionQuery,
  companyOverviewQuery,
  jobsQuery,
  jobBySlugQuery,
} from './queries'
import type {
  SanityTeamMember,
  SanityProject,
  SanityCompanyInfo,
  SanityHeroSection,
  SanityCompanyOverview,
  SanityJob,
  SanityJobListItem,
} from './types'

export async function getTeamMembers(locale: string): Promise<SanityTeamMember[]> {
  return client.fetch(teamMembersQuery, { locale })
}

export async function getProjects(locale: string): Promise<SanityProject[]> {
  return client.fetch(projectsQuery, { locale })
}

export async function getFeaturedProjects(locale: string): Promise<SanityProject[]> {
  return client.fetch(featuredProjectsQuery, { locale })
}

export async function getCompanyInfo(locale: string): Promise<SanityCompanyInfo | null> {
  return client.fetch(companyInfoQuery, { locale })
}

export async function getHeroSection(locale: string): Promise<SanityHeroSection | null> {
  return client.fetch(heroSectionQuery, { locale })
}

export async function getCompanyOverview(locale: string): Promise<SanityCompanyOverview | null> {
  return client.fetch(companyOverviewQuery, { locale })
}

export async function getJobs(locale: string): Promise<SanityJobListItem[]> {
  return client.fetch(jobsQuery, { locale })
}

export async function getJobBySlug(slug: string, locale: string): Promise<SanityJob | null> {
  return client.fetch(jobBySlugQuery, { slug, locale })
}
