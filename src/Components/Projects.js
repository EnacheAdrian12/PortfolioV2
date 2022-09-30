import React from "react";
import jokescenter from "../image/jokescenter_project.png";
import button from "../image/button_project.png";
import todolist from "../image/todo_project.png"
import teslacopy from "../image/tesla_project.png"
import juice from "../image/juice_project.png"
import spotify from "../image/spotify_project.png"

const Projects = () => {
  return (
    <>
      <div className="md:h-[1rem] h-[1px] flex justify-center md:mt-[15rem] mt-[7rem] mb-[16rem]">
        <h1
          className="md:text-[4rem] text-[2rem] font-logo tracking-tighter mt-[5rem] md:mt-[5rem] z-20"
          id="projects"
        >
          Projects
        </h1>
      </div>
      <div className="md:h-[50rem] h-[30rem] rotate-[357deg] mx-[-30px] md:mt-[-7rem] mt-[-5rem] bg-gradient-to-r from-[#ff7e5f]  to-[#feb47b] z-10 "></div>
      <div className="h-[34rem] relative flex justify-around mt-[-42rem] mx-10 sm:space-x-5">
        <div className="text-black bg-white w-[17rem] rounded-xl overflow-hidden">
          <img alt="imagea" className="h-[11rem]" src={teslacopy} />
          <h1 className="font-logo text-[1.5rem] mx-4 my-[1rem]">Tesla Clone</h1>
          <p className=" mx-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer 
          </p>
        </div>
        {/* Tesla */}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden">
          <img alt="imagea" className="h-[11rem]" src={todolist} />
          <h1>Da si asta e bin</h1>
        </div>
        {/* TodoList */}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden">
          <img alt="imagea" className="h-[11rem]" src={juice} />
          <h1>Da si asta e bin</h1>
        </div>
        {/* Juice */}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden">
          <img alt="imagea" src={jokescenter} className="h-[11rem]" />
          <h1>Da si asta e bin</h1>
        </div>{" "}
        {/* jokes*/}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden">
          <img alt="imagea" src={button} className="h-[11rem] " />
          <h1>Da si asta e bin</h1>
        </div>{" "}
        {/* Button */}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden ">
          <img alt="imagea" className="h-[11rem] blur" src={spotify} />
          <h1>Spotify Clone</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
