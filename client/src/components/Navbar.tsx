"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { PageContext } from "../app/layout";
import pageGradientColorsHex, { GradientColor } from "@/lib/styles";
import { navBarPageRoutes } from "@/lib/data";
import { RouteDataType } from "@/lib/types";
import { MdLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar() {
	const { activePage, setActivePage } = useContext(PageContext);
	const [fromGradientColor, setFromGradientColor] =
		useState<string>("black-400");
	const [toGradientColor, setToGradientColor] = useState<string>("black-400");

	const formatGradientColor = (fromGradient: string, toGradient: string) => {
		return `bg-gradient-to-t from-${fromGradient} to-${toGradient}`;
	};

	const handleChangePageClick = (route: RouteDataType) => {
		const name = route.name;
		if (name === "Home") {
			setActivePage("Home");
			setFromGradientColor("black-400");
			setToGradientColor("black-400");
		} else if (name === "Leaderboard") {
			setActivePage("Leaderboard");
			// setFromGradientColor("green-700");
			// setToGradientColor("green-400");
			setFromGradientColor("black-400");
			setToGradientColor("black-400");
		} else if (name === "Pets") {
			setActivePage("Pets");
			// setFromGradientColor("purple-600");
			// setToGradientColor("blue-500");
			setFromGradientColor("black-400");
			setToGradientColor("black-400");
		} else if (name === "Memories") {
			setActivePage("Memories");
			// setFromGradientColor("purple-600");
			// setToGradientColor("blue-500");
			setFromGradientColor("black-400");
			setToGradientColor("black-400");
			// setFromGradientColor("purple-500");
			// setToGradientColor("purple-400");
		}
	};

	// const green = "green-700";

	return (
		// <div className="btm-nav relative bottom-0 bg-gradient-to-t from-green-400 to-green-700">
		<div
			className={`btm-nav relative bottom-0 ${formatGradientColor(
				fromGradientColor,
				toGradientColor
			)}`}>
			{navBarPageRoutes.map((route) => (
				<Link
					key={route.route}
					href={route.route}
					className={`${
						activePage === route.name ? "active" : ""
					} opacity-90 ${formatGradientColor(
						fromGradientColor,
						toGradientColor
					)}`}
					onClick={() => handleChangePageClick(route)}>
					{route.name === "Home" && <IoHome />}
					{route.name === "Leaderboard" && <MdLeaderboard />}
					{route.name === "Pets" && <MdOutlinePets />}
					{route.name === "Memories" && <GiBookmarklet />}
					<span>{route.name}</span>
				</Link>
			))}
		</div>
	);
	// return (
	// 	<div
	// 		className={`btm-nav relative bottom-0 bg-gradient-to-r ${getGradientColors(
	// 			activePage
	// 		)}`}>
	// 		{navBarPageRoutes.map((route) => (
	// 			<Link
	// 				key={route.route}
	// 				href={route.route}
	// 				className={`${
	// 					activePage === route.name ? "active" : ""
	// 				} rounded-lg opacity-90 bg-gradient-to-r ${getGradientColors(
	// 					activePage
	// 				)}`}
	// 				// className={`rounded-lg opacity-90`}
	// 				onClick={() => setActivePage(route.name)}>
	// 				{route.name === "Home" && <IoHome />}
	// 				{route.name === "Leaderboard" && <MdLeaderboard />}
	// 				{route.name === "Pets" && <MdOutlinePets />}
	// 				{route.name === "Memories" && <GiBookmarklet />}
	// 				<span>{route.name}</span>
	// 			</Link>
	// 		))}
	// 	</div>
	// );
}

// useEffect(() => {
// 	console.log("Entering useEffect");
// 	const updateGradientColors = () => {
// 		console.log(
// 			"Updating gradient colors " +
// 				" toFromGradientColor " +
// 				fromGradientColor +
// 				" toGradientColor " +
// 				toGradientColor
// 		);
// 		const gradient: GradientColor = pageGradientColorsHex[activePage];
// 		if (gradient) {
// 			console.log(
// 				"Setting gradient colors " +
// 					" toFromGradientColor " +
// 					fromGradientColor +
// 					" toGradientColor " +
// 					toGradientColor
// 			);
// 			setFromGradientColor(gradient.fromGradient);
// 			setToGradientColor(gradient.toGradient);
// 		}
// 	};

// 	updateGradientColors();

// 	return () => {
// 		console.log("Cleaning up useEffect");
// 	};
// }, [activePage]);
