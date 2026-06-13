// components.tsx
import type { Post } from "./types";
import type { PostResponse } from "./api/fetchPost";

export function PostDetail({ post, readonly }: { post?: Omit<Post, "userId">; readonly?: boolean }) {
  // ...
  return <></>;
}

export function Comments({ comments }: { comments?: PostResponse["comments"] }) {
  // ...
  return <></>;
}
