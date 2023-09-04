import config from "../config/default";
import app from "./app";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  app.listen(config.port,()=>{
    console.log(`Server running on port ${config.port}`)
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
