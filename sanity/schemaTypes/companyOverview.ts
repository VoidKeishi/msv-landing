import { defineField, defineType } from 'sanity'

export const companyOverview = defineType({
  name: 'companyOverview',
  title: 'Company Overview',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
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
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'localeText',
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'localeText',
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localeString',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localeText',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Globe', value: 'globe' },
                  { title: 'Award', value: 'award' },
                  { title: 'Trending Up', value: 'trendingUp' },
                  { title: 'Shield', value: 'shield' },
                ],
              },
            }),
          ],
          preview: {
            select: { title: 'title.en', subtitle: 'icon' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Company Overview' }
    },
  },
})
