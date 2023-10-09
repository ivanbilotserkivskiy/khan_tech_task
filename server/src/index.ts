import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import registrationRouter from './routes/registration.router.js';
import loginRouter from './routes/login.router.js';
import postRouter from './routes/post.router.js';
import permissionRouter from './routes/permission.router.js';

dotenv.config();

const app: Express = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'))
const port = process.env.PORT || 3004;

app.use('/users', userRouter);
app.use('/register', registrationRouter);
app.use('/login', loginRouter);
app.use('/posts', postRouter);
app.use('/permission', permissionRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});