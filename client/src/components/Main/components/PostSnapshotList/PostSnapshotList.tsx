import { useState, useEffect } from "react"
import { PostSnapshot } from "./components/PostSnapshot/PostSnapshot"
import { Post } from "../../../../types/Post"
import { getPosts } from "../../../../api/posts";

export const PostSnapshotList = () => {
  const [snapshotData, setSnapshotData] = useState<Post[]>([]);

  useEffect(() => {
    getPosts('?limit=3&orderBy=published')
      .then(setSnapshotData);
  }, [])

  return (
    <article>
      {snapshotData.map(snapshot => (
        <PostSnapshot snapshot={snapshot} key={snapshot.id}/>
      ))}
    </article>
  )
} 