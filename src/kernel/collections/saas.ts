export default ({ core }: any) => ({
  slug: "saas",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "owner", "created_at"],
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
      label: "Nome do SaaS",
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o SaaS (ex: xkola-saas)",
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

    // Status e informações gerais
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "development",
      options: [
        {
          label: "Em desenvolvimento",
          value: "development",
        },
        {
          label: "Beta",
          value: "beta",
        },
        {
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
        {
          label: "Manutenção",
          value: "maintenance",
        },
      ],
    },

    {
      name: "category",
      type: "text",
      label: "Categoria",
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

    // URLs e mídia
    {
      name: "website",
      type: "text",
      label: "Website",
      admin: {
        description: "URL do site oficial",
      },
    },

    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    {
      name: "banner",
      type: "upload",
      relationTo: "media",
      label: "Banner Principal",
    },

    {
      name: "screenshots",
      type: "array",
      label: "Capturas de Tela",
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

    // Responsáveis
    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      label: "Responsável Principal",
      required: true,
    },

    {
      name: "team",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      label: "Equipe",
      admin: {
        description: "Membros da equipe do SaaS",
      },
    },

    // Relacionamentos com outras coleções
    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicativos",
      admin: {
        description: "Apps vinculados a este SaaS",
      },
    },

    {
      name: "posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      label: "Publicações",
      admin: {
        description: "Artigos de blog vinculados",
      },
    },

    {
      name: "tutoriais",
      type: "relationship",
      relationTo: "tutoriais",
      hasMany: true,
      label: "Tutoriais",
      admin: {
        description: "Tutoriais vinculados",
      },
    },

    // Informações técnicas
    {
      name: "version",
      type: "text",
      label: "Versão",
      defaultValue: "1.0.0",
    },

    {
      name: "api_url",
      type: "text",
      label: "URL da API",
      admin: {
        description: "Endpoint da API do SaaS",
      },
    },

    {
      name: "api_key",
      type: "text",
      label: "API Key",
      admin: {
        readOnly: true,
        description: "Chave de API gerada automaticamente",
      },
    },

    // Planos e preços
    {
      name: "pricing_plans",
      type: "array",
      label: "Planos de Preço",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nome do Plano",
          required: true,
        },
        {
          name: "price",
          type: "text",
          label: "Preço",
          defaultValue: "Gratuito",
        },
        {
          name: "currency",
          type: "text",
          label: "Moeda",
          defaultValue: "USD",
        },
        {
          name: "features",
          type: "textarea",
          label: "Funcionalidades",
        },
        {
          name: "is_popular",
          type: "checkbox",
          label: "Plano Popular",
          defaultValue: false,
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
          name: "total_users",
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
          name: "total_apps",
          type: "number",
          label: "Total de Apps",
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

    // Datas
    {
      name: "launch_date",
      type: "date",
      label: "Data de Lançamento",
    },

    {
      name: "last_update",
      type: "date",
      label: "Última Atualização",
      defaultValue: () => new Date(),
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
          name: "allow_registration",
          type: "checkbox",
          label: "Permitir Registro",
          defaultValue: true,
        },
        {
          name: "require_email_verification",
          type: "checkbox",
          label: "Exigir Verificação de Email",
          defaultValue: false,
        },
      ],
    },

    // Social
    {
      name: "social_links",
      type: "group",
      label: "Redes Sociais",
      fields: [
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
          name: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          name: "youtube",
          type: "text",
          label: "YouTube",
        },
        {
          name: "github",
          type: "text",
          label: "GitHub",
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

        // Gerar API Key automaticamente
        if (!data.api_key) {
          data.api_key = `saas_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
        }

        // Atualizar data de última atualização
        data.last_update = new Date().toISOString();

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("saas." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("saas.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});