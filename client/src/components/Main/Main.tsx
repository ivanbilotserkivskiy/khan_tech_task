import { PostDetail } from "./components/PostDetail"
import { PostSnapshot } from "./components/PostSnapshot";
import MainStyles from './Main.module.css';

export const Main = () => {
  return (
    <main className={MainStyles.main}>
      <section className={MainStyles.content}>
        <section className={MainStyles.top}>
          <div className={MainStyles.top_left}>
            <PostDetail />
          </div>

          <div className={MainStyles.top_right}>
            <h3 className={MainStyles.snapshot_title}>Our Latest News</h3>
            <PostSnapshot />
            <PostSnapshot />
            <PostSnapshot />
          </div>
        </section>

        <section className={MainStyles.middle}>
          <PostDetail fullscrean={true} />
        </section>

        <section className={MainStyles.bottom}>
          <PostDetail details={false} />
          <PostDetail details={false} />
          <PostDetail details={false} />
          <PostDetail details={false} />
          <PostDetail details={false} />
          <PostDetail details={false} />
        </section>
      </section>
    </main>
  )
}
