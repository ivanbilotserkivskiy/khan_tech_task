import User from "../models/User.js"
import jwt from 'jsonwebtoken';

const createTokens = (foundUser: User) => {
  const accessToken = jwt.sign(
    { "username": foundUser.dataValues.username },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '30s' }
  )
  const refreshToken = jwt.sign(
    { "username": foundUser.dataValues.username },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: '1d' }
  )

  return { accessToken, refreshToken }
}