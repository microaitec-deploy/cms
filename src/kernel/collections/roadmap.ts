export default ({ core }: any) => ({
  slug: "roadmaps",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "priority", "progress", "owner"],
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
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      admin: {
        description: "Título do roadmap",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o roadmap",
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

    // Tipo
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
        {
          label: "Marketing",
          value: "marketing",
        },
        {
          label: "Recursos Humanos",
          value: "hr",
        },
      ],
      label: "Tipo",
    },

    // Status
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "planned",
      options: [
        {
          label: "Planeado",
          value: "planned",
        },
        {
          label: "Em Andamento",
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
        {
          label: "Em Espera",
          value: "on_hold",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
      ],
      label: "Estado",
    },

    // Prioridade
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

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado a este roadmap",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App relacionado a este roadmap",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização proprietária do roadmap",
      },
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      required: true,
      admin: {
        description: "Membro responsável pelo roadmap",
      },
    },

    {
      name: "team",
      type: "relationship",
      relationTo: "teams",
      hasMany: true,
      label: "Equipe",
      admin: {
        description: "Equipes envolvidas no roadmap",
      },
    },

    {
      name: "feedback",
      type: "relationship",
      relationTo: "feedback",
      hasMany: true,
      label: "Feedbacks Relacionados",
      admin: {
        description: "Feedbacks que originaram ou estão ligados a este roadmap",
      },
    },

    // Datas
    {
      name: "start_date",
      type: "date",
      label: "Data de Início",
    },

    {
      name: "target_date",
      type: "date",
      label: "Data Prevista",
    },

    {
      name: "end_date",
      type: "date",
      label: "Data de Conclusão",
    },

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

    // Progresso
    {
      name: "progress",
      type: "number",
      defaultValue: 0,
      min: 0,
      max: 100,
      label: "Progresso (%)",
      admin: {
        description: "Progresso geral do roadmap (0-100%)",
      },
    },

    // Itens do Roadmap (estruturado)
    {
      name: "items",
      type: "array",
      label: "Itens do Roadmap",
      fields: [
        {
          name: "id",
          type: "text",
          label: "ID do Item",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Título do Item",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "status",
          type: "select",
          required: true,
          defaultValue: "planned",
          options: [
            { label: "Planeado", value: "planned" },
            { label: "Em Andamento", value: "in_progress" },
            { label: "Em Revisão", value: "review" },
            { label: "Concluído", value: "done" },
            { label: "Bloqueado", value: "blocked" },
            { label: "Cancelado", value: "cancelled" },
          ],
          label: "Status",
        },
        {
          name: "priority",
          type: "select",
          defaultValue: "medium",
          options: [
            { label: "Baixa", value: "low" },
            { label: "Média", value: "medium" },
            { label: "Alta", value: "high" },
            { label: "Crítica", value: "critical" },
          ],
          label: "Prioridade",
        },
        {
          name: "progress",
          type: "number",
          defaultValue: 0,
          min: 0,
          max: 100,
          label: "Progresso (%)",
        },
        {
          name: "start_date",
          type: "date",
          label: "Data de Início",
        },
        {
          name: "target_date",
          type: "date",
          label: "Data Prevista",
        },
        {
          name: "assignees",
          type: "relationship",
          relationTo: "members",
          hasMany: true,
          label: "Responsáveis",
        },
        {
          name: "labels",
          type: "array",
          label: "Labels",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Label",
            },
          ],
        },
        {
          name: "sub_items",
          type: "array",
          label: "Sub-Itens",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              label: "Título",
            },
            {
              name: "status",
              type: "select",
              defaultValue: "planned",
              options: [
                { label: "Planeado", value: "planned" },
                { label: "Em Andamento", value: "in_progress" },
                { label: "Concluído", value: "done" },
              ],
              label: "Status",
            },
            {
              name: "assignee",
              type: "relationship",
              relationTo: "members",
              label: "Responsável",
            },
          ],
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
          name: "total_items",
          type: "number",
          label: "Total de Itens",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "completed_items",
          type: "number",
          label: "Itens Concluídos",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "in_progress_items",
          type: "number",
          label: "Itens em Andamento",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "blocked_items",
          type: "number",
          label: "Itens Bloqueados",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "completion_rate",
          type: "number",
          label: "Taxa de Conclusão (%)",
          admin: {
            readOnly: true,
          },
        },
      ],
    },

    // Tags
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

    // Categoria
    {
      name: "category",
      type: "text",
      label: "Categoria",
      admin: {
        description: "Ex: Backend, Frontend, Infraestrutura, Design",
      },
    },

    // Versão
    {
      name: "version",
      type: "text",
      label: "Versão",
      defaultValue: "1.0.0",
      admin: {
        description: "Versão do roadmap (ex: v2.0.0)",
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
          label: "Público",
          defaultValue: false,
        },
        {
          name: "show_progress",
          type: "checkbox",
          label: "Mostrar Progresso",
          defaultValue: true,
        },
        {
          name: "allow_comments",
          type: "checkbox",
          label: "Permitir Comentários",
          defaultValue: false,
        },
      ],
    },

    // Comentários
    {
      name: "comments",
      type: "array",
      label: "Comentários",
      admin: {
        description: "Comentários internos sobre o roadmap",
      },
      fields: [
        {
          name: "author",
          type: "relationship",
          relationTo: "members",
          label: "Autor",
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          label: "Comentário",
          required: true,
        },
        {
          name: "created_at",
          type: "date",
          label: "Data",
          defaultValue: () => new Date(),
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre o roadmap",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Gerar slug automaticamente se não for fornecido
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Calcular métricas baseadas nos itens
        if (data.items && Array.isArray(data.items)) {
          const total = data.items.length;
          const completed = data.items.filter((item: any) => item.status === "done").length;
          const inProgress = data.items.filter((item: any) => item.status === "in_progress").length;
          const blocked = data.items.filter((item: any) => item.status === "blocked").length;
          
          data.metrics = data.metrics || {};
          data.metrics.total_items = total;
          data.metrics.completed_items = completed;
          data.metrics.in_progress_items = inProgress;
          data.metrics.blocked_items = blocked;
          data.metrics.completion_rate = total > 0 ? Math.round((completed / total) * 100) : 0;

          // Calcular progresso geral
          let totalProgress = 0;
          data.items.forEach((item: any) => {
            totalProgress += item.progress || 0;
          });
          data.progress = total > 0 ? Math.round(totalProgress / total) : 0;
        }

        // Gerar IDs para itens sem ID
        if (data.items && Array.isArray(data.items)) {
          data.items = data.items.map((item: any) => {
            if (!item.id) {
              item.id = `item_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
            }
            return item;
          });
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("roadmaps." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("roadmaps.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});