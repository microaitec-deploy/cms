export default {
  slug: "publications",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "publishedAt"],
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
      name: "excerpt",
      type: "textarea",
      label: "Resumo",
    },

    {
      name: "content",
      type: "richText",
      required: true,
      label: "Conteúdo",
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
      name: "type",
      type: "select",
      required: true,
      defaultValue: "article",
      options: [
        {
          label: "Artigo",
          value: "article",
        },
        {
          label: "Notícia",
          value: "news",
        },
        {
          label: "Anúncio",
          value: "announcement",
        },
        {
          label: "Atualização",
          value: "update",
        },
      ],
      label: "Tipo",
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de capa",
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Autor",
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
      name: "publishedAt",
      type: "date",
      label: "Data de publicação",
    },
  ],
};