import { defineField, defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'jobCode',
      title: 'Job Code',
      type: 'string',
      description: 'Unique code, e.g. CA-BPNM-001. Uppercase letters, digits, and hyphens only.',
      validation: (rule) =>
        rule
          .required()
          .regex(/^[A-Z0-9-]+$/, {
            name: 'uppercase letters, digits, hyphens',
            invert: false,
          })
          .custom(async (value, context) => {
            if (!value) return true
            const { document, getClient } = context
            const client = getClient({ apiVersion: '2024-01-01' })
            const id = document?._id.replace(/^drafts\./, '')
            const duplicates = await client.fetch(
              '*[_type == "job" && jobCode == $value && !(_id in [$id, "drafts." + $id])][0]._id',
              { value, id }
            )
            return duplicates ? 'Another job already uses this code.' : true
          }),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'localeString',
      validation: (rule) =>
        rule.required().custom((value: { en?: string; vi?: string } | undefined) => {
          if (!value?.en?.trim()) return 'English title is required.'
          return true
        }),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'localeString',
      description: 'e.g. Ban Phuc Nickel Mines, Son La',
      validation: (rule) =>
        rule.required().custom((value: { en?: string; vi?: string } | undefined) => {
          if (!value?.en?.trim()) return 'English location is required.'
          return true
        }),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'localeText',
      description:
        'Responsibilities and role overview. Line breaks are preserved on the public page; use "- " at the start of a line for bullet points.',
      validation: (rule) =>
        rule.required().custom((value: { en?: string; vi?: string } | undefined) => {
          if (!value?.en?.trim()) return 'English description is required.'
          return true
        }),
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'localeText',
      description: 'Candidate qualifications and experience.',
      validation: (rule) =>
        rule.required().custom((value: { en?: string; vi?: string } | undefined) => {
          if (!value?.en?.trim()) return 'English requirements are required.'
          return true
        }),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'localeText',
      description: 'Salary range, leave, insurance, etc. (optional)',
    }),
    defineField({
      name: 'recruitmentEmail',
      title: 'Recruitment Email',
      type: 'string',
      description: 'Inbox shown to candidates as the fallback contact for applications.',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'closingNote',
      title: 'Closing Note',
      type: 'localeText',
      description: 'e.g. "Only short-listed candidates will be contacted." (optional)',
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'closingDate',
      title: 'Closing Date',
      type: 'date',
      description: 'Optional deadline shown on the card and detail page.',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Controls public visibility. Inactive jobs are hidden from /careers.',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'openings',
      title: 'Number of Openings',
      type: 'number',
      description: 'How many candidates are being hired for this role.',
      initialValue: 1,
      validation: (rule) => rule.min(1).integer(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Smaller numbers appear first in the listing.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'jobCode',
      active: 'isActive',
    },
    prepare({ title, subtitle, active }) {
      return {
        title: title || '(untitled job)',
        subtitle: `${subtitle ?? '—'}${active === false ? ' · inactive' : ''}`,
      }
    },
  },
})
