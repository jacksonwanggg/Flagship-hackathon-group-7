import React from "react";
import Link from "next/link";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar(props: any) {
	const { activePage, setActivePage } = props;

	return (
		<div className="btm-nav">
			<Link href="/index">
				<button
					className={activePage == "home" ? "active" : ""}
					onClick={setActivePage("home")}>
					<IoHome />
				</button>
				Dashboard
			</Link>

			<Link href="/leaderboard">
				<button
					className={activePage == "leaderboard" ? "active" : ""}
					onClick={setActivePage("leaderboard")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
				Leaderboard
			</Link>
			<Link href="/pets">
				<button
					className={activePage == "pets" ? "active" : ""}
					onClick={setActivePage("pets")}>
					<MdOutlinePets />
				</button>
				<p>Pets</p>
			</Link>
		</div>
	);
}
