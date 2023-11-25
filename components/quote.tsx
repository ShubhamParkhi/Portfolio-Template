import type { NextPage } from "next";
import Image from "next/image";

const Quote: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[75px] px-[30px] sm:py-0 sm:box-border">
      <Image
        className="flex-1 max-w-[550px] overflow-hidden h-[133px]"
        alt="Quote"
        loading="lazy"
        src="/vector8.svg"
        width={550} 
        height={133}
        draggable="false"
      />
    </section>
  );
};

export default Quote;
