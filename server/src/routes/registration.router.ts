import express from 'express'
import { registerAdmin, registerUser } from '../controllers/registration.controller.js'

const registrationRouter = express.Router()

registrationRouter.post('/user', registerUser)

registrationRouter.post('/admin', registerAdmin)

export default registrationRouter