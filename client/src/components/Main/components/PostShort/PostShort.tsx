import { Post } from "./components/Post/Post"
import PostShortStyles from './PostShort.module.css'
import { Post as PostType} from '../../../../types/Post'
import { useSharedState } from "../../../../store/store";


export const PostShort:React.FC = () => {
  const [state] = useSharedState();

  return (
    <article className={`${PostShortStyles.section} ${PostShortStyles.section_short}`}>
      {state.posts.map((post) => (<Post key={post.id} post={post}/>))}
    </article>
  )
}