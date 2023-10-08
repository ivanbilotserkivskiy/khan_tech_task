import { useState, useEffect } from 'react'
import { PostDetail } from "./components/PostDetail"
import { PostShort } from "./components/PostShort";
import { PostSnapshotList } from "./components/PostSnapshotList";
import MainStyles from './Main.module.css';
import { Post } from '../../types/Post';
import { getOnePost } from '../../api/posts';

export const Main = () => {

  const [randomPost, setRandomPost] = useState<Post | null>(null);
  const [largePost, setLargePost] = useState<Post |null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const firstPost = await getOnePost('?limit=1')
  
        setRandomPost(firstPost)
  
        const secondPost = await getOnePost(`?postId=${firstPost.id}`)
  
        setLargePost(secondPost);
      }
  
      catch {
  
      }
    }

    fetchData();
  }, [])

  return (
    <main className={MainStyles.main}>
      <section className={MainStyles.content}>
        <section className={MainStyles.top}>
              {randomPost
                ? (<PostDetail post={randomPost}/>)
                : null
              }

          <div className={MainStyles.top_right}>
            <h3 className={MainStyles.snapshot_title}>Our Latest News</h3>
            <PostSnapshotList />
          </div>
        </section>

        <section className={MainStyles.middle}>
          {largePost
            ? (<PostDetail fullscrean={true} post={largePost}/>)
            : null
          }
        </section>

        <section className={MainStyles.bottom}>
          <PostShort />
        </section>
      </section>
    </main>
  )
}
