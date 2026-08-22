export default ({ core }: any) => ({
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "author"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Campos principais do artigo
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
    },
    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
      required: true,
    },
    
    // Categoria e destaque
    {
      name: "category",
      type: "text",
      label: "Categoria",
      required: true,
    },
    {
      name: "category_color", // Corrigido: snake_case
      type: "select",
      label: "Cor da Categoria",
      options: [
        { label: "Amarelo", value: "bg-amber-400" },
        { label: "Azul", value: "bg-blue-400" },
        { label: "Verde", value: "bg-green-400" },
        { label: "Vermelho", value: "bg-red-400" },
        { label: "Roxo", value: "bg-purple-400" },
        { label: "Rosa", value: "bg-pink-400" },
      ],
      defaultValue: "bg-amber-400",
    },
    {
      name: "emphasis",
      type: "checkbox",
      label: "Artigo em Destaque",
      defaultValue: false,
    },

    // Autor (relacionamento com usuários)
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: "Autor",
      required: true,
    },
    
    // Autor adicional (dados estáticos como fallback)
    {
      name: "author_details", // Corrigido: snake_case
      type: "group",
      label: "Detalhes do Autor (Fallback)",
      admin: {
        description: "Preencha caso o autor não esteja registrado no sistema",
      },
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nome",
        },
        {
          name: "initials",
          type: "text",
          label: "Iniciais",
          maxLength: 3,
        },
        {
          name: "role",
          type: "text",
          label: "Cargo/Função",
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
          label: "Avatar",
        },
      ],
    },

    // Data e tempo de leitura
    {
      name: "date",
      type: "date",
      label: "Data de Publicação",
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: "read_time", // Corrigido: snake_case
      type: "text",
      label: "Tempo de Leitura",
      defaultValue: "5 min de leitura",
    },

    // Imagem e Vídeo
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem Principal",
      required: true,
    },
    {
      name: "video",
      type: "group",
      label: "Vídeo",
      fields: [
        {
          name: "url",
          type: "text",
          label: "URL do Vídeo",
        },
        {
          name: "type",
          type: "select",
          label: "Tipo de Vídeo",
          options: [
            { label: "Local", value: "local" },
            { label: "YouTube", value: "youtube" },
            { label: "Vimeo", value: "vimeo" },
          ],
          defaultValue: "local",
        },
      ],
    },

    // Estatísticas
    {
      name: "stats",
      type: "group",
      label: "Estatísticas",
      fields: [
        {
          name: "views",
          type: "text",
          label: "Visualizações",
          defaultValue: "0",
        },
        {
          name: "shares",
          type: "text",
          label: "Compartilhamentos",
          defaultValue: "0",
        },
        {
          name: "likes",
          type: "text",
          label: "Curtidas",
          defaultValue: "0",
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

    // Status de publicação
    {
      name: "status",
      type: "select",
      label: "Status",
      options: [
        { label: "Rascunho", value: "draft" },
        { label: "Publicado", value: "published" },
        { label: "Arquivado", value: "archived" },
      ],
      defaultValue: "draft",
    },
        {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "Saas",
      required: true,
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("posts." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("posts.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});