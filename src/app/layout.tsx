import type { Metadata } from "next";
import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { URL } from "url";
import { Analytics } from "@vercel/analytics/react";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });
const oxanium = Oxanium({
	subsets: ["latin"],
	weight: "600",
	variable: "--font-oxanium",
});

export const metadata: Metadata = {
	title: "Portfolio | Sabhya Agarwal - Web Developer",
	description: "I'm Sabhya Agarwal, a web developer based in New Delhi, India.",
	alternates: {
		canonical: "https://sabhyaagarwal.vercel.app",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Portfolio | Sabhya Agarwal - Full Stack Developer",
		description: "I'm Sabhya Agarwal, a web developer based in Delhi, India.",
		url: "https://sabhyaagarwal.vercel.app",
		siteName: "Sabhya Agarwal's Portfolio",
		images: [
			{
				url: "https://sabhyaagarwal.vercel.app/og/og.png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	twitter: {
		card: "summary_large_image",
		title: "Portfolio | Sabhya Agarwal - Full Stack Developer",
		description: "I'm Sabhya Agarwal, a web developer based in Delhi, India.",
		creator: "",
		images: [""],
	},

	keywords:
		"Sabhya Agarwal, portfolio, Sabhya, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					poppin.className +
					" bg[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] absolute inset-0 h-full w-full bg-black bg-[size:24px_24px]"
				}
			>
				<Navigation />
				{children}
				<Analytics />

				<Footer />
			</body>
		</html>
	);
}
