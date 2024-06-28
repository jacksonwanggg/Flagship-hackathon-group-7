"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { PageContext } from "../app/layout";
import { useContext } from "react";

export default function Navbar() {
	const { activePage, setActivePage } = useContext(PageContext);

	return (
		<div className="btm-nav">
			{/* <Link href="/index"> */}
			<div>
				<button
					// className={activePage == "home" ? "active" : ""}
					className="active"
					onClick={() => {
						setActivePage("home");
						console.log("activePage: ", activePage);
					}}>
					<IoHome />
				</button>
				Dashboard
			</div>
			{/* </Link> */}
			<Link href="/leaderboard">
				<button
					className={activePage == "leaderboard" ? "active" : ""}
					onClick={() => setActivePage("leaderboard")}>
					<MdOutlineLeaderboard />
				</button>
				Leaderboard
			</Link>
			<Link href="/pets">
				<button
					className={activePage == "pets" ? "active" : ""}
					onClick={() => setActivePage("pets")}>
					<MdOutlinePets />
				</button>
				<p>Pets</p>
			</Link>
		</div>
	);
}
