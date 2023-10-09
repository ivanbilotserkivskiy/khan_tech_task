import { Request, Response } from 'express';
import { postData } from '../seed_data/postData.js';
import Post from '../models/Post.js';
import User from '../models/User.js';
import sequelize from '../connection/index.js';
import { Op } from 'sequelize';
import { UploadedFile } from 'express-fileupload';

export const addPreparedPoste = async (req:Request, res: Response) => {
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
}

export const getPostCount = async (req: Request, res: Response) => {
  try {
    const total = await Post.count();

    res.send({
      total
    });
  }
  catch {
    res.sendStatus(404);
  }
}

export const getPosts = async (req: Request, res: Response) => {
  const page = +(req.query.page as string) || 1;
  const limit = +(req.query.limit as string) || 6;
  const offset = (page - 1) * limit;
  const orderBy = (req.query.orderBy as string) || 'id'

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
        order: [[orderBy, 'DESC']],
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

}

export const addPost = async (req: Request, res: Response) => {
  const { title, userId, realm, description, readTime } = req.body;
  const fileData = req.files?.file as UploadedFile;

  const filePath = `/public/images/${fileData.name}`;
  const dbFilePath = `/images/${fileData.name}`
  
  if (fileData) {
    fileData.mv(filePath, (err: any) => {
    if(err) {
      return res.sendStatus(404)
    }
  })
}

  try {
    const newPost = await Post.build({
      title,
      userId: +userId,
      realm,
      description,
      readTime: +readTime,
      image: dbFilePath,
    })
    newPost.save()

    res.send(newPost)
  }
  catch {
    return 'Something went wrong with creating post'
  }
}

export const removePost = async (req: Request, res: Response) => {
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
}

export const updatePost = async (req: Request, res: Response) => {
  const itemIdToUpdate = req.params.id;
  const { title, description, realm } = req.body
  const fileData = req.files?.file as UploadedFile;

  const filePath = `/public/images/${fileData.name}`;
  const dbFilePath = `/images/${fileData.name}`
  
  if (fileData) {
    fileData.mv(filePath, (err: any) => {
    if(err) {
      return res.sendStatus(404)
    }
  })
}

  try {
    const item = await Post.update({ title, description, realm, image: dbFilePath }, {
      where: {
        id: itemIdToUpdate,
      }
    })

    res.send(item);
  }
  catch {
    return 'Something went wrong with updating post'
  }
}