export default {
  slug: "proposals",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "organization"],
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
      name: "reference",
      type: "text",
      required: true,
      unique: true,
      label: "Referência",
    },

    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Proposta Comercial",
          value: "commercial",
        },
        {
          label: "Proposta Técnica",
          value: "technical",
        },
        {
          label: "Comercial e Técnica",
          value: "commercial-technical",
        },
      ],
      label: "Tipo",
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
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
          label: "Em análise",
          value: "review",
        },
        {
          label: "Enviada",
          value: "sent",
        },
        {
          label: "Aceite",
          value: "accepted",
        },
        {
          label: "Rejeitada",
          value: "rejected",
        },
        {
          label: "Expirada",
          value: "expired",
        },
        {
          label: "Cancelada",
          value: "cancelled",
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
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
    },

    {
      name: "validUntil",
      type: "date",
      label: "Válida até",
    },

    {
      name: "currency",
      type: "text",
      defaultValue: "STN",
      label: "Moeda",
    },

    {
      name: "total",
      type: "number",
      label: "Valor total",
    },

    {
      name: "notes",
      type: "textarea",
      label: "Observações",
    },
  ],
};