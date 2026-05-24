import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    }),
    defineField({
      name: 'topText',
      title: 'Top Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'secondTitle',
      title: 'Second Title',
      type: 'string',
    }),
    defineField({
      name: 'secondText',
      title: 'Second Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
