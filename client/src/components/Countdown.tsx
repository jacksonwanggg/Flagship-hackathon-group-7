// Countdown.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

interface CountdownProps {
	seconds: number;
}

const Countdown = ({ seconds }: CountdownProps) => {
	const [timeLeft, setTimeLeft] = useState(seconds);
	const router = useRouter();

	// const navigate = useNavigate();

	useEffect(() => {
		if (timeLeft === 0) {
			router.push("/webcam");
		}

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, router]);

	return (
		<div className="flex z-1000">
			<p>Countdown: {timeLeft}s</p>
		</div>
	);
};

export default Countdown;
