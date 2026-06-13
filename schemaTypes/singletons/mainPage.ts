import {defineArrayMember, defineField, defineType} from 'sanity'

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
  })

const sectionIntroFields = [
  defineField({name: 'eyebrow', title: 'Label', type: 'string'}),
  defineField({name: 'title', title: 'Title', type: 'string'}),
  defineField({name: 'highlight', title: 'Highlighted title part', type: 'string'}),
  defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
]

const linkFields = [
  defineField({name: 'label', title: 'Label', type: 'string'}),
  defineField({name: 'href', title: 'Link', type: 'string'}),
]

export default defineType({
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  groups: [
    {name: 'navigation', title: 'Navigation'},
    {name: 'hero', title: 'Hero'},
    {name: 'about', title: 'About'},
    {name: 'sections', title: 'Sections'},
    {name: 'location', title: 'Location'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({name: 'brandName', title: 'Brand name', type: 'string'}),
        defineField({name: 'addressLabel', title: 'Address label', type: 'string'}),
        defineField({name: 'shortAddress', title: 'Short address', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Navigation items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: linkFields,
              preview: {
                select: {title: 'label', subtitle: 'href'},
              },
            }),
          ],
        }),
        defineField({
          name: 'cta',
          title: 'Call to action',
          type: 'object',
          fields: linkFields,
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        imageField('image', 'Image'),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'highlight', title: 'Highlighted title part', type: 'string'}),
        defineField({name: 'screenReaderText', title: 'Screen reader / SEO text', type: 'text', rows: 4}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
        defineField({
          name: 'primaryCta',
          title: 'Primary call to action',
          type: 'object',
          fields: linkFields,
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary call to action',
          type: 'object',
          fields: linkFields,
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'number'}),
                defineField({name: 'suffix', title: 'Suffix', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
              preview: {
                select: {title: 'label', value: 'value', suffix: 'suffix'},
                prepare: ({title, value, suffix}) => ({
                  title,
                  subtitle: `${value ?? ''}${suffix ?? ''}`,
                }),
              },
            }),
          ],
          validation: (rule) => rule.max(3),
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      group: 'about',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'highlight', title: 'Highlighted title part', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
        imageField('image', 'Image'),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({
          name: 'stat',
          title: 'Floating stat',
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'dienstenSection',
      title: 'Diensten section',
      type: 'object',
      group: 'sections',
      fields: sectionIntroFields,
    }),
    defineField({
      name: 'productenSection',
      title: 'Producten section',
      type: 'object',
      group: 'sections',
      fields: sectionIntroFields,
    }),
    defineField({
      name: 'reviewsSection',
      title: 'Reviews section',
      type: 'object',
      group: 'sections',
      fields: [
        ...sectionIntroFields,
        defineField({name: 'elfsightAppId', title: 'Elfsight app id', type: 'string'}),
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      group: 'location',
      fields: [
        ...sectionIntroFields,
        defineField({name: 'addressTitle', title: 'Address title', type: 'string'}),
        defineField({name: 'street', title: 'Street', type: 'string'}),
        defineField({name: 'postalCity', title: 'Postal code and city', type: 'string'}),
        defineField({name: 'country', title: 'Country', type: 'string'}),
        defineField({name: 'hoursTitle', title: 'Opening hours title', type: 'string'}),
        defineField({
          name: 'openingHours',
          title: 'Opening hours',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'days', title: 'Days', type: 'string'}),
                defineField({name: 'hours', title: 'Hours', type: 'string'}),
              ],
              preview: {
                select: {title: 'days', subtitle: 'hours'},
              },
            }),
          ],
        }),
        defineField({name: 'contactTitle', title: 'Contact title', type: 'string'}),
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'facilitiesTitle', title: 'Facilities title', type: 'string'}),
        defineField({
          name: 'facilities',
          title: 'Facilities',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'mapEmbedUrl', title: 'Google Maps embed URL', type: 'url'}),
        defineField({name: 'mapLinkUrl', title: 'Google Maps link URL', type: 'url'}),
        defineField({name: 'mapButtonLabel', title: 'Map button label', type: 'string'}),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({name: 'brandName', title: 'Brand name', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'address', title: 'Address', type: 'string'}),
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({
          name: 'socialLinks',
          title: 'Social links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Instagram', value: 'instagram'},
                      {title: 'Facebook', value: 'facebook'},
                    ],
                    layout: 'radio',
                  },
                }),
                defineField({name: 'url', title: 'URL', type: 'url'}),
                defineField({name: 'label', title: 'Accessible label', type: 'string'}),
              ],
              preview: {
                select: {title: 'label', subtitle: 'url'},
              },
            }),
          ],
        }),
        defineField({name: 'copyrightText', title: 'Copyright text', type: 'string'}),
        defineField({name: 'creditText', title: 'Credit text', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Main Page'}),
  },
})
