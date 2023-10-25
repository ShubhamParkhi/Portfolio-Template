import type { NextPage } from "next";

const Quote: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[75px] px-[30px] sm:py-0 sm:box-border">
      <img
        className="flex-1 relative max-w-[550px] overflow-hidden h-[133px]"
        alt="Quote"
        loading="lazy"
        src="/vector8.svg"
      />
    </section>
  );
};

export default Quote;
