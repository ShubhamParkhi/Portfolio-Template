import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Link from "next/link";

type NavBarType = {
  /** Style props */
  projectsColor?: CSSProperties["color"];
  contactColor?: CSSProperties["color"];
};

const NavBar: NextPage<NavBarType> = ({
  projectsColor,
  contactColor,
}) => {
  const pROJECTSStyle: CSSProperties = useMemo(() => {
    return {
      color: projectsColor,
    };
  }, [projectsColor]);

  const cONTACTStyle: CSSProperties = useMemo(() => {
    return {
      color: contactColor,
    };
  }, [contactColor]);

  return (
    <header className="self-stretch bg-darkorchid-200 [backdrop-filter:blur(8px)] box-border flex flex-row items-center justify-center py-[22px] px-20 sticky w-full top-[0] z-[5] border-b-[2px] border-solid border-darkslateblue lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row justify-between text-left text-xl text-shade1 font-poppins max-w-[1250px]">
      <div>
        <Link href="/" className="[text-decoration:none] flex-1 text-[inherit]">
          <span>{`Parkhi `}</span>
          <span className="text-darkorchid-100">Productions</span>
        </Link>
      </div>

        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-row gap-[30px] lg:hidden">
            <Link
              className="[text-decoration:none] text-[inherit]"
              href="/projects"
              style={pROJECTSStyle}
            >
              PROJECTS
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] text-[inherit] text-right"
              href="/contact"
              style={cONTACTStyle}
            >
              CONTACT
            </Link>
          </div>
          <button className="[border:none] bg-[transparent] hidden flex-row items-center lg:flex">
            <img
              className="w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
