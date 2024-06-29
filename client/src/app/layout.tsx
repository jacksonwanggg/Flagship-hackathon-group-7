"use client";

import { useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Caveat({ subsets: ["latin"] });

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
  const [activePage, setActivePage] = useState("home");
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`app-container ${inter.className}`}>
        <PageContext.Provider value={{ activePage, setActivePage }}>
          <div>{children}</div>
          {pathname !== "/landing" && pathname !== "/login" && <Navbar />}
        </PageContext.Provider>
      </body>
    </html>
  );
}
