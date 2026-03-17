import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'localeString',
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'localeString',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'localeString',
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight (colored word)',
      type: 'localeString',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'ctaServicesLabel',
      title: 'Services CTA Label',
      type: 'localeString',
    }),
    defineField({
      name: 'ctaContactLabel',
      title: 'Contact CTA Label',
      type: 'localeString',
    }),
    defineField({
      name: 'trackRecordLabel',
      title: 'Track Record Section Label',
      type: 'localeString',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'localeString',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localeString',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Pickaxe', value: 'pickaxe' },
                  { title: 'Award', value: 'award' },
                  { title: 'Map Pin', value: 'mapPin' },
                ],
              },
            }),
          ],
          preview: {
            select: { title: 'value.en', subtitle: 'label.en' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Section' }
    },
  },
})
