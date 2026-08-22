export default {
  slug: "highlights",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "startDate"],
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
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Evento",
          value: "event",
        },
        {
          label: "Publicação",
          value: "publication",
        },
        {
          label: "Novidade",
          value: "news",
        },
        {
          label: "Lançamento",
          value: "release",
        },
        {
          label: "Anúncio",
          value: "announcement",
        },
      ],
      label: "Tipo",
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
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
    },

    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
    },

    {
      name: "url",
      type: "text",
      label: "URL",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
    },

    {
      name: "startDate",
      type: "date",
      label: "Data de início",
    },

    {
      name: "endDate",
      type: "date",
      label: "Data de fim",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: true,
      label: "Em destaque",
    },

    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordem",
    },
  ],
};