import { Request, Response } from 'express';
import User from '../models/User.js';
import { comparePasswords } from '../services/user.services.js';
import { createTokens } from '../utils/accesToken.js';

export const loginUser = async (req: Request, res: Response) => {
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

  const passwordMatch = await comparePasswords(password, foundUser.dataValues.password)

  if (passwordMatch) {
    res.send({ "succes": `User: ${username} is logged in!` })
  } else {
    res.sendStatus(401);
  }

}

export const loginAdmin = async(req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      "message": "username and password are required"
    })
  }
  const foundUser = await User.findOne({
    where: {
      username: username,
    }
  })
  if(!foundUser) {
    return res.sendStatus(401);
  }

  if(foundUser.dataValues.permissionId === 2) {
    return res.sendStatus(403)
  }

  const match = await comparePasswords(password, foundUser.dataValues.password);

  if (match) {
    const { accessToken, refreshToken } = createTokens(foundUser)

    await User.update({refreshToken}, {
      where: {
        id: foundUser.dataValues.id
      }
    })
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 72 * 60 * 60 * 1000 })
    res.send({accessToken});
  } else {
    res.sendStatus(401);
  }
}