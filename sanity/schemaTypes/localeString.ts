import { defineType } from 'sanity'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'vi', title: 'Vietnamese' },
]

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string' as const,
    fieldset: lang.isDefault ? undefined : ('translations' as const),
  })),
})
