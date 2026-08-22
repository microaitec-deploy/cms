export default {
  slug: "invitations",

  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "organization", "status", "expiresAt"],
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: "email",
      type: "text",
      required: true,
      label: "Email",
    },

    {
      name: "name",
      type: "text",
      label: "Nome",
    },

    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "member",
      options: [
        {
          label: "Administrador",
          value: "admin",
        },
        {
          label: "Gestor",
          value: "manager",
        },
        {
          label: "Membro",
          value: "member",
        },
        {
          label: "Desenvolvedor",
          value: "developer",
        },
        {
          label: "Suporte",
          value: "support",
        },
      ],
      label: "Função",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        {
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Aceite",
          value: "accepted",
        },
        {
          label: "Recusado",
          value: "rejected",
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
      name: "invitedBy",
      type: "relationship",
      relationTo: "members",
      required: true,
      label: "Convidado por",
    },

    {
      name: "token",
      type: "text",
      required: true,
      label: "Token",
    },

    {
      name: "expiresAt",
      type: "date",
      required: true,
      label: "Expira em",
    },

    {
      name: "acceptedAt",
      type: "date",
      label: "Aceite em",
    },

    {
      name: "message",
      type: "textarea",
      label: "Mensagem",
    },
  ],
};