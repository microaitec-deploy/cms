export default {
  slug: "devices",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "deviceId", "status", "organization"],
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
      name: "deviceId",
      type: "text",
      required: true,
      unique: true,
      label: "ID do Dispositivo",
    },

    {
      name: "type",
      type: "text",
      required: true,
      label: "Tipo",
    },

    {
      name: "model",
      type: "text",
      label: "Modelo",
    },

    {
      name: "serialNumber",
      type: "text",
      label: "Número de Série",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        {
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Offline",
          value: "offline",
        },
        {
          label: "Suspenso",
          value: "suspended",
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
      name: "metadata",
      type: "json",
      label: "Metadados",
    },
  ],
};