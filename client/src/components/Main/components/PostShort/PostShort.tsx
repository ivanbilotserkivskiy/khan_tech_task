import { useState, useEffect } from 'react'
import { Post } from "./components/Post/Post"
import PostShortStyles from './PostShort.module.css'
import { Post as PostType} from '../../../../types/Post'
import { getPosts } from '../../../../api/posts';



export const PostShort = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    getPosts().then(setPosts)

  }, [])

  return (
    <article className={`${PostShortStyles.section} ${PostShortStyles.section_short}`}>
      {posts.map((post) => (<Post key={post.published} post={post}/>))}
    </article>
  )
}