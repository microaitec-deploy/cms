export default ({ core }: any) => ({
  slug: "access_cards",
  admin: {
    useAsTitle: "card_number",
    defaultColumns: ["card_number", "member", "organization", "status", "expires_at"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Informações do cartão
    {
      name: "card_number",
      type: "text",
      required: true,
      unique: true,
      label: "Número do Cartão",
      admin: {
        description: "Número único identificador do cartão",
      },
    },

    {
      name: "card_type",
      type: "select",
      required: true,
      defaultValue: "physical",
      options: [
        { label: "Físico", value: "physical" },
        { label: "Digital", value: "digital" },
        { label: "Virtual", value: "virtual" },
        { label: "NFC", value: "nfc" },
      ],
      label: "Tipo de Cartão",
    },

    {
      name: "card_design",
      type: "upload",
      relationTo: "media",
      label: "Design do Cartão",
      admin: {
        description: "Template ou design personalizado do cartão",
      },
    },

    // Relacionamentos
    {
      name: "member",
      type: "relationship",
      relationTo: "members",
      required: true,
      label: "Membro",
      admin: {
        description: "Membro proprietário do cartão",
      },
    },

    {
      name: "organization",
      type: "relationship",
      relationTo: "organizations",
      required: true,
      label: "Organização",
      admin: {
        description: "Organização emissora do cartão",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      label: "SaaS",
      admin: {
        description: "SaaS vinculado ao cartão",
      },
    },

    {
      name: "apps",
      type: "relationship",
      relationTo: "apps",
      hasMany: true,
      label: "Aplicações Autorizadas",
      admin: {
        description: "Apps que o cartão dá acesso",
      },
    },

    {
      name: "issued_by",
      type: "relationship",
      relationTo: "members",
      label: "Emissor",
      admin: {
        description: "Membro que emitiu o cartão",
      },
    },

    // Dados do membro no cartão
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Fotografia",
      admin: {
        description: "Foto do membro para o cartão",
      },
    },

    {
      name: "role",
      type: "text",
      label: "Função",
      admin: {
        description: "Função do membro exibida no cartão",
      },
    },

    {
      name: "department",
      type: "text",
      label: "Departamento",
      admin: {
        description: "Departamento do membro",
      },
    },

    {
      name: "display_name",
      type: "text",
      label: "Nome Exibido",
      admin: {
        description: "Nome que aparecerá no cartão (se diferente do nome do membro)",
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
          label: "Suspenso",
          value: "suspended",
        },
        {
          label: "Expirado",
          value: "expired",
        },
        {
          label: "Cancelado",
          value: "cancelled",
        },
        {
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Bloqueado",
          value: "blocked",
        },
        {
          label: "Perdido",
          value: "lost",
        },
        {
          label: "Roubado",
          value: "stolen",
        },
      ],
      label: "Estado",
    },

    // Níveis de acesso
    {
      name: "access_level",
      type: "select",
      required: true,
      defaultValue: "standard",
      options: [
        { label: "Básico", value: "basic" },
        { label: "Padrão", value: "standard" },
        { label: "Premium", value: "premium" },
        { label: "VIP", value: "vip" },
        { label: "Admin", value: "admin" },
      ],
      label: "Nível de Acesso",
    },

    {
      name: "access_zones",
      type: "array",
      label: "Zonas de Acesso",
      admin: {
        description: "Áreas/locais que o cartão permite acesso",
      },
      fields: [
        {
          name: "zone",
          type: "text",
          required: true,
          label: "Zona",
        },
        {
          name: "description",
          type: "text",
          label: "Descrição",
        },
        {
          name: "schedule",
          type: "text",
          label: "Horário",
          admin: {
            description: "Ex: 08:00-18:00",
          },
        },
      ],
    },

    // Datas
    {
      name: "issued_at",
      type: "date",
      label: "Data de Emissão",
      defaultValue: () => new Date(),
    },

    {
      name: "expires_at",
      type: "date",
      label: "Data de Validade",
      admin: {
        description: "Data de expiração do cartão",
      },
    },

    {
      name: "activated_at",
      type: "date",
      label: "Data de Ativação",
      admin: {
        description: "Data em que o cartão foi ativado",
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

    // QR Code e códigos
    {
      name: "qr_code",
      type: "text",
      label: "QR Code",
      admin: {
        description: "Código QR para acesso digital",
        readOnly: true,
      },
    },

    {
      name: "barcode",
      type: "text",
      label: "Código de Barras",
      admin: {
        readOnly: true,
      },
    },

    {
      name: "qr_code_image",
      type: "upload",
      relationTo: "media",
      label: "Imagem do QR Code",
      admin: {
        readOnly: true,
        description: "QR Code gerado automaticamente",
      },
    },

    // Pin e segurança
    {
      name: "security",
      type: "group",
      label: "Segurança",
      fields: [
        {
          name: "pin_code",
          type: "text",
          label: "PIN Code",
          admin: {
            description: "Código PIN para acesso (criptografado)",
          },
        },
        {
          name: "has_pin",
          type: "checkbox",
          label: "Possui PIN",
          defaultValue: false,
        },
        {
          name: "requires_biometric",
          type: "checkbox",
          label: "Exige Biometria",
          defaultValue: false,
        },
        {
          name: "max_attempts",
          type: "number",
          label: "Tentativas Máximas",
          defaultValue: 3,
        },
        {
          name: "blocked_until",
          type: "date",
          label: "Bloqueado Até",
          admin: {
            description: "Data até quando o cartão está bloqueado",
          },
        },
      ],
    },

    // Métricas de uso
    {
      name: "metrics",
      type: "group",
      label: "Métricas de Uso",
      fields: [
        {
          name: "total_accesses",
          type: "number",
          label: "Total de Acessos",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "last_access_location",
          type: "text",
          label: "Último Local de Acesso",
        },
        {
          name: "access_frequency",
          type: "number",
          label: "Frequência de Acesso",
          admin: {
            description: "Média de acessos por dia",
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

    // Configurações
    {
      name: "settings",
      type: "group",
      label: "Configurações",
      fields: [
        {
          name: "allow_remote_access",
          type: "checkbox",
          label: "Permitir Acesso Remoto",
          defaultValue: false,
        },
        {
          name: "allow_offline_use",
          type: "checkbox",
          label: "Permitir Uso Offline",
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
          name: "requires_validation",
          type: "checkbox",
          label: "Exige Validação",
          defaultValue: false,
        },
      ],
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
            description: "Ex: Emitido, Ativado, Desativado, Acesso",
          },
        },
        {
          name: "date",
          type: "date",
          label: "Data",
          defaultValue: () => new Date(),
        },
        {
          name: "user",
          type: "relationship",
          relationTo: "members",
          label: "Usuário",
        },
        {
          name: "notes",
          type: "text",
          label: "Notas",
        },
        {
          name: "location",
          type: "text",
          label: "Localização",
        },
      ],
    },

    // Notas
    {
      name: "notes",
      type: "richText",
      label: "Observações",
      admin: {
        description: "Observações gerais sobre o cartão",
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }: any) => {
        // Gerar número do cartão automaticamente se não for fornecido
        if (!data.card_number) {
          const prefix = data.card_type === "digital" ? "DIG" : "PHY";
          const timestamp = Date.now().toString(36).toUpperCase();
          const random = Math.random().toString(36).substring(2, 8).toUpperCase();
          data.card_number = `${prefix}-${timestamp}-${random}`;
        }

        // Gerar QR Code automaticamente
        if (!data.qr_code && data.card_number) {
          data.qr_code = `ACCESS_${data.organization}_${data.member}_${data.card_number}`;
        }

        // Gerar código de barras
        if (!data.barcode && data.card_number) {
          data.barcode = data.card_number.replace(/[^0-9]/g, '');
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Verificar expiração
        if (data.expires_at) {
          const expires = new Date(data.expires_at);
          const now = new Date();
          if (expires < now && data.status === "active") {
            data.status = "expired";
          }
        }

        // Verificar bloqueio
        if (data.security && data.security.blocked_until) {
          const blockedUntil = new Date(data.security.blocked_until);
          const now = new Date();
          if (blockedUntil < now && data.status === "blocked") {
            data.status = "active";
            data.security.blocked_until = null;
          }
        }

        // Registrar histórico
        if (data.status) {
          data.history = data.history || [];
          data.history.push({
            event: `Status alterado para ${data.status}`,
            date: new Date().toISOString(),
            user: req?.user?.id || null,
            notes: data.status === "active" ? "Cartão ativado" : 
                   data.status === "suspended" ? "Cartão suspenso" :
                   data.status === "expired" ? "Cartão expirou" :
                   data.status === "blocked" ? "Cartão bloqueado" :
                   data.status === "lost" ? "Cartão perdido" :
                   data.status === "stolen" ? "Cartão roubado" : 
                   "Status alterado"
          });
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("access_cards." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("access_cards.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});