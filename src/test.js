
const { docs } = await kernel.find({
  collection: 'posts',
  where: { },
  sort: '-createdAt',
  limit: 20,
  page: 1,
  depth: 1,
})
console.log(docs)
      try {
            const created = await kernel.create({
            collection: 'posts',
            data: { title: 'Hello', body: '…'},
            })

            console.log(created)
      } catch (error) {
        console.log(error)
      }
  