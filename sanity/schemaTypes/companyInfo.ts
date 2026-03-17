import { defineField, defineType } from 'sanity'

export const companyInfo = defineType({
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'General Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'companyProfileUrl',
      title: 'Company Profile PDF URL',
      type: 'url',
    }),
    defineField({
      name: 'companyProfileLabel',
      title: 'Company Profile Button Label',
      type: 'localeString',
    }),
    defineField({
      name: 'capabilityStatementUrl',
      title: 'Capability Statement PDF URL',
      type: 'url',
    }),
    defineField({
      name: 'capabilityStatementLabel',
      title: 'Capability Statement Button Label',
      type: 'localeString',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name (for address block)',
      type: 'localeString',
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'localeString',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'localeString',
    }),
    defineField({
      name: 'addressLine3',
      title: 'Address Line 3',
      type: 'localeString',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'localeString',
    }),
    defineField({
      name: 'keyContacts',
      title: 'Key Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'member',
              title: 'Team Member',
              type: 'reference',
              to: [{ type: 'teamMember' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'contactTitle',
              title: 'Contact Title (short role shown on contact page)',
              type: 'localeString',
            }),
          ],
          preview: {
            select: {
              title: 'member.name',
              subtitle: 'contactTitle.en',
              media: 'member.photo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Company Info' }
    },
  },
})
