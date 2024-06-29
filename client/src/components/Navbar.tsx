"use client";

import React from "react";
import Link from "next/link";
import { PageContext } from "../app/layout";
import { useContext } from "react";
import pageGradientColorsHex from "@/lib/styles";
import { navBarPageRoutes } from "@/lib/data";
import { RouteData } from "@/lib/types";
import { MdLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Collections from "@mui/icons-material/AutoStories";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar() {
	const { activePage, setActivePage } = useContext(PageContext);

	return (
		<div className="btm-nav relative bottom-0">
			{navBarPageRoutes.map((route) => (
				<Link
					key={route.route}
					href={route.route}
					className={activePage === route.name ? "active" : ""}
					onClick={() => setActivePage(route.name)}>
					{route.name === "Home" && <IoHome />}
					{route.name === "Leaderboard" && <MdLeaderboard />}
					{route.name === "Pets" && <MdOutlinePets />}
					{route.name === "Memories" && <Collections />}
				</Link>
			))}
		</div>
	);
	// return (
	// 	<div className="btm-nav relative bottom-0">
	// 		<Link
	// 			href="/"
	// 			className={activePage == "Home" ? "active" : ""}
	// 			onClick={() => setActivePage("Home")}>
	// 			<IoHome />
	// 			Dashboard
	// 		</Link>
	// 		<Link
	// 			href="/leaderboard"
	// 			className={activePage == "Leaderboard" ? "active" : ""}
	// 			onClick={() => setActivePage("Leaderboard")}>
	// 			<MdLeaderboard />
	// 			Leaderboard
	// 		</Link>
	// 		<Link
	// 			href="/pets"
	// 			className={activePage == "pets" ? "active" : ""}
	// 			onClick={() => setActivePage("pets")}>
	// 			<MdOutlinePets />
	// 			Pets
	// 		</Link>
	// 	</div>
	// );
}
