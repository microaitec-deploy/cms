export default {
  slug: "roadmaps",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "priority"],
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
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "product",
      options: [
        {
          label: "Produto",
          value: "product",
        },
        {
          label: "SaaS",
          value: "saas",
        },
        {
          label: "Aplicação",
          value: "app",
        },
        {
          label: "Tecnologia",
          value: "technology",
        },
        {
          label: "Empresa",
          value: "company",
        },
      ],
      label: "Tipo",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        {
          label: "Planeado",
          value: "planned",
        },
        {
          label: "Ativo",
          value: "active",
        },
        {
          label: "Concluído",
          value: "completed",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
      ],
      label: "Estado",
    },

    {
      name: "priority",
      type: "select",
      defaultValue: "medium",
      options: [
        {
          label: "Baixa",
          value: "low",
        },
        {
          label: "Média",
          value: "medium",
        },
        {
          label: "Alta",
          value: "high",
        },
        {
          label: "Crítica",
          value: "critical",
        },
      ],
      label: "Prioridade",
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
      name: "owner",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
    },

    {
      name: "startDate",
      type: "date",
      label: "Data de início",
    },

    {
      name: "targetDate",
      type: "date",
      label: "Data prevista",
    },

    {
      name: "progress",
      type: "number",
      defaultValue: 0,
      label: "Progresso (%)",
    },

    {
      name: "items",
      type: "json",
      label: "Itens do Roadmap",
    },
  ],
};