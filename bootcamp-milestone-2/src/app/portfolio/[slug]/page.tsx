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
export default async function ProjectPage(
    props: {
      params: Promise<{ slug: string }>;
    }
  ) {
    const params = await props.params;
    const project = await getSingleProject(params.slug); // Fetch the project using slug

  if (!project) {
    notFound(); // Trigger 404 if project is not found
  }

  return (
    <div style={{ padding: "20px" }}>
      <ProjectDetail
        name={project.name}
        slug={project.slug}
        description={project.description}
        image={project.image}
        link={project.link}
      />
      {/* Comments Section */}
      {project.comments && project.comments.length > 0 ? (
        <div style={{ marginTop: "30px" }}>
          <h3>Comments</h3>
          {project.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "30px", fontStyle: "italic" }}>
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
}
