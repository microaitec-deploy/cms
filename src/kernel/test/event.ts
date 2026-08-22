export default {
  slug: "events",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "startDate"],
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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
    },

    {
      name: "description",
      type: "richText",
      label: "Descrição",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "event",
      options: [
        {
          label: "Evento",
          value: "event",
        },
        {
          label: "Webinar",
          value: "webinar",
        },
        {
          label: "Workshop",
          value: "workshop",
        },
        {
          label: "Conferência",
          value: "conference",
        },
        {
          label: "Lançamento",
          value: "launch",
        },
        {
          label: "Demonstração",
          value: "demo",
        },
      ],
      label: "Tipo",
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
          label: "Agendado",
          value: "scheduled",
        },
        {
          label: "A decorrer",
          value: "ongoing",
        },
        {
          label: "Concluído",
          value: "completed",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
      ],
      label: "Estado",
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de capa",
    },

    {
      name: "startDate",
      type: "date",
      required: true,
      label: "Data de início",
    },

    {
      name: "endDate",
      type: "date",
      label: "Data de fim",
    },

    {
      name: "location",
      type: "text",
      label: "Local",
    },

    {
      name: "isOnline",
      type: "checkbox",
      defaultValue: false,
      label: "Evento online",
    },

    {
      name: "meetingUrl",
      type: "text",
      label: "Link do evento",
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
      name: "solution",
      type: "relationship",
      relationTo: "solutions",
      label: "Solução",
    },

    {
      name: "organizer",
      type: "relationship",
      relationTo: "members",
      label: "Organizador",
    },

    {
      name: "registrationUrl",
      type: "text",
      label: "Link de inscrição",
    },

    {
      name: "capacity",
      type: "number",
      label: "Capacidade",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data de publicação",
    },
  ],
};