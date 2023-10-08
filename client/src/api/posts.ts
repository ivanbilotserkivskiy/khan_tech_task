import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getPosts = () => {
  return client.get<Post[]>('/posts')
}

export const getPostsById = (postId: number) => {
  return client.get<Post[]>(`/posts?userId=${postId}`);
};

export const addPost = ({ title, details, readTime, realm }: Omit<Post, 'id'>) => {
  return client.post<Post>('/posts', { title, details, readTime, realm });
};

export const deletePost = (postId: number) => {
  return client.delete(`/posts/${postId}`);
};

export const patchPostTitle = (postId: number,
  { title }: Pick<Post, 'title'>) => {
  return client.put(`/posts/${postId}`, { title });
};
