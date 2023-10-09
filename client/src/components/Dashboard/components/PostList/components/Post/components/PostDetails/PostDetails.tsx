import { baseURL } from "../../../../../../../../utils/baseURL";
import { Post as PostType } from '../../../../../../../../types/Post';
import { deletePost, getPosts, updatePost } from '../../../../../../../../api/posts';
import PostDetailStyles from './PostDetails.module.css';
import { useSharedState } from '../../../../../../../../store/store';
import { useState } from "react";

type Props = {
  post: PostType,
}

export const PostDetails:React.FC<Props> = ({ post }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useSharedState();

  const [formData, setFormData] = useState({
    title: post.title,
    description: post.description,
    realm: post.realm,
  })

  const changeFormData = (event:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const deletePostFromServer = async (postId: number) => {
    try {
      await deletePost(postId);
    }

    catch {

    }
  } 

  const submitFormData = async (event: React.FormEvent) => {
    event.preventDefault();

    await updatePost(post.id, {...formData})

    const updatedPosts = await getPosts();

    setState(prev => ({ ...prev, posts: updatedPosts}))
  }


  return (
    <article className={PostDetailStyles.content}>
      <button
        onClick={() => deletePostFromServer(post.id)} 
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