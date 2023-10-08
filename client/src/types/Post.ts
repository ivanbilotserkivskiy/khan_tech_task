import { User } from "./User"

export type Post = {
  id: number,
  userId: number,
  realm: string,
  title: string,
  description: string,
  readTime: number,
  published: string,
  image: string,
  users: User
}