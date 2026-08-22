export default ({ core }: any) => ({
  slug: "apps",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "saas", "owner"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome do App",
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "Identificador único para o app (ex: xkola-app)",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Descrição",
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "development",
      options: [
        {
          label: "Em desenvolvimento",
          value: "development",
        },
        {
          label: "Beta",
          value: "beta",
        },
        {
          label: "Ativo",
          value: "active",
        },
        {
          label: "Inativo",
          value: "inactive",
        },
        {
          label: "Arquivado",
          value: "archived",
        },
      ],
    },

    {
      name: "website",
      type: "text",
      label: "Website",
      admin: {
        description: "URL do site do app",
      },
    },

    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logótipo",
    },

    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      label: "Responsável",
      required: true,
    },

    {
      name: "url",
      type: "text",
      label: "URL do App",
      admin: {
        description: "URL de acesso ao aplicativo",
      },
    },

    {
      name: "saas",
      type: "relationship",
      relationTo: "saas",
      required: true,
      label: "SaaS",
      admin: {
        description: "SaaS ao qual este app pertence",
      },
    },

    // Campos adicionais úteis para apps
    {
      name: "version",
      type: "text",
      label: "Versão",
      defaultValue: "1.0.0",
    },

    {
      name: "category",
      type: "text",
      label: "Categoria",
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

    {
      name: "is_public",
      type: "checkbox",
      label: "Público",
      defaultValue: true,
    },

    {
      name: "release_date",
      type: "date",
      label: "Data de Lançamento",
    },

    {
      name: "last_update",
      type: "date",
      label: "Última Atualização",
      defaultValue: () => new Date(),
    },

    {
      name: "screenshots",
      type: "array",
      label: "Capturas de Tela",
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
      name: "features",
      type: "array",
      label: "Funcionalidades",
      fields: [
        {
          name: "feature",
          type: "text",
          label: "Funcionalidade",
        },
      ],
    },

    {
      name: "api_key",
      type: "text",
      label: "API Key",
      admin: {
        readOnly: true,
        description: "Chave de API gerada automaticamente",
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

        // Gerar API Key automaticamente
        if (!data.api_key) {
          data.api_key = `app_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
        }

        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation, req }: any) => {
        try {
          await core.oneCms.publish("apps." + operation, doc);
        } catch (error) {
          console.error("Erro ao publicar evento:", error);
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }: any) => {
        try {
          await core.oneCms.publish("apps.delete", doc);
        } catch (error) {
          console.error("Erro ao publicar evento de delete:", error);
        }
        return doc;
      },
    ],
  },
});