

export default ({core}:any)=> ({
      slug: "posts",
        admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
      access: {
     create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "body",
          type: "richText",
        },
        {
          name: "author",
          type: "relationship",
          relationTo: "users",
        },
      ],

       hooks: {
          afterChange: [
            async({ doc, operation, req }:any) => {
             try {
                  await  core.oneCms.publish("posts."+operation, doc)
             } catch (error) {
             }
              return doc
            },
          ],
            afterDelete: [
            async({ doc }:any) => {
             try {
                  await  core.oneCms.publish("posts.delete", doc)
             } catch (error) {
             }
              return doc
            },
          ],
          /*
            beforeChange: [
            ({ data, operation, req }:any) => {
             // data.name = data.name.trim()
              console.log(data, operation)

              return data
            },
          ],
          
          afterChange: [
            ({ doc, operation, req }) => {
              console.log('Student alterado:', doc)

              return doc
            },
          ],

          afterRead: [
            ({ doc, req }) => {
              return doc
            },
          ],

          beforeDelete: [
            async ({ id, req }) => {
              console.log('Antes de eliminar:', id)
            },
          ],

          afterDelete: [
            async ({ id, doc, req }) => {
              console.log('Depois de eliminar:', id)
            },
          ],
          */
  },
})