import { useState, useEffect } from 'react'
import { Post } from "./components/Post"
import PostListStyles from './PostList.module.css'
import { Post as PostType} from '../../../../types/Post'
import { getPosts } from '../../../../api/posts'

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  const fetchPosts = async () => {
    try {
      const postFromServer = await getPosts();
      
      setPosts(postFromServer)
    }
    catch {

    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <section className={PostListStyles.content}>
      {posts.map(post => (
        <Post key={post.id} post={post} fetchData={() => fetchPosts}/>
      ))}
    </section>
  )
}