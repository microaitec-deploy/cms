export default ({ core }: any) => ({
  slug: "contactmessages",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "type", "status", "created_at"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Informações básicas do contato
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome",
      admin: {
        description: "Nome completo do remetente",
      },
    },

    {
      name: "email",
      type: "text",
      required: true,
      label: "Email",
      admin: {
        description: "Email de contato do remetente",
      },
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
      admin: {
        description: "Telefone para contato (opcional)",
      },
    },

    {
      name: "organization",
      type: "text",
      label: "Organização",
      admin: {
        description: "Nome da empresa/organização (opcional)",
      },
    },

    // Assunto e Tipo
    {
      name: "subject",
      type: "text",
      required: true,
      label: "Assunto",
      admin: {
        description: "Assunto da mensagem",
      },
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
          label: "Informação comercial",
          value: "sales",
        },
        {
          label: "Suporte",
          value: "support",
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
          label: "Parceria",
          value: "partnership",
        },
        {
          label: "Outro",
          value: "other",
        },
      ],
      label: "Tipo",
      admin: {
        description: "Categoria da mensagem",
      },
    },

    // Conteúdo da mensagem
    {
      name: "message",
      type: "richText",
      required: true,
      label: "Mensagem",
      admin: {
        description: "Conteúdo da mensagem enviada",
      },
    },

    // Status e gerenciamento
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        {
          label: "Nova",
          value: "new",
        },
        {
          label: "Em análise",
          value: "review",
        },
        {
          label: "Em atendimento",
          value: "in_progress",
        },
        {
          label: "Respondida",
          value: "replied",
        },
        {
          label: "Concluída",
          value: "resolved",
        },
        {
          label: "Arquivada",
          value: "archived",
        },
      ],
      label: "Estado",
      admin: {
        description: "Status atual da mensagem",
      },
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado à mensagem",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App relacionado à mensagem",
      },
    },

    {
      name: "assigned_to", // CORRIGIDO: snake_case
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      admin: {
        description: "Membro responsável por atender esta mensagem",
      },
    },

    // Resposta
    {
      name: "response",
      type: "richText",
      label: "Resposta",
      admin: {
        description: "Resposta enviada ao remetente",
      },
    },

    {
      name: "responded_at", // CORRIGIDO: snake_case
      type: "date",
      label: "Respondida em",
      admin: {
        description: "Data em que a resposta foi enviada",
      },
    },

    {
      name: "source",
      type: "text",
      defaultValue: "website",
      label: "Origem",
      admin: {
        description: "Origem da mensagem (website, app, etc.)",
      },
    },

    // Datas de criação e atualização
    {
      name: "created_at",
      type: "date",
      label: "Data de Criação",
      admin: {
        readOnly: true,
        description: "Data em que a mensagem foi recebida",
      },
    },

    {
      name: "updated_at",
      type: "date",
      label: "Última Atualização",
      admin: {
        readOnly: true,
        description: "Data da última alteração na mensagem",
      },
    },

    // Métricas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "response_time",
          type: "number",
          label: "Tempo de Resposta (minutos)",
          admin: {
            description: "Tempo decorrido entre recebimento e resposta",
          },
        },
        {
          name: "priority",
          type: "select",
          label: "Prioridade",
          options: [
            { label: "Baixa", value: "low" },
            { label: "Média", value: "medium" },
            { label: "Alta", value: "high" },
            { label: "Urgente", value: "urgent" },
          ],
          defaultValue: "medium",
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a mensagem",
      },
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
      admin: {
        description: "Tags para categorização adicional",
      },
    },

    // Histórico de interações
    {
      name: "interactions",
      type: "array",
      label: "Histórico de Interações",
      fields: [
        {
          name: "type",
          type: "select",
          label: "Tipo",
          options: [
            { label: "Resposta", value: "reply" },
            { label: "Nota", value: "note" },
            { label: "Status", value: "status_change" },
            { label: "Atribuição", value: "assignment" },
          ],
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          label: "Conteúdo",
        },
        {
          name: "performed_by", // CORRIGIDO: snake_case
          type: "relationship",
          relationTo: "members",
          label: "Realizado por",
          required: true,
        },
        {
          name: "performed_at", // CORRIGIDO: snake_case
          type: "date",
          label: "Data",
        },
      ],
    },

    // Configurações de notificação
    {
      name: "notification_settings",
      type: "group",
      label: "Configurações de Notificação",
      fields: [
        {
          name: "email_sent",
          type: "checkbox",
          label: "Email enviado ao remetente",
          defaultValue: false,
        },
        {
          name: "email_sent_at",
          type: "date",
          label: "Email enviado em",
        },
        {
          name: "internal_notification_sent",
          type: "checkbox",
          label: "Notificação interna enviada",
          defaultValue: false,
        },
        {
          name: "auto_response_sent",
          type: "checkbox",
          label: "Resposta automática enviada",
          defaultValue: false,
        },
      ],
    },

    // Classificação
    {
      name: "rating",
      type: "number",
      label: "Avaliação",
      min: 1,
      max: 5,
      admin: {
        description: "Avaliação do atendimento (1-5)",
      },
    },

    {
      name: "feedback",
      type: "textarea",
      label: "Feedback do Cliente",
      admin: {
        description: "Feedback adicional sobre o atendimento",
      },
    },
  ],

  hooks: {

    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          // Publicar evento de mudança
          await core.oneCms.publish("contact-messages." + operation, doc);
          
          // Se o status mudou para "replied" e temos uma resposta, enviar notificação
          if (operation === "update" && doc.status === "replied" && doc.response) {
            await core.oneCms.publish("contact-messages.replied", doc);
          }
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("contact-messages.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],

  },
});