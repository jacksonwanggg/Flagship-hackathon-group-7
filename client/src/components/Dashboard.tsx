import React from "react";
import { PostListProps } from "@/lib/types";

const Dashboard: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="hero max-w-sm mx-auto bg-transparent rounded-xl p-4">
      <div className="hero-content text-center bg-400">
        <div className="max-w-md bg-transparent">
          <figure>
            <video width="600" autoPlay className="rounded-xl">
              <source src="/assets/test.webm" type="video/webm" />
            </video>
          </figure>
          <p className="py-6">{posts[0].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
