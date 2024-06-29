// Countdown.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CountdownProps {
	seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ seconds }) => {
	const [timeLeft, setTimeLeft] = useState(seconds);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [remainingSeconds, setRemainingSeconds] = useState(0);
	const router = useRouter();

	const convertSeconds = (seconds: number) => {
		const days = Math.floor(seconds / (3600 * 24));
		const hours = Math.floor((seconds % (3600 * 24)) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return { days, hours, minutes, remainingSeconds };
	};

	useEffect(() => {
		if (timeLeft === 0) {
			router.push("/webcam");
		}

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, router]);

	useEffect(() => {
		const { days, hours, minutes, remainingSeconds } =
			convertSeconds(timeLeft);
		setDays(days);
		setHours(hours);
		setMinutes(minutes);
		setRemainingSeconds(remainingSeconds);
	}, [timeLeft]);

	const formatNumber = (number: number) => {
		return number < 10 ? `0${number}` : number.toString();
	};

	function updateValue(newValue: number) {
		// Select the element
		const countdownElement = document.querySelector(
			".countdown-value"
		) as HTMLElement;
		// Update the --value custom property
		if (countdownElement) {
			countdownElement.style.setProperty("--value", newValue.toString());
		}
	}

	return (
		<div>
			<div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
				<div className="flex flex-col items-center p-2 my-2 ]">
					<span className="countdown text-5xl">
						<span
							style={{ "--value": hours } as React.CSSProperties}>
							{formatNumber(hours)}
						</span>
					</span>
					<span>hours</span>
				</div>
				<div className="flex flex-col items-center p-2 my-2">
					<span className="countdown text-5xl">
						<span
							style={
								{ "--value": minutes } as React.CSSProperties
							}>
							{formatNumber(minutes)}
						</span>
					</span>
					<span>min</span>
				</div>
				<div className="flex flex-col items-center p-2 my-2">
					<span className="countdown text-5xl">
						<span
							style={
								{
									"--value": remainingSeconds,
								} as React.CSSProperties
							}>
							{formatNumber(remainingSeconds)}
						</span>
					</span>
					<span>sec</span>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
