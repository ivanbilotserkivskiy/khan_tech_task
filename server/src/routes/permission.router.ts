import express from 'express'
import { getPermissions } from '../controllers/permission.controller.js'

const permissionRouter = express.Router()

permissionRouter.get('/', getPermissions)

export default permissionRouter