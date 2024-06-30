import React, { useEffect, useState } from "react";
import { PostListProps } from "@/lib/types";
import QuestInfo from "@/components/QuestInfo";
import Countdown from "@/components/Countdown";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Image from "next/image";

const Dashboard: React.FC<PostListProps> = ({ posts }) => {
	const [videoSrc, setVideoSrc] = useState("/assets/upload/filename.webm");

	useEffect(() => {
		setVideoSrc("/assets/upload/filename.webm");
	}, []);

	return (
		<div className="hero w-full mx-auto bg-transparent rounded-xl px-4">
			<div className="hero-content text-center bg-rose-600">
				<button
					className=" right-[9%] absolute top-[2.5%] w-[35px] bg-rose-600"
					onClick={() =>
						document.getElementById("my_modal_2")?.showModal()
					}>
					{" "}
					<AssignmentIcon className="text-white scale-[1.5] absolute " />
				</button>
				<div className="flex flex-col">
					<div className="flex flex-row m-2">
						{/* Open the modal using document.getElementById('ID').showModal() method */}

						<dialog
							id="my_modal_2"
							className="modal bg-rose-600 outline-none">
							<div className="modal-box">
								<div className="flex flex-col w-full">
									<p className="text-2xl my-2">
										TODAY'S QUEST
									</p>
									<QuestInfo
										questName="Do 50 Pushups"
										foodCount="50"
										itemCount="100"
										itemSrc="/assets/gold.png"
									/>
									<p className="text-2xl my-2">
										WEEKLY QUEST
									</p>
									<QuestInfo
										questName="Finish 50,000 Steps"
										foodCount="350"
										itemCount="5"
										itemSrc="/assets/gemston.png"
									/>
									<p className="text-2xl my-2">SIDE QUESTS</p>
									<QuestInfo
										questName="Eye-training Exercise"
										foodCount="10"
										itemCount="20"
										itemSrc="/assets/gold.png"
									/>
									<QuestInfo
										questName="Posture straightening for 30 seconds"
										foodCount="20"
										itemCount="30"
										itemSrc="/assets/gold.png"
									/>
									<QuestInfo
										questName="20 Jumping Jacks"
										foodCount="25"
										itemCount="80"
										itemSrc="/assets/gold.png"
									/>
								</div>
							</div>
							<form method="dialog" className="modal-backdrop">
								<button>close</button>
							</form>
						</dialog>
					</div>
					<div className="max-w-md bg-transparent">
						<figure>
							<video
								width="600"
								autoPlay
								className="rounded-xl mt-7">
								{/* <source src={post.url} type="video/webm" /> */}
								<source src={videoSrc} type="video/webm" />
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
