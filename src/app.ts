import express from 'express'
import userRoutes from './modules/users/routes'
const app = express()

app.use(express.json())

app.use("/api/v1",userRoutes)


export default app


