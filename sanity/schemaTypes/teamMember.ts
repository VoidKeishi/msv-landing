import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Board of Directors', value: 'board' },
          { title: 'Advisory Board', value: 'advisory' },
          { title: 'Senior Technical Advisors', value: 'technical' },
          { title: 'Executive Management', value: 'executive' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'localeString',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'localeText',
    }),
    defineField({
      name: 'fullBio',
      title: 'Full Bio',
      type: 'localeText',
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
      title: 'name',
      subtitle: 'jobTitle.en',
      media: 'photo',
    },
  },
})
