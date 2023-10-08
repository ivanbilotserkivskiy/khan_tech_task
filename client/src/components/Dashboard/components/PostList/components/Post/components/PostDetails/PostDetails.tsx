import { useState } from 'react';
import { baseURL } from "../../../../../../../../utils/baseURL";
import { Post as PostType } from '../../../../../../../../types/Post';
import { deletePost, updatePost } from '../../../../../../../../api/posts';
import PostDetailStyles from './PostDetails.module.css';

type Props = {
  post: PostType,
  fetchData: () => void
}

export const PostDetails:React.FC<Props> = ({ post, fetchData }) => {

  const [formData, setFormData] = useState({
    title: post.title,
    realm: post.realm,
    description: post.description,
  })

  const changeFormData = (event:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  const deletePostFromServer = async (postId: number) => {
    try {
      await deletePost(postId);
    }

    catch {

    }
  } 

  const submitFormData = (event: React.FormEvent) => {
    event.preventDefault();

    updatePost(post.id, {...formData})

    fetchData();
  }


  return (
    <article className={PostDetailStyles.content}>
      <button
        onClick={() => deletePost(post.id)} 
        className={PostDetailStyles.delete}
      >
        Delete
      </button>
      <form
        className={PostDetailStyles.form}
        onSubmit={submitFormData}
        action={`${baseURL}/posts`}
        method="POST"
      >
        <label htmlFor='description'>
          Title
        </label>
        <input
          className={`${PostDetailStyles.input} ${PostDetailStyles.input_title}`}
          onChange={changeFormData} 
          type="text" 
          name="title" 
          id="title"
          value={formData.title}
        />
        <label htmlFor='description'>
          Realm
        </label>
        <input
          className={`${PostDetailStyles.input} ${PostDetailStyles.input_realm}`}
          onChange={changeFormData} 
          type="text" 
          name="realm" 
          id="realm"
          value={formData.realm}
        />
        <label htmlFor='description'>
          Description
        </label>
        <textarea
          className={`${PostDetailStyles.input} ${PostDetailStyles.input_description}`}
          onChange={changeFormData}  
          name="description" 
          id="description"
          value={formData.description}
        >
        </textarea>
        <button className={PostDetailStyles.submit} type='submit'>Apply Changes</button>
      </form>
    </article>
  )
}