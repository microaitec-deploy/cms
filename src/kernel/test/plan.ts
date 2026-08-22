export default {
  slug: "subscription-plans",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "saas", "price", "status"],
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
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Rascunho",
          value: "draft",
        },
      ],
      label: "Estado",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      required: true,
      label: "SaaS",
    },

    {
      name: "price",
      type: "number",
      required: true,
      defaultValue: 0,
      label: "Preço",
    },

    {
      name: "currency",
      type: "text",
      required: true,
      defaultValue: "STN",
      label: "Moeda",
    },

    {
      name: "interval",
      type: "select",
      required: true,
      defaultValue: "year",
      options: [
        {
          label: "Mensal",
          value: "month",
        },
        {
          label: "Trimestral",
          value: "quarter",
        },
        {
          label: "Semestral",
          value: "semester",
        },
        {
          label: "Anual",
          value: "year",
        },
      ],
      label: "Periodicidade",
    },

    {
      name: "trialDays",
      type: "number",
      defaultValue: 0,
      label: "Dias de teste",
    },

    {
      name: "maxMembers",
      type: "number",
      label: "Máximo de membros",
    },

    {
      name: "maxDevices",
      type: "number",
      label: "Máximo de dispositivos",
    },

    {
      name: "maxApps",
      type: "number",
      label: "Máximo de aplicações",
    },

    {
      name: "features",
      type: "json",
      label: "Funcionalidades",
    },
  ],
};