import "./globals.css";
import { Caveat } from "next/font/google";

const inter = Caveat({ subsets: ["latin"] });

export const metadata = {
	title: "FitPets",
	description: "Really Fit Pets",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`app-container`}>{children}</body>
		</html>
	);
}
