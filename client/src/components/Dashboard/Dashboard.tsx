import { CreatePost } from "./components/CreatePost"
import { PostList } from "./components/PostList"

export const Dashboard = () => {
  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  )
}