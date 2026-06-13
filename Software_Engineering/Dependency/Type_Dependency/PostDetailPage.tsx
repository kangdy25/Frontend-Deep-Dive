// PostDetailPage.tsx

import { fetchPost } from "./api/fetchPost";
import type { PostResponse } from "./api/fetchPost";
import { PostDetail, Comments } from "./components";
import { useState, useEffect } from "react";

export function PostDetailPage({ postId }: { postId: number }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostResponse | null>(null);

  useEffect(() => {
    fetchPost(postId)
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
        // error 처리
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <PostDetail post={post!} />
      <Comments comments={post?.comments} />
    </div>
  );
}
