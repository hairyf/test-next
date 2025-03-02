import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

const storage = createStorage({
  driver: fsDriver({ base: `${process.cwd()}/cache` }),
})

async function main() {
  if (process.env.LOCKED || process.env.NEXT_IS_EXPORT_WORKER)
    return

  process.env.LOCKED = 'true'

  const timer = setInterval(async () => {
    const value = (await storage.getItem<number>('__number') || 0) + 1
    await storage.setItem('__number', value)
  }, 1000)
  process.on('exit', () => clearInterval(timer))
}

main()
