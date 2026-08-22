export default {
  slug: "demo-requests",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "type", "status", "createdAt"],
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
      name: "email",
      type: "text",
      required: true,
      label: "Email",
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
    },

    {
      name: "organizationName",
      type: "text",
      required: true,
      label: "Organização",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "demo",
      options: [
        {
          label: "Demonstração",
          value: "demo",
        },
        {
          label: "Teste Piloto",
          value: "pilot",
        },
        {
          label: "Demonstração e Teste Piloto",
          value: "demo-pilot",
        },
      ],
      label: "Tipo de Pedido",
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
          label: "Contactado",
          value: "contacted",
        },
        {
          label: "Agendado",
          value: "scheduled",
        },
        {
          label: "Em teste",
          value: "in_progress",
        },
        {
          label: "Concluído",
          value: "completed",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
        {
          label: "Rejeitado",
          value: "rejected",
        },
      ],
      label: "Estado",
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
      name: "preferredDate",
      type: "date",
      label: "Data pretendida",
    },

    {
      name: "message",
      type: "textarea",
      label: "Mensagem",
    },

    {
      name: "pilotDuration",
      type: "number",
      label: "Duração do Piloto (dias)",
    },

    {
      name: "notes",
      type: "textarea",
      label: "Notas internas",
    },

    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
    },
  ],
};