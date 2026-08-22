export default ({ core }: any) => ({
  slug: "features",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "status", "saas", "priority"],
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
      label: "Nome da Funcionalidade",
      admin: {
        description: "Nome da funcionalidade do SaaS",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para a funcionalidade",
      },
    },

    {
      name: "short_description",
      type: "text",
      label: "Descrição Curta",
      admin: {
        description: "Descrição resumida da funcionalidade",
      },
    },

    {
      name: "description",
      type: "richText",
      label: "Descrição Completa",
      admin: {
        description: "Descrição detalhada da funcionalidade",
      },
    },

    // Categoria
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "core",
      options: [
        { label: "Core", value: "core" },
        { label: "Gestão", value: "management" },
        { label: "Comunicação", value: "communication" },
        { label: "Financeiro", value: "financial" },
        { label: "Relatórios", value: "reports" },
        { label: "Integração", value: "integration" },
        { label: "Segurança", value: "security" },
        { label: "IA", value: "ai" },
        { label: "Mobile", value: "mobile" },
        { label: "Automação", value: "automation" },
        { label: "Colaboração", value: "collaboration" },
        { label: "Personalização", value: "customization" },
      ],
      label: "Categoria",
    },

    {
      name: "sub_category",
      type: "text",
      label: "Subcategoria",
      admin: {
        description: "Categoria mais específica",
      },
    },

    // Status
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Ativa", value: "active" },
        { label: "Em desenvolvimento", value: "development" },
        { label: "Em teste", value: "testing" },
        { label: "Beta", value: "beta" },
        { label: "Inativa", value: "inactive" },
        { label: "Descontinuada", value: "deprecated" },
        { label: "Planejada", value: "planned" },
      ],
      label: "Status",
    },

    // Prioridade
    {
      name: "priority",
      type: "select",
      required: true,
      defaultValue: "medium",
      options: [
        { label: "Baixa", value: "low" },
        { label: "Média", value: "medium" },
        { label: "Alta", value: "high" },
        { label: "Crítica", value: "critical" },
      ],
      label: "Prioridade",
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      required: true,
      label: "SaaS",
      admin: {
        description: "SaaS ao qual a funcionalidade pertence",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps onde a funcionalidade está disponível",
      },
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
      admin: {
        description: "Soluções que incluem esta funcionalidade",
      },
    },

    {
      name: "parent_feature",
      type: "relationship",
      relationTo: "features",
      label: "Funcionalidade Principal",
      admin: {
        description: "Funcionalidade pai (se for subfuncionalidade)",
      },
    },

    // Plano de preço
    {
      name: "pricing_tiers",
      type: "array",
      label: "Planos de Preço",
      admin: {
        description: "Planos que incluem esta funcionalidade",
      },
      fields: [
        {
          name: "tier",
          type: "select",
          label: "Plano",
          options: [
            { label: "Gratuito", value: "free" },
            { label: "Básico", value: "basic" },
            { label: "Profissional", value: "professional" },
            { label: "Empresarial", value: "enterprise" },
            { label: "Custom", value: "custom" },
          ],
          required: true,
        },
        {
          name: "availability",
          type: "select",
          label: "Disponibilidade",
          options: [
            { label: "Incluído", value: "included" },
            { label: "Disponível (Pago)", value: "paid" },
            { label: "Disponível (Add-on)", value: "addon" },
            { label: "Não Disponível", value: "unavailable" },
          ],
          defaultValue: "included",
        },
        {
          name: "limit",
          type: "text",
          label: "Limite",
          admin: {
            description: "Ex: 100 usuários, 5 projetos, Ilimitado",
          },
        },
      ],
    },

    // Mídia
    {
      name: "icon",
      type: "text",
      label: "Ícone",
      admin: {
        description: "Nome do ícone (ex: rocket, users, gear)",
      },
    },

    {
      name: "icon_type",
      type: "select",
      label: "Tipo de Ícone",
      options: [
        { label: "Font Awesome", value: "font-awesome" },
        { label: "Lucide", value: "lucide" },
        { label: "Material Icons", value: "material" },
        { label: "Custom", value: "custom" },
      ],
      defaultValue: "font-awesome",
    },

    {
      name: "icon_image",
      type: "upload",
      relationTo: "media",
      label: "Ícone Personalizado",
      admin: {
        description: "Upload de ícone personalizado",
      },
    },

    {
      name: "screenshot",
      type: "upload",
      relationTo: "media",
      label: "Screenshot",
      admin: {
        description: "Exemplo visual da funcionalidade",
      },
    },

    {
      name: "video_url",
      type: "text",
      label: "URL do Vídeo",
      admin: {
        description: "Link para demonstração em vídeo",
      },
    },

    // Documentação
    {
      name: "documentation",
      type: "group",
      label: "Documentação",
      fields: [
        {
          name: "url",
          type: "text",
          label: "URL da Documentação",
        },
        {
          name: "guide",
          type: "richText",
          label: "Guia de Uso",
        },
        {
          name: "api_endpoint",
          type: "text",
          label: "Endpoint da API",
        },
        {
          name: "example_usage",
          type: "code",
          label: "Exemplo de Uso",
          admin: {
            language: "javascript",
          },
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
          name: "usage_count",
          type: "number",
          label: "Contagem de Uso",
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
          min: 0,
          max: 100,
          defaultValue: 0,
        },
        {
          name: "adoption_rate",
          type: "number",
          label: "Taxa de Adoção (%)",
          min: 0,
          max: 100,
          defaultValue: 0,
        },
      ],
    },

    // Dependências
    {
      name: "dependencies",
      type: "relationship",
      relationTo: "features",
      hasMany: true,
      label: "Dependências",
      admin: {
        description: "Funcionalidades necessárias para esta funcionar",
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

    // Datas
    {
      name: "release_date",
      type: "date",
      label: "Data de Lançamento",
    },

    {
      name: "version",
      type: "text",
      label: "Versão",
      defaultValue: "1.0.0",
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
          label: "Pública",
          defaultValue: true,
        },
        {
          name: "is_visible",
          type: "checkbox",
          label: "Visível na Interface",
          defaultValue: true,
        },
        {
          name: "is_configurable",
          type: "checkbox",
          label: "Configurável",
          defaultValue: false,
        },
        {
          name: "requires_setup",
          type: "checkbox",
          label: "Requer Configuração",
          defaultValue: false,
        },
        {
          name: "beta",
          type: "checkbox",
          label: "Beta",
          defaultValue: false,
        },
        {
          name: "experimental",
          type: "checkbox",
          label: "Experimental",
          defaultValue: false,
        },
      ],
    },

    // Permissões
    {
      name: "permissions",
      type: "group",
      label: "Permissões",
      fields: [
        {
          name: "requires_admin",
          type: "checkbox",
          label: "Requer Admin",
          defaultValue: false,
        },
        {
          name: "requires_roles",
          type: "array",
          label: "Requer Funções",
          fields: [
            {
              name: "role",
              type: "text",
              label: "Função",
            },
          ],
        },
      ],
    },

    // Feedback
    {
      name: "feedback",
      type: "relationship",
      relationTo: "feedback",
      hasMany: true,
      label: "Feedback",
      admin: {
        description: "Feedback relacionado a esta funcionalidade",
      },
    },

    // Roadmap
    {
      name: "roadmap_items",
      type: "relationship",
      relationTo: "roadmaps",
      hasMany: true,
      label: "Itens do Roadmap",
      admin: {
        description: "Itens do roadmap relacionados",
      },
    },

    // Notas
    {
      name: "notes",
      type: "richText",
      label: "Notas",
      admin: {
        description: "Observações sobre a funcionalidade",
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
          await core.oneCms.publish("features." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("features.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});