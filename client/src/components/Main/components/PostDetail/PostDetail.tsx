import PostDetailStyles from './PostDetail.module.css';
import cn from 'classnames';

type Props = {
  details?: boolean,
  fullscrean?: boolean
}

export const PostDetail:React.FC<Props> = ({ details=true, fullscrean=false }) => {
  return (
    <section className={cn(PostDetailStyles.section, {
      [PostDetailStyles.section_short]: !details,
    })}>
      <div className={cn({
        [PostDetailStyles.left]: details,
        [PostDetailStyles.top]: !details,
      })}>
        <img
          className={cn({
            [PostDetailStyles.image]: !fullscrean,
            [PostDetailStyles.fullscreen_image]: fullscrean,
          })} 
          src="https://www.jquery-az.com/html/images/banana.jpg"
          alt="" 
        />
      </div>
      <div className={cn({
        [PostDetailStyles.right]: details,
        [PostDetailStyles.bottom]: !details,
      })}>
        <p className={PostDetailStyles.realm}>Pharmaceuticals</p>
        <h3 className={PostDetailStyles.title}>A Sure Way To Get Rid Of Your Back Ache Problem</h3>
        {details
          ? (
            <p className={PostDetailStyles.text}>If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…</p>
          )
          : null
        }
        <div className={PostDetailStyles.info}>
          <p>
          <span className={PostDetailStyles.date}>28 Feb 2021</span>
          <span className={PostDetailStyles.user}>Jim Sullivan</span>
          </p>
          <p className={PostDetailStyles.read_time}>
          <span className={PostDetailStyles.icon}></span>
          <span className={PostDetailStyles.time}>6 min read</span>
          </p>
        </div>
      </div>
    </section>
  )
}