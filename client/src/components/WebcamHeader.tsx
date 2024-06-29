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
		<div
			className="flex flex-col justify-center mt-10 mx-auto scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0
">
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 0.9 }}
				transition={{ duration: 0.5, ease: "easeOut" }}>
				Your actity is...
			</motion.div>
			<div className="mt-10 mx-auto scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
				<TypeWriter fontSize="big">PUSHUPS</TypeWriter>
			</div>
		</div>
	);
}
