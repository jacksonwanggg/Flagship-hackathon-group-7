"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
interface Post {
  userName: string;
  caption: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("/assets/posts.json");
  const posts: Post[] = await res.json();
  return posts;
};

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
