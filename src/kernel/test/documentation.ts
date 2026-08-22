export default {
  slug: "documentation",

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
      defaultValue: "general",
      options: [
        {
          label: "Geral",
          value: "general",
        },
        {
          label: "Produto",
          value: "product",
        },
        {
          label: "SaaS",
          value: "saas",
        },
        {
          label: "Aplicação",
          value: "app",
        },
        {
          label: "API",
          value: "api",
        },
        {
          label: "Técnica",
          value: "technical",
        },
        {
          label: "Integração",
          value: "integration",
        },
        {
          label: "Desenvolvimento",
          value: "development",
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
      name: "solution",
      type: "relationship",
      relationTo: "solutions",
      label: "Solução",
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
      name: "version",
      type: "text",
      label: "Versão",
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