import type { SanityImageSource } from '@sanity/image-url'

export interface SanityTeamMember {
  _id: string
  name: string
  slug: string
  photo: SanityImageSource | null
  category: 'board' | 'advisory' | 'technical' | 'executive'
  email?: string
  jobTitle: string
  shortBio: string
  fullBio: string
}

export interface SanityProject {
  _id: string
  slug: string
  title: string
  client: string
  country: string
  commodity: string
  status: string
  description: string
  coverImage: SanityImageSource | null
  gallery: SanityImageSource[] | null
  services: string[]
  deliveryModel: string[]
  isFeatured?: boolean
}

export interface SanityCompanyInfo {
  email: string
  phone: string
  googleMapsUrl: string
  companyProfileUrl: string
  companyProfileLabel: string
  capabilityStatementUrl: string
  capabilityStatementLabel: string
  companyName: string
  addressLine1: string
  addressLine2: string
  addressLine3: string
  businessHours: string
  keyContacts: {
    contactTitle: string
    name: string
    email: string
  }[]
}

export interface SanityHeroSection {
  badge: string
  slogan: string
  headingLine1: string
  headingHighlight: string
  headingLine2: string
  description: string
  ctaServicesLabel: string
  ctaContactLabel: string
  trackRecordLabel: string
  stats: {
    value: string
    label: string
    icon: string
  }[]
}

export interface SanityJobListItem {
  _id: string
  jobCode: string
  slug: string
  title: string
  location: string
  description: string
  openings: number | null
  recruitmentEmail: string
  postedAt: string
  closingDate: string | null
}

export interface SanityJob {
  _id: string
  jobCode: string
  slug: string
  title: string
  location: string
  description: string
  requirements: string
  benefits: string | null
  openings: number | null
  recruitmentEmail: string
  closingNote: string | null
  postedAt: string
  closingDate: string | null
}

export interface SanityCompanyOverview {
  badge: string
  headingLine1: string
  headingHighlight: string
  paragraph1: string
  paragraph2: string
  features: {
    title: string
    description: string
    icon: string
  }[]
}
