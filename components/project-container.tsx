import type { NextPage } from "next";
import Image from "next/image";
import Parallax from 'react-parallax-tilt'

type StatwigContainerType = {
  projectName?: string;
  taskDescription1?: string;
  taskDescription2?: string;
  taskDescription3?: string;
  githubLink: string;
  deployedLink: string;
  previewImage?: string;
};

const StatwigContainer: NextPage<StatwigContainerType> = ({
  projectName,
  taskDescription1,
  taskDescription2,
  taskDescription3,
  githubLink,
  deployedLink,
  previewImage,
}) => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-[50px] px-[30px] text-left text-xl text-mediumorchid">
      <div className="w-full flex flex-row flex-wrap items-center justify-center max-w-[1100px] lg:gap-[-35px] lg:items-end md:flex-col sm:gap-[40px] md:gap-[40px] md:items-end">
        <div className="flex-1 flex flex-col items-start justify-center gap-[34px] z-[1]">
          <div className="flex flex-col items-start justify-start z-[2]">
            <div>Featured Project</div>
            <h2 className="m-0 text-17xl font-medium text-lightsteelblue">
              {projectName}
            </h2>
          </div>
          <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-sm bg-glass-morphism [backdrop-filter:blur(3px)] flex flex-row items-start justify-start py-[26px] px-[34px] z-[1] text-inherit text-lightsteelblue border-[2px] border-transparent">
            <div className="flex-1">
              <ul className="m-0 pl-[27px]">
                <li className="mb-2.5">{taskDescription1}</li>
                <li className="mb-2.5">{taskDescription2}</li>
                <li className="mb-2.5">{taskDescription3}</li>
              </ul>
            </div>
          </Parallax>
          <div className="flex flex-row flex-wrap items-center justify-start px-7 box-border gap-[30px] z-[0]">
            <a
              className="[text-decoration:none] w-[30px] h-[30px] bg-[url('/vector9@3x.png')] bg-cover bg-no-repeat bg-[top]"
              href={githubLink}
              target="_blank"
            />
            <a
              className="[text-decoration:none] w-[30px] h-[30px] bg-[url('/icon@3x.png')] bg-cover bg-no-repeat bg-[top]"
              href={deployedLink}
              target="_blank"
            />
          </div>
        </div>
        {previewImage && (<Image
          className="flex-1 rounded-3xs max-w-full overflow-hidden border-box object-cover z-[0] ml-[-40px]"
          alt=""
          src={previewImage}
          draggable="false"
        />
        )}
      </div>
    </section>
  );
};

export default StatwigContainer;
