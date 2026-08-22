export default ({ core }: any) => ({
  slug: "testimonials",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "client", "author_name", "rating", "status", "featured"],
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
        description: "Título do testemunho",
      },
    },

    {
      name: "slug",
      type: "text",
      label: "Slug",
      admin: {
        description: "Identificador único (opcional, gerado automaticamente)",
      },
    },

    {
      name: "testimonial",
      type: "textarea",
      required: true,
      label: "Testemunho",
      admin: {
        description: "Conteúdo do testemunho do cliente",
      },
    },

    {
      name: "short_testimonial",
      type: "textarea",
      label: "Testemunho Curto",
      admin: {
        description: "Versão resumida do testemunho para cards",
      },
    },

    // Cliente
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      required: true,
      label: "Cliente",
      admin: {
        description: "Cliente que deu o testemunho",
      },
    },

    {
      name: "client_organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização do Cliente",
      admin: {
        description: "Organização do cliente",
      },
    },

    // Autor
    {
      name: "author_name",
      type: "text",
      required: true,
      label: "Nome do Autor",
      admin: {
        description: "Nome da pessoa que deu o testemunho",
      },
    },

    {
      name: "author_role",
      type: "text",
      label: "Cargo / Função",
      admin: {
        description: "Cargo da pessoa que deu o testemunho",
      },
    },

    {
      name: "author_email",
      type: "email",
      label: "Email do Autor",
      admin: {
        description: "Email para contato (não exibido publicamente)",
      },
    },

    {
      name: "author_company",
      type: "text",
      label: "Empresa do Autor",
      admin: {
        description: "Empresa onde o autor trabalha",
      },
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Foto do Autor",
    },

    // Relacionamentos com produtos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado ao testemunho",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps relacionados ao testemunho",
      },
    },

    {
      name: "solutions",
      type: "relationship",
      relationTo: "solutions",
      hasMany: true,
      label: "Soluções",
      admin: {
        description: "Soluções relacionadas ao testemunho",
      },
    },

    {
      name: "success_story",
      type: "relationship",
      relationTo: "success_stories",
      label: "História de Sucesso",
      admin: {
        description: "História de sucesso vinculada a este testemunho",
      },
    },

    // Avaliação
    {
      name: "rating",
      type: "number",
      label: "Avaliação (1-5)",
      min: 1,
      max: 5,
      admin: {
        description: "Avaliação de 1 a 5 estrelas",
      },
    },

    {
      name: "rating_display",
      type: "select",
      label: "Exibição da Avaliação",
      options: [
        { label: "Estrelas", value: "stars" },
        { label: "Número", value: "number" },
        { label: "Ambos", value: "both" },
      ],
      defaultValue: "stars",
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
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Em revisão",
          value: "review",
        },
      ],
      label: "Estado",
    },

    // Destaques
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
      admin: {
        description: "Destacar este testemunho",
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

    {
      name: "is_verified",
      type: "checkbox",
      defaultValue: false,
      label: "Verificado",
      admin: {
        description: "Testemunho verificado como autêntico",
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

    // Mídia
    {
      name: "cover_image",
      type: "upload",
      relationTo: "media",
      label: "Imagem de Capa",
      admin: {
        description: "Imagem de fundo para o testemunho",
      },
    },

    {
      name: "client_logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo do Cliente",
      admin: {
        description: "Logótipo do cliente para exibição",
      },
    },

    {
      name: "video_url",
      type: "text",
      label: "URL do Vídeo",
      admin: {
        description: "Link para vídeo do testemunho (YouTube, Vimeo)",
      },
    },

    // Datas
    {
      name: "published_at",
      type: "date",
      label: "Data de Publicação",
    },

    {
      name: "testimonial_date",
      type: "date",
      label: "Data do Testemunho",
      admin: {
        description: "Data em que o testemunho foi dado",
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
          name: "likes",
          type: "number",
          label: "Curtidas",
          defaultValue: 0,
        },
        {
          name: "shares",
          type: "number",
          label: "Compartilhamentos",
          defaultValue: 0,
        },
        {
          name: "helpful_count",
          type: "number",
          label: "Marcado como Útil",
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

    // Categoria
    {
      name: "category",
      type: "select",
      label: "Categoria",
      options: [
        { label: "Geral", value: "general" },
        { label: "Produto", value: "product" },
        { label: "Suporte", value: "support" },
        { label: "Implementação", value: "implementation" },
        { label: "Treinamento", value: "training" },
        { label: "Resultados", value: "results" },
      ],
      defaultValue: "general",
    },

    // Contexto
    {
      name: "context",
      type: "group",
      label: "Contexto do Testemunho",
      fields: [
        {
          name: "project_name",
          type: "text",
          label: "Nome do Projeto",
        },
        {
          name: "project_duration",
          type: "text",
          label: "Duração do Projeto",
        },
        {
          name: "challenge_solved",
          type: "textarea",
          label: "Desafio Resolvido",
        },
        {
          name: "key_benefit",
          type: "text",
          label: "Principal Benefício",
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
          label: "Público",
          defaultValue: true,
        },
        {
          name: "show_rating",
          type: "checkbox",
          label: "Mostrar Avaliação",
          defaultValue: true,
        },
        {
          name: "show_author",
          type: "checkbox",
          label: "Mostrar Autor",
          defaultValue: true,
        },
        {
          name: "allow_comments",
          type: "checkbox",
          label: "Permitir Comentários",
          defaultValue: false,
        },
        {
          name: "require_approval",
          type: "checkbox",
          label: "Exigir Aprovação",
          defaultValue: false,
        },
      ],
    },

    // Resposta da empresa
    {
      name: "company_response",
      type: "group",
      label: "Resposta da Empresa",
      fields: [
        {
          name: "response",
          type: "richText",
          label: "Resposta",
          admin: {
            description: "Resposta da empresa ao testemunho",
          },
        },
        {
          name: "responded_by",
          type: "relationship",
          relationTo: "members",
          label: "Respondido por",
        },
        {
          name: "responded_at",
          type: "date",
          label: "Data da Resposta",
        },
      ],
    },

    // Comentários internos
    {
      name: "comments",
      type: "array",
      label: "Comentários Internos",
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
        description: "Observações internas sobre o testemunho",
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

        // Validar rating
        if (data.rating && (data.rating < 1 || data.rating > 5)) {
          throw new Error("A avaliação deve ser entre 1 e 5");
        }

        // Se for anônimo, limpar dados do autor
        if (data.is_anonymous) {
          data.author_name = "Anônimo";
          data.author_role = "";
          data.author_company = "";
          data.avatar = null;
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("testimonials." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("testimonials.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});