export default {
  slug: "success-stories",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "organization", "saas", "status"],
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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
    },

    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Resumo",
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
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      required: true,
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
      name: "challenge",
      type: "richText",
      label: "Desafio",
    },

    {
      name: "solution",
      type: "richText",
      label: "Solução",
    },

    {
      name: "results",
      type: "richText",
      label: "Resultados",
    },

    {
      name: "testimonial",
      type: "textarea",
      label: "Testemunho",
    },

    {
      name: "testimonialAuthor",
      type: "text",
      label: "Autor do testemunho",
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de capa",
    },

    {
      name: "gallery",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      label: "Galeria",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data de publicação",
    },
  ],
};