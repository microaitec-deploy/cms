# kernelpg

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

dfsqwwqwihquibqbwyuqqqq


postgresql://default:LJmZ8UQiS5oN@ep-odd-sun-224149-pooler.us-east-1.aws.neon.tech/kernel?sslmode=require&channel_binding=require




Se no teu `kernelcms` tens algo como:

```ts
import { auth0SSO } from "kernelcms";
```

a questão principal é que **`auth0SSO` provavelmente é um adaptador específico para Auth0**, não para qualquer provedor OIDC. O Keycloak, porém, expõe **OpenID Connect**, portanto o ideal é ter um provider genérico OIDC no KernelCMS — ou adaptar o `auth0SSO` para aceitar endpoints OIDC do Keycloak.

A arquitetura seria:

```text
┌──────────────┐
│   KernelCMS  │
│              │
│ auth0SSO ?   │
└──────┬───────┘
       │ OIDC
       ▼
┌──────────────┐
│   Keycloak   │
│              │
│ realm: main  │
└──────┬───────┘
       │
       ▼
     User
```

### Se `auth0SSO` for configurável por OIDC

Por exemplo, se a implementação do KernelCMS permitir definir o `issuer`, podes fazer algo deste género:

```ts
import { defineConfig, auth0SSO } from "kernelcms";

export default defineConfig({
  auth: {
    providers: [
      auth0SSO({
        issuer: process.env.KEYCLOAK_ISSUER,
        clientId: process.env.KEYCLOAK_CLIENT_ID,
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      }),
    ],
  },
});
```

E:

```env
KEYCLOAK_ISSUER=http://localhost:8080/realms/myrealm
KEYCLOAK_CLIENT_ID=kernelcms
KEYCLOAK_CLIENT_SECRET=xxxxxxxx
```

Mas **não assumiria que essa API existe** sem vermos a implementação real de `auth0SSO`.

### O que eu recomendo no teu KernelCMS

Como estás a construir o próprio KernelCMS, faria a abstração assim:

```ts
type OIDCProviderConfig = {
  issuer: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes?: string[];
};
```

E depois:

```ts
oidc({
  name: "keycloak",
  issuer: "http://localhost:8080/realms/myrealm",
  clientId: process.env.KEYCLOAK_CLIENT_ID!,
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
  redirectUri: "http://localhost:3000/admin/auth/callback",
});
```

Assim o KernelCMS não fica preso ao Auth0:

```text
                KernelCMS
                   │
             ┌─────┴─────┐
             │    OIDC    │
             └─────┬─────┘
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
   Keycloak      Auth0       Azure AD
```

O Keycloak funciona como **Identity Provider / Authorization Server**, e o KernelCMS como **OIDC client**. O SSO é precisamente baseado nesse modelo de sessão centralizada. ([Auth0][1])

**Se me mostrares o código/export de `auth0SSO` do teu `kernelcms`**, consigo dizer-te exatamente **como fazer `keycloakSSO()` compatível com a API atual**, sem inventar uma API diferente da que o teu KernelCMS já possui.

[1]: https://auth0.com/docs/authenticate/single-sign-on?utm_source=chatgpt.com "Single Sign-On - Auth0 Docs"
