export default {
  slug: "calendar-events",

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
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "meeting",
      options: [
        {
          label: "Reunião",
          value: "meeting",
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
          label: "Evento",
          value: "event",
        },
        {
          label: "Tarefa",
          value: "task",
        },
        {
          label: "Lembrete",
          value: "reminder",
        },
        {
          label: "Outro",
          value: "other",
        },
      ],
      label: "Tipo",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "scheduled",
      options: [
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
        {
          label: "Adiado",
          value: "rescheduled",
        },
      ],
      label: "Estado",
    },

    {
      name: "startDate",
      type: "date",
      required: true,
      label: "Início",
    },

    {
      name: "endDate",
      type: "date",
      label: "Fim",
    },

    {
      name: "allDay",
      type: "checkbox",
      defaultValue: false,
      label: "Dia inteiro",
    },

    {
      name: "location",
      type: "text",
      label: "Local",
    },

    {
      name: "meetingUrl",
      type: "text",
      label: "Link da reunião",
    },

    {
      name: "organizer",
      type: "relationship",
      relationTo: "members",
      label: "Organizador",
    },

    {
      name: "members",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Participantes",
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
      name: "notes",
      type: "textarea",
      label: "Notas",
    },

    {
      name: "reminder",
      type: "number",
      label: "Lembrete (minutos antes)",
    },
  ],
};