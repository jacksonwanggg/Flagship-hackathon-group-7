import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TypeWriter from "@/components/Typewriter";
import { exercises, ExerciseNameType } from "@/lib/data";
// import CursorBlinker from "@/components/CursorBlinker";

export default function WebcamHeader() {
	// select a random exercise
	const [exercise, setExercise] = useState("12345678123451231234123124213");
	const [exerciseDuration, setExerciseDuration] = useState(30);
	useEffect(() => {
		const randomExercise =
			exercises[Math.floor(Math.random() * exercises.length)];
		setExercise(randomExercise.name);
		setExerciseDuration(randomExercise.duration);
	}, []);

	return (
		<div
			className="flex flex-col justify-center mt-10 mx-auto scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0
">
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 0.9 }}
				transition={{ duration: 0.5, ease: "easeOut" }}>
				Your activity is...
			</motion.div>
			<div className="mt-10 mx-auto scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
				<TypeWriter fontSize="big">{exercise.toUpperCase()}</TypeWriter>
			</div>
			<motion.div
				className="text-lg justify-center flex"
				initial={{ y: 0, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 5, ease: "easeIn" }}>
				{`for ${exerciseDuration.toString()} seconds`}
			</motion.div>
		</div>
	);
}
