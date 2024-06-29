"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Countdown from "@/components/Countdown";
import Dashboard from "@/components/Dashboard";
import posts from "../../../public/assets/posts";
import { Post } from "@/lib/types";
import { WiNightAltCloudyGusts } from "react-icons/wi";

// const fetchPosts = async (): Promise<Post[]> => {
// 	const res = await fetch("/assets/posts.json");
// 	const posts: Post[] = await res.json();
// 	return posts;
// };

const Home: React.FC = () => {
  const [userPosts, setUserPosts] = useState<Post[]>(posts);

  return (
    <>
      <div className="h-[932px] mx-auto flex flex-col justify-start">
        <Countdown seconds={5} />
        <Dashboard posts={userPosts} />
        <PostList posts={userPosts} />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
