export default {
  slug: "help-articles",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "saas"],
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
      label: "Resumo",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "tutorial",
      options: [
        {
          label: "Tutorial",
          value: "tutorial",
        },
        {
          label: "Guia",
          value: "guide",
        },
        {
          label: "Ajuda",
          value: "help",
        },
        {
          label: "FAQ",
          value: "faq",
        },
        {
          label: "Documentação",
          value: "documentation",
        },
        {
          label: "Solução de problema",
          value: "troubleshooting",
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
      name: "content",
      type: "richText",
      required: true,
      label: "Conteúdo",
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de capa",
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
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Autor",
    },

    {
      name: "category",
      type: "text",
      label: "Categoria",
    },

    {
      name: "tags",
      type: "json",
      label: "Tags",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
    },

    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordem",
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data de publicação",
    },
  ],
};