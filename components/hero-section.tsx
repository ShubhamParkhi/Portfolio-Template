import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center py-[75px] px-[30px] gap-[60px] text-left text-shade1 sm:py-[50px] sm:gap-[50px]">
      <main className="w-full flex flex-row items-center gap-[24px] max-w-[1100px] text-left text-xl text-shade1">
        <Image
          className="flex-1 max-w-[165px] overflow-hidden sm:hidden"
          alt="Avatar"
          loading="lazy"
          src="/image-1@1x.png"
          width={165}
          height={223}
          draggable="false"
        />
        <div className="flex-1 flex flex-col items-start justify-center py-[30px] px-0 gap-[16px]">
          <Image
            className="w-full relative max-w-[315px] overflow-hidden h-[55px] shrink-0"
            alt=""
            src="/vector.svg"
            width={315}
            height={55}
            draggable="false"
          />
          <span>A Designer who</span>
          <h1 className="m-0 text-29xl leading-[110%] font-medium">
            <span>{`Judges a book by its `}</span>
            <span className="text-darkorchid-100">cover</span>
            <span>...</span>
          </h1>
          <span className="text-lg">
            Because if the cover does not impress you what else can?
          </span>
        </div>
      </main>
      <div className="w-full flex flex-col justify-start gap-[30px] max-w-[1100px] md:gap-[20px] sm:gap-[20px]">
        <h1 className="m-0 text-21xl font-medium sm:leading-[50px]">      
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a Software Engineer.")
            .pauseFor(2000)
            .deleteChars(18)
            .typeString("Full-Stack Developer.")
            .pauseFor(2000)
            .deleteChars(21)
            .typeString("UI-UX Designer.")
            .pauseFor(2000)
            .deleteChars(15)
            .typeString("Graphics Designer.")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
        <p className="m-0 text-xl">
          A self-taught front-end developer, who loves intuitive clean and
          modern UI design. I make meaningful and delightful digital products
          that create an equilibrium between user needs and business goals.
        </p>
      </div>
      <span className="text-xl">
        current favourite tech stack/tools:
      </span>
      <div className="w-full flex flex-row flex-wrap items-center justify-between max-w-[600px] sm:gap-[30px]">
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector1.svg"
            width={30}
            height={18.7}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector2.svg"
            width={30}
            height={30}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector3@2x.png"
            width={30}
            height={30}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector4.svg"
            width={30}
            height={18}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector5.svg"
            width={19.3}
            height={30}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector6@2x.png"
            width={30}
            height={30}
            draggable="false"
          />
        </div>
        <div className="rounded-2xl bg-custom-level-2-background-cards shadow-[0px_0px_100px_rgba(155,_92,_255,_0.5)] w-[60px] h-[60px] flex flex-row items-center justify-center box-border">
          <Image
            alt=""
            src="/vector7.svg"
            width={30}
            height={30}
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
