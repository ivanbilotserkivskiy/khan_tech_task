import { useState } from 'react'
import { baseURL } from "../../../../utils/baseURL"
import CreatePostStyles from './CreatePost.module.css'
import { addPost } from '../../../../api/posts'

export const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    realm: '',
    description: '',
  })

  const sendFormData = () => {
    addPost({...formData, readTime: 6, userId: 1})
  }

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <article className={CreatePostStyles.content}>
      <form
        onSubmit={() => sendFormData}
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