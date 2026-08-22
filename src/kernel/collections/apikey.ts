export default ({ core }: any) => ({
  slug: "apikeys",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "prefix", "key", "status", "organization", "expires_at"],
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
      label: "Nome",
      admin: {
        description: "Nome descritivo para identificar a API Key",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      admin: {
        description: "Descrição detalhada do uso desta API Key",
      },
    },

    {
      name: "key",
      type: "text",
      required: true,
      unique: true,
      label: "API Key",
      admin: {
        description: "Chave de API gerada",
        readOnly: true,
      },
    },

    {
      name: "prefix",
      type: "text",
      required: true,
      label: "Prefixo",
      admin: {
        description: "Prefixo da chave para identificação (ex: sk_live_, pk_test_)",
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
          label: "Ativa",
          value: "active",
        },
        {
          label: "Revogada",
          value: "revoked",
        },
        {
          label: "Expirada",
          value: "expired",
        },
        {
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Em teste",
          value: "testing",
        },
      ],
      label: "Estado",
    },

    // Nível de acesso
    {
      name: "level",
      type: "select",
      required: true,
      defaultValue: "basic",
      options: [
        { label: "Básico", value: "basic" },
        { label: "Leitura", value: "read" },
        { label: "Escrita", value: "write" },
        { label: "Admin", value: "admin" },
        { label: "Full Access", value: "full" },
      ],
      label: "Nível de Acesso",
      admin: {
        description: "Permissões da API Key",
      },
    },

    // Relacionamentos
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
      admin: {
        description: "Organização proprietária da API Key",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS vinculado a esta API Key",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App vinculado a esta API Key",
      },
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "members",
      label: "Proprietário",
      required: true,
      admin: {
        description: "Membro responsável pela API Key",
      },
    },

    {
      name: "created_by",
      type: "relationship",
      relationTo: "members",
      label: "Criado por",
      admin: {
        readOnly: true,
        description: "Membro que criou a API Key",
      },
    },

    // Permissões específicas
    {
      name: "permissions",
      type: "array",
      label: "Permissões Específicas",
      admin: {
        description: "Permissões granulares para esta API Key",
      },
      fields: [
        {
          name: "resource",
          type: "select",
          label: "Recurso",
          options: [
            { label: "Usuários", value: "users" },
            { label: "Posts", value: "posts" },
            { label: "Feedback", value: "feedback" },
            { label: "SaaS", value: "saas" },
            { label: "Apps", value: "apps" },
            { label: "Devices", value: "devices" },
            { label: "Membros", value: "members" },
            { label: "Organizações", value: "organizations" },
            { label: "Todos", value: "all" },
          ],
          required: true,
        },
        {
          name: "actions",
          type: "select",
          label: "Ações",
          options: [
            { label: "Leitura", value: "read" },
            { label: "Escrita", value: "write" },
            { label: "Leitura e Escrita", value: "read_write" },
            { label: "Deleção", value: "delete" },
          ],
          required: true,
        },
      ],
    },

    // Datas
    {
      name: "expires_at",
      type: "date",
      label: "Expira em",
      admin: {
        description: "Data de expiração da API Key (deixar em branco para nunca expirar)",
      },
    },

    {
      name: "last_used_at",
      type: "date",
      label: "Última Utilização",
      admin: {
        readOnly: true,
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
          name: "total_requests",
          type: "number",
          label: "Total de Requisições",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "last_request_at",
          type: "date",
          label: "Última Requisição",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "request_limit",
          type: "number",
          label: "Limite de Requisições",
          defaultValue: 1000,
          admin: {
            description: "Número máximo de requisições por dia/mês",
          },
        },
        {
          name: "usage_percentage",
          type: "number",
          label: "Percentual de Uso (%)",
          defaultValue: 0,
          min: 0,
          max: 100,
          admin: {
            readOnly: true,
          },
        },
      ],
    },

    // Rate limiting
    {
      name: "rate_limit",
      type: "group",
      label: "Rate Limit",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Habilitado",
          defaultValue: true,
        },
        {
          name: "max_requests",
          type: "number",
          label: "Máximo de Requisições",
          defaultValue: 100,
          admin: {
            description: "Número máximo de requisições por período",
          },
        },
        {
          name: "period",
          type: "select",
          label: "Período",
          options: [
            { label: "Por segundo", value: "second" },
            { label: "Por minuto", value: "minute" },
            { label: "Por hora", value: "hour" },
            { label: "Por dia", value: "day" },
            { label: "Por mês", value: "month" },
          ],
          defaultValue: "minute",
        },
      ],
    },

    // Segurança
    {
      name: "security",
      type: "group",
      label: "Configurações de Segurança",
      fields: [
        {
          name: "ip_whitelist",
          type: "array",
          label: "IPs Permitidos",
          fields: [
            {
              name: "ip",
              type: "text",
              label: "Endereço IP",
            },
          ],
          admin: {
            description: "Deixar vazio para permitir todos os IPs",
          },
        },
        {
          name: "ip_blacklist",
          type: "array",
          label: "IPs Bloqueados",
          fields: [
            {
              name: "ip",
              type: "text",
              label: "Endereço IP",
            },
          ],
        },
        {
          name: "require_https",
          type: "checkbox",
          label: "Exigir HTTPS",
          defaultValue: true,
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

    // Log de uso
    {
      name: "usage_log",
      type: "array",
      label: "Log de Uso",
      admin: {
        readOnly: true,
        description: "Histórico de uso da API Key",
      },
      fields: [
        {
          name: "timestamp",
          type: "date",
          label: "Data/Hora",
          defaultValue: () => new Date(),
        },
        {
          name: "endpoint",
          type: "text",
          label: "Endpoint",
        },
        {
          name: "method",
          type: "text",
          label: "Método",
          admin: {
            description: "GET, POST, PUT, DELETE",
          },
        },
        {
          name: "ip",
          type: "text",
          label: "IP de Origem",
        },
        {
          name: "status",
          type: "number",
          label: "Status Code",
        },
        {
          name: "response_time",
          type: "number",
          label: "Tempo de Resposta (ms)",
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
          name: "is_active",
          type: "checkbox",
          label: "Ativa",
          defaultValue: true,
        },
        {
          name: "send_notifications",
          type: "checkbox",
          label: "Enviar Notificações",
          defaultValue: true,
          admin: {
            description: "Notificar sobre uso e expiração",
          },
        },
        {
          name: "log_all_requests",
          type: "checkbox",
          label: "Logar todas as requisições",
          defaultValue: false,
          admin: {
            description: "Registrar todas as requisições (pode afetar performance)",
          },
        },
      ],
    },

    // Notas
    {
      name: "notes",
      type: "richText",
      label: "Notas",
      admin: {
        description: "Observações sobre a API Key",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Gerar API Key automaticamente se não for fornecida
        if (!data.key || data.key === "") {
          const prefix = data.prefix || "sk_";
          const timestamp = Date.now().toString(36);
          const random = Math.random().toString(36).substring(2, 15);
          const random2 = Math.random().toString(36).substring(2, 15);
          data.key = `${prefix}${timestamp}_${random}${random2}`;
        }

        // Gerar prefixo automaticamente se não for fornecido
        if (!data.prefix) {
          data.prefix = "sk_";
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Definir created_by se disponível
        if (req?.user?.id && !data.created_by) {
          data.created_by = req.user.id;
        }

        // Calcular percentual de uso
        if (data.metrics && data.metrics.request_limit > 0) {
          data.metrics.usage_percentage = Math.round(
            (data.metrics.total_requests / data.metrics.request_limit) * 100
          );
        }

        // Verificar expiração
        if (data.expires_at) {
          const expires = new Date(data.expires_at);
          const now = new Date();
          if (expires < now && data.status === "active") {
            data.status = "expired";
          }
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("apikeys." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("apikeys.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});