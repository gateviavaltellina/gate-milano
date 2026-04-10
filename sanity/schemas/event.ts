import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Date & Time",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "genres",
      title: "Genres / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Techno", value: "Techno" },
          { title: "Hard Techno", value: "Hardtechno" },
          { title: "House", value: "House" },
          { title: "Tech-House", value: "Tech-House" },
          { title: "Reggaeton", value: "Reggaeton" },
          { title: "Urban", value: "Urban" },
          { title: "Electronic Music", value: "Electronic Music" },
          { title: "Hard Bounce", value: "Hard Bounce" },
          { title: "Hardcore", value: "Hardcore" },
          { title: "Clubbing", value: "Clubbing" },
          { title: "Live Events", value: "Live Events" },
          { title: "Commercial Events", value: "Commercial Events" },
        ],
      },
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      options: {
        list: [
          { title: "Main Room", value: "Main Room" },
          { title: "Club Room", value: "Club Room" },
          { title: "Alcatraz Milano", value: "Alcatraz Milano" },
          { title: "Carroponte Milano", value: "Carroponte Milano" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "isSoldOut",
      title: "Sold Out",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isSellingFast",
      title: "Selling Fast",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishAt",
      title: "Schedule Publish Date",
      type: "datetime",
      description: "When this event should go live on the website. Leave empty to publish immediately.",
      options: {
        dateFormat: "MMMM DD, YYYY",
        timeFormat: "hh:mm A",
        timeStep: 15,
      },
    }),
  ],
  orderings: [
    {
      title: "Date (upcoming first)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString("it-IT") : "No date",
        media,
      };
    },
  },
});
