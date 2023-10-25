import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row items-center py-[25px] px-2 text-center text-xl text-shade-2 border-t-[2px] border-solid border-gray-300">
      <div className="flex-1">© 2023 Shubham Parkhi</div>
    </footer>
  );
};

export default Footer;
