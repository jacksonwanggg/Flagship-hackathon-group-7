"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD

export default function Page() {
=======
import React, { useContext } from "react";
import Home from "./index/page";
import { PageContext } from "./layout";

export default function Page() {
	const { activePage, setActivePage } = useContext(PageContext);
>>>>>>> 97e3296 (added navbar clicking functionality)
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10"></main>
	);
}
