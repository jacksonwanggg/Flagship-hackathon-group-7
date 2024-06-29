// "use client";

// import React from "react";

// interface TimeUntilProps {
// 	seconds: number;
// 	setSeconds: React.Dispatch<React.SetStateAction<number>>;
// }

// export default function TimeUntil(props: TimeUntilProps) {
// 	const [seconds, setSeconds] = props;

// 	const convertSeconds = (seconds: number) => {
// 		const hours = Math.floor(seconds / 3600);
// 		const minutes = Math.floor((seconds % 3600) / 60);
// 		const remainingSeconds = seconds % 60;

// 		return { hours, minutes, remainingSeconds };
// 	};

// 	const { hours, minutes, remainingSeconds } = convertSeconds(seconds);


// 	return <div>TimeUntil</div>;
// }
