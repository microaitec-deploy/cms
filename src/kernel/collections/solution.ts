export default ({ core }: any) => ({
  slug: "solutions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "status", "featured", "order", "saas"],
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
      label: "Nome da Solução",
      admin: {
        description: "Nome da solução/produto",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para a solução",
      },
    },

    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Resumo",
      admin: {
        description: "Resumo curto da solução",
      },
    },

    {
      name: "description",
      type: "richText",
      label: "Descrição Completa",
      admin: {
        description: "Descrição detalhada da solução",
      },
    },

    {
      name: "short_description",
      type: "textarea",
      label: "Descrição Curta",
      admin: {
        description: "Descrição resumida para cards e listagens",
      },
    },

    // Status
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        {
          label: "Em desenvolvimento",
          value: "development",
        },
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
          label: "Beta",
          value: "beta",
        },
        {
          label: "Em manutenção",
          value: "maintenance",
        },
      ],
      label: "Estado",
    },

    // Categoria e Tipo
    {
      name: "category",
      type: "text",
      label: "Categoria",
      admin: {
        description: "Ex: Educação, Saúde, Finanças",
      },
    },

    {
      name: "sub_category",
      type: "text",
      label: "Subcategoria",
    },

    {
      name: "type",
      type: "select",
      label: "Tipo de Solução",
      defaultValue: "saas",
      options: [
        { label: "SaaS", value: "saas" },
        { label: "Plataforma", value: "platform" },
        { label: "App Móvel", value: "mobile" },
        { label: "Web App", value: "web" },
        { label: "Desktop", value: "desktop" },
        { label: "API", value: "api" },
        { label: "Hardware", value: "hardware" },
        { label: "Serviço", value: "service" },
      ],
    //  label: "Tipo",
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
      label: "SaaS",
      admin: {
        description: "SaaS vinculados a esta solução",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps vinculados a esta solução",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização proprietária da solução",
      },
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      required: true,
      admin: {
        description: "Membro responsável pela solução",
      },
    },

    {
      name: "team",
      type: "relationship",
      relationTo: "teams",
      hasMany: true,
      label: "Equipe",
      admin: {
        description: "Equipes envolvidas na solução",
      },
    },

    // Funcionalidades
    {
      name: "features",
      type: "array",
      label: "Funcionalidades",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
          label: "Funcionalidade",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "icon",
          type: "text",
          label: "Ícone",
          admin: {
            description: "Nome do ícone (ex: rocket, users, gear)",
          },
        },
      ],
    },

    // Benefícios
    {
      name: "benefits",
      type: "array",
      label: "Benefícios",
      fields: [
        {
          name: "benefit",
          type: "text",
          required: true,
          label: "Benefício",
        },
        {
          name: "icon",
          type: "text",
          label: "Ícone",
        },
      ],
    },

    // Público-alvo
    {
      name: "target_audience",
      type: "textarea",
      label: "Público-alvo",
      admin: {
        description: "Para quem esta solução é destinada",
      },
    },

    {
      name: "target_audience_list",
      type: "array",
      label: "Público-alvo (Lista)",
      fields: [
        {
          name: "audience",
          type: "text",
          label: "Segmento",
        },
      ],
    },

    // Mídia
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de Capa",
      required: true,
    },

    {
      name: "gallery",
      type: "array",
      label: "Galeria",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagem",
        },
        {
          name: "caption",
          type: "text",
          label: "Legenda",
        },
      ],
    },

    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    // URLs
    {
      name: "website",
      type: "text",
      label: "Website",
      admin: {
        description: "Site oficial da solução",
      },
    },

    {
      name: "demo_url",
      type: "text",
      label: "URL de Demonstração",
      admin: {
        description: "Link para demonstração ao vivo",
      },
    },

    {
      name: "documentation_url",
      type: "text",
      label: "URL da Documentação",
      admin: {
        description: "Link para documentação da solução",
      },
    },

    // Preço
    {
      name: "pricing",
      type: "group",
      label: "Preços",
      fields: [
        {
          name: "is_free",
          type: "checkbox",
          label: "Gratuito",
          defaultValue: false,
        },
        {
          name: "starting_price",
          type: "text",
          label: "Preço Inicial",
          admin: {
            description: "Ex: R$ 29,90/mês",
          },
        },
        {
          name: "currency",
          type: "select",
          label: "Moeda",
          options: [
            { label: "USD", value: "USD" },
            { label: "EUR", value: "EUR" },
            { label: "BRL", value: "BRL" },
            { label: "AOA", value: "AOA" },
            { label: "CVE", value: "CVE" },
          ],
          defaultValue: "USD",
        },
        {
          name: "has_trial",
          type: "checkbox",
          label: "Oferece Teste Gratuito",
          defaultValue: false,
        },
        {
          name: "trial_days",
          type: "number",
          label: "Dias de Teste",
          defaultValue: 7,
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
          name: "users",
          type: "number",
          label: "Total de Usuários",
          defaultValue: 0,
        },
        {
          name: "active_users",
          type: "number",
          label: "Usuários Ativos",
          defaultValue: 0,
        },
        {
          name: "satisfaction_rate",
          type: "number",
          label: "Taxa de Satisfação (%)",
          defaultValue: 0,
        },
        {
          name: "uptime",
          type: "number",
          label: "Uptime (%)",
          defaultValue: 99.9,
        },
      ],
    },

    // Destaque e Ordem
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
      admin: {
        description: "Destacar esta solução",
      },
    },

    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "Ordem",
      admin: {
        description: "Ordem de exibição (0 = primeiro)",
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
    },

    // Badges
    {
      name: "badges",
      type: "array",
      label: "Selos/Badges",
      fields: [
        {
          name: "badge",
          type: "text",
          label: "Selo",
        },
        {
          name: "color",
          type: "text",
          label: "Cor",
          admin: {
            description: "Ex: green, blue, amber, red",
          },
        },
      ],
    },

    // Downloads
    {
      name: "downloads",
      type: "array",
      label: "Downloads",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Nome",
        },
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          label: "Arquivo",
        },
        {
          name: "version",
          type: "text",
          label: "Versão",
        },
        {
          name: "platform",
          type: "text",
          label: "Plataforma",
          admin: {
            description: "Ex: Windows, Mac, Linux, iOS, Android",
          },
        },
      ],
    },

    // Datas
    {
      name: "launch_date",
      type: "date",
      label: "Data de Lançamento",
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
          name: "allow_feedback",
          type: "checkbox",
          label: "Permitir Feedback",
          defaultValue: true,
        },
        {
          name: "show_roadmap",
          type: "checkbox",
          label: "Mostrar Roadmap",
          defaultValue: false,
        },
      ],
    },

    // SEO
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        {
          name: "meta_title",
          type: "text",
          label: "Meta Título",
        },
        {
          name: "meta_description",
          type: "textarea",
          label: "Meta Descrição",
        },
        {
          name: "meta_keywords",
          type: "text",
          label: "Meta Palavras-chave",
        },
        {
          name: "og_image",
          type: "upload",
          relationTo: "media",
          label: "Imagem OG",
        },
      ],
    },

    // Cases de sucesso
    {
      name: "success_stories",
      type: "array",
      label: "Casos de Sucesso",
      fields: [
        {
          name: "client",
          type: "text",
          required: true,
          label: "Cliente",
        },
        {
          name: "testimonial",
          type: "textarea",
          label: "Depoimento",
        },
        {
          name: "result",
          type: "text",
          label: "Resultado",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagem",
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a solução",
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

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("solutions." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("solutions.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});