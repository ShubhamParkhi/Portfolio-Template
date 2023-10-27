import type { NextPage } from "next";

const SocialMediaContainer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[75px] px-[30px] gap-[60px] text-shade1">
      <div className="w-full flex flex-col items-start justify-start gap-[10px] max-w-[1100px] md:flex-col">
        <h1 className="m-0 font-medium text-21xl">
          Social Media
        </h1>
        <p className="m-0 text-xl">
          If you want to find me on social media, just search for
          @shubhamparkhi. That's my username on almost all platforms, so it
          should be easy to find me. But if you're short on time, I've included
          some links to the social media platforms I use most frequently below.
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap items-center gap-[40px] max-w-[1100px]">
        <a
          className="[text-decoration:none] w-10 h-10 bg-[url('/instagram@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="https://www.instagram.com/shxbhamparkhi/"
          target="_blank"
        />
        <a
          className="[text-decoration:none] w-[49px] h-10 bg-[url('/twitter@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="https://twitter.com/ShubhamParkhi11"
          target="_blank"
        />
        <a
          className="[text-decoration:none] w-[42px] h-10 bg-[url('/linkedin@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="https://www.linkedin.com/in/shubhamparkhi/"
          target="_blank"
        />
        <a
          className="[text-decoration:none] w-[45px] h-[30px] bg-[url('/email@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="mailto:shubhamparkhi10@gmail.com"
        />
      </div>
    </section>
  );
};

export default SocialMediaContainer;
