import express from 'express'
import { deleteUser, getUsers } from '../controllers/user.controller.js';

const userRouter = express.Router()

userRouter.get('/', getUsers);

userRouter.delete('/:userId', deleteUser)

export default userRouter;