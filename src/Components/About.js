import React from "react";
import about_logo from "../image/about_logo1.png";

const About = () => {
  return (
    <>
      <div className=" flex justify-center ">
        <h1 className="md:text-[4rem] text-[2rem] font-logo tracking-tighter  mb-[7rem] md:mt-[10rem] z-30  mt-[-9rem]">
          About
        </h1>
      </div>
      <div className="md:flex md:justify-center mb-[10rem] ">
        <img
          src={about_logo}
          alt="about_logo"
          className="md:h-[30rem]  invisible md:visible md:mr-[10rem]"
        />
        <div className="md:mt-[3.5rem] mt-[-28rem] mx-10  md:mx-10 md:w-[40rem] bg-gradient-to-r from-[#feb47b] via-[#feb47b]  to-[#ff7e5f] md:rotate-[3deg] rounded-3xl py-3 ">
          <p className="m-10 md:rotate-[357deg] font-bold text-[17px] font-logo">
            {" "}
            I'm a Web Developer and student at Romano-American University. I am
            a fast learner and have good problem-solving skills. I also
            appreciate acommunication skills such as clear communication both on
            paper and vocally, the ability to present reasoned debates to
            organise information and having a clear understanding of a client's
            requirements.
          </p>
          <p className="mx-10 md:mb-4 mb-3  md:rotate-[357deg] font-bold text-[17px] font-logo">
            Skills:
          </p>
          <p className="mx-10 md:rotate-[357deg] font-bold text-[17px] md:space-x-5 space-x-2">
            <b>
              <u>HTML</u>
            </b>{" "}
            <b>
              <u>CSS</u>
            </b>{" "}
            <b>
              <u>JavaScript</u>
            </b>{" "}
            <b>
              <u>React</u>
            </b>{" "}
            <b>
              <u>Angular</u>
            </b>{" "}
            <b>
              <u>TailwindCss</u>
            </b>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
