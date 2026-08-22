export default ({ core }: any) => ({
  slug: "proposals",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["reference", "title", "type", "status", "organization", "total", "valid_until"],
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
        description: "Título da proposta",
      },
    },

    {
      name: "reference",
      type: "text",
      required: true,
      unique: true,
      label: "Referência",
      admin: {
        description: "Número de referência único da proposta",
      },
    },

    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Proposta Comercial",
          value: "commercial",
        },
        {
          label: "Proposta Técnica",
          value: "technical",
        },
        {
          label: "Comercial e Técnica",
          value: "commercial_technical",
        },
        {
          label: "Proposta de Serviços",
          value: "services",
        },
        {
          label: "Proposta de Parceria",
          value: "partnership",
        },
      ],
      label: "Tipo",
    },

    // Status
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        {
          label: "Rascunho",
          value: "draft",
        },
        {
          label: "Em análise",
          value: "review",
        },
        {
          label: "Enviada",
          value: "sent",
        },
        {
          label: "Aceite",
          value: "accepted",
        },
        {
          label: "Rejeitada",
          value: "rejected",
        },
        {
          label: "Expirada",
          value: "expired",
        },
        {
          label: "Cancelada",
          value: "cancelled",
        },
        {
          label: "Negociação",
          value: "negotiation",
        },
        {
          label: "Aprovada",
          value: "approved",
        },
        {
          label: "Em implementação",
          value: "implementation",
        },
        {
          label: "Concluída",
          value: "completed",
        },
      ],
      label: "Estado",
    },

    // Descrição e conteúdo
    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      admin: {
        description: "Descrição resumida da proposta",
      },
    },

    {
      name: "content",
      type: "richText",
      required: true,
      label: "Conteúdo",
      admin: {
        description: "Conteúdo detalhado da proposta",
      },
    },

    {
      name: "executive_summary",
      type: "richText",
      label: "Resumo Executivo",
      admin: {
        description: "Resumo executivo da proposta",
      },
    },

    // Relacionamentos
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
      admin: {
        description: "Organização emissora da proposta",
      },
    },

    {
      name: "client_organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização Cliente",
      admin: {
        description: "Organização cliente da proposta",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado à proposta",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps relacionados à proposta",
      },
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
      admin: {
        description: "Soluções propostas",
      },
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      required: true,
      admin: {
        description: "Membro responsável pela proposta",
      },
    },

    {
      name: "team",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Equipe",
      admin: {
        description: "Equipe envolvida na proposta",
      },
    },

    // Datas
    {
      name: "issue_date",
      type: "date",
      label: "Data de Emissão",
      defaultValue: () => new Date(),
    },

    {
      name: "valid_until",
      type: "date",
      label: "Válida até",
      admin: {
        description: "Data de validade da proposta",
      },
    },

    {
      name: "sent_at",
      type: "date",
      label: "Data de Envio",
      admin: {
        description: "Data em que a proposta foi enviada",
      },
    },

    {
      name: "responded_at",
      type: "date",
      label: "Data de Resposta",
      admin: {
        description: "Data de resposta do cliente",
      },
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

    // Valores financeiros
    {
      name: "currency",
      type: "select",
      defaultValue: "STN",
      options: [
        { label: "STN (São Tomé)", value: "STN" },
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" },
        { label: "BRL", value: "BRL" },
        { label: "AOA", value: "AOA" },
        { label: "CVE", value: "CVE" },
      ],
      label: "Moeda",
    },

    {
      name: "total",
      type: "number",
      label: "Valor Total",
      min: 0,
    },

    {
      name: "subtotal",
      type: "number",
      label: "Subtotal",
      min: 0,
    },

    {
      name: "taxes",
      type: "number",
      label: "Impostos",
      min: 0,
    },

    {
      name: "discount",
      type: "number",
      label: "Desconto",
      min: 0,
    },

    // Itens da proposta
    {
      name: "items",
      type: "array",
      label: "Itens da Proposta",
      fields: [
        {
          name: "description",
          type: "text",
          required: true,
          label: "Descrição",
        },
        {
          name: "quantity",
          type: "number",
          required: true,
          label: "Quantidade",
          defaultValue: 1,
        },
        {
          name: "unit_price",
          type: "number",
          required: true,
          label: "Preço Unitário",
          min: 0,
        },
        {
          name: "total",
          type: "number",
          label: "Total",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "discount",
          type: "number",
          label: "Desconto (%)",
          min: 0,
          max: 100,
        },
        {
          name: "notes",
          type: "textarea",
          label: "Observações",
        },
      ],
    },

    // Especificações técnicas
    {
      name: "technical_specs",
      type: "group",
      label: "Especificações Técnicas",
      fields: [
        {
          name: "requirements",
          type: "richText",
          label: "Requisitos",
        },
        {
          name: "architecture",
          type: "richText",
          label: "Arquitetura",
        },
        {
          name: "technologies",
          type: "array",
          label: "Tecnologias",
          fields: [
            {
              name: "technology",
              type: "text",
              label: "Tecnologia",
            },
            {
              name: "version",
              type: "text",
              label: "Versão",
            },
            {
              name: "purpose",
              type: "text",
              label: "Propósito",
            },
          ],
        },
        {
          name: "integration",
          type: "richText",
          label: "Integrações",
        },
        {
          name: "security",
          type: "richText",
          label: "Segurança",
        },
      ],
    },

    // Escopo do projeto
    {
      name: "scope",
      type: "group",
      label: "Escopo do Projeto",
      fields: [
        {
          name: "included",
          type: "array",
          label: "Incluído",
          fields: [
            {
              name: "item",
              type: "text",
              label: "Item",
            },
          ],
        },
        {
          name: "excluded",
          type: "array",
          label: "Excluído",
          fields: [
            {
              name: "item",
              type: "text",
              label: "Item",
            },
          ],
        },
        {
          name: "deliverables",
          type: "array",
          label: "Entregáveis",
          fields: [
            {
              name: "deliverable",
              type: "text",
              label: "Entregável",
            },
            {
              name: "deadline",
              type: "date",
              label: "Prazo",
            },
          ],
        },
      ],
    },

    // Cronograma
    {
      name: "timeline",
      type: "array",
      label: "Cronograma",
      fields: [
        {
          name: "phase",
          type: "text",
          required: true,
          label: "Fase",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "duration",
          type: "text",
          label: "Duração",
          admin: {
            description: "Ex: 2 semanas, 1 mês",
          },
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
        {
          name: "responsibles",
          type: "relationship",
          relationTo: "members",
          hasMany: true,
          label: "Responsáveis",
        },
      ],
    },

    // Condições de pagamento
    {
      name: "payment_terms",
      type: "group",
      label: "Condições de Pagamento",
      fields: [
        {
          name: "payment_schedule",
          type: "array",
          label: "Cronograma de Pagamento",
          fields: [
            {
              name: "description",
              type: "text",
              required: true,
              label: "Descrição",
            },
            {
              name: "percentage",
              type: "number",
              label: "Percentual (%)",
              min: 0,
              max: 100,
            },
            {
              name: "amount",
              type: "number",
              label: "Valor",
              min: 0,
            },
            {
              name: "due_date",
              type: "date",
              label: "Data de Vencimento",
            },
          ],
        },
        {
          name: "payment_methods",
          type: "array",
          label: "Métodos de Pagamento",
          fields: [
            {
              name: "method",
              type: "text",
              label: "Método",
            },
          ],
        },
        {
          name: "late_fees",
          type: "text",
          label: "Multa por Atraso",
          admin: {
            description: "Ex: 2% ao mês",
          },
        },
      ],
    },

    // Termos e condições
    {
      name: "terms_and_conditions",
      type: "richText",
      label: "Termos e Condições",
    },

    {
      name: "warranty",
      type: "richText",
      label: "Garantia",
    },

    {
      name: "support",
      type: "richText",
      label: "Suporte",
    },

    // Anexos
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
          label: "Nome",
        },
        {
          name: "description",
          type: "text",
          label: "Descrição",
        },
      ],
    },

    // Documentos assinados
    {
      name: "signed_document",
      type: "upload",
      relationTo: "media",
      label: "Documento Assinado",
      admin: {
        description: "PDF assinado do contrato/proposta",
      },
    },

    // Métricas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "views",
          type: "number",
          label: "Visualizações",
          defaultValue: 0,
        },
        {
          name: "downloads",
          type: "number",
          label: "Downloads",
          defaultValue: 0,
        },
        {
          name: "response_time",
          type: "number",
          label: "Tempo de Resposta (dias)",
        },
        {
          name: "conversion_rate",
          type: "number",
          label: "Taxa de Conversão (%)",
          defaultValue: 0,
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

    // Configurações
    {
      name: "settings",
      type: "group",
      label: "Configurações",
      fields: [
        {
          name: "is_public",
          type: "checkbox",
          label: "Pública",
          defaultValue: false,
        },
        {
          name: "allow_comments",
          type: "checkbox",
          label: "Permitir Comentários",
          defaultValue: true,
        },
        {
          name: "send_notifications",
          type: "checkbox",
          label: "Enviar Notificações",
          defaultValue: true,
        },
        {
          name: "auto_approve",
          type: "checkbox",
          label: "Aprovação Automática",
          defaultValue: false,
        },
      ],
    },

    // Histórico
    {
      name: "history",
      type: "array",
      label: "Histórico",
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: "event",
          type: "text",
          label: "Evento",
          admin: {
            description: "Ex: Criada, Enviada, Aceite",
          },
        },
        {
          name: "date",
          type: "date",
          label: "Data",
          defaultValue: () => new Date(),
        },
        {
          name: "user",
          type: "relationship",
          relationTo: "members",
          label: "Usuário",
        },
        {
          name: "notes",
          type: "text",
          label: "Notas",
        },
        {
          name: "status_before",
          type: "text",
          label: "Status Anterior",
        },
        {
          name: "status_after",
          type: "text",
          label: "Status Atual",
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a proposta",
      },
    },

    // Feedback do cliente
    {
      name: "client_feedback",
      type: "richText",
      label: "Feedback do Cliente",
      admin: {
        description: "Feedback recebido do cliente",
      },
    },

    // Ações de follow-up
    {
      name: "follow_up",
      type: "array",
      label: "Ações de Follow-up",
      fields: [
        {
          name: "date",
          type: "date",
          required: true,
          label: "Data",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Descrição",
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          options: [
            { label: "Pendente", value: "pending" },
            { label: "Realizada", value: "done" },
            { label: "Cancelada", value: "cancelled" },
          ],
          defaultValue: "pending",
        },
        {
          name: "responsible",
          type: "relationship",
          relationTo: "members",
          label: "Responsável",
        },
        {
          name: "result",
          type: "textarea",
          label: "Resultado",
        },
      ],
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Gerar referência automaticamente se não for fornecida
        if (!data.reference) {
          const prefix = data.type === "commercial" ? "COM" : 
                        data.type === "technical" ? "TEC" : "CT";
          const year = new Date().getFullYear();
          const count = await req.payload.find({
            collection: "proposals",
            limit: 1,
            sort: "-created_at",
          });
          const nextNumber = (count.totalDocs || 0) + 1;
          data.reference = `${prefix}/${year}/${String(nextNumber).padStart(4, '0')}`;
        }

        // Calcular total dos itens
        if (data.items && Array.isArray(data.items)) {
          let subtotal = 0;
          data.items = data.items.map((item: any) => {
            const total = item.quantity * item.unit_price;
            if (item.discount) {
              const discountAmount = total * (item.discount / 100);
              item.total = total - discountAmount;
            } else {
              item.total = total;
            }
            subtotal += item.total || 0;
            return item;
          });
          data.subtotal = subtotal;

          // Aplicar desconto geral e impostos
          let total = subtotal;
          if (data.discount) {
            total = total - (subtotal * (data.discount / 100));
          }
          if (data.taxes) {
            total = total + (total * (data.taxes / 100));
          }
          data.total = Math.round(total * 100) / 100;
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Registrar histórico de status
        if (data.status) {
          data.history = data.history || [];
          const lastHistory = data.history[data.history.length - 1];
          if (!lastHistory || lastHistory.status_after !== data.status) {
            data.history.push({
              event: `Status alterado para ${data.status}`,
              date: new Date().toISOString(),
              user: req?.user?.id || null,
              status_before: lastHistory?.status_after || null,
              status_after: data.status,
              notes: data.status === "sent" ? "Proposta enviada ao cliente" :
                     data.status === "accepted" ? "Proposta aceita pelo cliente" :
                     data.status === "rejected" ? "Proposta rejeitada pelo cliente" :
                     data.status === "expired" ? "Proposta expirada" :
                     "Status alterado"
            });
          }
        }

        // Verificar validade
        if (data.valid_until) {
          const validUntil = new Date(data.valid_until);
          const now = new Date();
          if (validUntil < now && data.status === "sent") {
            data.status = "expired";
          }
        }

        // Atualizar data de envio
        if (data.status === "sent" && !data.sent_at) {
          data.sent_at = new Date().toISOString();
        }

        // Atualizar data de resposta
        if ((data.status === "accepted" || data.status === "rejected") && !data.responded_at) {
          data.responded_at = new Date().toISOString();
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("proposals." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("proposals.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});