// Countdown.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CountdownProps {
	seconds: number;
}

const Countdown = ({ seconds }: CountdownProps) => {
	const [timeLeft, setTimeLeft] = useState(seconds);
	const navigate = useNavigate();

	useEffect(() => {
		if (timeLeft === 0) {
			navigate("/webcam");
		}

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, navigate]);

	return (
		<div>
			<h1>Countdown: {timeLeft}s</h1>
		</div>
	);
};

export default Countdown;
