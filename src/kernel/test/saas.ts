export default {
  slug: "saas",

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
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "development",
      options: [
        {
          label: "Em desenvolvimento",
          value: "development",
        },
        {
          label: "Beta",
          value: "beta",
        },
        {
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
      ],
    },

    {
      name: "website",
      type: "text",
      label: "Website",
    },

    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      label: "Responsável",
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
    },
  ],
};