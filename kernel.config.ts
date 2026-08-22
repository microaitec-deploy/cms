import path from "node:path";
import { defineConfig, defineEndpoint, initKernel,auth0SSO, oidcProvider ,  } from "kernelcms";
import { postgresAdapter } from "kernelcms/postgres";
import { collections } from "./src/kernel/collections";
import { localStorage } from "kernelcms/storage";
const config = ({core}:any)=>defineConfig({
  // Set KERNEL_SECRET in production.
  secret: process.env.KERNEL_SECRET ?? "dev-only-secret",
  admin:{
        meta:{
          titleSuffix:"MicroAITec",

        },

  },

  storage: localStorage({
  rootDir: path.resolve("./.uploads"),
    servePath: "/files",
  }),
  oauth:[
        oidcProvider({
        name:"KeyCloak",
       
        issuer: process.env.KEYCLOAK_ISSUER||'',
        clientId: process.env.KEYCLOAK_CLIENT_ID||'',
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET||'',
        
        scopes:[],
      })

  ],

  db: postgresAdapter({
    url:
      process.env.DATABASE_URL ??
      "postgresql://postgres:postgres@localhost:5432/kernelcms",
  }),

  globals: [],

  collections: collections({core}),

  endpoints: [
    defineEndpoint({
      method: "GET",
      path: "/test/test",
      access: ({ req }) => Boolean(req.user),
      handler: async ({ input, ctx }) => ({
        id: "ddddddd",
      }),
    }),
  ],
});

export default config;

export const kernel = async({core={}}:any)=> await initKernel(config({core}),{autoMigrate:true});
