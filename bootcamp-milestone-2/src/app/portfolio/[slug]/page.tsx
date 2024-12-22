import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import Comment from "@/components/Comment";

async function getSingleProject(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Projects/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch project with slug: ${slug}`);
    }

    return res.json(); // Return the project data as JSON
  } catch (err) {
    console.error(`Error fetching project: ${err}`);
    return null; // Return null if fetching fails
  }
}

// Dynamic blog page
export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = await getSingleProject(params.slug); // Fetch the project using slug

  if (!project) {
    notFound(); // Trigger 404 
  }

  return (
    <ProjectDetail
      name={project.name}
      slug={params.slug} // same with blog, need to pass slugs
      description={project.description}
      image={project.image}
      link={project.link}
      comments={project.comments || []}
    />
  );
}
