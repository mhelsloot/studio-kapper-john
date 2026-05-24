import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'websiteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'object',
      fields: [
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({name: 'address', title: 'Address', type: 'text'}),
      ],
    }),
    defineField({
      name: 'metaTags',
      title: 'Social Sharing (Meta Tags)',
      type: 'object',
      fields: [
        defineField({
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Title for social sharing cards (Facebook, Twitter, etc.)',
        }),
        defineField({
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          rows: 3,
          description: 'Description for social sharing cards',
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Image for social sharing cards',
        }),
      ],
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      description: 'Create the top-level navigation items. Each item can be configured with its own sub-menus.',
      type: 'array',
      of: [{type: 'navItem'}],
    }),
  ],
})
