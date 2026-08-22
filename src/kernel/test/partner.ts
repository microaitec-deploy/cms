export default {
  slug: "partners",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "status"],
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
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Tecnológico",
          value: "technology",
        },
        {
          label: "Comercial",
          value: "commercial",
        },
        {
          label: "Estratégico",
          value: "strategic",
        },
        {
          label: "Institucional",
          value: "institutional",
        },
        {
          label: "Integração",
          value: "integration",
        },
        {
          label: "Outro",
          value: "other",
        },
      ],
      label: "Tipo de parceiro",
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
          label: "Em avaliação",
          value: "pending",
        },
        {
          label: "Encerrado",
          value: "terminated",
        },
      ],
      label: "Estado",
    },

    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    {
      name: "website",
      type: "text",
      label: "Website",
    },

    {
      name: "email",
      type: "text",
      label: "Email",
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
    },

    {
      name: "country",
      type: "text",
      label: "País",
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
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
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
    },

    {
      name: "contact",
      type: "relationship",
      relationTo: "members",
      label: "Contacto",
    },

    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
    },

    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordem",
    },
  ],
};