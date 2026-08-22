export default {
  slug: "feedbacks",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "client", "saas"],
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
      name: "message",
      type: "textarea",
      required: true,
      label: "Feedback",
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
          label: "Sugestão",
          value: "suggestion",
        },
        {
          label: "Problema",
          value: "bug",
        },
        {
          label: "Melhoria",
          value: "improvement",
        },
        {
          label: "Experiência",
          value: "experience",
        },
        {
          label: "Funcionalidade",
          value: "feature",
        },
      ],
      label: "Tipo",
    },

    {
      name: "rating",
      type: "number",
      label: "Avaliação",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        {
          label: "Novo",
          value: "new",
        },
        {
          label: "Em análise",
          value: "review",
        },
        {
          label: "Em desenvolvimento",
          value: "in_progress",
        },
        {
          label: "Resolvido",
          value: "resolved",
        },
        {
          label: "Rejeitado",
          value: "rejected",
        },
      ],
      label: "Estado",
    },

    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      label: "Cliente",
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
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
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Autor",
    },

    {
      name: "response",
      type: "textarea",
      label: "Resposta",
    },

    {
      name: "respondedBy",
      type: "relationship",
      relationTo: "members",
      label: "Respondido por",
    },

    {
      name: "isPublic",
      type: "checkbox",
      defaultValue: false,
      label: "Público",
    },

    {
      name: "createdAt",
      type: "date",
      label: "Data",
    },
  ],
};