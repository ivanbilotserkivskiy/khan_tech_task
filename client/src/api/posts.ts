import { Post } from '../types/Post';
import { Total } from '../types/Total';
import { client } from '../utils/fetchClient';

export const getPosts = (query:string = '') => {
  return client.get<Post[]>(`/posts${query}`);
}

export const getTotal = () => {
  return client.get<Total>('/count-posts');
}

export const getOnePost = (query:string = '') => {
  return client.get<Post>(`/posts${query}`);
}

export const getPostsById = (postId: number) => {
  return client.get<Post[]>(`/posts?userId=${postId}`);
};

export const addPost = ({ title, description, readTime, realm }: Omit<Post, 'id'>) => {
  return client.post<Post>('/posts', { title, description, readTime, realm });
};

export const deletePost = (postId: number) => {
  return client.delete(`/posts/${postId}`);
};

export const patchPostTitle = (postId: number,
  { title }: Pick<Post, 'title'>) => {
  return client.put(`/posts/${postId}`, { title });
};
