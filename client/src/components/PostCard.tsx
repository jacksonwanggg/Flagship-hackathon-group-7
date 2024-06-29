import React from "react";
import Image from "next/image";
import * as fs from "fs";
import { Position } from "postcss";
import { Post } from "@/lib/types";

const PostCard: React.FC<Post> = ({ userName, caption }) => {
	return (
		<div className="card bg-base-100 w-96 shadow-xl -z-1">
			<div className="card-body">
				<h2 className="card-title">{userName}</h2>
				<p>{caption}</p>
			</div>
			<figure>
				<video width="600" autoPlay>
					<source src="/assets/test.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>
			</figure>
		</div>
	);
};

export default PostCard;
