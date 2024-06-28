import React from "react";
import Image from "next/image";
import * as fs from "fs";
import { Position } from "postcss";

interface Post {
  userName: string;
  caption: string;
}

const PostCard: React.FC<Post> = ({ userName, caption }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{caption}</p>
      </div>
      <figure>
        <Image
          // replace image with embedded video
          src="../../../public/vercel.svg"
          alt="Shoes"
          width={400}
          height={400}
        />
      </figure>
    </div>
  );
};

export default PostCard;
