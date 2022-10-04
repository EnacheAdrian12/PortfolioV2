import React from "react";
import logo_title from "../image/title_logo2.png";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Title = () => {
  return (
    <>
      <div className="md:h-[35rem] h-[12rem]  origin-top-left md:rotate-[357deg] bg-gradient-to-r from-[#FFA17F]  to-[#00223E] ml-[-50px]"></div>
      <div className="absolute md:top-5 md:left-5 md:visible top-0">
        <div className="space-y-5 flex flex-col ">
          <a
            href="https://www.linkedin.com/in/adrian-enache-4b6639232/"
            target="_blank"
            rel="noreferrer"
            className="md:text-[3rem] text-blue-700 hover:text-blue-500 cursor-pointer text-[1.5rem]"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/EnacheAdrian12"
            target="_blank"
            rel="noreferrer"
            className="md:text-[3rem] text-slate-800 hover:text-slate-600 cursor-pointer text-[1.5rem] "
          >
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="absolute md:left-[25rem] md:top-[12rem] left-[3rem] top-[2rem]">
        <h1 className="text-black font-bold md:text-[4rem] text-[2rem] font-logo">
          Hello.✨
        </h1>
        <h1 className="text-black font-bold md:text-[4rem] text-[2rem] md:mt-[-2rem] font-logo">
          I am Adrian
        </h1>
        <TypeAnimation
          sequence={["Web Developer", 3000, "Front-End Developer", 3000]}
          wrapper="div"
          repeat={Infinity}
          cursor={true}
          className={"text-slate-800 md:text-[2rem] text-[1rem]  font-logo"}
        />
      </div>
      <div className="absolute md:left-[70rem] lg:left-[70%] md:top-[10rem] right-[2rem] top-[2rem]">
        <img src={logo_title} alt="logo" className="md:h-[17rem] h-[7rem]" />
      </div>
    </>
  );
};

export default Title;
