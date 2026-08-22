export default ({ core }: any) => ({
  slug: "organizations",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "email", "members_count", "saas_count"],
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
      label: "Nome da Organização",
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para a organização (ex: microaitec)",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "full_description",
      type: "richText",
      label: "Descrição Completa",
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
          label: "Inativa",
          value: "inactive",
        },
        {
          label: "Pendente",
          value: "pending",
        },
        {
          label: "Suspensa",
          value: "suspended",
        },
        {
          label: "Arquivada",
          value: "archived",
        },
      ],
      label: "Estado",
    },

    // Contato
    {
      name: "email",
      type: "email",
      label: "Email",
      admin: {
        description: "Email principal da organização",
      },
    },

    {
      name: "phone",
      type: "text",
      label: "Telefone",
    },

    {
      name: "website",
      type: "text",
      label: "Website",
    },

    // Mídia
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    {
      name: "banner",
      type: "upload",
      relationTo: "media",
      label: "Banner",
    },

    // Relacionamentos
    {
      name: "members",
      type: "relationship",
      relationTo: "members",
      hasMany: true,
      label: "Membros",
      admin: {
        description: "Membros da organização",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      hasMany: true,
      label: "SaaS",
      admin: {
        description: "SaaS pertencentes à organização",
      },
    },

    {
      name: "teams",
      type: "relationship",
      relationTo: "teams",
      hasMany: true,
      label: "Equipes",
      admin: {
        description: "Equipes da organização",
      },
    },

    {
      name: "leader",
      type: "relationship",
      relationTo: "members",
      label: "Líder/Diretor",
      admin: {
        description: "Membro responsável pela organização",
      },
    },

    // Informações adicionais
    {
      name: "type",
      type: "select",
      label: "Tipo de Organização",
      options: [
        { label: "Empresa", value: "company" },
        { label: "Startup", value: "startup" },
        { label: "ONG", value: "ngo" },
        { label: "Instituição de Ensino", value: "educational" },
        { label: "Governo", value: "government" },
        { label: "Outro", value: "other" },
      ],
      defaultValue: "company",
    },

    {
      name: "industry",
      type: "text",
      label: "Indústria",
      admin: {
        description: "Ex: Tecnologia, Educação, Saúde",
      },
    },

    {
      name: "founded_date",
      type: "date",
      label: "Data de Fundação",
    },

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

    // Endereço
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

    // Métricas
    {
      name: "metrics",
      type: "group",
      label: "Métricas",
      fields: [
        {
          name: "total_members",
          type: "number",
          label: "Total de Membros",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "active_members",
          type: "number",
          label: "Membros Ativos",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "total_saas",
          type: "number",
          label: "Total de SaaS",
          defaultValue: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "total_projects",
          type: "number",
          label: "Total de Projetos",
          defaultValue: 0,
        },
        {
          name: "rating",
          type: "number",
          label: "Avaliação",
          min: 0,
          max: 5,
          defaultValue: 0,
        },
      ],
    },

    // Redes sociais
    {
      name: "social_links",
      type: "group",
      label: "Redes Sociais",
      fields: [
        {
          name: "facebook",
          type: "text",
          label: "Facebook",
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter/X",
        },
        {
          name: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          name: "youtube",
          type: "text",
          label: "YouTube",
        },
        {
          name: "github",
          type: "text",
          label: "GitHub",
        },
      ],
    },

    // Datas
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
          label: "Organização Pública",
          defaultValue: true,
        },
        {
          name: "allow_member_invites",
          type: "checkbox",
          label: "Permitir Convites de Membros",
          defaultValue: true,
        },
        {
          name: "require_approval",
          type: "checkbox",
          label: "Exigir Aprovação para Entrada",
          defaultValue: false,
        },
        {
          name: "notification_email",
          type: "email",
          label: "Email de Notificações",
        },
      ],
    },

    // Documentos legais
    {
      name: "legal_info",
      type: "group",
      label: "Informações Legais",
      fields: [
        {
          name: "legal_name",
          type: "text",
          label: "Nome Legal",
        },
        {
          name: "tax_id",
          type: "text",
          label: "NIF/CNPJ",
        },
        {
          name: "registration_number",
          type: "text",
          label: "Número de Registro",
        },
        {
          name: "legal_country",
          type: "text",
          label: "País de Registro",
        },
      ],
    },

    // Notas internas
    {
      name: "notes",
      type: "richText",
      label: "Notas Internas",
      admin: {
        description: "Observações internas sobre a organização",
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

        // Validar email
        if (data.email) {
          data.email = data.email.toLowerCase().trim();
        }

        // Atualizar data de última atualização
        data.updated_at = new Date().toISOString();

        // Calcular métricas automaticamente
        if (data.members && Array.isArray(data.members)) {
          data.metrics = data.metrics || {};
          data.metrics.total_members = data.members.length;
          // Nota: active_members precisaria de lógica adicional baseada no status dos membros
        }

        if (data.saas && Array.isArray(data.saas)) {
          data.metrics = data.metrics || {};
          data.metrics.total_saas = data.saas.length;
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("organizations." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("organizations.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});