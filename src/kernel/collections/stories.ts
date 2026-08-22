export default ({ core }: any) => ({
  slug: "stories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "organization", "saas", "status", "featured", "published_at"],
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
        description: "Título da história de sucesso",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para a história",
      },
    },

    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Resumo",
      admin: {
        description: "Resumo curto da história de sucesso",
      },
    },

    {
      name: "subtitle",
      type: "text",
      label: "Subtítulo",
      admin: {
        description: "Subtítulo ou chamada adicional",
      },
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
          label: "Publicado",
          value: "published",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
        {
          label: "Em revisão",
          value: "review",
        },
      ],
      label: "Estado",
    },

    // Relacionamentos principais
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
      admin: {
        description: "Organização que teve o sucesso",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      required: true,
      label: "SaaS",
      admin: {
        description: "SaaS relacionado a esta história",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps utilizados na solução",
      },
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
      admin: {
        description: "Soluções vinculadas a esta história",
      },
    },

    {
      name: "client",
      type: "relationship",
      relationTo: "members",
      label: "Cliente/Representante",
      admin: {
        description: "Membro que representa o cliente",
      },
    },

    // Conteúdo da história
    {
      name: "challenge",
      type: "richText",
      label: "Desafio",
      required: true,
      admin: {
        description: "Desafio enfrentado pelo cliente",
      },
    },

    {
      name: "solution",
      type: "richText",
      label: "Solução",
      required: true,
      admin: {
        description: "Solução implementada",
      },
    },

    {
      name: "results",
      type: "richText",
      label: "Resultados",
      required: true,
      admin: {
        description: "Resultados alcançados",
      },
    },

    {
      name: "implementation",
      type: "richText",
      label: "Implementação",
      admin: {
        description: "Detalhes sobre a implementação da solução",
      },
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
      name: "client_logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo do Cliente",
    },

    {
      name: "video_url",
      type: "text",
      label: "URL do Vídeo",
      admin: {
        description: "Link para vídeo da história (YouTube, Vimeo)",
      },
    },

    // Testemunho
    {
      name: "testimonial",
      type: "textarea",
      label: "Testemunho",
      admin: {
        description: "Depoimento do cliente",
      },
    },

    {
      name: "testimonial_author",
      type: "text",
      label: "Autor do Testemunho",
      admin: {
        description: "Nome da pessoa que deu o testemunho",
      },
    },

    {
      name: "testimonial_role",
      type: "text",
      label: "Cargo do Autor",
      admin: {
        description: "Cargo/função da pessoa que deu o testemunho",
      },
    },

    {
      name: "testimonial_avatar",
      type: "upload",
      relationTo: "media",
      label: "Avatar do Autor",
    },

    // Métricas e resultados quantitativos
    {
      name: "metrics",
      type: "group",
      label: "Métricas de Resultados",
      fields: [
        {
          name: "efficiency_gain",
          type: "text",
          label: "Ganho de Eficiência",
          admin: {
            description: "Ex: +50%",
          },
        },
        {
          name: "cost_reduction",
          type: "text",
          label: "Redução de Custos",
          admin: {
            description: "Ex: R$ 50.000/mês",
          },
        },
        {
          name: "time_saved",
          type: "text",
          label: "Tempo Economizado",
          admin: {
            description: "Ex: 100 horas/mês",
          },
        },
        {
          name: "user_satisfaction",
          type: "number",
          label: "Satisfação do Usuário (%)",
          min: 0,
          max: 100,
        },
        {
          name: "roi",
          type: "text",
          label: "ROI",
          admin: {
            description: "Ex: 300%",
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
      type: "select",
      label: "Categoria",
      options: [
        { label: "Educação", value: "education" },
        { label: "Tecnologia", value: "technology" },
        { label: "Saúde", value: "health" },
        { label: "Finanças", value: "finance" },
        { label: "Governo", value: "government" },
        { label: "Varejo", value: "retail" },
        { label: "Indústria", value: "industry" },
        { label: "Serviços", value: "services" },
      ],
      defaultValue: "technology",
    },

    // Destaques
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
      admin: {
        description: "Destacar esta história",
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

    // Datas
    {
      name: "published_at",
      type: "date",
      label: "Data de Publicação",
    },

    {
      name: "client_since",
      type: "date",
      label: "Cliente Desde",
      admin: {
        description: "Data de início do relacionamento com o cliente",
      },
    },

    {
      name: "project_duration",
      type: "text",
      label: "Duração do Projeto",
      admin: {
        description: "Ex: 3 meses",
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

    // Configurações de visibilidade
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
          name: "allow_comments",
          type: "checkbox",
          label: "Permitir Comentários",
          defaultValue: false,
        },
        {
          name: "show_metrics",
          type: "checkbox",
          label: "Mostrar Métricas",
          defaultValue: true,
        },
      ],
    },

    // Comentários
    {
      name: "comments",
      type: "array",
      label: "Comentários",
      admin: {
        description: "Comentários internos sobre a história",
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

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a história",
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

        // Se status for "published" e não tiver published_at, definir como agora
        if (data.status === "published" && !data.published_at) {
          data.published_at = new Date().toISOString();
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("success-stories." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("success-stories.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});