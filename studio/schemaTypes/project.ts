import { defineArrayMember, defineField, defineType } from "sanity";

const contentImage = defineArrayMember({
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Describe the image for accessibility.",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
});

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Category",
      type: "string",
      initialValue: "WEB",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Active", value: "active" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "active",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stack",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      initialValue: [],
    }),
    defineField({
      name: "repo",
      title: "Repository link",
      type: "url",
    }),
    defineField({
      name: "mainImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Project page",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        contentImage,
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Image gallery",
      type: "array",
      of: [contentImage],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "mainImage",
    },
  },
});
