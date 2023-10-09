import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const getPreparedUsers = (users: User[]) => {
  return users.map(u => ({id: u.dataValues.id, username: u.dataValues.username}))
}

export const getHashedPassword = async(password:string, rounds:number) => {
  return await bcrypt.hash(password, rounds)
}

export const createUser = (
    username: string,
    password: string,
    permissionId: number
  ) => {
  return {
    username,
    password,
    permissionId,
  }
}

export const comparePasswords = (hashedPassword: string, password: string) => {
  return bcrypt.compare(hashedPassword, password)
}