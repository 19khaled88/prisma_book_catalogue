import {PrismaClient} from '@prisma/client'

import config from './src/config'
import app from './app'


const prisma = new PrismaClient()
async function main(){
    app.listen(config.port,()=>{
        console.log(`Server running on port ${config.port}`)
    })
}

main()
    // .then(async()=>{
    //     await prisma.$connect()
    // })
    // .catch(async(e)=>{
    //     console.log(e)
    //     // await prisma.$disconnect()
    //     // process.exit(1)
    // })
    