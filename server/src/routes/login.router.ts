import express from 'express';
import { loginAdmin, loginUser } from '../controllers/login.controller.js';

const loginRouter = express.Router();

loginRouter.post('/user', loginUser)

loginRouter.post('/admin', loginAdmin)

export default loginRouter