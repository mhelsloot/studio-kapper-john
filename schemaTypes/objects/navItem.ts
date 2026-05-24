import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The label that will be displayed in the menu.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'The URL or relative path (e.g., /about, /services/web-design). Leave empty if this item is only a parent for sub-menus.',
    }),
    defineField({
      name: 'children',
      title: 'Child Items (Sub-menu)',
      type: 'array',
      of: [{type: 'navItem'}],
      description: 'Add sub-menu items to create a nested dropdown navigation.',
    }),
  ],
})
