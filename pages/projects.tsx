import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import HeadingContainer from "../components/heading";
import ProjectContainer from "../components/project-container";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
  const client = createClient(
    process.env.NEXT_PUBLIC_URL as string,
    process.env.NEXT_PUBLIC_KEY as string
  );
  const [projects, setProjects] = useState<
    | {
        id: number;
        projectName: string;
        taskDescription1: string;
        taskDescription2: string;
        taskDescription3: string;
        githubLink: string;
        deployedLink: string;
        previewImageLink: string;
      }[]
    | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const result = await client.from("projects").select("*");
      setProjects(result.data);
      result.data!.sort((a, b) => b.id - a.id);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);
  
  return (
    <div className="[text-decoration:none] bg-gray-100 min-h-screen w-full flex flex-col items-start justify-start font-poppins">
      <NavBar projectsColor="#7127ba" contactColor="#fff" />
      <HeadingContainer
        sectionTitle="Projects"
        developmentWorkDescription="Showcase of my development related work."
      />
      {isLoading ? (
        <div className="self-stretch flex flex-1 flex-row items-center justify-center py-[25px] px-2 text-center text-xl text-shade-2 h-[1000px]">Loading...</div>
      ) : projects === null ? (
        <div className="self-stretch flex flex-1 flex-row items-center justify-center py-[25px] px-2 text-center text-xl text-shade-2 h-[1000px]">Error loading projects</div>
      ) : (
        projects.map((project) => (
          <ProjectContainer
            key={project.id}
            projectName={project.projectName}
            taskDescription1={project.taskDescription1}
            taskDescription2={project.taskDescription2}
            taskDescription3={project.taskDescription3}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
            previewImage={project.previewImageLink}
          />
        ))
      )}
      <Footer />
    </div>
  );
};

export default Projects;
