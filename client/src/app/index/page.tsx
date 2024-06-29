"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Countdown from "@/components/Countdown";
import Dashboard from "@/components/Dashboard";
import posts from "../../../public/assets/posts";
import { Post } from "@/lib/types";

// const fetchPosts = async (): Promise<Post[]> => {
// 	const res = await fetch("/assets/posts.json");
// 	const posts: Post[] = await res.json();
// 	return posts;
// };

const Home: React.FC = () => {
  const [userPosts, setUserPosts] = useState<Post[]>(posts);

  return (
    <>
      <div className="h-[932px] mx-auto justify-start bg-rose-600">
        <Dashboard posts={userPosts} />
        <PostList posts={userPosts} />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
