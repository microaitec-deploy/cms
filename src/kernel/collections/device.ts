export default ({ core }: any) => ({
  slug: "devices",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "device_id", "type", "model", "status", "organization"],
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
      label: "Nome do Dispositivo",
      admin: {
        description: "Nome amigável para identificar o dispositivo",
      },
    },

    {
      name: "device_id",
      type: "text",
      required: true,
      unique: true,
      label: "ID do Dispositivo",
      admin: {
        description: "Identificador único do dispositivo (MAC, IMEI, etc.)",
      },
    },

    {
      name: "type",
      type: "select",
      required: true,
      label: "Tipo",
      options: [
        { label: "Computador", value: "computer" },
        { label: "Notebook", value: "laptop" },
        { label: "Smartphone", value: "smartphone" },
        { label: "Tablet", value: "tablet" },
        { label: "Servidor", value: "server" },
        { label: "Impressora", value: "printer" },
        { label: "Scanner", value: "scanner" },
        { label: "Router", value: "router" },
        { label: "Switch", value: "switch" },
        { label: "Firewall", value: "firewall" },
        { label: "IoT", value: "iot" },
        { label: "Outro", value: "other" },
      ],
      defaultValue: "computer",
    },

    {
      name: "model",
      type: "text",
      label: "Modelo",
      admin: {
        description: "Modelo do dispositivo (ex: Dell XPS 13, iPhone 14)",
      },
    },

    {
      name: "brand",
      type: "text",
      label: "Marca",
      admin: {
        description: "Marca/fabricante do dispositivo",
      },
    },

    {
      name: "serial_number",
      type: "text",
      label: "Número de Série",
      admin: {
        description: "Número de série do dispositivo",
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
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Offline",
          value: "offline",
        },
        {
          label: "Suspenso",
          value: "suspended",
        },
        {
          label: "Em manutenção",
          value: "maintenance",
        },
        {
          label: "Descartado",
          value: "retired",
        },
      ],
      label: "Estado",
    },

    // Relacionamentos
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
      admin: {
        description: "Organização proprietária do dispositivo",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS vinculado ao dispositivo",
      },
    },

    {
      name: "app",
      type: "relationship",
      relationTo: "apps",
      label: "Aplicação",
      admin: {
        description: "App vinculado ao dispositivo",
      },
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "members",
      label: "Responsável",
      admin: {
        description: "Membro responsável pelo dispositivo",
      },
    },

    {
      name: "assigned_to",
      type: "relationship",
      relationTo: "members",
      label: "Atribuído a",
      admin: {
        description: "Membro que está usando o dispositivo",
      },
    },

    // Informações técnicas
    {
      name: "specs",
      type: "group",
      label: "Especificações Técnicas",
      fields: [
        {
          name: "processor",
          type: "text",
          label: "Processador",
        },
        {
          name: "ram",
          type: "text",
          label: "Memória RAM",
        },
        {
          name: "storage",
          type: "text",
          label: "Armazenamento",
        },
        {
          name: "os",
          type: "text",
          label: "Sistema Operacional",
        },
        {
          name: "os_version",
          type: "text",
          label: "Versão do SO",
        },
        {
          name: "screen_size",
          type: "text",
          label: "Tamanho da Tela",
        },
        {
          name: "battery",
          type: "text",
          label: "Bateria",
        },
      ],
    },

    // Rede
    {
      name: "network",
      type: "group",
      label: "Informações de Rede",
      fields: [
        {
          name: "ip_address",
          type: "text",
          label: "Endereço IP",
        },
        {
          name: "mac_address",
          type: "text",
          label: "Endereço MAC",
        },
        {
          name: "hostname",
          type: "text",
          label: "Hostname",
        },
        {
          name: "dns_name",
          type: "text",
          label: "Nome DNS",
        },
      ],
    },

    // Datas
    {
      name: "purchase_date",
      type: "date",
      label: "Data de Compra",
    },

    {
      name: "warranty_expiration",
      type: "date",
      label: "Data de Expiração da Garantia",
    },

    {
      name: "last_maintenance",
      type: "date",
      label: "Última Manutenção",
    },

    {
      name: "created_at",
      type: "date",
      label: "Data de Registro",
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

    {
      name: "last_seen",
      type: "date",
      label: "Última Visto",
      admin: {
        description: "Última vez que o dispositivo foi detectado",
      },
    },

    // Métricas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "uptime",
          type: "text",
          label: "Uptime",
          admin: {
            description: "Ex: 99.9%",
          },
        },
        {
          name: "health_score",
          type: "number",
          label: "Pontuação de Saúde (%)",
          min: 0,
          max: 100,
          defaultValue: 100,
        },
        {
          name: "usage_hours",
          type: "number",
          label: "Horas de Uso",
          defaultValue: 0,
        },
        {
          name: "issues_reported",
          type: "number",
          label: "Problemas Reportados",
          defaultValue: 0,
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
          name: "building",
          type: "text",
          label: "Edifício",
        },
        {
          name: "floor",
          type: "text",
          label: "Andar",
        },
        {
          name: "room",
          type: "text",
          label: "Sala",
        },
        {
          name: "address",
          type: "text",
          label: "Endereço",
        },
      ],
    },

    // Licenças e software
    {
      name: "software",
      type: "array",
      label: "Software Instalado",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Nome do Software",
        },
        {
          name: "version",
          type: "text",
          label: "Versão",
        },
        {
          name: "license_key",
          type: "text",
          label: "Chave de Licença",
        },
        {
          name: "expiration_date",
          type: "date",
          label: "Data de Expiração",
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

    // Metadados (mantido como JSON para flexibilidade)
    {
      name: "metadata",
      type: "json",
      label: "Metadados",
      admin: {
        description: "Dados adicionais em formato JSON",
      },
    },

    // Histórico
    {
      name: "history",
      type: "array",
      label: "Histórico",
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: "event",
          type: "text",
          label: "Evento",
          admin: {
            description: "Ex: Registrado, Manutenção, Atribuído",
          },
        },
        {
          name: "date",
          type: "date",
          label: "Data",
        },
        {
          name: "user",
          type: "relationship",
          relationTo: "members",
          label: "Usuário",
        },
        {
          name: "notes",
          type: "textarea",
          label: "Notas",
        },
      ],
    },

    // Manutenções
    {
      name: "maintenance_log",
      type: "array",
      label: "Registro de Manutenção",
      fields: [
        {
          name: "date",
          type: "date",
          required: true,
          label: "Data",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Descrição",
        },
        {
          name: "type",
          type: "select",
          label: "Tipo",
          options: [
            { label: "Preventiva", value: "preventive" },
            { label: "Corretiva", value: "corrective" },
            { label: "Atualização", value: "update" },
            { label: "Limpeza", value: "cleaning" },
          ],
          defaultValue: "preventive",
        },
        {
          name: "performed_by",
          type: "relationship",
          relationTo: "members",
          label: "Realizado por",
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
          defaultValue: false,
        },
        {
          name: "allow_remote_access",
          type: "checkbox",
          label: "Permitir Acesso Remoto",
          defaultValue: false,
        },
        {
          name: "auto_update",
          type: "checkbox",
          label: "Atualização Automática",
          defaultValue: true,
        },
        {
          name: "notify_on_issues",
          type: "checkbox",
          label: "Notificar Problemas",
          defaultValue: true,
        },
      ],
    },

    // Notas
    {
      name: "notes",
      type: "richText",
      label: "Notas",
      admin: {
        description: "Observações gerais sobre o dispositivo",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Atualizar last_seen se status for active
        if (data.status === "active") {
          data.last_seen = new Date().toISOString();
        }

        // Gerar ID do dispositivo se não for fornecido
        if (!data.device_id) {
          data.device_id = `DEV-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        }

        // Registrar histórico
        if (data.status || data.assigned_to) {
          data.history = data.history || [];
          data.history.push({
            event: data.status ? `Status alterado para ${data.status}` : "Dispositivo atribuído",
            date: new Date().toISOString(),
            user: req?.user?.id || null,
            notes: data.status ? `Status alterado para ${data.status}` : `Atribuído a ${data.assigned_to}`,
          });
        }

        // Calcular health_score baseado em issues e status
        if (data.metrics) {
          let score = 100;
          if (data.metrics.issues_reported && data.metrics.issues_reported > 0) {
            score -= data.metrics.issues_reported * 5;
          }
          if (data.status === "maintenance") {
            score -= 20;
          }
          if (data.status === "offline") {
            score -= 10;
          }
          data.metrics.health_score = Math.max(0, Math.min(100, score));
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("devices." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("devices.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});