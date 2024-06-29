"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Dashboard from "@/components/Dashboard";

interface Post {
  userName: string;
  caption: string;
  videoURL: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("/assets/posts.json");
  const posts: Post[] = await res.json();
  return posts;
};

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setDataLoaded(true);
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Dashboard />
        <div className="mt-96">
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
