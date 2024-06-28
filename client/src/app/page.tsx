import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";
import Home from "./index/page";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<Navbar></Navbar>
		</main>
	);
}
