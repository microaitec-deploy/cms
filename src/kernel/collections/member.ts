export default ({ core }: any) => ({
  slug: "members",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "role", "status", "saas"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Informações pessoais
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome Completo",
    },

    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
      label: "Email",
      admin: {
        description: "Email principal do membro",
      },
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
    },

    {
      name: "bio",
      type: "textarea",
      label: "Biografia",
    },

    // Função e permissões
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
        {
          label: "Designer",
          value: "designer",
        },
        {
          label: "Product Owner",
          value: "product_owner",
        },
        {
          label: "Scrum Master",
          value: "scrum_master",
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
        {
          label: "Bloqueado",
          value: "blocked",
        },
        {
          label: "Férias",
          value: "vacation",
        },
      ],
      label: "Estado",
    },

    // Mídia
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Avatar",
    },

    {
      name: "cover_image",
      type: "upload",
      relationTo: "media",
      label: "Imagem de Capa",
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
      label: "SaaS",
      admin: {
        description: "SaaS aos quais o membro está vinculado",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps nos quais o membro trabalha",
      },
    },

    {
      name: "teams",
      type: "relationship",
      relationTo: "teams",
      hasMany: true,
      label: "Equipes",
      admin: {
        description: "Equipes das quais o membro faz parte",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
    },

    // Informações profissionais
    {
      name: "position",
      type: "text",
      label: "Cargo",
    },

    {
      name: "department",
      type: "text",
      label: "Departamento",
    },

    {
      name: "skills",
      type: "array",
      label: "Habilidades",
      fields: [
        {
          name: "skill",
          type: "text",
          label: "Habilidade",
        },
        {
          name: "level",
          type: "select",
          label: "Nível",
          options: [
            { label: "Iniciante", value: "beginner" },
            { label: "Intermediário", value: "intermediate" },
            { label: "Avançado", value: "advanced" },
            { label: "Especialista", value: "expert" },
          ],
          defaultValue: "intermediate",
        },
      ],
    },

    // Redes sociais
    {
      name: "social_links",
      type: "group",
      label: "Redes Sociais",
      fields: [
        {
          name: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          name: "github",
          type: "text",
          label: "GitHub",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter/X",
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram",
        },
        {
          name: "portfolio",
          type: "text",
          label: "Portfólio",
        },
      ],
    },

    // Métricas e estatísticas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "total_projects",
          type: "number",
          label: "Total de Projetos",
          defaultValue: 0,
        },
        {
          name: "completed_projects",
          type: "number",
          label: "Projetos Concluídos",
          defaultValue: 0,
        },
        {
          name: "tasks_completed",
          type: "number",
          label: "Tarefas Concluídas",
          defaultValue: 0,
        },
        {
          name: "rating",
          type: "number",
          label: "Avaliação",
          min: 0,
          max: 5,
          defaultValue: 0,
        },
      ],
    },

    // Datas
    {
      name: "join_date",
      type: "date",
      label: "Data de Entrada",
      defaultValue: () => new Date(),
    },

    {
      name: "last_active",
      type: "date",
      label: "Última Atividade",
      admin: {
        readOnly: true,
      },
    },

    {
      name: "birth_date",
      type: "date",
      label: "Data de Nascimento",
    },

    // Configurações
    {
      name: "settings",
      type: "group",
      label: "Configurações",
      fields: [
        {
          name: "receive_notifications",
          type: "checkbox",
          label: "Receber Notificações",
          defaultValue: true,
        },
        {
          name: "receive_newsletter",
          type: "checkbox",
          label: "Receber Newsletter",
          defaultValue: true,
        },
        {
          name: "two_factor_auth",
          type: "checkbox",
          label: "Autenticação de Dois Fatores",
          defaultValue: false,
        },
        {
          name: "language",
          type: "select",
          label: "Idioma",
          options: [
            { label: "Português", value: "pt" },
            { label: "Inglês", value: "en" },
            { label: "Francês", value: "fr" },
            { label: "Espanhol", value: "es" },
          ],
          defaultValue: "pt",
        },
      ],
    },

    // Endereço
    {
      name: "address",
      type: "group",
      label: "Endereço",
      fields: [
        {
          name: "street",
          type: "text",
          label: "Rua",
        },
        {
          name: "city",
          type: "text",
          label: "Cidade",
        },
        {
          name: "state",
          type: "text",
          label: "Estado/Província",
        },
        {
          name: "country",
          type: "text",
          label: "País",
        },
        {
          name: "zip_code",
          type: "text",
          label: "CEP",
        },
      ],
    },

    // Notas internas
    {
      name: "notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre o membro",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Validar email
        if (data.email) {
          data.email = data.email.toLowerCase().trim();
        }

        // Atualizar última atividade
        data.last_active = new Date().toISOString();

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("members." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("members.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});