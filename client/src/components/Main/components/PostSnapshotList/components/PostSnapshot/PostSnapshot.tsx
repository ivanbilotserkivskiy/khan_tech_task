import { Post } from '../../../../../../types/Post';
import { baseURL } from '../../../../../../utils/baseURL';
import { getDateFromTime } from '../../../../../../utils/getDateFromTime';
import PostSnapshotStyles from './PostSnapshot.module.css';

type Porps = {
  snapshot: Post;
}

export const PostSnapshot:React.FC<Porps> = ({ snapshot }) => {

  const date = getDateFromTime(snapshot.published);

  return (
    <article
      className={PostSnapshotStyles.article}
      style={{
        backgroundImage: `url(${baseURL}${snapshot.image})`
      }}
    >
      <h4 className={PostSnapshotStyles.title}>{snapshot.title}</h4>
      <p className={PostSnapshotStyles.date}>{date}</p>
    </article>
  )
}
