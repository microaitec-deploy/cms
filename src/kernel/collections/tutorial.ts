export default ({ core }: any) => ({
  slug: "tutoriais",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "type", "duration", "featured"],
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
      label: "Título do Tutorial",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Descrição Curta",
      required: true,
    },
    {
      name: "full_description",
      type: "richText",
      label: "Descrição Completa",
    },

    // Categoria e tipo
    {
      name: "category",
      type: "text",
      label: "Categoria",
      required: true,
      defaultValue: "Escola",
    },
    {
      name: "type",
      type: "text",
      label: "Tipo",
      required: true,
      defaultValue: "Vídeo Tutorial",
    },
    {
      name: "type_color",
      type: "select",
      label: "Cor do Tipo",
      options: [
        { label: "Âmbar", value: "bg-amber-500" },
        { label: "Azul", value: "bg-blue-500" },
        { label: "Verde", value: "bg-green-500" },
        { label: "Vermelho", value: "bg-red-500" },
        { label: "Roxo", value: "bg-purple-500" },
        { label: "Indigo", value: "bg-indigo-500" },
        { label: "Rosa", value: "bg-pink-500" },
      ],
      defaultValue: "bg-amber-500",
    },

    // Ícones
    {
      name: "icon",
      type: "text",
      label: "Ícone (ex: video, book, file-text)",
      defaultValue: "video",
    },
    {
      name: "meta_icon",
      type: "text",
      label: "Ícone Meta (ex: calendar, clock, user)",
      defaultValue: "calendar",
    },
    {
      name: "action_icon",
      type: "text",
      label: "Ícone de Ação (ex: play, download, eye)",
      defaultValue: "play",
    },

    // Estilo e destaque
    {
      name: "icon_bg",
      type: "text",
      label: "Gradiente do Ícone",
      defaultValue: "from-indigo-600 to-indigo-800",
    },
    {
      name: "emphasis",
      type: "checkbox",
      label: "Em Destaque",
      defaultValue: false,
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Tutorial Destacado",
      defaultValue: false,
    },

    // Ação
    {
      name: "action_text",
      type: "text",
      label: "Texto do Botão de Ação",
      defaultValue: "Baixar PDF",
    },

    // Mídia
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
          label: "Tipo",
          options: [
            { label: "Local", value: "local" },
            { label: "YouTube", value: "youtube" },
            { label: "Vimeo", value: "vimeo" },
          ],
          defaultValue: "local",
        },
        {
          name: "duration",
          type: "text",
          label: "Duração",
        },
      ],
    },

    // PDF
    {
      name: "pdf",
      type: "upload",
      relationTo: "media",
      label: "PDF do Tutorial",
    },

    // Informações adicionais
    {
      name: "duration",
      type: "text",
      label: "Duração Total",
      required: true,
      defaultValue: "10 min",
    },
    {
      name: "level",
      type: "text",
      label: "Nível",
      defaultValue: "Todos os Públicos",
    },
    {
      name: "last_updated",
      type: "date",
      label: "Última Atualização",
      defaultValue: () => new Date(),
    },
    {
      name: "instructor",
      type: "text",
      label: "Instrutor",
      required: true,
    },

    // Objetivos (array)
    {
      name: "objectives",
      type: "array",
      label: "Objetivos",
      fields: [
        {
          name: "objective",
          type: "text",
          label: "Objetivo",
        },
      ],
    },

    // Passos (array com objeto)
    {
      name: "steps",
      type: "array",
      label: "Passos do Tutorial",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Título do Passo",
          required: true,
        },
        {
          name: "duration",
          type: "text",
          label: "Duração",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
      ],
    },

    // Recursos (array)
    {
      name: "resources",
      type: "array",
      label: "Recursos Adicionais",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nome do Recurso",
          required: true,
        },
        {
          name: "type",
          type: "select",
          label: "Tipo",
          options: [
            { label: "PDF", value: "PDF" },
            { label: "PPTX", value: "PPTX" },
            { label: "DOCX", value: "DOCX" },
            { label: "MP4", value: "MP4" },
            { label: "Link", value: "Link" },
          ],
          required: true,
        },
        {
          name: "size",
          type: "text",
          label: "Tamanho (ex: 1.8 MB)",
        },
        {
          name: "url",
          type: "text",
          label: "URL do Recurso",
        },
      ],
    },

    // Status
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
          await core.oneCms.publish("tutoriais." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("tutoriais.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});