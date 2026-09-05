Aqui está um exemplo completo de JSON para uma mensagem de contato no kernelCMS:

```json
{
  "name": "João Silva",
  "email": "joao.silva@empresa.com.br",
  "phone": "+55 11 99999-8888",
  "organization": "Tech Solutions Ltda",
  "subject": "Demonstração do Sistema",
  "type": "demo",
  "message": "<h1>Solicitação de Demonstração</h1><p>Olá, gostaria de agendar uma demonstração do sistema para nossa equipe. Temos interesse em conhecer as funcionalidades de gestão de projetos e relatórios.</p><p><strong>Detalhes adicionais:</strong></p><ul><li>Equipe: 15 pessoas</li><li>Interesse em: Módulo financeiro</li><li>Período: Preferência para manhãs</li></ul>",
  "status": "new",
  "saas": "67a1b2c3d4e5f6g7h8i9j0k1",
  "app": "67a1b2c3d4e5f6g7h8i9j0k2",
  "assigned_to": "67a1b2c3d4e5f6g7h8i9j0k3",
  "response": "",
  "responded_at": null,
  "source": "website",
  "created_at": "2026-09-05T10:30:00.000Z",
  "updated_at": "2026-09-05T10:30:00.000Z",
  "metrics": {
    "response_time": 0,
    "priority": "high"
  },
  "internal_notes": "<p>Cliente com alto potencial. Encaminhar para equipe de vendas.</p>",
  "tags": [
    { "tag": "demo" },
    { "tag": "vendas" },
    { "tag": "prioridade-alta" }
  ],
  "interactions": [
    {
      "type": "note",
      "content": "Primeiro contato realizado. Cliente demonstrou interesse no módulo financeiro.",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k4",
      "performed_at": "2026-09-05T10:35:00.000Z"
    },
    {
      "type": "status_change",
      "content": "Mudança de status: new -> in_progress",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k4",
      "performed_at": "2026-09-05T10:40:00.000Z"
    }
  ],
  "notification_settings": {
    "email_sent": false,
    "email_sent_at": null,
    "internal_notification_sent": true,
    "auto_response_sent": true
  },
  "rating": null,
  "feedback": null
}
```

### Exemplo com mensagem já respondida:

```json
{
  "name": "Maria Oliveira",
  "email": "maria.oliveira@startup.io",
  "phone": "+55 21 98888-7777",
  "organization": "Startup Inovadora",
  "subject": "Suporte Técnico - Erro no Sistema",
  "type": "support",
  "message": "<p>Estou tendo problemas para acessar o módulo de relatórios. Aparece o seguinte erro: \"Erro 500 - Falha na conexão com o banco de dados\".</p><p>Já tentei limpar o cache e reiniciar o navegador, mas o problema persiste.</p>",
  "status": "replied",
  "saas": "67a1b2c3d4e5f6g7h8i9j0k1",
  "app": null,
  "assigned_to": "67a1b2c3d4e5f6g7h8i9j0k5",
  "response": "<p>Olá Maria, obrigado por entrar em contato.</p><p>O problema foi identificado e já está corrigido. Tratava-se de uma instabilidade temporária no servidor de banco de dados que já foi resolvida.</p><p>Por favor, tente acessar novamente e confirme se o problema foi solucionado.</p><p>Atenciosamente,<br>Equipe de Suporte</p>",
  "responded_at": "2026-09-05T14:20:00.000Z",
  "source": "app",
  "created_at": "2026-09-05T13:15:00.000Z",
  "updated_at": "2026-09-05T14:20:00.000Z",
  "metrics": {
    "response_time": 65,
    "priority": "high"
  },
  "internal_notes": "<p>Erro crítico. Corrigido em produção.</p>",
  "tags": [
    { "tag": "bug" },
    { "tag": "produção" },
    { "tag": "crítico" }
  ],
  "interactions": [
    {
      "type": "note",
      "content": "Ticket de suporte recebido via app. Prioridade alta.",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k6",
      "performed_at": "2026-09-05T13:20:00.000Z"
    },
    {
      "type": "status_change",
      "content": "Mudança de status: new -> in_progress",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k6",
      "performed_at": "2026-09-05T13:25:00.000Z"
    },
    {
      "type": "reply",
      "content": "Resposta enviada ao cliente",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k5",
      "performed_at": "2026-09-05T14:20:00.000Z"
    },
    {
      "type": "status_change",
      "content": "Mudança de status: in_progress -> replied",
      "performed_by": "67a1b2c3d4e5f6g7h8i9j0k5",
      "performed_at": "2026-09-05T14:20:00.000Z"
    }
  ],
  "notification_settings": {
    "email_sent": true,
    "email_sent_at": "2026-09-05T14:21:00.000Z",
    "internal_notification_sent": true,
    "auto_response_sent": true
  },
  "rating": 5,
  "feedback": "Excelente atendimento! Problema resolvido rapidamente. Obrigada!"
}
```

### Exemplo minimalista (apenas campos obrigatórios):

```json
{
  "name": "Pedro Santos",
  "email": "pedro@email.com",
  "subject": "Informações sobre o produto",
  "type": "general",
  "message": "<p>Gostaria de receber mais informações sobre o produto.</p>",
  "status": "new",
  "source": "website"
}
```

### Estrutura para criar via API:

```json
{
  "name": "Ana Costa",
  "email": "ana.costa@consultoria.com",
  "phone": "+55 31 97777-6666",
  "organization": "Consultoria Estratégica",
  "subject": "Parceria Comercial",
  "type": "partnership",
  "message": "<p>Olá, representamos uma consultoria especializada e gostaríamos de propor uma parceria para oferecer o sistema aos nossos clientes.</p><p>Podemos agendar uma reunião para discutir os termos?</p>",
  "status": "new",
  "source": "website"
}
```

### Campos disponíveis:

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | text | ✅ | Nome completo do remetente |
| `email` | text | ✅ | Email de contato |
| `phone` | text | ❌ | Telefone (opcional) |
| `organization` | text | ❌ | Nome da empresa/organização |
| `subject` | text | ✅ | Assunto da mensagem |
| `type` | select | ✅ | Tipo: general, sales, support, demo, pilot, partnership, other |
| `message` | richText | ✅ | Conteúdo da mensagem |
| `status` | select | ✅ | Status: new, review, in_progress, replied, resolved, archived |
| `saas` | relationship | ❌ | ID do SaaS relacionado |
| `app` | relationship | ❌ | ID do App relacionado |
| `assigned_to` | relationship | ❌ | ID do membro responsável |
| `response` | richText | ❌ | Resposta enviada |
| `responded_at` | date | ❌ | Data da resposta |
| `source` | text | ❌ | Origem (default: "website") |
| `created_at` | date | ❌ | Data de criação (automático) |
| `updated_at` | date | ❌ | Data de atualização (automático) |
| `metrics` | group | ❌ | Métricas (response_time, priority) |
| `internal_notes` | richText | ❌ | Notas internas |
| `tags` | array | ❌ | Tags para categorização |
| `interactions` | array | ❌ | Histórico de interações |
| `notification_settings` | group | ❌ | Configurações de notificação |
| `rating` | number | ❌ | Avaliação (1-5) |
| `feedback` | textarea | ❌ | Feedback do cliente |