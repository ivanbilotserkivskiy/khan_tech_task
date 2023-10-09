import User from "../models/User.js"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createTokens = (foundUser: User) => {
  const accessToken = jwt.sign(
    { "username": foundUser.dataValues.username },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '20d' }
  )
  const refreshToken = jwt.sign(
    { "username": foundUser.dataValues.username },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: '1d' }
  )

  return { accessToken, refreshToken }
}