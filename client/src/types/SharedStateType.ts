import { Post as PostType } from './Post'

export type SharedStateType = {
  randomPost: null | PostType,
  largePost: null | PostType,
  posts: PostType[],
  page: number,
  perPage: number,
  total: number,
}