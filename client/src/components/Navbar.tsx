"use client";

import React from "react";
import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { PageContext } from "../app/layout";
import { useContext } from "react";

export default function Navbar() {
	const { activePage, setActivePage } = useContext(PageContext);

	return (
		<div className="btm-nav">
			<Link
				href="/home"
				className={activePage == "home" ? "active" : ""}
				onClick={() => setActivePage("home")}>
				<IoHome />
				Dashboard
			</Link>
			<Link
				href="/leaderboard"
				className={activePage == "leaderboard" ? "active" : ""}
				onClick={() => setActivePage("leaderboard")}>
				<MdLeaderboard />
				Leaderboard
			</Link>
			<Link
				href="/pets"
				className={activePage == "pets" ? "active" : ""}
				onClick={() => setActivePage("pets")}>
				<MdOutlinePets />
				Pets
			</Link>
		</div>
	);
}
