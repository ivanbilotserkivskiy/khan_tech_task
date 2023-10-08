import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from './connection/index.js';
import User from './models/User.js';
import Post from './models/Post.js';
import Permission from './models/Permission.js';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { postData } from './seed_data/postData.js'
import { Op } from 'sequelize';

dotenv.config();

const app: Express = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'))
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

app.delete('/users/:userId', async (req: Request, res: Response) => {
  const userId = +(req.params.userId);

  try {
    await User.destroy({ where: 
      {
        id: userId
      }
    });

    res.send({
      "message": "user was deleted successfuly"
    })
  }

  catch {
    res.sendStatus(404);
  }
})

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

app.post('/prepared-posts', async (req:Request, res: Response) => {
  try {
    postData.forEach(async post => {
      const data = await Post.build(post);

      data.save();
    }) 
    res.sendStatus(200);
  }
  catch {
    res.sendStatus(403);
  }
})

app.get('/posts', async (req: Request, res: Response) => {
  const page = +(req.query.page as string) || 1;
  const limit = +(req.query.limit as string) || 6;
  const offset = (page - 1) * limit;

  const postId = +(req.query.postId as string) || null;

  if (limit === 1 && !postId) {

    try {
      const randomPost = await Post.findOne({
        order: sequelize.random(),
        include: [
          {
            model: User,
            as: 'users',
            attributes: ['username']
          } 
        ]
      })

      res.send(randomPost);
    }

    catch {
      res.sendStatus(404);
    }

  
  } else if (postId) {
    try {
        const randomPost = await Post.findOne({
        order: sequelize.random(),
        where: {
          id: {
            [Op.not]: postId
          }
        },
        include: [
          {
            model: User,
            as: 'users',
            attributes: ['username']
          } 
        ]
      })

      res.send(randomPost)
    }

    catch {
      res.sendStatus(404)
    }
  } else {
    try {
      const posts = await Post.findAll({
        offset,
        limit,
        include: [
          {
            model: User,
            as: 'users',
            attributes: ['username']
          } 
        ]
      });
      
      res.send(posts)
    }
    catch {
      return 'SOmething went wrong with getting posts'
    }
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