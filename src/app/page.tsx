import Skills from "@/components/skill/Skills";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import dbConnect from "@/db";
import SkillModel, { Skill } from "@/model/skill.model";
import ProjectModel, { Project } from "@/model/projects.model";
import Contact from "@/components/Contact";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";

export default async function Home() {
	await dbConnect();

	const skillData = await SkillModel.find({}).lean(true);
	const skills: Skill[] = skillData.map((skill) => ({
		name: skill.name,
		logo: skill.logo,
		category: skill.category,
		invert: skill.invert,
	}));

	const categories = Array.from(
		new Set([
			"Frontend",
			"Backend",
			"Others",
			...skills.map((skill) => skill.category),
		]),
	);

	const projectData = await ProjectModel.find({}).lean(true);
	const projects: Project[] = projectData.map((project) => ({
		title: project.title,
		description: project.description,
		techStack: project.techStack,
		logo: project.logo,
		websiteLink: project.websiteLink,
		githubLink: project.githubLink,
	}));

	const socialMedia = [
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/sabhya-agarwal-383408207/",
			logo: <LiaLinkedinIn className="size-5" />,
		},
		{
			name: "GitHub",
			link: "https://github.com/Sabhya404",
			logo: <BsGithub className="size-5" />,
		},
		{
			name: "Twitter",
			link: "https://x.com/SabhyaAgarwal",
			logo: <BsTwitter className="size-5" />,
		},
	];

	return (
		<>
			<Hero socialMedia={socialMedia} />
			<About />
			<Skills categories={categories} skills={skills} />
			<Projects projects={projects} />
			<Contact socialMedia={socialMedia} />
		</>
	);
}
