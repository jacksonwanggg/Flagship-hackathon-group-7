"use client";

import { useState, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

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
	activePage: "",
	setActivePage: (string) => {},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [activePage, setActivePage] = useState("");
	const pathname = usePathname();

	return (
		<html lang="en">
			<body className={`app-container ${inter.className}`}>
				<PageContext.Provider value={{ activePage, setActivePage }}>
					<div>{children}</div>
					{pathname !== "/landing" &&
						pathname !== "/login" &&
						pathname !== "/register" &&
						pathname !== "/profile" && <Navbar />}
					<Toaster
						containerStyle={{
							right: 0,
              left: 10,
							top: 1000,
						}}
					/>
				</PageContext.Provider>
			</body>
		</html>
	);
}
