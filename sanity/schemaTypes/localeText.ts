import { defineType } from 'sanity'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'vi', title: 'Vietnamese' },
]

export const localeText = defineType({
  title: 'Localized text',
  name: 'localeText',
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
    type: 'text' as const,
    fieldset: lang.isDefault ? undefined : ('translations' as const),
  })),
})
