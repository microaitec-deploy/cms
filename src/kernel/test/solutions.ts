export default {
  slug: "solutions",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "status"],
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome",
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
      name: "description",
      type: "richText",
      label: "Descrição",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        {
          label: "Em desenvolvimento",
          value: "development",
        },
        {
          label: "Ativa",
          value: "active",
        },
        {
          label: "Inativa",
          value: "inactive",
        },
        {
          label: "Arquivada",
          value: "archived",
        },
      ],
      label: "Estado",
    },

    {
      name: "category",
      type: "text",
      label: "Categoria",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
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
      name: "features",
      type: "json",
      label: "Funcionalidades",
    },

    {
      name: "targetAudience",
      type: "textarea",
      label: "Público-alvo",
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
    },

    {
      name: "website",
      type: "text",
      label: "Website",
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
  ],
};