export default ({ core }: any) => ({
  slug: "feedback",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "rating", "author", "created_at"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Informações principais
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      admin: {
        description: "Resumo do feedback",
      },
    },

    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Feedback",
      admin: {
        description: "Descrição detalhada do feedback",
      },
    },

    // Tipo de feedback
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
        {
          label: "Suporte",
          value: "support",
        },
        {
          label: "Reclamação",
          value: "complaint",
        },
      ],
      label: "Tipo",
    },

    // Avaliação
    {
      name: "rating",
      type: "number",
      label: "Avaliação (0-5)",
      min: 0,
      max: 5,
      admin: {
        description: "Nota de 0 a 5 estrelas",
      },
    },

    // Status
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
        {
          label: "Aguardando cliente",
          value: "waiting_client",
        },
        {
          label: "Aguardando equipe",
          value: "waiting_team",
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
        { label: "Baixa", value: "low" },
        { label: "Média", value: "medium" },
        { label: "Alta", value: "high" },
        { label: "Urgente", value: "urgent" },
        { label: "Crítica", value: "critical" },
      ],
      label: "Prioridade",
    },

    // Relacionamentos
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      label: "Cliente",
      admin: {
        description: "Cliente que enviou o feedback",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização vinculada",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado ao feedback",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App específico relacionado",
      },
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Autor",
      required: true,
      admin: {
        description: "Membro que enviou o feedback",
      },
    },

    // Resposta
    {
      name: "response",
      type: "textarea",
      label: "Resposta",
      admin: {
        description: "Resposta oficial ao feedback",
      },
    },

    {
      name: "responded_by",
      type: "relationship",
      relationTo: "members",
      label: "Respondido por",
      admin: {
        description: "Membro que respondeu ao feedback",
      },
    },

    {
      name: "response_date",
      type: "date",
      label: "Data da Resposta",
    },

    // Configurações
    {
      name: "is_public",
      type: "checkbox",
      defaultValue: false,
      label: "Público",
      admin: {
        description: "Feedback visível publicamente",
      },
    },

    {
      name: "is_anonymous",
      type: "checkbox",
      defaultValue: false,
      label: "Anônimo",
      admin: {
        description: "Ocultar identidade do autor",
      },
    },

    {
      name: "is_featured",
      type: "checkbox",
      defaultValue: false,
      label: "Destacado",
      admin: {
        description: "Feedback em destaque",
      },
    },

    // Metadados
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

    {
      name: "attachments",
      type: "array",
      label: "Anexos",
      fields: [
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          label: "Arquivo",
        },
        {
          name: "name",
          type: "text",
          label: "Nome do Arquivo",
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
          name: "upvotes",
          type: "number",
          label: "Votos Positivos",
          defaultValue: 0,
        },
        {
          name: "downvotes",
          type: "number",
          label: "Votos Negativos",
          defaultValue: 0,
        },
        {
          name: "views",
          type: "number",
          label: "Visualizações",
          defaultValue: 0,
        },
        {
          name: "response_time",
          type: "number",
          label: "Tempo de Resposta (horas)",
          admin: {
            readOnly: true,
          },
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

    {
      name: "resolved_at",
      type: "date",
      label: "Data de Resolução",
    },

    // Histórico
    {
      name: "history",
      type: "array",
      label: "Histórico de Atualizações",
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: "status",
          type: "text",
          label: "Status",
        },
        {
          name: "updated_by",
          type: "relationship",
          relationTo: "members",
          label: "Atualizado por",
        },
        {
          name: "updated_at",
          type: "date",
          label: "Data da Atualização",
        },
        {
          name: "comment",
          type: "text",
          label: "Comentário",
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre o feedback",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Calcular tempo de resposta se houver resposta
        if (data.response && data.created_at) {
          const created = new Date(data.created_at);
          const now = new Date();
          const hours = Math.round((now.getTime() - created.getTime()) / (1000 * 60 * 60));
          data.metrics = data.metrics || {};
          data.metrics.response_time = hours;
        }

        // Registrar histórico de status
        if (data.status) {
          data.history = data.history || [];
          data.history.push({
            status: data.status,
            updated_by: req?.user?.id || null,
            updated_at: new Date().toISOString(),
            comment: `Status alterado para ${data.status}`,
          });
        }

        // Se status for "resolved", registrar data de resolução
        if (data.status === "resolved" && !data.resolved_at) {
          data.resolved_at = new Date().toISOString();
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("feedback." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("feedback.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});