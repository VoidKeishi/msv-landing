import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'localeString',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Vietnam', value: 'Vietnam' },
          { title: 'Cambodia', value: 'Cambodia' },
          { title: 'Laos', value: 'Laos' },
          { title: 'Thailand', value: 'Thailand' },
          { title: 'Malaysia', value: 'Malaysia' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'commodity',
      title: 'Commodity',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'e.g. "Aug 2025 - ongoing"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Exploration & Geological Services', value: 'exploration' },
          { title: 'Resource & Reserve Development', value: 'resource' },
          { title: 'Project Delivery (Owner\'s Team & EPCM)', value: 'project-delivery' },
          { title: 'Operational Readiness & Support', value: 'operational' },
        ],
      },
    }),
    defineField({
      name: 'deliveryModel',
      title: 'Delivery Model',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Advisory', value: 'advisory' },
          { title: 'EPCM', value: 'epcm' },
          { title: 'Embedded Teams', value: 'embedded' },
        ],
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: true,
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
      subtitle: 'country',
      media: 'coverImage',
    },
  },
})
