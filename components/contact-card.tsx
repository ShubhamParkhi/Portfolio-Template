import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Parallax from 'react-parallax-tilt'

const ContactCard: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-[75px] px-[30px] text-center text-21xl text-shade1 ">
      <Parallax className="w-full rounded-3xl bg-darkslategray box-border overflow-hidden flex flex-row items-start justify-center max-w-[1100px] border-[1px] border-solid border-shade-3" style={{ transformStyle: 'preserve-3d' }}  glareEnable={true} glareColor="#9b5cff" glareMaxOpacity={0.08} glarePosition="all" tiltMaxAngleX={3} tiltMaxAngleY={3} gyroscope={true} transitionSpeed={1000}>
        <div className=" flex flex-col items-start justify-start">
          <Image
            alt=""
            src="/ellipse-left@2x.png"
            width={258}
            height={245}
          />
        </div>
        <div className=" flex-1 flex flex-col items-center justify-center py-20 px-0 z-[2] ml-[-235px]">
          <div className="w-full flex flex-col items-center justify-center gap-[48px] max-w-[800px]">
            <div className=" flex flex-col items-center justify-center gap-[20px]">
              <h1 className="m-0  text-inherit font-medium">
                Let's Talk!
              </h1>
              <div className=" text-xl text-shade-2 text-left">
                Interested in working together or have a question? Feel free to
                reach out. I'm here to help you turn your ideas into amazing
                digital realities. Looking forward to hearing from you soon!
              </div>
            </div>
            <Link
              href="/contact"
              className="[text-decoration:none] flex-1 cursor-pointer text-[inherit]"
            >
            <button className="cursor-pointer py-2.5 px-5 bg-blueviolet rounded-lg flex flex-row items-center justify-start border-[1px] border-solid border-shade-3 font-poppins">
              <div className=" text-xl leading-[150%] text-shade1 text-left inline-block w-[117px] shrink-0">
                Contact Me
              </div>
            </button>
            </Link>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-end ml-[-235px]">
          <Image
            alt=""
            src="/ellipse-right@2x.png"
            width={253}
            height={241}
          />
      </div>
      </Parallax>
    </section>
  );
};

export default ContactCard;
