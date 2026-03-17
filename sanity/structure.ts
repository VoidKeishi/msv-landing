import type { StructureResolver } from 'sanity/structure'

const singletonTypes = new Set(['companyInfo', 'heroSection', 'companyOverview'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Company Info')
        .id('companyInfo')
        .child(
          S.document().schemaType('companyInfo').documentId('companyInfo')
        ),
      S.listItem()
        .title('Hero Section')
        .id('heroSection')
        .child(
          S.document().schemaType('heroSection').documentId('heroSection')
        ),
      S.listItem()
        .title('Company Overview')
        .id('companyOverview')
        .child(
          S.document().schemaType('companyOverview').documentId('companyOverview')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() || '')
      ),
    ])
