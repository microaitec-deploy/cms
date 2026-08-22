export default {
  slug: "member-cards",

  admin: {
    useAsTitle: "cardNumber",
    defaultColumns: ["cardNumber", "member", "organization", "status"],
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: "cardNumber",
      type: "text",
      required: true,
      label: "Número do Cartão",
    },

    {
      name: "member",
      type: "relationship",
      relationTo: "members",
      required: true,
      label: "Membro",
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
    },

    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Fotografia",
    },

    {
      name: "role",
      type: "text",
      label: "Função",
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
          label: "Suspenso",
          value: "suspended",
        },
        {
          label: "Expirado",
          value: "expired",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
      ],
      label: "Estado",
    },

    {
      name: "issuedAt",
      type: "date",
      label: "Data de emissão",
    },

    {
      name: "expiresAt",
      type: "date",
      label: "Data de validade",
    },

    {
      name: "qrCode",
      type: "text",
      label: "QR Code",
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
      label: "Aplicações autorizadas",
    },

    {
      name: "notes",
      type: "textarea",
      label: "Observações",
    },
  ],
};