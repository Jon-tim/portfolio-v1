import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'porfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'live',
      title: 'Live Site',
      type: 'url',
    }),
    defineField({
      title: 'Stacks',
      name: 'stacks',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
