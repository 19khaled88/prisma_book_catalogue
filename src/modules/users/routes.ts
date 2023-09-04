import express from 'express'
import { UserController } from './controller'
const router = express.Router()


router.post('/auth/signup',UserController.signUpController)
router.post('/auth/signin',UserController.signInController)

export default router


