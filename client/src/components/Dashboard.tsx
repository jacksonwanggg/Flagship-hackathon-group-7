import React from "react";
import { PostListProps } from "@/lib/types";
import QuestInfo from "@/components/QuestInfo";
import Countdown from "@/components/Countdown";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Image from 'next/image';

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
                <div className="flex flex-col w-full">
                  <p className="text-2xl my-2">TODAY'S QUEST</p>
                  <QuestInfo questName="Do 50 Pushups" foodCount="50" itemCount="100" itemSrc="/assets/gold.png"/>
                  <p className="text-2xl my-2">WEEKLY QUEST</p>
                  <QuestInfo questName="Finish 50,000 Steps" foodCount="350" itemCount="5" itemSrc="/assets/gemston.png"/>
                  <p className="text-2xl my-2">SIDE QUESTS</p>
                  <QuestInfo questName="Eye-training Exercise" foodCount="10" itemCount="20" itemSrc="/assets/gold.png" />
                  <QuestInfo questName="Posture straightening for 30 seconds" foodCount="20" itemCount="30" itemSrc="/assets/gold.png" />
                  <QuestInfo questName="20 Jumping Jacks" foodCount="25" itemCount="80" itemSrc="/assets/gold.png"/>
                </div>
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
