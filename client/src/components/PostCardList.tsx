import React, { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import { Post } from "@/lib/types";
import { PostListProps } from "@/lib/types";
import posts from "@/lib/posts";

const PostList: React.FC<PostListProps> = ({}) => {
	const containerRef = useRef<HTMLDivElement>(null);

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
						url={post.url}
						profileUrl={post.profileUrl}
						// videoURL={post.videoURL}
					/>
				</div>
			))}
		</div>
	);
};

export default PostList;
