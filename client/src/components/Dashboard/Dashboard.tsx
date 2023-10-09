import { getPosts } from "../../api/posts";
import { useSharedState } from "../../store/store";
import { CreatePost } from "./components/CreatePost"
import { PostList } from "./components/PostList"
import DashboardStyles from './Dashboard.module.css';

export const Dashboard = () => {
  const [state, setState] = useSharedState();

  const fetchPosts = async () => {
    try {
      const allPosts = await getPosts(`/?page=${state.page + 1}&limit=${state.perPage}`);
      setState(prev => ({...prev, posts: [...state.posts, ...allPosts], page: state.page + 1}))

    }

    catch {

    }
  }

  return (
    <div className={DashboardStyles.content}>
      <CreatePost />
      <PostList />
      <section className={DashboardStyles.pagination}>
        <button 
          className={DashboardStyles.button}
          onClick={() => {
            fetchPosts()
          }}
        >
          Load more
        </button>
      </section>
    </div>
  )
}