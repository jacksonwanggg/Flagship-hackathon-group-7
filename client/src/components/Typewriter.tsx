"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";
import CursorBlinker from "./CursorBlinker";

// const tempText = "Before we begin, here is something to inspire your day..." as string;
type TypeWriterProps = {
	children: string;
	fontSize: "big" | "small";
};

export default function TypeWriter({ fontSize, children }: TypeWriterProps) {
	const baseText = children;
	// const baseText1 = children;
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.slice(0, latest)
	);
	useEffect(() => {
		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 3,
			ease: "easeInOut",
		});
		return controls.stop;
	}, []);
	return (
		// <div className="mt-10">
		<div>
			<motion.span
				className={
					fontSize === "big"
						? "mb-10 mt-15 px-4 text-2xl font-medium"
						: "px-4 text-[1rem] font-medium"
				}>
				{displayText}
			</motion.span>
			<span className="-ml-3">
				{" "}
				<CursorBlinker />
			</span>
		</div>
	);
}
