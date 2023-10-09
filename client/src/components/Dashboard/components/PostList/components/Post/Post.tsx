import { useState } from 'react';
import PostStyles from './Post.module.css';
import cn from 'classnames';
import { PostDetails } from './components/PostDetails';
import { Post as PostType } from '../../../../../../types/Post';

type Props = {
  post: PostType,
}

export const Post: React.FC<Props> = ({ post }) => {
  const [isOpened, setIsOpened] = useState(false)


  return (
    <section className={PostStyles.wraper}>
      <article className={PostStyles.content}>
        <button  
          onClick={() => setIsOpened(prevState => !prevState)}
          className={cn(PostStyles.icon, {
            [PostStyles.icon_close]: !isOpened,
            [PostStyles.icon_open]: isOpened,
          })}>
        </button>
        <h3 className={PostStyles.title}>{post.title}</h3>
      </article>

      {
        isOpened
          ? (
              <PostDetails key={post.id} post={post}/>
            )
          : null
      }
    </section>
  )
}