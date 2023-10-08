import { Post  as PostType} from '../../../../../../types/Post';
import PostStyles from './Post.module.css';

type Props = {
  post: PostType,
}

export const Post:React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className={PostStyles.top}>
        <img
          className={PostStyles.image}
          src={post.image}
          alt={post.title} 
        />
      </div>
      <div className={PostStyles.bottom}>
        <p className={PostStyles.realm}>{post.realm}</p>
        <h3 className={PostStyles.title}>{post.title}</h3>
        <div className={PostStyles.info}>
          <p>
          <span className={PostStyles.date}>{post.published}</span>
          <span className={PostStyles.user}>{post.userId}</span>
          </p>
          <p className={PostStyles.read_time}>
          <span className={PostStyles.icon}></span>
          <span className={PostStyles.time}>{`${post.readTime} min read`}</span>
          </p>
        </div>
      </div>
    </>
  )
}