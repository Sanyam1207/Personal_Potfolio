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
				{/* Profile Card */}
				<BackgroundGradient
					className="w-full"
					containerClassName="mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-lg p-1 transition-transform duration-300 hover:-translate-y-2 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3"
				>
					<div className="mx-auto flex w-full flex-col items-center gap-2 self-start rounded-2xl bg-zinc-900 p-3">
						<Image
							alt="profile"
							width={1000}
							height={1000}
							loading="lazy"
							className="h-60 w-full rounded-2xl bg-violet-100 object-cover object-top grayscale transition-all hover:grayscale-0 md:h-80 lg:h-80"
							src="/shinchan.jpeg"
						/>
						<span className="font-sans font-medium dark:text-gray-300">
							{"< I Build Stuff 🚀 />"}
						</span>
					</div>
				</BackgroundGradient>

				{/* About Content */}
				<div className="mx-6 mt-8 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-4 text-sm md:text-lg md:font-medium text-zinc-300">
						<p className="text-3xl font-semibold text-white">Sanyam Pandey</p>
						<p className="w-fit rounded bg-violet-50 px-2 py-1 text-sm text-violet-800 dark:bg-violet-600/15 dark:text-violet-500">
							<strong>Full Stack Developer</strong> | <strong>MERN</strong> | <strong>Next.js</strong> | <strong>React Native</strong>
						</p>

						<ul className="list-disc pl-4 space-y-2">
							<li>
								<strong>Web Dev Lead @ IPU-IIF</strong> — leading the <strong>dev team</strong>,
								architecting <strong>startup incubation platforms</strong>, and mentoring <strong>juniors</strong>.
							</li>
							<li>
								<strong>SDE Intern @ Software Giant</strong> — built <strong>scalable full-stack apps</strong>
								(<strong>e-commerce</strong>, <strong>real-time chatting</strong>, <strong>DB modeling</strong>).
							</li>
							<li>
								<strong>SDE Intern @ PhiPhi</strong> — crafted an <strong>e-commerce platform</strong>
								with <strong>MERN stack</strong>, boosted <strong>SEO</strong>, and optimized <strong>customer flow</strong>.
							</li>
							<li>
								<strong>CTO Intern @ Sync & Explore</strong> — helping shape a <strong>coaching platform</strong> (
								<Link
									href="https://www.syncandexplore.com/"
									target="_blank"
									className="text-violet-400 hover:underline"
								>
									Sync & Explore
								</Link>
								) with features like <strong>attendance</strong>, <strong>fee tracking</strong>, and <strong>student portals</strong>.
							</li>
							<li>
								<strong>Hackathons:</strong> Finalist at <strong>SIH 2024</strong>, qualified
								internals for <strong>SIH 2025</strong>, and{" "}
								<strong>2nd runner-up at HackDiwas 2.0, Runner-up at MIET Hackathon. Participated in 15+ Hackathons and been finalist in 6 of them.</strong>

							</li>
							<li>
								Built a <strong>low-data online learning platform</strong>
								(only <strong>40–50 MB/hr</strong> per class) using <strong>WebRTC</strong>, <strong>Sockets</strong>, and <strong>custom optimizations</strong>.
							</li>
							<li>
								<strong>Freelance Projects:</strong> Delivered <strong>production-ready websites</strong> like{" "}
								<Link
									href="https://gbm-frontend-plum.vercel.app/"
									target="_blank"
									className="text-violet-400 hover:underline"
								>
									Grassberry
								</Link>{" "}
								and{" "}
								<Link
									href="https://senior-project-rosy.vercel.app/"
									target="_blank"
									className="text-violet-400 hover:underline"
								>
									Senior Project
								</Link>
								.
							</li>
							<li>
								<strong>Real-Time Systems:</strong> Deep experience with <strong>WebRTC</strong>,
								<strong>Socket.IO</strong>, and <strong>system optimizations</strong> for reliable communication.
							</li>
							<li>
								<strong>Tech Skills:</strong> <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript/TypeScript</strong>,
								<strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>,
								<strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>Firebase</strong>,
								<strong>Framer Motion</strong>, and more.
							</li>
							<li>
								<strong>Leadership:</strong> <strong>Web Chairperson</strong> @ <strong>IEEE GGSIPU</strong> +
								organized <strong>hackathons</strong> & <strong>technical events</strong>.
							</li>
							<li>
								<strong>Currently:</strong> Diving into <strong>DSA</strong> + <strong>advanced backend systems</strong>
								to level up <strong>problem-solving</strong> & <strong>scalability skills</strong>.
							</li>
							<li>
								<strong>Fun Side:</strong> <strong>Rubik’s cube speedsolver</strong>, <strong>tech content creator</strong>,
								and love building apps with <strong>Framer Motion animations ✨</strong>
							</li>
						</ul>

						{/* Buttons */}
						<div className="mt-4 flex items-center gap-4">
							<Link
								href="/resume.pdf"
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base dark:bg-violet-700 hover:dark:bg-violet-800"
							>
								Resume
							</Link>
							<Link
								className="group flex w-fit cursor-pointer items-center gap-1 rounded-md bg-violet-700 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-800 md:text-base"
								href="#skills"
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
