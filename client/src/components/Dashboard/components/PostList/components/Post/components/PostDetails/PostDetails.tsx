import { baseURL } from "../../../../../../../../utils/baseURL";
import { Post as PostType } from '../../../../../../../../types/Post';
import { deletePost, getPosts, updatePost } from '../../../../../../../../api/posts';
import PostDetailStyles from './PostDetails.module.css';
import { useSharedState } from '../../../../../../../../store/store';
import { useState } from "react";
import { FormDataUpdata } from "./types/FormDataUpdate";

type Props = {
  post: PostType,
}

export const PostDetails:React.FC<Props> = ({ post }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useSharedState();

  const [formData, setFormData] = useState<FormDataUpdata>({
    title: post.title,
    description: post.description,
    realm: post.realm,
    file: null,
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
    } catch(err) {
       console.log(err)
    }
  } 

  const submitFormData = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const data = new FormData();
      data.append('file', formData.file as File)
      data.append('title', formData.title)
      data.append('realm', formData.realm)
      data.append('description', formData.description);
      
      await updatePost(post.id, data)
      
      const updatedPosts = await getPosts();
      
      setState(prev => ({ ...prev, posts: updatedPosts}))
    } catch(err) {
      console.log(err)
    }
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
        <input
          onChange={(event) => {
            if (event.target.files) {
              const fileToupload = event.target.files[0] || null;
              setFormData(prev => ({
                ...prev,
                file: fileToupload,
              }))
            }
          }}
          type="file" 
          accept="image/*"
        ></input>
        <button className={PostDetailStyles.submit} type='submit'>Apply Changes</button>
      </form>
    </article>
  )
}