export default ({ core }: any) => ({
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "status", "start_date", "location", "organizer"],
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
        description: "Título do evento",
      },
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o evento",
      },
    },

    {
      name: "description",
      type: "richText",
      label: "Descrição",
      admin: {
        description: "Descrição detalhada do evento",
      },
    },

    {
      name: "short_description",
      type: "textarea",
      label: "Descrição Curta",
      admin: {
        description: "Resumo do evento para listagens",
      },
    },

    // Tipo
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "event",
      options: [
        {
          label: "Evento",
          value: "event",
        },
        {
          label: "Webinar",
          value: "webinar",
        },
        {
          label: "Workshop",
          value: "workshop",
        },
        {
          label: "Conferência",
          value: "conference",
        },
        {
          label: "Lançamento",
          value: "launch",
        },
        {
          label: "Demonstração",
          value: "demo",
        },
        {
          label: "Treinamento",
          value: "training",
        },
        {
          label: "Meetup",
          value: "meetup",
        },
        {
          label: "Hackathon",
          value: "hackathon",
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
          label: "Agendado",
          value: "scheduled",
        },
        {
          label: "A decorrer",
          value: "ongoing",
        },
        {
          label: "Concluído",
          value: "completed",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
        {
          label: "Adiado",
          value: "postponed",
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
      label: "Logótipo do Evento",
    },

    // Datas
    {
      name: "start_date",
      type: "date",
      required: true,
      label: "Data de Início",
    },

    {
      name: "end_date",
      type: "date",
      label: "Data de Fim",
    },

    {
      name: "start_time",
      type: "text",
      label: "Hora de Início",
      admin: {
        description: "Ex: 14:00",
      },
    },

    {
      name: "end_time",
      type: "text",
      label: "Hora de Término",
      admin: {
        description: "Ex: 18:00",
      },
    },

    {
      name: "timezone",
      type: "select",
      label: "Fuso Horário",
      options: [
        { label: "UTC", value: "UTC" },
        { label: "São Tomé (GMT+0)", value: "GMT+0" },
        { label: "Lisboa (GMT+0)", value: "GMT+0" },
        { label: "Luanda (GMT+1)", value: "GMT+1" },
        { label: "Brasília (GMT-3)", value: "GMT-3" },
        { label: "Nova York (GMT-4)", value: "GMT-4" },
        { label: "Londres (GMT+0)", value: "GMT+0" },
        { label: "Paris (GMT+1)", value: "GMT+1" },
      ],
      defaultValue: "GMT+0",
    },

    // Localização
    {
      name: "location",
      type: "text",
      label: "Local",
      admin: {
        description: "Nome do local do evento",
      },
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
          name: "country",
          type: "text",
          label: "País",
        },
        {
          name: "zip_code",
          type: "text",
          label: "CEP",
        },
      ],
    },

    {
      name: "is_online",
      type: "checkbox",
      defaultValue: false,
      label: "Evento Online",
      admin: {
        description: "Evento realizado online",
      },
    },

    {
      name: "meeting_url",
      type: "text",
      label: "Link do Evento",
      admin: {
        description: "URL para participação online (Zoom, Meet, etc.)",
      },
    },

    {
      name: "meeting_id",
      type: "text",
      label: "ID da Reunião",
    },

    {
      name: "meeting_password",
      type: "text",
      label: "Senha da Reunião",
    },

    // Relacionamentos
    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS relacionado ao evento",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações",
      admin: {
        description: "Apps relacionados ao evento",
      },
    },

    {
      name: "solution",
      type: "relationship",
      relationTo: "solutions",
      label: "Solução",
      admin: {
        description: "Solução relacionada ao evento",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      label: "Organização",
      admin: {
        description: "Organização responsável pelo evento",
      },
    },

    {
      name: "organizer",
      type: "relationship",
      relationTo: "members",
      label: "Organizador",
      admin: {
        description: "Membro organizador do evento",
      },
    },

    {
      name: "speakers",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Palestrantes",
      admin: {
        description: "Palestrantes do evento",
      },
    },

    // Inscrição
    {
      name: "registration_url",
      type: "text",
      label: "Link de Inscrição",
      admin: {
        description: "URL para inscrição no evento",
      },
    },

    {
      name: "capacity",
      type: "number",
      label: "Capacidade",
      admin: {
        description: "Número máximo de participantes",
      },
    },

    {
      name: "registered_count",
      type: "number",
      label: "Inscritos",
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },

    {
      name: "waiting_list",
      type: "number",
      label: "Lista de Espera",
      defaultValue: 0,
      admin: {
        readOnly: true,
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
          defaultValue: true,
        },
        {
          name: "price",
          type: "text",
          label: "Preço",
          admin: {
            description: "Ex: R$ 49,90",
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
          name: "early_bird_price",
          type: "text",
          label: "Preço Promocional",
        },
        {
          name: "early_bird_deadline",
          type: "date",
          label: "Data Limite Promoção",
        },
      ],
    },

    // Agendas
    {
      name: "schedule",
      type: "array",
      label: "Agenda",
      fields: [
        {
          name: "time",
          type: "text",
          required: true,
          label: "Horário",
          admin: {
            description: "Ex: 14:00 - 14:30",
          },
        },
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
        },
        {
          name: "speaker",
          type: "relationship",
          relationTo: "members",
          label: "Palestrante",
        },
        {
          name: "location",
          type: "text",
          label: "Local",
        },
      ],
    },

    // FAQ
    {
      name: "faq",
      type: "array",
      label: "Perguntas Frequentes",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Pergunta",
        },
        {
          name: "answer",
          type: "richText",
          required: true,
          label: "Resposta",
        },
      ],
    },

    // Destaque
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Em destaque",
      admin: {
        description: "Destacar este evento",
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
          name: "registrations",
          type: "number",
          label: "Inscrições",
          defaultValue: 0,
        },
        {
          name: "attendees",
          type: "number",
          label: "Participantes",
          defaultValue: 0,
        },
        {
          name: "engagement_rate",
          type: "number",
          label: "Taxa de Engajamento (%)",
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

    // Datas de sistema
    {
      name: "published_at",
      type: "date",
      label: "Data de Publicação",
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
          name: "allow_registration",
          type: "checkbox",
          label: "Permitir Inscrição",
          defaultValue: true,
        },
        {
          name: "show_speakers",
          type: "checkbox",
          label: "Mostrar Palestrantes",
          defaultValue: true,
        },
        {
          name: "show_schedule",
          type: "checkbox",
          label: "Mostrar Agenda",
          defaultValue: true,
        },
        {
          name: "send_reminders",
          type: "checkbox",
          label: "Enviar Lembretes",
          defaultValue: true,
        },
      ],
    },

    // Participantes
    {
      name: "participants",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Participantes",
      admin: {
        description: "Membros participantes do evento",
      },
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
        description: "Observações internas sobre o evento",
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

        // Verificar status baseado nas datas
        if (data.start_date && data.end_date) {
          const start = new Date(data.start_date);
          const end = new Date(data.end_date);
          const now = new Date();

          if (data.status !== "cancelled" && data.status !== "postponed") {
            if (now < start) {
              data.status = "scheduled";
            } else if (now >= start && now <= end) {
              data.status = "ongoing";
            } else if (now > end) {
              data.status = "completed";
            }
          }
        }

        // Validar datas
        if (data.start_date && data.end_date) {
          const start = new Date(data.start_date);
          const end = new Date(data.end_date);
          if (end < start) {
            throw new Error("A data de fim deve ser posterior à data de início");
          }
        }

        // Se status for "scheduled" e não tiver published_at, definir como agora
        if (data.status === "scheduled" && !data.published_at) {
          data.published_at = new Date().toISOString();
        }

        // Calcular métricas
        if (data.participants && Array.isArray(data.participants)) {
          data.metrics = data.metrics || {};
          data.metrics.attendees = data.participants.length;
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("events." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("events.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});