"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const Recording: React.FC = () => {
	const webcamRef = useRef<Webcam>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const [capturing, setCapturing] = useState(false);
	const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
	const [isWebcamReady, setIsWebcamReady] = useState(false);

	useEffect(() => {
		console.log("first");
	}, []);

	const handleDataAvailable = useCallback(
		(event: BlobEvent) => {
			if (event.data.size > 0) {
				setRecordedChunks((prev) => prev.concat(event.data));
			}
		},
		[setRecordedChunks]
	);

	const handleStartCaptureClick = useCallback(() => {
		console.log(webcamRef);
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

	const handleDownload = useCallback(() => {
		if (recordedChunks.length > 0) {
			const blob = new Blob(recordedChunks, {
				type: "video/webm",
			});
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			document.body.appendChild(a);
			a.style.display = "none";
			a.href = url;
			a.download = "recorded_video.webm";
			a.click();
			window.URL.revokeObjectURL(url);
			setRecordedChunks([]);
		}
	}, [recordedChunks]);

	return (
		<div className="relative w-[96.5%] mx-auto">
			<Webcam
				className="flex justify-between rounded-lg"
				audio={true}
				ref={webcamRef}
				onUserMedia={() => setIsWebcamReady(true)}
			/>
			<div
				className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4"
				onClick={() => {
					if (capturing) {
						handleStopCaptureClick();
						if (recordedChunks.length > 0) handleDownload();
					} else {
						handleStartCaptureClick();
					}
					// capturing ? handleDownload() : handleStartCaptureClick();
					setCapturing(!capturing);
				}}>
				{capturing ? (
					<button className="btn btn-circle btn-outline transition-opacity btn-ghost opacity-80">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
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
					<button className="btn btn-circle btn-outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 overflow"
							fill="white"
							viewBox="0 0 120 120">
							<circle cx="60" cy="60" r="60" />
						</svg>
					</button>
				)}
				{/* {recordedChunks.length > 0 && (
					<button
						onClick={handleDownload}
						className="bg-green-500 text-white px-4 py-2 rounded">
						Download
					</button>
				)} */}
			</div>
		</div>
	);
};

export default Recording;
