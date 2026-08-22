export default {
  slug: "contact-messages",

  admin: {
    useAsTitle: "subject",
    defaultColumns: ["subject", "name", "type", "status", "createdAt"],
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
      name: "organization",
      type: "text",
      label: "Organização",
    },

    {
      name: "subject",
      type: "text",
      required: true,
      label: "Assunto",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "general",
      options: [
        {
          label: "Geral",
          value: "general",
        },
        {
          label: "Informação comercial",
          value: "sales",
        },
        {
          label: "Suporte",
          value: "support",
        },
        {
          label: "Demonstração",
          value: "demo",
        },
        {
          label: "Teste piloto",
          value: "pilot",
        },
        {
          label: "Parceria",
          value: "partnership",
        },
        {
          label: "Outro",
          value: "other",
        },
      ],
      label: "Tipo",
    },

    {
      name: "message",
      type: "richText",
      required: true,
      label: "Mensagem",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        {
          label: "Nova",
          value: "new",
        },
        {
          label: "Em análise",
          value: "review",
        },
        {
          label: "Em atendimento",
          value: "in_progress",
        },
        {
          label: "Respondida",
          value: "replied",
        },
        {
          label: "Concluída",
          value: "resolved",
        },
        {
          label: "Arquivada",
          value: "archived",
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
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
    },

    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
    },

    {
      name: "response",
      type: "richText",
      label: "Resposta",
    },

    {
      name: "respondedAt",
      type: "date",
      label: "Respondida em",
    },

    {
      name: "source",
      type: "text",
      defaultValue: "website",
      label: "Origem",
    },
  ],
};