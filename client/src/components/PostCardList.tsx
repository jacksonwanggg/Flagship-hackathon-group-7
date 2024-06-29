import React, { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import { Post } from "@/lib/types";
import { PostListProps } from "@/lib/types";

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0;
		}
	}, [posts]);

	return (
		<div
			ref={containerRef}
			className="flex flex-col justify-start gap-4 z-1000 bg-white rounded-t-[30px] py-5"
			style={{ overflowY: "auto" }}>
			{posts.map((post, index) => (
				<div key={index} className="m-4">
					<PostCard
						userName={post.userName}
						caption={post.caption}
						// videoURL={post.videoURL}
					/>
				</div>
			))}
		</div>
	);
};

// const PostList: React.FC<PostListProps> = ({ posts }) => {
// 	return (
// 		<div className="flex flex-col justify-center gap-4 z-1000 bg-white">
// 			{posts.map((post, index) => (
// 				<div key={index} className="m-4">
// 					<PostCard
// 						userName={post.userName}
// 						caption={post.caption}
// 						// videoURL={post.videoURL}
// 					/>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

export default PostList;
