export default ({ core }: any) => ({
  slug: "highlights",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "featured", "start_date", "order"],
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
        description: "Título do destaque",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o destaque",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      admin: {
        description: "Descrição curta do destaque",
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

    // Tipo
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "news",
      options: [
        {
          label: "Evento",
          value: "event",
        },
        {
          label: "Publicação",
          value: "publication",
        },
        {
          label: "Novidade",
          value: "news",
        },
        {
          label: "Lançamento",
          value: "release",
        },
        {
          label: "Anúncio",
          value: "announcement",
        },
        {
          label: "Promoção",
          value: "promotion",
        },
        {
          label: "Comunidade",
          value: "community",
        },
        {
          label: "Parceria",
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
          label: "Publicado",
          value: "published",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
        {
          label: "Agendado",
          value: "scheduled",
        },
      ],
      label: "Estado",
    },

    // Mídia
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Imagem de Capa",
      admin: {
        description: "Imagem principal do destaque",
      },
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

    // Conteúdo
    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
      admin: {
        description: "Conteúdo completo do destaque",
      },
    },

    {
      name: "excerpt",
      type: "textarea",
      label: "Resumo",
      admin: {
        description: "Resumo para exibição em listas",
      },
    },

    // URL
    {
      name: "url",
      type: "text",
      label: "URL",
      admin: {
        description: "URL externa ou link para mais informações",
      },
    },

    {
      name: "cta_text",
      type: "text",
      label: "Texto do Botão (CTA)",
      defaultValue: "Saiba Mais",
      admin: {
        description: "Texto do botão de chamada para ação",
      },
    },

    {
      name: "cta_url",
      type: "text",
      label: "URL do Botão (CTA)",
      admin: {
        description: "Link do botão de chamada para ação",
      },
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado ao destaque",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App relacionado ao destaque",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização responsável",
      },
    },

    {
      name: "author",
      type: "relationship",
      relationTo: "members",
      label: "Autor",
      required: true,
      admin: {
        description: "Membro que criou o destaque",
      },
    },

    {
      name: "feedback",
      type: "relationship",
      relationTo: "feedback",
      hasMany: true,
      label: "Feedbacks Relacionados",
      admin: {
        description: "Feedbacks vinculados a este destaque",
      },
    },

    // Datas
    {
      name: "start_date",
      type: "date",
      label: "Data de Início",
      admin: {
        description: "Data de início do destaque/evento",
      },
    },

    {
      name: "end_date",
      type: "date",
      label: "Data de Fim",
      admin: {
        description: "Data de término do destaque/evento",
      },
    },

    {
      name: "publish_date",
      type: "date",
      label: "Data de Publicação",
      admin: {
        description: "Data em que será publicado",
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

    // Destaque e Ordem
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
      admin: {
        description: "Destacar este item",
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
          name: "clicks",
          type: "number",
          label: "Cliques",
          defaultValue: 0,
        },
        {
          name: "shares",
          type: "number",
          label: "Compartilhamentos",
          defaultValue: 0,
        },
        {
          name: "engagement",
          type: "number",
          label: "Engajamento (%)",
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

    // Localização
    {
      name: "location",
      type: "group",
      label: "Localização",
      fields: [
        {
          name: "place",
          type: "text",
          label: "Local",
        },
        {
          name: "city",
          type: "text",
          label: "Cidade",
        },
        {
          name: "country",
          type: "text",
          label: "País",
        },
        {
          name: "address",
          type: "text",
          label: "Endereço",
        },
      ],
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
          name: "show_on_home",
          type: "checkbox",
          label: "Mostrar na Página Inicial",
          defaultValue: false,
        },
        {
          name: "show_on_sidebar",
          type: "checkbox",
          label: "Mostrar na Barra Lateral",
          defaultValue: false,
        },
        {
          name: "allow_comments",
          type: "checkbox",
          label: "Permitir Comentários",
          defaultValue: true,
        },
        {
          name: "color_theme",
          type: "select",
          label: "Tema de Cor",
          options: [
            { label: "Padrão", value: "default" },
            { label: "Azul", value: "blue" },
            { label: "Verde", value: "green" },
            { label: "Vermelho", value: "red" },
            { label: "Roxo", value: "purple" },
            { label: "Âmbar", value: "amber" },
          ],
          defaultValue: "default",
        },
      ],
    },

    // Comentários
    {
      name: "comments",
      type: "array",
      label: "Comentários",
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
        {
          name: "is_approved",
          type: "checkbox",
          label: "Aprovado",
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
          label: "Imagem OG (Open Graph)",
        },
      ],
    },

    // Notas internas
    {
      name: "internal_notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre o destaque",
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

        // Se status for "published" e não tiver publish_date, definir como agora
        if (data.status === "published" && !data.publish_date) {
          data.publish_date = new Date().toISOString();
        }

        // Validar datas
        if (data.start_date && data.end_date) {
          const start = new Date(data.start_date);
          const end = new Date(data.end_date);
          if (end < start) {
            throw new Error("A data de fim deve ser posterior à data de início");
          }
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("highlights." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("highlights.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});