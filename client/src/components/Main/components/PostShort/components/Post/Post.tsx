import { Post  as PostType} from '../../../../../../types/Post';
import { baseURL } from '../../../../../../utils/baseURL';
import PostStyles from './Post.module.css';
import { getDateFromTime } from '../../../../../../utils/getDateFromTime';

type Props = {
  post: PostType,
}

export const Post:React.FC<Props> = ({ post }) => {

  const timeFromData = getDateFromTime(post.published);

  return (
    <div>
      <div className={PostStyles.top}>
        <img
          className={PostStyles.image}
          src={`${baseURL}${post.image}`}
          alt={post.title} 
        />
      </div>
      <div className={PostStyles.bottom}>
        <p className={PostStyles.realm}>{post.realm}</p>
        <h3 className={PostStyles.title}>{post.title}</h3>
        <div className={PostStyles.info}>
          <p>
          <span className={PostStyles.date}>{timeFromData}</span>
          <span className={PostStyles.user}>{post.users.username}</span>
          </p>
          <p className={PostStyles.read_time}>
          <span className={PostStyles.icon}></span>
          <span className={PostStyles.time}>{`${post.readTime} min read`}</span>
          </p>
        </div>
      </div>
    </div>
  )
}