// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

const storage = createStorage({
  driver: fsDriver({ base: `${process.cwd()}/cache` }),
})
interface Data {
  name: string
  index: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe', index: await storage.getItem('__number') })
}
