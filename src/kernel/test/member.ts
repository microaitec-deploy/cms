export default {
  slug: "members",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "role", "status"],
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
          label: "Pendente",
          value: "pending",
        },
      ],
      label: "Estado",
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Avatar",
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
  ],
};