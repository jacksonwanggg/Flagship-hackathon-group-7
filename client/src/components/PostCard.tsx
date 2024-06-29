import React from "react";
import Image from "next/image";
import * as fs from "fs";
import { Position } from "postcss";
import { Post } from "@/lib/types";
import IconButton from "@mui/material/IconButton";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

interface PlayerCardProps {
  img: string;
  img1: string;
  img2: string;
  img3: string;
  name: string;
  level: number;
  petAmount: number;
  questAmount: number;
  delay: string;
}

interface PostCardProps extends Post, PlayerCardProps {}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  caption,
  img,
  img1,
  img2,
  img3,
  name,
  level,
  petAmount,
  questAmount,
  delay,
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl bg-rose-500 shadow-2xl">
      <div className="gradientEffect card-body bg-rose-500 rounded-t-xl shadow-2xl">
        <div className="flex flex-right space-x-5">
          <Image
            src="/assets/jackson.jpg"
            alt="placeholder"
            width={70}
            height={70}
            className="flex justify-center items-center rounded-full z-100"
          />
          <div>
            <h2 className="card-title rounded-xl text-s text-white">{userName}</h2>
            <p className="text-xs text-white">{caption}</p>
          </div>
        </div>
      </div>
      <figure>
        <video width="600" autoPlay>
          <source src="/assets/test.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </figure>
      <div>
        <IconButton sx={{ pt: 1 }}>
          <FavoriteRoundedIcon sx={{ color: "white" }}></FavoriteRoundedIcon>
        </IconButton>
        <IconButton sx={{ pt: 1.25 }}>
          <ChatBubbleRoundedIcon
            sx={{ color: "white" }}
          ></ChatBubbleRoundedIcon>
        </IconButton>
        <IconButton>
          <SendRoundedIcon sx={{ color: "white" }}></SendRoundedIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default PostCard;
