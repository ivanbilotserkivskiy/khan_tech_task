import { Request, Response } from 'express';
import User from '../models/User.js';
import { createUser, getHashedPassword } from '../services/user.services.js';

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

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
    const hashedPassword = await getHashedPassword(password, 10);

    const newUser = createUser(username, hashedPassword, 2)

    const registerUser = await User.build(newUser);
    registerUser.save()

    res.send(registerUser);
  }
  catch {
    return res.status(400).json({
      "message": "Something went wrong with user sign up"
    })
  }
}

export const registerAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

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
    const hashedPassword = await getHashedPassword(password, 10);

    const newUser = createUser(username, hashedPassword, 1)

    const registerUser = await User.build(newUser);
    registerUser.save()

    res.send(registerUser);
  }
  catch {
    return res.status(400).json({
      "message": "Something went wrong with user sign up"
    })
  }
}