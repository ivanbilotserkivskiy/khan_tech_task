import User from "../models/User.js";
import { Request, Response } from 'express';
import { getPreparedUsers } from "../services/user.services.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    const prepraredUsers = getPreparedUsers(users);
    res.send(prepraredUsers);
  }
  catch {
    return 'SOmething went wrong with getting users'
  }
}

export const deleteUser = async (req: Request, res: Response) => {
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
}



