import React from "react";
import styles from "./page.module.css";
import connectDB from "../../database/db";
import ProjectModel from "../../database/projectSchema";
import ProjectPreview from "../../components/ProjectPreview";

// Define a TypeScript interface for project data
interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

// To fetch projects from MongoDB
async function getProjects() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().sort({ name: 1 }).lean(); // Fetch and sort projects alphabetically
    return JSON.parse(JSON.stringify(projects)); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null; // Return null if an error occurs
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects(); // Fetch projects dynamically

  if (!projects || projects.length === 0) {
    return (
      <main className={styles.portfolioMain}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <p>No projects available. Please check back later.</p>
      </main>
    );
  }

  // Render the projects using ProjectPreview
  return (
    <main className={styles.portfolioMain}>
      <h1 className={styles.pageTitle}>Portfolio</h1>
      <div className={styles.projectContainer}>
        {projects.map((project: Project) => (
          <ProjectPreview
            key={project._id}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  );
}
