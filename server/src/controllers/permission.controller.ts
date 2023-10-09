import { Request, Response } from 'express';
import Permission from '../models/Permission.js';

export const getPermissions = async (req: Request, res: Response) => {
  try {
    const permissions = await Permission.findAll();
    res.send(permissions);
  }
  catch {
    return 'Something went wrong with getting posts'
  }
}