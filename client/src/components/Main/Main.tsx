import { useEffect } from 'react'
import { PostDetail } from "./components/PostDetail"
import { PostShort } from "./components/PostShort";
import { PostSnapshotList } from "./components/PostSnapshotList";
import MainStyles from './Main.module.css';
import { getOnePost, getPosts, getTotal } from '../../api/posts';
import { Pagination } from './components/Pagination';
import { useSharedState } from '../../store/store';

export const Main = () => {

  const [state, setState] = useSharedState();
  
  const fetchPosts = async () => {
    try {
      const allPosts = await getPosts(`/?page=${state.page}&limit=${state.perPage}`);
      setState((prev) => ({ ...prev, posts: allPosts}));

    }

    catch {

    }
  }
  useEffect(() => {
    fetchPosts();
  }, [state.page])

  const fetchData = async() => {
    try {
      const firstPost = await getOnePost('?limit=1')

      setState(prev => ({ ...prev, randomPost: firstPost}))

      const secondPost = await getOnePost(`?postId=${firstPost.id}`)

      setState(prev => ({ ...prev, largePost: secondPost}))
      const totalPosts = await getTotal();

      setState(prev => ({ ...prev, total: totalPosts.total}))

      const allPosts = await getPosts(`/?page=${state.page}&limit=${state.perPage}`);

      setState((prev) => ({ ...prev, posts: allPosts}));

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
              {state.randomPost
                ? (<PostDetail post={state.randomPost}/>)
                : null
              }

          <div className={MainStyles.top_right}>
            <h3 className={MainStyles.snapshot_title}>Our Latest News</h3>
            <PostSnapshotList />
          </div>
        </section>

        <section className={MainStyles.middle}>
          {state.largePost
            ? (<PostDetail fullscrean={true} post={state.largePost}/>)
            : null
          }
        </section>

        <section className={MainStyles.bottom}>
          <PostShort />
        </section>

        <Pagination/>
      </section>
    </main>
  )
}
