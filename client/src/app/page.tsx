"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import React, { useContext } from "react";
import Home from "./index/page";
import { PageContext } from "./layout";

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			{/* <Home></Home> */}
			<Navbar />
		</main>
	);
}
