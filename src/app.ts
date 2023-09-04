import express from 'express'
import UserRoutes from './modules/users/routes'
const app = express()

app.use(express.json())

app.use('/api/v1',UserRoutes)

export default app