import { Post } from '../types/Post';
import { Total } from '../types/Total';
import { UserData } from '../types/UserData';
import { client } from '../utils/fetchClient';

export const getPosts = (query:string = '') => {
  return client.get<Post[]>(`/posts${query}`);
}

export const getUsers = () => {
  return client.get<UserData[]>('/users');
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

export const addPost = (formData: FormData) => {
  return client.postFormData<Post>('/posts', formData);
};

export const deletePost = (postId: number) => {
  return client.delete(`/posts/${postId}`);
};

export const updatePost = (postId: number,
 formData: FormData) => {
  return client.patchFormData(`/posts/${postId}`, formData);
};
