import { Post } from '../../../../types/Post';
import { baseURL } from '../../../../utils/baseURL';
import { getDateFromTime } from '../../../../utils/getDateFromTime';
import PostDetailStyles from './PostDetail.module.css';
import cn from 'classnames';

type Props = {
  post: Post,
  fullscrean?: boolean
}

export const PostDetail:React.FC<Props> = ({ fullscrean=false, post }) => {
  const date = getDateFromTime(post?.published);

  return (
    <section className={PostDetailStyles.section}>
      <div className={PostDetailStyles.left}>
        <img
          className={cn({
            [PostDetailStyles.image]: !fullscrean,
            [PostDetailStyles.fullscreen_image]: fullscrean,
          })} 
          src={`${baseURL}${post.image}`}
          alt={post.title} 
        />
      </div>
      <div className={cn({
        [PostDetailStyles.right]: !fullscrean,
        [PostDetailStyles.right_fullscreen]: fullscrean,
      })}>
        <p className={PostDetailStyles.realm}>{post.realm}</p>
        <h3 className={PostDetailStyles.title}>{post.title}</h3>
            <p className={PostDetailStyles.text}>{post.description}</p>
        <div className={PostDetailStyles.info}>
          <p>
          <span className={PostDetailStyles.date}>{date}</span>
          <span className={PostDetailStyles.user}>{post.users.username}</span>
          </p>
          <p className={PostDetailStyles.read_time}>
          <span className={PostDetailStyles.icon}></span>
          <span className={PostDetailStyles.time}>{`${post.readTime} min read`}</span>
          </p>
        </div>
      </div>
    </section>
  )
}