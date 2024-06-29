"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Dashboard from "@/components/Dashboard";
import Countdown from "@/components/Countdown";
import posts from "../../../public/assets/posts";
import { Post } from "@/lib/types";

// const fetchPosts = async (): Promise<Post[]> => {
// 	const res = await fetch("/assets/posts.json");
// 	const posts: Post[] = await res.json();
// 	return posts;
// };

const Home: React.FC = () => {
	const [userPosts, setUserPosts] = useState<Post[]>(posts);
	// const [dataLoaded, setDataLoaded] = useState<boolean>(false);

	// useEffect(() => {
	// 	const getPosts = async () => {
	// 		const fetchedPosts = await fetchPosts();
	// 		setPosts(fetchedPosts);
	// 		setDataLoaded(true);
	// 	};

	// 	getPosts();
	// }, []);

	return (
		<>
			<div className="container mx-auto flex flex-col">
				<Countdown seconds={10000} />
				{/* <div> */}
				<PostList posts={userPosts} />
				{/* </div> */}
			</div>
		</>
	);
};

export default Home;
