import type { Metadata } from "next";
import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });
const oxanium = Oxanium({
	subsets: ["latin"],
	weight: "600",
	variable: "--font-oxanium",
});

export const metadata: Metadata = {
	title: "Portfolio | Sanyam Pandey - Full Stack Web Developer",
	description: "I'm Sanyam Pandey, a web developer based in New Delhi, India.",
	alternates: {
		canonical: "https://sabhyaagarwal.netlify.app/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Portfolio | Sanyam Pandey - Full Stack Web Developer",
		description: "I'm Sanyam Pandey, a web developer based in Delhi, India.",
		url: "https://sabhyaagarwal.netlify.app/",
		siteName: "Sanyam Pandey's Portfolio",
		images: [
			{
				url: "https://sabhyaagarwal.netlify.app//og/og.png",
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
		title: "Portfolio | Sanyam Pandey - Full Stack Web Developer",
		description: "I'm Sanyam Pandey, a full stack web developer based in Delhi, India.",
		creator: "",
		images: [""],
	},

	keywords:
		"Sanyam Pandey, portfolio, Sanyam, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Favicon */}
				<link rel="icon" href="/faviconportfolio.png" type="image/x-icon" />
				<link rel="shortcut icon" href="/faviconportfolio.png" type="image/x-icon" />
			</head>
			<body
				className={
					poppin.className +
					" bg[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] absolute inset-0 h-full w-full bg-black bg-[size:24px_24px]"
				}
			>
				<Navigation />
				{children}


				<Footer />
			</body>
		</html>
	);
}
