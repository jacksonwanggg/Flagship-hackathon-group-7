"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";
import Home from "./index/page";
import { useState } from "react";

export default function Page() {
	const [activePage, setActivePage] = useState("home");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			{/* <Home></Home> */}
			<Navbar
				activePage={activePage}
				setActivePage={setActivePage}></Navbar>
		</main>
	);
}
