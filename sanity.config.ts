import {defineConfig} from 'sanity'
import {structureTool, type StructureBuilder} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import mediaTool from './plugins/mediaTool'

export default defineConfig({
  name: 'default',
  title: 'Kapper John',

  projectId: 'y7vbzr5k',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Website Settings')
              .child(S.document().schemaType('websiteSettings').documentId('websiteSettings')),
            S.listItem()
              .title('Main Page')
              .child(S.document().schemaType('mainPage').documentId('mainPage')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !['websiteSettings', 'mainPage'].includes(item.getId()!),
            ),
          ]),
    }),
    visionTool(),
    mediaTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
