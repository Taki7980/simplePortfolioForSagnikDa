import type { Metadata } from "next";
import { IBM_Plex_Serif, Roboto } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/ui/footer";

const mons = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["100","300","500","700","900"],
});



export const metadata: Metadata = {
	title: "Sagnik Majumder",
	description: "My Journalism portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${mons.className} ${GeistSans.variable} w-full`}
			>
				<Navbar/>
				<Hero/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
