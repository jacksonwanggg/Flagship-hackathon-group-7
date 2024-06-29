"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { exercises, ExerciseNameType } from "@/lib/data";
import axios from "axios";
import toast from "react-hot-toast";

const Recording: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const [capturing, setCapturing] = useState(false);
	const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
	const [isWebcamReady, setIsWebcamReady] = useState(false);

	const handleDataAvailable = useCallback(
		(event: BlobEvent) => {
			if (event.data.size > 0) {
				setRecordedChunks((prev) => prev.concat(event.data));
			}
		},
		[setRecordedChunks]
	);

	const handleStartCaptureClick = useCallback(() => {
		if (webcamRef.current?.stream) {
			setCapturing(true);
			mediaRecorderRef.current = new MediaRecorder(
				webcamRef.current.stream,
				{
					mimeType: "video/webm",
				}
			);
			mediaRecorderRef.current.addEventListener(
				"dataavailable",
				handleDataAvailable
			);
			mediaRecorderRef.current.start();
		}
	}, [handleDataAvailable]);

	const handleStopCaptureClick = useCallback(() => {
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.stop();
			setCapturing(false);
		}
	}, []);

	// const handleDownload = useCallback(() => {
	// 	if (recordedChunks.length > 0) {
	// 		const blob = new Blob(recordedChunks, {
	// 			type: "video/webm",
	// 		});
	// 		const url = URL.createObjectURL(blob);
	// 		const a = document.createElement("a");
	// 		document.body.appendChild(a);
	// 		a.style.display = "none";
	// 		a.href = url;
	// 		a.download = "recorded_video.webm";
	// 		a.click();
	// 		window.URL.revokeObjectURL(url);
	// 		setRecordedChunks([]);
	// 	}
	// }, [recordedChunks]);

	const handleDownload = useCallback(() => {
		if (recordedChunks.length > 0) {
			const blob = new Blob(recordedChunks, {
				type: "video/webm",
			});
			const formData = new FormData();
			formData.append("video", blob, "filename.webm");

			axios
				.post("http://localhost:3000/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					console.log(
						"File uploaded successfully:",
						response.data.filePath
					);
				})
				.catch((error) => {
					console.error("Error uploading file:", error);
					toast.success("File Uploaded!");
				});

			setRecordedChunks([]);
		}
	}, [recordedChunks]);

	const [exercise, setExercise] = useState("12345678123451231234123124213");
	const [exerciseDuration, setExerciseDuration] = useState(30);
	const [exerciseReward, setExerciseReward] = useState(10);
	useEffect(() => {
		const randomExercise =
			exercises[Math.floor(Math.random() * exercises.length)];
		setExercise(randomExercise.name);
		setExerciseDuration(randomExercise.duration);
		setExerciseReward(randomExercise.reward);
	}, []);

	return (
		<div className="flex flex-col w-[96.5%] mx-auto">
			<Webcam
				className="flex justify-between rounded-lg"
				audio={true}
				ref={webcamRef}
				onUserMedia={() => setIsWebcamReady(true)}
			/>
			<div className="h-10"></div>
			<div className="h-[3rem] flex flex-row justify-center">
				Complete the challenge for : {exerciseReward} EXP
			</div>
			{/* <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 bottom-[7rem] min-w-full"> */}
			<div className="absolute left-1/2 transform -translate-x-1/2 space-x-4 bottom-[12rem] min-w-full">
				<div className="flex flex-row min-w-full sm:min-w-940px">
					<div className="absolute left-1/2 transform -translate-x-1/2">
						{capturing ? (
							<button
								className="btn btn-circle btn-outline transition-opacity btn-ghost opacity"
								onClick={handleStopCaptureClick}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									viewBox="0 0 24 24"
									fill="white">
									<rect
										x="4.5"
										y="4.5"
										width="15"
										height="15"
										rx="3"
										ry="3"
									/>
								</svg>
							</button>
						) : (
							<button
								className="btn btn-circle btn-outline"
								onClick={handleStartCaptureClick}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 overflow"
									fill="white"
									viewBox="0 0 120 120">
									<circle cx="60" cy="60" r="60" />
								</svg>
							</button>
						)}
					</div>
					{recordedChunks.length > 0 && (
						<div className="right-[20px] absolute">
							<IconButton
								onClick={handleDownload}
								className="text-white"
								style={{ fontSize: "2rem" }}>
								<SendIcon
									className="text-white"
									style={{ fontSize: "2rem" }}
								/>
							</IconButton>
						</div>
					)}
				</div>
			</div>
			<div className="bottom-0 h-[10rem]"></div>
		</div>
	);
};

export default Recording;
