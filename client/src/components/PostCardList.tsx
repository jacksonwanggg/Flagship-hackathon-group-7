import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/lib/types";

interface PostListProps {
	posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<div>
			<div className="flex flex-col justify-center gap-4 z-1000 bg-white">
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
		</div>
	);
};

export default PostList;
