import { Post } from "./components/Post/Post"
import PostShortStyles from './PostShort.module.css'
import { Post as PostType} from '../../../../types/Post'

type Props = {
  posts: PostType[];
}

export const PostShort:React.FC<Props> = ({ posts }) => {
  return (
    <article className={`${PostShortStyles.section} ${PostShortStyles.section_short}`}>
      {posts.map((post) => (<Post key={post.id} post={post}/>))}
    </article>
  )
}