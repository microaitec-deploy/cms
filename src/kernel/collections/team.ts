export default ({ core }: any) => ({
  slug: "teams",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "organization", "leader", "members_count"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Informações básicas
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome da Equipe",
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para a equipe (ex: equipe-desenvolvimento)",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "full_description",
      type: "richText",
      label: "Descrição Completa",
    },

    // Status
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        {
          label: "Ativa",
          value: "active",
        },
        {
          label: "Inativa",
          value: "inactive",
        },
        {
          label: "Arquivada",
          value: "archived",
        },
        {
          label: "Em Formação",
          value: "forming",
        },
      ],
      label: "Estado",
    },

    // Relacionamentos principais
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      required: true,
      admin: {
        description: "Organização à qual a equipe pertence",
      },
    },

    {
      name: "leader",
      type: "relationship",
      relationTo: "members",
      label: "Líder/Responsável",
      required: true,
      admin: {
        description: "Membro responsável pela equipe",
      },
    },

    {
      name: "members",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Membros",
      admin: {
        description: "Membros da equipe",
      },
    },

    // Relacionamentos com SaaS e Apps
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
      label: "SaaS",
      admin: {
        description: "SaaS gerenciados por esta equipe",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps desenvolvidos/mantidos pela equipe",
      },
    },

    // Mídia
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Imagem/Avatar",
    },

    {
      name: "banner",
      type: "upload",
      relationTo: "media",
      label: "Banner da Equipe",
    },

    // Informações adicionais
    {
      name: "department",
      type: "text",
      label: "Departamento",
    },

    {
      name: "specialty",
      type: "text",
      label: "Especialidade",
      admin: {
        description: "Ex: Desenvolvimento, Marketing, Suporte",
      },
    },

    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [
        {
          name: "tag",
          type: "text",
          label: "Tag",
        },
      ],
    },

    // Métricas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "total_members",
          type: "number",
          label: "Total de Membros",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "active_members",
          type: "number",
          label: "Membros Ativos",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "projects_completed",
          type: "number",
          label: "Projetos Concluídos",
          defaultValue: 0,
        },
        {
          name: "projects_active",
          type: "number",
          label: "Projetos Ativos",
          defaultValue: 0,
        },
      ],
    },

    // Projetos
    {
      name: "projects",
      type: "array",
      label: "Projetos",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nome do Projeto",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          options: [
            { label: "Planejamento", value: "planning" },
            { label: "Em Andamento", value: "in_progress" },
            { label: "Concluído", value: "completed" },
            { label: "Pausado", value: "paused" },
          ],
          defaultValue: "planning",
        },
        {
          name: "start_date",
          type: "date",
          label: "Data de Início",
        },
        {
          name: "end_date",
          type: "date",
          label: "Data de Término",
        },
      ],
    },

    // Datas
    {
      name: "created_at",
      type: "date",
      label: "Data de Criação",
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
      },
    },

    {
      name: "updated_at",
      type: "date",
      label: "Última Atualização",
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
      },
    },

    // Configurações
    {
      name: "settings",
      type: "group",
      label: "Configurações",
      fields: [
        {
          name: "is_public",
          type: "checkbox",
          label: "Equipe Pública",
          defaultValue: true,
        },
        {
          name: "allow_self_join",
          type: "checkbox",
          label: "Permitir Auto-Inscrição",
          defaultValue: false,
        },
        {
          name: "require_approval",
          type: "checkbox",
          label: "Exigir Aprovação para Entrada",
          defaultValue: true,
        },
      ],
    },

    // Comunicação
    {
      name: "communication",
      type: "group",
      label: "Canais de Comunicação",
      fields: [
        {
          name: "slack",
          type: "text",
          label: "Slack Channel",
        },
        {
          name: "discord",
          type: "text",
          label: "Discord Server",
        },
        {
          name: "whatsapp",
          type: "text",
          label: "WhatsApp Group",
        },
        {
          name: "email",
          type: "email",
          label: "Email da Equipe",
        },
      ],
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Gerar slug automaticamente se não for fornecido
        if (!data.slug && data.name) {
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Calcular métricas automaticamente
        if (data.members && Array.isArray(data.members)) {
          data.metrics = data.metrics || {};
          data.metrics.total_members = data.members.length;
          // Nota: active_members precisaria de lógica adicional baseada no status dos membros
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("teams." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("teams.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});