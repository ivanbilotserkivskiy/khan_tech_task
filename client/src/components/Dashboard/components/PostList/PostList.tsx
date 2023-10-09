import { useEffect } from 'react'
import { Post } from "./components/Post"
import PostListStyles from './PostList.module.css'
import { getPosts } from '../../../../api/posts'
import { useSharedState } from '../../../../store/store'

export const PostList = () => {
  const [state, setState] = useSharedState();

  const fetchPosts = async () => {
    try {
      const postFromServer = await getPosts();
      
      setState(prev => ({ ...prev, posts: postFromServer }))
    }
    catch {

    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <section className={PostListStyles.content}>
      {state.posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}
    </section>
  )
}