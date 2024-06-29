import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TypeWriter from "@/components/Typewriter";
// import CursorBlinker from "@/components/CursorBlinker";

export default function WebcamHeader() {
	const baseText = "Dear Hiring Manager, " as string;
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.slice(0, latest)
	);

	useEffect(() => {
		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 1,
			ease: "easeInOut",
		});
		return controls.stop;
	}, []);

	return (
		<div className="flex flex-col justify-center mt-10 mx-auto">
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 0.9 }}
				transition={{ duration: 0.5, ease: "easeOut" }}>
				Your actity is...
			</motion.div>
			<div className="mt-10">
				<TypeWriter fontSize="big">PUSHUPS</TypeWriter>
			</div>
		</div>
	);
	// return (
	// 	<div className="webcam-header">
	// 		<motion.h2
	// 			className="flex justify-center items-center text-center text-3xl capitalize font-medium mb-8 drop-shadow-md"
	// 			initial={{ opacity: 0 }}
	// 			animate={{ opacity: 1 }}
	// 			transition={{ duration: 0.2 }}>
	// 			YOUR ACTIVITY IS
	// 		</motion.h2>
	// 		<motion.h2
	// 			className="flex justify-center items-center text-center text-3xl capitalize font-medium mb-8 drop-shadow-md"
	// 			initial={{ opacity: 0 }}
	// 			animate={{ opacity: 1 }}
	// 			transition={{ duration: 0.5 }}>
	// 			PUSH-UPS
	// 		</motion.h2>
	// 	</div>
	// );
}
