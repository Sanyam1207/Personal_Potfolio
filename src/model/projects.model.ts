import mongoose from "mongoose";

export interface Project {
	title: string;
	logo: string;
	description: string;

	websiteLink: string;
	githubLink: string;
}

const ProjectSchema = new mongoose.Schema<Project>({
	title: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const ProjectModel =
	(mongoose.models?.Project as mongoose.Model<Project>) ||
	mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;
