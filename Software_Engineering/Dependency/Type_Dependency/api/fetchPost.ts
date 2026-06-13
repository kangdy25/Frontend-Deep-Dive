import type { Post } from "../types";

export type PostResponse = Post & {
  comments: {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    nickname: string;
  }[];
};

export const fetchPost = (postId: number) => {
  return fetch(`/api/posts/${postId}`)
    .then((res) => res.json())
    .then((data: PostResponse) => {
      return data;
    });
};
