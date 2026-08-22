
import {kernel as KernelCMS} from "./../kernel.config"
import { serve } from "kernelcms/server";
import fogu_client from "./lib/fogu_client";

const fogu= await fogu_client({})
const oneCms= await fogu.channel("one.cms");
 await oneCms.join("ssss" as any)
const kernel = await KernelCMS({ core:{fogu:fogu, oneCms}})

      const port = Number(process.env.PORT) || 9e3;
      const server = await serve(kernel, {
        port,
        apiKey: process.env.KERNEL_API_KEY,
        cors: true,
        admin: true,
        graphql: true,
        // Local development: don't throttle yourself. Production (`kernel start`)
        // keeps the default rate limiter on.
        rateLimit: { enabled: false }
      });

      oneCms.act("cms.create",async(params:any,ctx:any)=>{
        try {
               const created = await kernel.create(params)
              ctx.reply(created,null)
        } catch (error:any) {
           ctx.reply({},error.message||'')
        }
      })


    await  oneCms.act("cms.find",async(params:any,ctx:any)=>{

        try {
              const findList = await kernel.find(params)
              ctx.reply(findList,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })
     await  oneCms.act("cms.count",async(params:any,ctx:any)=>{
        try {
              const countList = await kernel.count(params)
              ctx.reply(countList,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })
        await  oneCms.act("cms.update",async(params:any,ctx:any)=>{
        try {
              const docUpdate = await kernel.update(params)
              ctx.reply(docUpdate,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })

        await  oneCms.act("cms.delete",async(params:any,ctx:any)=>{
        try {
              const docDelete = await kernel.delete(params)
              ctx.reply(docDelete,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })


        await  oneCms.act("cms.updateMany",async(params:any,ctx:any)=>{
        try {
              const docUpdateMany = await kernel.updateMany(params)
              ctx.reply(docUpdateMany,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })

      
        await  oneCms.act("cms.deleteMany",async(params:any,ctx:any)=>{
        try {
              const docdeleteMany = await kernel.deleteMany(params)
              ctx.reply(docdeleteMany,null)
        } catch (error:any) {
          console.log(error)
           ctx.reply({},error.message||'')
        }
      })
      console.log(`KernelCMS dev server`);
      console.log(`  \u279C  Admin:  ${server.url}/admin`);
      console.log(`  \u279C  API:    ${server.url}${kernel.config.routes.api}`);
      console.log(`  \u279C  Health: ${server.url}${kernel.config.routes.api}/health`);
      console.log(`  \u279C  Collections: ${kernel.config.collections.map((c) => c.slug).join(", ") || "(none)"}`);
      if (!process.env.KERNEL_API_KEY) {
        console.log(`  !  Set KERNEL_API_KEY to enable trusted writes over HTTP.`);
      }
      const shutdown = async () => {
        await server.close();
        await kernel.destroy();
        process.exit(0);
      };
      process.on("SIGINT", shutdown);
      process.on("SIGTERM", shutdown);


  

