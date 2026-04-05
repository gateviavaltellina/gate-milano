import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "venueName",
      title: "Venue Name",
      type: "string",
      initialValue: "Gate Milano",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "The event space where the city sets the stage.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      initialValue:
        "Gate Milano brings the Gate experience to the heart of the city. A destination for clubbing and live events, designed to transform nights into something unforgettable.",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string", initialValue: "Milano" }),
        defineField({ name: "postalCode", title: "Postal Code", type: "string" }),
        defineField({ name: "region", title: "Region", type: "string", initialValue: "MI" }),
      ],
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      initialValue: "info@gatemilano.it",
    }),
    defineField({
      name: "bookingEmail",
      title: "Booking Email",
      type: "string",
      initialValue: "booking@gatemilano.it",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram Handle",
      type: "string",
      initialValue: "gatemilano",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "string",
      initialValue: "Venerdì–Sabato, 23:00–06:00",
    }),
  ],
  preview: {
    select: { title: "venueName" },
  },
});
