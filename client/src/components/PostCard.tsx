import React from "react";
import Image from "next/image";
import * as fs from "fs";
import { Position } from "postcss";
import { Post } from "@/lib/types";
import IconButton from "@mui/material/IconButton";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

interface PostCardProps {
	userName: string;
	caption: string;
	url: string;
}

const PostCard: React.FC<PostCardProps> = ({
	userName,
	caption,
	url,
}: PostCardProps) => {
	return (
		<div className="card bg-base-100 w-96 bg-red-400 shadow-2xl z-1000">
			<div className="gradientEffect card-body bg-red-400 rounded-t-xl shadow-2xl">
				<div className="flex flex-right space-x-5">
					<Image
						src="/assets/jackson.jpg"
						alt="placeholder"
						width={70}
						height={70}
						className="flex justify-center items-center rounded-full z-100"
					/>
					<div>
						<h2 className="card-title rounded-xl text-s">
							{userName}
						</h2>
						<p className="text-xs">{caption}</p>
					</div>
				</div>
			</div>
			<figure>
				<video width="600" autoPlay controls>
					{/* <source src={url} type="video/webm" /> */}
					<source
						// src="/assets/upload/1719683683972-recorded_video.webm"
						src={url}
						type="video/webm"
					/>
					Your browser does not support the video tag.
				</video>
			</figure>
			<div>
				<IconButton sx={{ pt: 1 }}>
					<FavoriteRoundedIcon
						sx={{ color: "white" }}></FavoriteRoundedIcon>
				</IconButton>
				<IconButton sx={{ pt: 1.25 }}>
					<ChatBubbleRoundedIcon
						sx={{ color: "white" }}></ChatBubbleRoundedIcon>
				</IconButton>
				<IconButton>
					<SendRoundedIcon sx={{ color: "white" }}></SendRoundedIcon>
				</IconButton>
			</div>
		</div>
	);
};

export default PostCard;
