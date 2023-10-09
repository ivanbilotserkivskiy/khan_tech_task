import { baseURL } from "../../../../utils/baseURL"
import CreatePostStyles from './CreatePost.module.css'
import { addPost, getPosts } from '../../../../api/posts'
import { useSharedState } from '../../../../store/store'
import React, { useState } from "react"
import { FormDataCreate } from "./types/FormDataCreate"

export const CreatePost = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useSharedState();

  const [formData, setFormData] = useState<FormDataCreate>({
    title: '',
    description: '',
    realm: '',
    file: null,
  })

  const submitPost = async (event: React.FormEvent) => {
    event.preventDefault();
   try { 
    const data = new FormData();
    data.append('file', formData.file as File)
    data.append('title', formData.title)
    data.append('realm', formData.realm)
    data.append('description', formData.description);
    data.append('readTime', '6')
    data.append('userId', '1')
    await addPost(data)

    const updatedPosts = await getPosts();

    setState(prev => ({ ...prev, posts: updatedPosts}))

    console.log(formData)
  }
  catch {
    console.log('error')
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
        <input
          accept="image/*" 
          type="file"
          name="file" 
          onChange={(event) => {
            if (event.target.files) {
              const fileToupload = event.target.files[0] || null;
              setFormData(prev => ({
                ...prev,
                file: fileToupload,
              }))
              console.log(event.target.files && event.target.files[0])
            }
          }}
        />
        <button className={CreatePostStyles.submit} type='submit'>Create Post</button>
      </form>
    </article>
  )
}