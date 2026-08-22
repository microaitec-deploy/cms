export default {
  slug: "teams",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "organization", "status"],
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
      defaultValue: "active",
      options: [
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
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
    },

    {
      name: "members",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Membros",
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
      name: "leader",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
    },
  ],
};