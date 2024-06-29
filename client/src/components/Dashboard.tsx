import React from "react";
import { PostListProps } from "@/lib/types";
import Countdown from "@/components/Countdown";

const Dashboard: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="hero max-w-sm mx-auto bg-transparent rounded-xl p-4">
      <div className="hero-content text-center bg-rose-600">
        <div className="flex flex-col">
          <div className="flex flex-row p-4">
            <div className="pb-3">I just did some pushups</div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-rose-600 outline-none"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_2" className="modal bg-rose-600 outline-none">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="max-w-md bg-transparent">
            <figure>
              <video width="600" autoPlay className="rounded-xl">
                <source src="/assets/test.webm" type="video/webm" />
              </video>
            </figure>
            <Countdown seconds={5} />
            {/*<p className="py-6">{posts[0].caption}</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
