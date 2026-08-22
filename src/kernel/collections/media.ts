export default ({core}:any)=> ( {
  slug: "media",

  upload: {
    mimeTypes: ["image/*", "application/pdf"],

    maxFileSize: 10 * 1024 * 1024, // 10 MB

    focalPoint: true,

    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        fit: "cover",
        format: "webp",
        quality: 80,
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        fit: "cover",
      },
    ],
  },
     access: {
     create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
      },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
})