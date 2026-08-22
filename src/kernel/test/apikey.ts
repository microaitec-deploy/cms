export default {
  slug: "api-keys",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "organization", "createdAt"],
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
      name: "key",
      type: "text",
      required: true,
      label: "API Key",
    },

    {
      name: "prefix",
      type: "text",
      required: true,
      label: "Prefixo",
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
          label: "Revogada",
          value: "revoked",
        },
        {
          label: "Expirada",
          value: "expired",
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
      label: "SaaS",
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
    },

    {
      name: "expiresAt",
      type: "date",
      label: "Expira em",
    },

    {
      name: "lastUsedAt",
      type: "date",
      label: "Última utilização",
    },
  ],
};