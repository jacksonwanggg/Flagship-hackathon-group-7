import React from "react";
import PostCard from "./PostCard";

interface Post {
  userName: string;
  caption: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {posts.map((post, index) => (
        <div key={index} className="m-4">
          <PostCard userName={post.userName} caption={post.caption} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
