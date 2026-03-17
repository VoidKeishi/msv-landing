/**
 * Migration script: Seed Sanity CMS with existing data from data/*.ts and messages/*.json
 *
 * Usage:
 *   npx tsx scripts/migrate-to-sanity.ts
 *
 * Prerequisites:
 *   - .env.local must have NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET
 *   - A Sanity API token with write access (set SANITY_API_TOKEN env var)
 *   - Team photos and project images in public/ (will be uploaded to Sanity)
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, basename, extname } from 'path'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('Missing env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN')
  console.error('\nTo create an API token:')
  console.error('  1. Go to https://www.sanity.io/manage')
  console.error('  2. Select your project → API → Tokens')
  console.error('  3. Create a token with "Editor" permissions')
  console.error('\nThen run:')
  console.error('  SANITY_API_TOKEN=your_token npx tsx scripts/migrate-to-sanity.ts')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Load data files
const enMessages = JSON.parse(readFileSync(resolve('messages/en.json'), 'utf-8'))
const viMessages = JSON.parse(readFileSync(resolve('messages/vi.json'), 'utf-8'))

const enTeam = enMessages.Data.team
const viTeam = viMessages.Data.team
const enProjects = enMessages.Data.projects
const viProjects = viMessages.Data.projects

// Team data from data/team.ts (hardcoded here to avoid TS compilation issues)
const teamMembers = [
  { id: 'lon-taranaki', name: 'Lon Taranaki', category: 'board', email: 'Lon@dma-msv.com', image: '/team/LonTaranaki.png' },
  { id: 'hai-nguyen-ngoc', name: 'Hai Nguyen Ngoc', category: 'board', email: 'Hai.nguyen@dma-msv.com', image: '/team/HaiNguyenNgoc.png' },
  { id: 'thanh-nguyen-van', name: 'Thanh Nguyen Van', category: 'board', email: 'Thanh.nguyen@dma-msv.com', image: '/team/ThanhNguyenVan.jpg' },
  { id: 'dr-chris-swindells', name: 'Dr. Chris Swindells', category: 'advisory', image: '/team/DrChrisSwindells.png' },
  { id: 'jeremy-ayre', name: 'Jeremy Ayre', category: 'advisory', image: '/team/JeremyAyre.png' },
  { id: 'will-coverdale', name: 'Will Coverdale', category: 'technical', image: '/team/WillCoverdale.png' },
  { id: 'chris-ramsay', name: 'Chris Ramsay', category: 'technical', image: '/team/ChrisRamsay.png' },
  { id: 'hoan-le-thi-ngoc', name: 'Hoan Le Thi Ngoc', category: 'executive', email: 'Hoan.le@dma-msv.com', image: '/team/HoanLeTiNgoc.jpg' },
  { id: 'hung-nguyen-phuc', name: 'Hung Nguyen Phuc', category: 'executive', email: 'Hung.nguyen@dma-msv.com', image: '/team/HungNguyenPhuc.jpg' },
  { id: 'tien-dinh-van', name: 'Tien Dinh Van', category: 'executive', email: 'Tien.dinh@dma-msv.com', image: '/team/TienDinhVan.jpg' },
  { id: 'phd-minh-dinh-huu', name: 'PhD. Minh Dinh Huu', category: 'technical', image: '/team/PhdDinhMinhHuu.png' },
  { id: 'hung-tran-huu', name: 'Hung Tran Huu', category: 'technical', image: '/team/HungTranHuu.png' },
]

// Map old service names to new IDs
const serviceNameToId: Record<string, string> = {
  'Exploration & Geological Services': 'exploration',
  'Resource & Reserve Development': 'resource',
  "Project Delivery (Owner's Team & EPCM)": 'project-delivery',
  'Operational Readiness & Support': 'operational',
}

const deliveryModelNameToId: Record<string, string> = {
  'Advisory': 'advisory',
  'EPCM': 'epcm',
  'Embedded Teams': 'embedded',
}

const projects = [
  {
    id: 'sambo-cambodia',
    country: 'Cambodia',
    commodity: 'Gold',
    status: 'Aug 2025 – ongoing',
    images: ['/projects/sambo-survey.png', '/projects/sambo-trench.png'],
  },
  {
    id: 'cavico-laos',
    country: 'Laos',
    commodity: 'Gold',
    status: 'Aug 2024 – Aug 2025',
    images: ['/projects/cavico-stream-sampling.png', '/projects/cavico-pre-start.png'],
  },
  {
    id: 'xuan-loc-tho',
    country: 'Vietnam',
    commodity: 'Nickel',
    status: 'Aug 2025 – ongoing',
    images: ['/projects/xlt-working-group.png'],
  },
]

async function uploadImage(localPath: string): Promise<string> {
  const fullPath = resolve('public', localPath.replace(/^\//, ''))
  const buffer = readFileSync(fullPath)
  const ext = extname(fullPath).toLowerCase()
  const contentType = ext === '.png' ? 'image/png' : 'image/jpeg'
  const filename = basename(fullPath)

  console.log(`  Uploading ${filename}...`)
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType,
  })
  return asset._id
}

async function migrateTeam() {
  console.log('\n=== Migrating Team Members ===\n')

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i]
    const enData = enTeam[member.id]
    const viData = viTeam[member.id]

    if (!enData) {
      console.log(`  Skipping ${member.name} - no translation data found`)
      continue
    }

    console.log(`[${i + 1}/${teamMembers.length}] ${member.name}`)

    // Upload photo
    const imageAssetId = await uploadImage(member.image)

    const doc = {
      _type: 'teamMember',
      _id: `teamMember-${member.id}`,
      name: member.name,
      slug: { _type: 'slug', current: member.id },
      photo: {
        _type: 'image',
        asset: { _type: 'reference', _ref: imageAssetId },
      },
      category: member.category,
      email: member.email || undefined,
      displayOrder: i + 1,
      isActive: true,
      jobTitle: { _type: 'localeString', en: enData.title, vi: viData.title },
      shortBio: { _type: 'localeText', en: enData.shortBio, vi: viData.shortBio },
      fullBio: { _type: 'localeText', en: enData.bio, vi: viData.bio },
    }

    await client.createOrReplace(doc)
    console.log(`  Created: ${member.name}`)
  }
}

async function migrateProjects() {
  console.log('\n=== Migrating Projects ===\n')

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    const enData = enProjects[project.id]
    const viData = viProjects[project.id]

    if (!enData) {
      console.log(`  Skipping ${project.id} - no translation data found`)
      continue
    }

    console.log(`[${i + 1}/${projects.length}] ${enData.name}`)

    // Upload cover image (first image)
    const coverImageAssetId = await uploadImage(project.images[0])

    // Upload gallery images (all images)
    const galleryAssets = []
    for (const img of project.images) {
      const assetId = await uploadImage(img)
      galleryAssets.push({
        _type: 'image',
        _key: img.replace(/[^a-zA-Z0-9]/g, ''),
        asset: { _type: 'reference', _ref: assetId },
      })
    }

    // Map service names to IDs
    const serviceIds = (enData.services as string[]).map(
      (name: string) => serviceNameToId[name] || name
    )

    // Map delivery model names to IDs
    const deliveryModelIds = (enData.deliveryModel as string[]).map(
      (name: string) => deliveryModelNameToId[name] || name
    )

    const doc = {
      _type: 'project',
      _id: `project-${project.id}`,
      title: { _type: 'localeString', en: enData.name, vi: viData.name },
      slug: { _type: 'slug', current: project.id },
      client: { _type: 'localeString', en: enData.client, vi: viData.client },
      country: project.country,
      commodity: project.commodity,
      status: project.status,
      description: { _type: 'localeText', en: enData.description, vi: viData.description },
      coverImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: coverImageAssetId },
      },
      gallery: galleryAssets,
      services: serviceIds,
      deliveryModel: deliveryModelIds,
      displayOrder: i + 1,
      isFeatured: true,
    }

    await client.createOrReplace(doc)
    console.log(`  Created: ${enData.name}`)
  }
}

async function migrateSingletons() {
  console.log('\n=== Migrating Singletons ===\n')

  const enHero = enMessages.HomePage.Hero
  const viHero = viMessages.HomePage.Hero
  const enOverview = enMessages.HomePage.CompanyOverview
  const viOverview = viMessages.HomePage.CompanyOverview
  const enContact = enMessages.ContactPage.Info
  const viContact = viMessages.ContactPage.Info
  const enContacts = enMessages.Data.contacts
  const viContacts = viMessages.Data.contacts

  // Hero Section
  console.log('Creating Hero Section...')
  await client.createOrReplace({
    _type: 'heroSection',
    _id: 'heroSection',
    badge: { _type: 'localeString', en: enHero.badge, vi: viHero.badge },
    slogan: { _type: 'localeString', en: enHero.slogan, vi: viHero.slogan },
    headingLine1: { _type: 'localeString', en: enHero.headingLine1, vi: viHero.headingLine1 },
    headingHighlight: { _type: 'localeString', en: enHero.headingHighlight, vi: viHero.headingHighlight },
    headingLine2: { _type: 'localeString', en: enHero.headingLine2, vi: viHero.headingLine2 },
    description: { _type: 'localeText', en: enHero.description, vi: viHero.description },
    ctaServicesLabel: { _type: 'localeString', en: enHero.ctaServices, vi: viHero.ctaServices },
    ctaContactLabel: { _type: 'localeString', en: enHero.ctaContact, vi: viHero.ctaContact },
    trackRecordLabel: { _type: 'localeString', en: enHero.trackRecord, vi: viHero.trackRecord },
    stats: [
      {
        _type: 'object',
        _key: 'metres',
        value: { _type: 'localeString', en: enHero.statMetresValue, vi: viHero.statMetresValue },
        label: { _type: 'localeString', en: enHero.statMetresLabel, vi: viHero.statMetresLabel },
        icon: 'pickaxe',
      },
      {
        _type: 'object',
        _key: 'certified',
        value: { _type: 'localeString', en: enHero.statCertifiedValue, vi: viHero.statCertifiedValue },
        label: { _type: 'localeString', en: enHero.statCertifiedLabel, vi: viHero.statCertifiedLabel },
        icon: 'award',
      },
      {
        _type: 'object',
        _key: 'operations',
        value: { _type: 'localeString', en: enHero.statOperationsValue, vi: viHero.statOperationsValue },
        label: { _type: 'localeString', en: enHero.statOperationsLabel, vi: viHero.statOperationsLabel },
        icon: 'mapPin',
      },
    ],
  })
  console.log('  Created: Hero Section')

  // Company Overview
  console.log('Creating Company Overview...')
  await client.createOrReplace({
    _type: 'companyOverview',
    _id: 'companyOverview',
    badge: { _type: 'localeString', en: enOverview.badge, vi: viOverview.badge },
    headingLine1: { _type: 'localeString', en: enOverview.headingLine1, vi: viOverview.headingLine1 },
    headingHighlight: { _type: 'localeString', en: enOverview.headingHighlight, vi: viOverview.headingHighlight },
    paragraph1: { _type: 'localeText', en: enOverview.paragraph1, vi: viOverview.paragraph1 },
    paragraph2: { _type: 'localeText', en: enOverview.paragraph2, vi: viOverview.paragraph2 },
    features: [
      {
        _type: 'object',
        _key: 'regional',
        title: { _type: 'localeString', en: enOverview.featureRegionalTitle, vi: viOverview.featureRegionalTitle },
        description: { _type: 'localeText', en: enOverview.featureRegionalDesc, vi: viOverview.featureRegionalDesc },
        icon: 'globe',
      },
      {
        _type: 'object',
        _key: 'standards',
        title: { _type: 'localeString', en: enOverview.featureStandardsTitle, vi: viOverview.featureStandardsTitle },
        description: { _type: 'localeText', en: enOverview.featureStandardsDesc, vi: viOverview.featureStandardsDesc },
        icon: 'award',
      },
      {
        _type: 'object',
        _key: 'lifecycle',
        title: { _type: 'localeString', en: enOverview.featureLifecycleTitle, vi: viOverview.featureLifecycleTitle },
        description: { _type: 'localeText', en: enOverview.featureLifecycleDesc, vi: viOverview.featureLifecycleDesc },
        icon: 'trendingUp',
      },
      {
        _type: 'object',
        _key: 'certified',
        title: { _type: 'localeString', en: enOverview.featureCertifiedTitle, vi: viOverview.featureCertifiedTitle },
        description: { _type: 'localeText', en: enOverview.featureCertifiedDesc, vi: viOverview.featureCertifiedDesc },
        icon: 'shield',
      },
    ],
  })
  console.log('  Created: Company Overview')

  // Company Info
  console.log('Creating Company Info...')
  const contactIds = ['lon-taranaki', 'thanh-nguyen-van', 'hai-nguyen-ngoc', 'hoan-le-thi-ngoc', 'hung-nguyen-phuc', 'tien-dinh-van']
  await client.createOrReplace({
    _type: 'companyInfo',
    _id: 'companyInfo',
    email: 'info@dma-msv.com',
    phone: '+84 24 62500426',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0794086673434!2d105.80229631533423!3d20.99568668601097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad86e09c4eef%3A0x3b62c2dd0be8762f!2sHudtower!5e0!3m2!1sen!2s!4v1643883600000!5m2!1sen!2s',
    companyProfileUrl: 'https://gdp0phlejbs9naup.public.blob.vercel-storage.com/Mining%20Services%20Vietnam%20Company%20Profile%20%28Feb%202026%29.pdf',
    companyProfileLabel: { _type: 'localeString', en: enOverview.downloadProfile, vi: viOverview.downloadProfile },
    capabilityStatementUrl: 'https://gdp0phlejbs9naup.public.blob.vercel-storage.com/Mining%20Services%20Vietnam%20Capability%20Statement%20%28Mar%2026%29.pdf',
    capabilityStatementLabel: { _type: 'localeString', en: enOverview.downloadCapability, vi: viOverview.downloadCapability },
    companyName: { _type: 'localeString', en: enContact.companyName, vi: viContact.companyName },
    addressLine1: { _type: 'localeString', en: enContact.addressLine1, vi: viContact.addressLine1 },
    addressLine2: { _type: 'localeString', en: enContact.addressLine2, vi: viContact.addressLine2 },
    addressLine3: { _type: 'localeString', en: enContact.addressLine3, vi: viContact.addressLine3 },
    businessHours: { _type: 'localeString', en: enContact.businessHoursValue, vi: viContact.businessHoursValue },
    keyContacts: contactIds.map((id) => ({
      _type: 'object',
      _key: id,
      member: { _type: 'reference', _ref: `teamMember-${id}` },
      contactTitle: { _type: 'localeString', en: enContacts[id], vi: viContacts[id] },
    })),
  })
  console.log('  Created: Company Info')
}

async function main() {
  console.log('Sanity Migration Script')
  console.log(`Project: ${projectId}`)
  console.log(`Dataset: ${dataset}`)

  const arg = process.argv[2]

  try {
    if (arg === '--singletons-only') {
      await migrateSingletons()
    } else {
      await migrateTeam()
      await migrateProjects()
      await migrateSingletons()
    }
    console.log('\n=== Migration Complete ===\n')
  } catch (error) {
    console.error('\nMigration failed:', error)
    process.exit(1)
  }
}

main()
