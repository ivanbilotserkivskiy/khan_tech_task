import { useState, useEffect } from 'react'
import { PostDetail } from "./components/PostDetail"
import { PostShort } from "./components/PostShort";
import { PostSnapshotList } from "./components/PostSnapshotList";
import MainStyles from './Main.module.css';
import { Post } from '../../types/Post';
import { getOnePost, getPosts, getTotal } from '../../api/posts';
import { Pagination } from './components/Pagination';

export const Main = () => {

  const [randomPost, setRandomPost] = useState<Post | null>(null);
  const [largePost, setLargePost] = useState<Post |null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerpage] = useState<number>(6);
  const [posts, setPosts] = useState<Post[]>([])
  
  const fetchPosts = async () => {
    try {
      const allPosts = await getPosts(`/?page=${page}&limit=${perPage}`);
      setPosts(allPosts);

    }

    catch {

    }
  }
  useEffect(() => {
    fetchPosts();
  }, [page])

  const fetchData = async() => {
    try {
      const totalPosts = await getTotal();

      setTotal(totalPosts.total);

      const allPosts = await getPosts(`/?page=${page}&limit=${perPage}`);

      setPosts(allPosts);

      const firstPost = await getOnePost('?limit=1')

      setRandomPost(firstPost)

      const secondPost = await getOnePost(`?postId=${firstPost.id}`)

      setLargePost(secondPost);
    }

    catch {

    }
  }
  
  useEffect(() => {
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
          <PostShort posts={posts} />
        </section>

        <Pagination
          total={total}
          perPage={perPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </section>
    </main>
  )
}
