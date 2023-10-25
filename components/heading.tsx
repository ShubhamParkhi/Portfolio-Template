import type { NextPage } from "next";

type ProjectContainerType = {
  sectionTitle?: string;
  developmentWorkDescription?: string;
};

const ProjectContainer: NextPage<ProjectContainerType> = ({
  sectionTitle,
  developmentWorkDescription,
}) => {
  return (
    <section className="self-stretch flex flex-col items-center pt-[75px] px-[30px] text-left text-29xl text-shade1">
      <div className="w-full flex flex-col items-start gap-[10px] max-w-[1100px] md:gap-[20px] md:items-start md:justify-start md:mx-[auto]">
        <h1 className="m-0 text-inherit tracking-[0.02em] font-medium">
          {sectionTitle}
        </h1>
        <div className="text-xl">
          {developmentWorkDescription}
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
