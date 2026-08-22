export default ({ core }: any) => ({
  slug: "clients",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "status", "email", "country", "saas"],
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
      label: "Nome do Cliente",
      admin: {
        description: "Nome completo da empresa ou pessoa",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o cliente",
      },
    },

    {
      name: "short_name",
      type: "text",
      label: "Nome Curto",
      admin: {
        description: "Nome abreviado para exibição em listas",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      admin: {
        description: "Breve descrição do cliente",
      },
    },

    // Tipo
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "organization",
      options: [
        {
          label: "Empresa",
          value: "company",
        },
        {
          label: "Organização",
          value: "organization",
        },
        {
          label: "Instituição",
          value: "institution",
        },
        {
          label: "Pessoa Física",
          value: "individual",
        },
        {
          label: "Startup",
          value: "startup",
        },
        {
          label: "ONG",
          value: "ngo",
        },
        {
          label: "Governo",
          value: "government",
        },
        {
          label: "Outro",
          value: "other",
        },
      ],
      label: "Tipo de Cliente",
    },

    // Status
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
          label: "Potencial",
          value: "prospect",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Suspenso",
          value: "suspended",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
        {
          label: "Em negociação",
          value: "negotiation",
        },
        {
          label: "Ex-cliente",
          value: "former",
        },
      ],
      label: "Estado",
    },

    // Contato
    {
      name: "email",
      type: "email",
      label: "Email",
      admin: {
        description: "Email principal de contato",
      },
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
      admin: {
        description: "Telefone principal",
      },
    },

    {
      name: "phone_secondary",
      type: "text",
      label: "Telefone Secundário",
    },

    {
      name: "whatsapp",
      type: "text",
      label: "WhatsApp",
    },

    // Website e redes sociais
    {
      name: "website",
      type: "text",
      label: "Website",
      admin: {
        description: "Site oficial do cliente",
      },
    },

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
          name: "facebook",
          type: "text",
          label: "Facebook",
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter/X",
        },
        {
          name: "youtube",
          type: "text",
          label: "YouTube",
        },
      ],
    },

    // Localização
    {
      name: "country",
      type: "text",
      label: "País",
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
          name: "number",
          type: "text",
          label: "Número",
        },
        {
          name: "complement",
          type: "text",
          label: "Complemento",
        },
        {
          name: "neighborhood",
          type: "text",
          label: "Bairro",
        },
        {
          name: "zip_code",
          type: "text",
          label: "CEP",
        },
      ],
    },

    // Mídia
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
      admin: {
        description: "Logótipo do cliente",
      },
    },

    {
      name: "banner",
      type: "upload",
      relationTo: "media",
      label: "Banner",
      admin: {
        description: "Banner/imagem de capa",
      },
    },

    // Relacionamentos
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização a que pertence (se aplicável)",
      },
    },

    {
      name: "parent_company",
      type: "relationship",
      relationTo: "clients",
      label: "Empresa Mãe",
      admin: {
        description: "Empresa que controla este cliente",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
      label: "SaaS",
      admin: {
        description: "SaaS adquiridos pelo cliente",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps utilizados pelo cliente",
      },
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
      admin: {
        description: "Soluções adquiridas pelo cliente",
      },
    },

    {
      name: "contact",
      type: "relationship",
      relationTo: "members",
      label: "Contacto Principal",
      admin: {
        description: "Membro responsável pelo relacionamento",
      },
    },

    {
      name: "contacts",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Contactos",
      admin: {
        description: "Equipe de contato do cliente",
      },
    },

    // Informações comerciais
    {
      name: "commercial_info",
      type: "group",
      label: "Informações Comerciais",
      fields: [
        {
          name: "tax_id",
          type: "text",
          label: "NIF/CNPJ",
        },
        {
          name: "company_registration",
          type: "text",
          label: "Registro da Empresa",
        },
        {
          name: "industry",
          type: "text",
          label: "Indústria/Segmento",
        },
        {
          name: "size",
          type: "select",
          label: "Tamanho",
          options: [
            { label: "Pequena (1-10)", value: "small" },
            { label: "Média (11-50)", value: "medium" },
            { label: "Grande (51-200)", value: "large" },
            { label: "Enterprise (200+)", value: "enterprise" },
          ],
          defaultValue: "small",
        },
        {
          name: "annual_revenue",
          type: "text",
          label: "Faturamento Anual",
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
          name: "total_projects",
          type: "number",
          label: "Total de Projetos",
          defaultValue: 0,
        },
        {
          name: "active_projects",
          type: "number",
          label: "Projetos Ativos",
          defaultValue: 0,
        },
        {
          name: "total_spent",
          type: "number",
          label: "Total Gasto",
          defaultValue: 0,
          admin: {
            description: "Valor total gasto em projetos",
          },
        },
        {
          name: "satisfaction_score",
          type: "number",
          label: "Nível de Satisfação (%)",
          min: 0,
          max: 100,
          defaultValue: 0,
        },
        {
          name: "client_since",
          type: "date",
          label: "Cliente Desde",
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
        description: "Ex: Tecnologia, Educação, Saúde, Finanças",
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
      name: "last_contact",
      type: "date",
      label: "Último Contato",
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
          defaultValue: true,
        },
        {
          name: "show_in_portfolio",
          type: "checkbox",
          label: "Mostrar no Portfólio",
          defaultValue: true,
        },
        {
          name: "allow_testimonials",
          type: "checkbox",
          label: "Permitir Testemunhos",
          defaultValue: true,
        },
        {
          name: "send_newsletter",
          type: "checkbox",
          label: "Recebe Newsletter",
          defaultValue: true,
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
          required: true,
          label: "Nome do Projeto",
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
            { label: "Cancelado", value: "cancelled" },
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
        {
          name: "budget",
          type: "number",
          label: "Orçamento",
          min: 0,
        },
        {
          name: "saas",
          type: "relationship",
          relationTo: "saas",
          label: "SaaS",
        },
        {
          name: "apps",
          type: "relationship",
          relationTo: "apps",
          hasMany: true,
          label: "Apps",
        },
      ],
    },

    // Testemunhos
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
      label: "Testemunhos",
      admin: {
        description: "Testemunhos deste cliente",
      },
    },

    // Success Stories
    {
      name: "success_stories",
      type: "relationship",
      relationTo: "success_stories",
      hasMany: true,
      label: "Histórias de Sucesso",
      admin: {
        description: "Histórias de sucesso deste cliente",
      },
    },

    // Propostas
    {
      name: "proposals",
      type: "relationship",
      relationTo: "proposals",
      hasMany: true,
      label: "Propostas",
      admin: {
        description: "Propostas enviadas a este cliente",
      },
    },

    // Feedback
    {
      name: "feedback",
      type: "relationship",
      relationTo: "feedback",
      hasMany: true,
      label: "Feedback",
      admin: {
        description: "Feedback recebido do cliente",
      },
    },

    // Notas
    {
      name: "notes",
      type: "richText",
      label: "Notas",
      admin: {
        description: "Observações gerais sobre o cliente",
      },
    },

    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas restritas",
      },
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

        // Validar email
        if (data.email) {
          data.email = data.email.toLowerCase().trim();
        }

        // Atualizar last_contact se houver novo contato
        if (data.last_contact) {
          // Manter como está, apenas registrar
        }

        // Registrar histórico
        if (data.status) {
          data.history = data.history || [];
          const lastHistory = data.history[data.history.length - 1];
          if (!lastHistory || lastHistory.event !== `Status alterado para ${data.status}`) {
            data.history.push({
              event: `Status alterado para ${data.status}`,
              date: new Date().toISOString(),
              user: req?.user?.id || null,
              notes: data.status === "active" ? "Cliente ativo" :
                     data.status === "prospect" ? "Novo prospect" :
                     data.status === "inactive" ? "Cliente inativo" :
                     data.status === "suspended" ? "Cliente suspenso" :
                     data.status === "former" ? "Ex-cliente" :
                     "Status alterado"
            });
          }
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("clients." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("clients.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});