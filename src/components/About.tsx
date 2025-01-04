import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "@/components/Aceternity/background-gradient";

function About() {
	return (
		<div>
			<h2
				id="about"
				className="mb-8 mt-8 text-center font-oxanium text-4xl lg:mb-0 lg:mt-0"
			>
				About Me
			</h2>
			<div className="mx-auto mt-2 flex w-full flex-col items-center justify-between md:gap-4 lg:mt-20 lg:w-11/12 lg:flex-row 2xl:w-4/5">
				<BackgroundGradient
					className="w-full"
					containerClassName="mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-lg p-1 transition-transform duration-300 hover:-translate-y-2 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3"
				>
					<div className="mx-auto flex w-full flex-col items-center gap-2 self-start rounded-2xl bg-zinc-900 p-3">
						<Image
							alt={"/self.jpg"}
							width={1000}
							height={1000}
							loading={"lazy"}
							className="h-60 w-full rounded-2xl bg-violet-100 object-cover object-top grayscale transition-all hover:grayscale-0 md:h-80 lg:h-80"
							src={"/shinchan.jpeg"}
						/>
						<span className="font-sans font-medium dark:text-gray-300">
							{"< I Build Stuff 🚀 />"}
						</span>
					</div>
				</BackgroundGradient>
				<div className="mx-6 mt-8 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-2.5">
						<p className="text-3xl font-semibold">Sanyam Pandey</p>
						<p className="w-fit rounded bg-violet-50 px-2 py-1 text-sm text-violet-800 dark:bg-violet-600/15 dark:text-violet-500">
							Full stack Developer - [MERN Stack, NextJs]
						</p>

						<p className="text-sm text-zinc-400 md:text-lg md:font-semibold">
							Hi there! 👋 I’m a passionate full-stack developer based in Delhi, dedicated to crafting innovative digital solutions. With expertise in Next.js, React, Node.js, Tailwind CSS, and a variety of modern frontend and backend libraries like Bootstrap and Chakra UI, I thrive on turning creative ideas into functional and visually stunning applications.

							As a proud SIH 2022 finalist and runner-up, I’ve proven my ability to tackle complex challenges and deliver impactful solutions. My journey as a developer has been enriched by participating in multiple hackathons, where collaboration and problem-solving are at the forefront. Currently, I’m contributing as a web developer at IPU-IIF (Innovation and Incubation Foundation), where I’m working on projects that drive innovation.

							Whether it's designing sleek, user-friendly interfaces or building robust back-end systems, I’m all about delivering quality, efficiency, and reliability in every project. I’m always eager to learn new tools, explore emerging technologies, and collaborate with like-minded individuals on exciting ventures.

							Let’s connect and create something awesome together! 🚀
						</p>
						<div className="mt-2 flex items-center gap-4 md:mt-4">
							<Link
								href="/resume.pdf"
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base dark:bg-violet-700 hover:dark:bg-violet-800"
							>
								Resume
							</Link>
							<Link
								className="group flex w-fit cursor-pointer items-center gap-1 rounded-md bg-violet-700 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-800 md:text-base"
								href={"#skills"}
							>
								<span>My Skills</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
