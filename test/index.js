import fogu_client from "../src/lib/fogu_client";

const fogu= await fogu_client({})
const oneCms= await fogu.channel("one.cms");
 await oneCms.join("ddddddddddddd")

 /*


 const res=  await         oneCms.call("cms.create",{
            collection: 'posts',
            data: { title: 'test', body: '…'},
            })
 console.log(res)
 const res=  await  oneCms.call("cms.find",{
  collection: 'posts',
  where: { },
  sort: '-createdAt',
  limit: 20,
  page: 1,
  depth: 1,
}, 3*1000)
 console.log(res)


  const res=  await  oneCms.call("cms.count",{
        collection: 'posts',
        where: { 
            title: { 
                equals: "xxx" 
        } } 
}, 3*1000)
 console.log(res)
 const res=  await  oneCms.call("cms.update",{ collection: 'posts', id:"56306ae5-172a-4e2c-8c02-2960a66f17a4", data: { title: 'Edited' } }, 3*1000)
 console.log(res)


  const res=  await  oneCms.call("cms.delete",{ collection: 'posts', id:"56306ae5-172a-4e2c-8c02-2960a66f17a4" }, 3*1000)
 console.log(res)


 const updated = await kernel.update({ collection: 'posts', id, data: { title: 'Edited' } })
const removed = await kernel.delete({ collection: 'posts', id })

const { docs, count } = await kernel.updateMany({
  collection: 'posts',
  where: { status: { equals: 'review' } },
  data: { status: 'published' },
  limit: 1000, // safety cap (default 1000)
})

await kernel.deleteMany({ collection: 'comments', where: { spam: { equals: true } } })
 */

 await oneCms.subscribe("posts.create",(data)=>{
    console.log(data,"dddd")
})
 await oneCms.subscribe("posts.update",(data)=>{
    console.log(data,"ss")
})

 await oneCms.subscribe("posts.delete",(data)=>{
    console.log(data, "ssssss")
})

 const res=  await         oneCms.call("cms.create",{
            collection: 'posts',
            data: { title: 'test', body: '…'},
            })