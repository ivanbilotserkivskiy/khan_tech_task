import PostSnapshotStyles from './PostSnapshot.module.css';

export const PostSnapshot = () => {
  return (
    <article
      className={PostSnapshotStyles.article}
      style={{
        backgroundImage: 'url(https://www.jquery-az.com/html/images/banana.jpg)'
      }}
    >
      <h4 className={PostSnapshotStyles.title}>Basic Swedish Back Massage Techniques</h4>
      <p className={PostSnapshotStyles.date}>28 Feb 2021</p>
    </article>
  )
}
