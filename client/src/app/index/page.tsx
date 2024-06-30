"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Countdown from "@/components/Countdown";
import Dashboard from "@/components/Dashboard";
import posts from "../../lib/posts";
import postsWithUrls from "../../utils/processPosts";
import { Post } from "@/lib/types";

// const fetchPosts = async (): Promise<Post[]> => {
// 	const res = await fetch("/assets/posts.json");
// 	const posts: Post[] = await res.json();
// 	return posts;
// };

const Home: React.FC = () => {
	const [latestFile, setLatestFile] = useState("");
	const [postsWithUrls, setPostsWithUrls] = useState([]);

	useEffect(() => {
		const ws = new WebSocket("ws://localhost:8080");

		ws.onmessage = (event) => {
			try {
				const latestFileUrl = JSON.parse(event.data);
				if (typeof latestFileUrl === "string") {
					setLatestFile(latestFileUrl);
				} else {
					console.error(
						"Expected latestFileUrl to be a string:",
						latestFileUrl
					);
				}
			} catch (error) {
				console.error("Error parsing message data:", error);
			}
		};

		return () => {
			ws.close();
		};
	}, []);

	useEffect(() => {
		const combined: any = posts.map((post, index) => {
			const url = index === 0 ? latestFile : "";
			return { ...post, url };
		});
		setPostsWithUrls(combined);
	}, [latestFile]);

	return (
		<>
			<div className="h-[932px] mx-auto justify-start bg-rose-600">
				<Dashboard post={latestFile} />
				<PostList posts={postsWithUrls} />
				{/* </div> */}
			</div>
		</>
	);
};

export default Home;
