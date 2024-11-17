import React from "react";
import Link from "next/link";
import { Project } from "@/model/projects.model";
import { Meteors } from "../Aceternity/metores";
import { Oxanium } from "next/font/google";
import Image from "next/image";

const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });

export default function ProjectCard({
	title,
	logo,
	description,
	websiteLink,
	githubLink,
}: Project) {
	return (
		<div className="my-2 flex flex-col gap-3">
			<Image
				src={logo}
				width={1000}
				height={1000}
				alt="project"
				className="flex h-full w-full items-center"
			/>
			<h3
				className={`pointer-events-none w-full p-10 text-center text-4xl font-semibold ${oxanium.className}`}
			>
				{title}
			</h3>
			<Meteors number={10} />
			<p className="text-s text-gray-400">{description}</p>

			<div className="mt-2 flex items-center justify-between gap-4">
				<Link href={githubLink} target="_blank">
					<button className="md:text-md inline-flex w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Visit Live Site
					</button>
				</Link>
				<Link href={websiteLink} target="_blank">
					<button className="md:text-md inline-flex w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Code
					</button>
				</Link>
			</div>
		</div>
	);
}
