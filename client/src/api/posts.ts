import { Post } from '../types/Post';
import { Total } from '../types/Total';
import { client } from '../utils/fetchClient';

export const getPosts = (query:string = '') => {
  return client.get<Post[]>(`/posts${query}`);
}

export const getToken = (data: any) => {
  return client.post<any>('/login/admin', data);
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

export const addPost = (formData: FormData) => {
  return client.postFormData<Post>('/posts', formData);
};

export const deletePost = (postId: number) => {
  return client.delete(`/posts/${postId}`);
};

export const updatePost = (postId: number,
  { title, description, realm }: Pick<Post, 'title' | 'realm' | 'description'>) => {
  return client.put(`/posts/${postId}`, { title, description, realm });
};
