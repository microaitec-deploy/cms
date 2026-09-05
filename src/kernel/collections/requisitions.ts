export default ({ core }: any) => ({
  slug: "requisitions",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "type", "role", "status", "created_at"],
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
      name: "email",
      type: "text",
      required: true,
      label: "Email",
      admin: {
        description: "Email do requisitante",
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
          label: "Acesso",
          value: "access",
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
        description: "Tipo de requisição",
      },
    },

    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "user",
      options: [
        {
          label: "Usuário",
          value: "user",
        },
        {
          label: "Administrador",
          value: "admin",
        },
        {
          label: "Gerente",
          value: "manager",
        },
        {
          label: "Desenvolvedor",
          value: "developer",
        },
        {
          label: "Visitante",
          value: "guest",
        },
      ],
      label: "Função",
      admin: {
        description: "Função solicitada para o usuário",
      },
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        {
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Em análise",
          value: "review",
        },
        {
          label: "Aprovada",
          value: "approved",
        },
        {
          label: "Rejeitada",
          value: "rejected",
        },
        {
          label: "Concluída",
          value: "completed",
        },
        {
          label: "Cancelada",
          value: "cancelled",
        },
      ],
      label: "Estado",
      admin: {
        description: "Status atual da requisição",
      },
    },

    // Metadata (JSON)
    {
      name: "metadata",
      type: "json",
      label: "Metadados",
      admin: {
        description: "Metadados adicionais da requisição",
      },
    },

    // Info (JSON)
    {
      name: "info",
      type: "json",
      label: "Informações",
      admin: {
        description: "Informações detalhadas da requisição",
      },
    },

    // Datas
    {
      name: "created_at",
      type: "date",
      label: "Data de Criação",
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
        description: "Data em que a requisição foi criada",
      },
    },

    {
      name: "updated_at",
      type: "date",
      label: "Última Atualização",
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
        description: "Data da última atualização",
      },
    },

    // Campos adicionais para melhor gestão
    {
      name: "name",
      type: "text",
      label: "Nome",
      admin: {
        description: "Nome do requisitante (opcional)",
      },
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
      admin: {
        description: "Telefone para contato",
      },
    },

    {
      name: "organization",
      type: "text",
      label: "Organização",
      admin: {
        description: "Organização do requisitante",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      admin: {
        description: "Descrição detalhada da requisição",
      },
    },

    {
      name: "priority",
      type: "select",
      defaultValue: "medium",
      options: [
        { label: "Baixa", value: "low" },
        { label: "Média", value: "medium" },
        { label: "Alta", value: "high" },
        { label: "Urgente", value: "urgent" },
      ],
      label: "Prioridade",
      admin: {
        description: "Prioridade da requisição",
      },
    },

    {
      name: "assigned_to",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      admin: {
        description: "Membro responsável por atender esta requisição",
      },
    },

    {
      name: "response",
      type: "richText",
      label: "Resposta",
      admin: {
        description: "Resposta à requisição",
      },
    },

    {
      name: "responded_at",
      type: "date",
      label: "Respondida em",
      admin: {
        description: "Data em que a resposta foi enviada",
      },
    },

    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a requisição",
      },
    },

    // Histórico
    {
      name: "history",
      type: "array",
      label: "Histórico",
      fields: [
        {
          name: "action",
          type: "select",
          label: "Ação",
          options: [
            { label: "Criação", value: "created" },
            { label: "Atualização", value: "updated" },
            { label: "Mudança de Status", value: "status_change" },
            { label: "Atribuição", value: "assignment" },
            { label: "Resposta", value: "response" },
          ],
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "performed_by",
          type: "relationship",
          relationTo: "members",
          label: "Realizado por",
          required: true,
        },
        {
          name: "performed_at",
          type: "date",
          label: "Data",
          defaultValue: () => new Date(),
        },
      ],
    },

    // Configurações
    {
      name: "settings",
      type: "group",
      label: "Configurações",
      fields: [
        {
          name: "send_email",
          type: "checkbox",
          label: "Enviar email ao requisitante",
          defaultValue: true,
        },
        {
          name: "send_notification",
          type: "checkbox",
          label: "Enviar notificação interna",
          defaultValue: true,
        },
        {
          name: "auto_approve",
          type: "checkbox",
          label: "Aprovar automaticamente",
          defaultValue: false,
        },
        {
          name: "expires_at",
          type: "date",
          label: "Expira em",
        },
      ],
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
  ],

  hooks: {

    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {

            console.log(operation)
          // Publicar evento de mudança
          await core.oneCms.publish("requisitions." + operation, doc);

          //  saas: "c844b2ea-b4aa-4231-881e-baeb4bd9e06c",

        //  console.log(doc)
          
          // Se o status mudou para "approved" ou "rejected"
          if (operation === "update") {
            if (doc.status === "approved") {
              await core.oneCms.publish("requisitions.approved", doc);
            } else if (doc.status === "rejected") {
              await core.oneCms.publish("requisitions.rejected", doc);
            }
            
            // Se teve resposta
            if (doc.response) {
              await core.oneCms.publish("requisitions.responded", doc);
            }
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
          await core.oneCms.publish("requisitions.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ]
  },
});