export default {
  slug: "testimonials",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "client", "status", "featured"],
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
    },

    {
      name: "testimonial",
      type: "textarea",
      required: true,
      label: "Testemunho",
    },

    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      required: true,
      label: "Cliente",
    },

    {
      name: "authorName",
      type: "text",
      required: true,
      label: "Nome",
    },

    {
      name: "authorRole",
      type: "text",
      label: "Cargo / Função",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
    },

    {
      name: "rating",
      type: "number",
      label: "Avaliação",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        {
          label: "Rascunho",
          value: "draft",
        },
        {
          label: "Publicado",
          value: "published",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
      ],
      label: "Estado",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Foto",
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data de publicação",
    },

    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordem",
    },
  ],
};