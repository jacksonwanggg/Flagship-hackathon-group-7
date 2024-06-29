"use client";

import { useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Sora({ subsets: ["latin"] });

const metadata = {
	title: "FitPets",
	description: "Really Fit Pets",
};

type PageContextType = {
	activePage: string;
	setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export const PageContext = createContext<PageContextType>({
	activePage: "home",
	setActivePage: () => {},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [activePage, setActivePage] = useState("Home");
	const pathname = usePathname();

	return (
		<html lang="en">
			<body className={`app-container ${inter.className}`}>
				<PageContext.Provider value={{ activePage, setActivePage }}>
					<div>{children}</div>
					{pathname !== "/landing" &&
						pathname !== "/login" &&
						pathname !== "/register" && <Navbar />}
				</PageContext.Provider>
			</body>
		</html>
	);
}
