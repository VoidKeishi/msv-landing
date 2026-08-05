import { groq } from 'next-sanity'

export const teamMembersQuery = groq`
  *[_type == "teamMember" && isActive == true] | order(displayOrder asc) {
    _id,
    name,
    "slug": slug.current,
    photo,
    category,
    email,
    "jobTitle": jobTitle[$locale],
    "shortBio": shortBio[$locale],
    "fullBio": fullBio[$locale],
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(displayOrder asc) {
    _id,
    "slug": slug.current,
    "title": title[$locale],
    "client": client[$locale],
    country,
    commodity,
    status,
    "description": description[$locale],
    coverImage,
    gallery,
    services,
    deliveryModel,
    isFeatured,
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && isFeatured == true] | order(displayOrder asc) {
    _id,
    "slug": slug.current,
    "title": title[$locale],
    "client": client[$locale],
    country,
    commodity,
    status,
    "description": description[$locale],
    coverImage,
    gallery,
    services,
    deliveryModel,
  }
`

export const companyInfoQuery = groq`
  *[_id == "companyInfo"][0] {
    email,
    phone,
    googleMapsUrl,
    companyProfileUrl,
    "companyProfileLabel": companyProfileLabel[$locale],
    capabilityStatementUrl,
    "capabilityStatementLabel": capabilityStatementLabel[$locale],
    "companyName": companyName[$locale],
    "addressLine1": addressLine1[$locale],
    "addressLine2": addressLine2[$locale],
    "addressLine3": addressLine3[$locale],
    "businessHours": businessHours[$locale],
    "keyContacts": keyContacts[] {
      "contactTitle": contactTitle[$locale],
      "name": member->name,
      "email": member->email,
    },
  }
`

export const heroSectionQuery = groq`
  *[_id == "heroSection"][0] {
    "badge": badge[$locale],
    "slogan": slogan[$locale],
    "headingLine1": headingLine1[$locale],
    "headingHighlight": headingHighlight[$locale],
    "headingLine2": headingLine2[$locale],
    "description": description[$locale],
    "ctaServicesLabel": ctaServicesLabel[$locale],
    "ctaContactLabel": ctaContactLabel[$locale],
    "trackRecordLabel": trackRecordLabel[$locale],
    "stats": stats[] {
      "value": value[$locale],
      "label": label[$locale],
      icon,
    },
  }
`

export const jobsQuery = groq`
  *[_type == "job" && isActive == true] | order(displayOrder asc, postedAt desc) {
    _id,
    jobCode,
    "slug": slug.current,
    "title": title[$locale],
    "location": location[$locale],
    "description": description[$locale],
    openings,
    recruitmentEmail,
    postedAt,
    closingDate,
  }
`

export const jobBySlugQuery = groq`
  *[_type == "job" && isActive == true && slug.current == $slug][0] {
    _id,
    jobCode,
    "slug": slug.current,
    "title": title[$locale],
    "location": location[$locale],
    "description": description[$locale],
    "requirements": requirements[$locale],
    "benefits": benefits[$locale],
    openings,
    recruitmentEmail,
    "closingNote": closingNote[$locale],
    postedAt,
    closingDate,
  }
`

export const companyOverviewQuery = groq`
  *[_id == "companyOverview"][0] {
    "badge": badge[$locale],
    "headingLine1": headingLine1[$locale],
    "headingHighlight": headingHighlight[$locale],
    "paragraph1": paragraph1[$locale],
    "paragraph2": paragraph2[$locale],
    "features": features[] {
      "title": title[$locale],
      "description": description[$locale],
      icon,
    },
  }
`
