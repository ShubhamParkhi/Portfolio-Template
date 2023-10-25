import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import HeadingContainer from "../components/heading";
import ProjectContainer from "../components/project-container";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL as string, process.env.NEXT_PUBLIC_KEY as string);
  const [projects, setProjects] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const result = await client.from("projects").select('*');
      setProjects(result.data);
      result.data.sort((a, b) => a.id - b.id);
    }
    fetchProjects();
  }, []);

  return (
    <div className="[text-decoration:none] bg-gray-100 w-full flex flex-col items-start justify-start font-poppins">
      <NavBar
        projectsColor="#7127ba"
        contactColor="#fff"
      />
      <HeadingContainer
        sectionTitle="Projects"
        developmentWorkDescription="Showcase of my development related work."
      />
      <div>

      </div>
      {projects.map((project) => (
        <ProjectContainer
          key={project.id}
          projectName={project.projectName}
          taskDescription1={project.taskDescription1}
          taskDescription2={project.taskDescription2}
          taskDescription3={project.taskDescription3}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
          previewImage={project.previewImageLink}
        />))}
      <Footer />
    </div>
  );
};

export default Projects;
