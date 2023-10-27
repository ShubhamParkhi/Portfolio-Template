import type { NextPage } from "next";
import Parallax from 'react-parallax-tilt'

const DesignPrinciples: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center py-[75px] px-[30px] text-left text-shade1">
      <div className="w-full flex flex-col items-start gap-[52px] max-w-[1100px]">
        <h1 className="m-0 text-21xl font-medium sm:leading-[60px]">Eye Catching, Modern & Minimalist Design.</h1>
        <div className="w-full flex flex-row items-center gap-[50px] max-w-[1100px] text-5xl text-lightsteelblue sm:flex-col sm:gap-[50px] sm:items-center">
          <div className="flex-1 flex flex-col items-start gap-[50px]">
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">Typography</div>
              <div className="text-xl">
                Selecting the font type, font size and font weight.
              </div>
            </Parallax>
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">Spacing</div>
              <div className="text-xl">
                Positioning and adding space between elements.
              </div>
            </Parallax>
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">Colours</div>
              <div className="text-xl">
                Choosing a colour scheme with sufficient contrast.
              </div>
            </Parallax>
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">Effects</div>
              <div className="text-xl">
                Add effects like shadows, rounded corner, blur etc.
              </div>
            </Parallax>
          </div>
          <div className="flex-1 flex flex-col items-center gap-[50px]">
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">Keen Eye for Spotting Small Details</div>
              <div className="text-xl">Awareness to ease of access, User Interface consistency, and improved User Experience.</div>
            </Parallax>
            <Parallax  style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#5de2ff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope={true} transitionSpeed={1000} className="rounded-mini bg-darkorchid-300 flex flex-col items-start py-[25px] px-[30px] gap-[10px] border-[2px] border-solid border-darkorchid-100">
              <div className="font-medium">
                Comprehensible and Optimized Code
              </div>
              <div className="text-xl">
                Writing clean code is a top priority while keeping it as
                optimized as possible.
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciples;
