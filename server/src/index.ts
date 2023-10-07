import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from './connection/index.js';
import User from './models/User.js';
import Post from './models/Post.js';
import Permission from './models/Permission.js';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3004;

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.findAll()
    res.send(users);
  }
  catch {
    return 'SOmething went wrong with getting users'
  }
});

app.post('/register/user', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log(req.body)

  if (!username || !password) {
    return res.status(400).json({
      "message": "username and pasword are required"
    })
  }

  const duplicate = await User.findOne({
    where: {
      username: username,
    }
  })

  if (duplicate) {
    return res.sendStatus(409);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username: username, 
      password: hashedPassword, 
      permissionId: 2
    }

    const registerUser = await User.build(newUser);
    registerUser.save()

    res.send(registerUser);
  }
  catch {
    return res.status(400).json({
      "message": "Something went wrong with user sign up"
    })
  }
})

app.post('/register/admin', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log(req.body)

  if (!username || !password) {
    return res.status(400).json({
      "message": "username and pasword are required"
    })
  }

  const duplicate = await User.findOne({
    where: {
      username: username,
    }
  })

  if (duplicate) {
    return res.sendStatus(409);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username: username, 
      password: hashedPassword, 
      permissionId: 1,
    }

    const registerUser = await User.build(newUser);
    registerUser.save()

    res.send(registerUser);
  }
  catch {
    return res.status(400).json({
      "message": "Something went wrong with user sign up"
    })
  }
})

app.post('/login/user', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      "message": "username and pasword are required"
    })
  }

  const foundUser = await User.findOne({
    where: {
      username: username,
    }
  });

  if (!foundUser) {
    return res.sendStatus(401);
  }

  console.log(foundUser.dataValues.password, password)

  const passwordMatch = await bcrypt.compare(password, foundUser.dataValues.password);

  if (passwordMatch) {
    res.send({ "succes": `User: ${username} is logged in!` })
  } else {
    res.sendStatus(401);
  }

})

app.get('/posts', async (req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  }
  catch {
    return 'SOmething went wrong with getting posts'
  }
})

app.post('/posts', async (req: Request, res: Response) => {
  const { title, userId, realm, description, readTime } = req.body;
  try {
    const newPost = await Post.build({
      title,
      userId,
      realm,
      description,
      readTime,
    })
    newPost.save()

    res.send(newPost)
  }
  catch {
    return 'Something went wrong with creating post'
  }
})

app.delete('/posts/:id', async (req: Request, res: Response) => {
  const itemToDelete = req.params.id;
  try {
    Post.destroy({
      where: {
        id: itemToDelete,
      }
    })

    res.send(`${itemToDelete} was deleted successfuly`)
  }
  catch {
    return 'Something went wrong with deleting post'
  }
})

app.put('/posts/:id', async (req: Request, res: Response) => {
  const itemIdToUpdate = req.params.id;
  
  const { title } = req.body
  try {
    const item = await Post.update({ title }, {
      where: {
        id: itemIdToUpdate,
      }
    })

    res.send(item);
  }
  catch {
    return 'Something went wrong with updating post'
  }
})

app.get('/permission', async (req: Request, res: Response) => {
  try {
    const permissions = await Permission.findAll();
    res.send(permissions);
  }
  catch {
    return 'Something went wrong with getting posts'
  }
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});