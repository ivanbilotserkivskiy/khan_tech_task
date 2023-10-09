import { baseURL } from "../../../../utils/baseURL"
import CreatePostStyles from './CreatePost.module.css'
import { addPost, getPosts } from '../../../../api/posts'
import { useSharedState } from '../../../../store/store'
import React, { useState } from "react"

export const CreatePost = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useSharedState();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    realm: '',
  })


  const submitPost = async (event: React.FormEvent) => {
    event.preventDefault();
   try{ 
    await addPost({...formData, readTime: 6, userId: 1})

    const updatedPosts = await getPosts();

    setState(prev => ({ ...prev, posts: updatedPosts}))
  }
  catch {

  }
}

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }))
  }

  return (
    <article className={CreatePostStyles.content}>
      <form
        onSubmit={submitPost}
        className={CreatePostStyles.form}
        action={`${baseURL}/posts`}
        method="POST"
      >
        <label htmlFor='description'>
          Title
        </label>
        <input
          className={`${CreatePostStyles.input} ${CreatePostStyles.input_title}`}
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
          className={`${CreatePostStyles.input} ${CreatePostStyles.input_realm}`}
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
          className={`${CreatePostStyles.input} ${CreatePostStyles.input_description}`}
          onChange={changeFormData}  
          name="description" 
          id="description"
          value={formData.description}
        >
        </textarea>
        <button className={CreatePostStyles.submit} type='submit'>Create Post</button>
      </form>
    </article>
  )
}