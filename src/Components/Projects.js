import React from "react";
import { Link } from "react-router-dom";
import jokescenter from "../image/jokescenter_project.png";
import button from "../image/button_project.png";
import todolist from "../image/todo_project.png";
import teslacopy from "../image/tesla_project.png";
import juice from "../image/juice_project.png";
import spotify from "../image/spotify_project.png";

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
      <div className="md:h-[50rem] h-[160rem] rotate-[357deg] md:mx-[-30px] mx-[-30rem] md:mt-[-7rem] mt-[-5rem] bg-gradient-to-r from-[#ff7e5f]  to-[#feb47b] z-10 "></div>
      <div className="h-[34rem] relative md:flex md:justify-around md:mt-[-42rem] mt-[-160rem] mx-24 space-y-10 md:space-y-0 md:space-x-4">
        <div className="text-black bg-white md:w-[17rem] w-[18rem] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out">
          <img alt="imagea" className="h-[11rem]" src={teslacopy} />
          <h1 className="font-logo md:text-[1.5rem] text-[1.2rem] mx-4  my-[1rem]">
            Tesla Clone
          </h1>
          <p className=" mx-4 mb-[3rem] text-[0.83rem] md:text-[1rem]">
            This project is a copy of the first page on the tesla website in the
            US. I used{" "}
            <u>
              <b>React</b>
            </u>{" "}
            and{" "}
            <u>
              <b>TailwindCss</b>
            </u>{" "}
            for the design. I created this project because I thought it was
            interesting to be able to copy such a well-known website with a
            unique design.
          </p>
          <div className="flex justify-center mx-4">
            <Link
              className="mr-3 font-logo text-white bg-slate-900 hover:bg-slate-700 p-2 px-4 rounded-3xl md:text-[17px] text-[15px] "
              to="/copytesla"
            >
              Live Demo {">"}
            </Link>
            <a
              className=" font-logo text-white  bg-slate-900 p-2 rounded-3xl md:text-[17px] text-[15px] px-4 md:px-2 hover:bg-slate-700"
              href="https://github.com/EnacheAdrian12/TeslaCopy"
            >
              GitHub {">"}
            </a>
          </div>
        </div>
        {/* Tesla */}
        <div className="text-black bg-white md:w-[17rem] w-[18rem] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out">
          <img alt="imagea" className="h-[11rem]" src={todolist} />
          <h1 className="font-logo md:text-[1.5rem] text-[1.2rem] mx-4  my-[1rem]">
            Todo App
          </h1>
          <p className=" mx-4 mb-[4.5rem] text-[0.83rem] md:text-[1rem]">
            In this project, I built a Todo List. I wanted to recap{" "}
            <u>
              <b>CRUD principles</b>
            </u>{" "}
            ,
            <u>
              <b>Redux</b>
            </u>{" "}
            and found the perfect project. Elements can be added and deleted in
            it.The design was made with{" "}
            <u>
              {" "}
              <b>TailwindCss</b>
            </u>.
          </p>
          <div className="flex justify-center mx-4">
            <Link
              className="mr-3 font-logo text-white bg-slate-900  p-2 px-4 rounded-3xl md:text-[17px] text-[15px] hover:bg-slate-700"
              to="/todolist"
            >
              Live Demo {">"}
            </Link>
            <a
              className=" font-logo text-white  bg-slate-900 p-2 rounded-3xl md:text-[17px] text-[15px] px-4 md:px-2 hover:bg-slate-700"
              href="https://github.com/EnacheAdrian12/ToDoList"
            >
              GitHub {">"}
            </a>
          </div>
        </div>
        {/* TodoList */}
        <div className="text-black bg-white md:w-[17rem] w-[18rem] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out ">
          <img alt="imagea" className="h-[11rem]" src={juice} />
          <h1 className="font-logo text-[1.5rem] mx-4 my-[1rem]">
            Juice Factory
          </h1>
          <p className="mx-4 mb-[6rem] text-[0.83rem] md:text-[1rem]">
            I built this project to show some of my design skills. The website
            tells the story of a family that opened a chain of restaurants. The
            project was made while I was still learning{" "}
            <u>
              <b>CSS principles</b>
            </u>{" "}
            .
          </p>
          <div className="flex justify-center mx-4">
            <Link
              className="mr-3 font-logo text-white bg-slate-900 p-2 px-4 rounded-3xl md:text-[17px] text-[15px] hover:bg-slate-700"
              to="/fruitfactory"
            >
              Live Demo {">"}
            </Link>
            <button className=" font-logo text-white  bg-slate-900  p-2 rounded-3xl md:text-[17px] text-[15px] px-4 md:px-2 hover:bg-slate-700">
              GitHub {">"}
            </button>
          </div>
        </div>
        {/* Juice */}
        <div className="text-black bg-white md:w-[17rem] w-[18rem] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out">
          <img alt="imagea" src={jokescenter} className="h-[11rem]" />
          <h1 className="font-logo md:text-[1.5rem] text-[1.2rem] mx-4  my-[1rem]">
            Jokes Center
          </h1>
          <p className=" mx-4 mb-[6rem] text-[0.83rem] md:text-[1rem]">
            In this project, I used a REST API ({" "}
            <u>
              <b>Jokes API</b>
            </u>{" "}
            ) that generates an infinity of jokes (not that funny) and displays
            them on the website. I used{" "}
            <u>
              <b>React Hooks</b>
            </u>{" "}
            and
            <u>
              {" "}
              <b>TailwindCss</b>
            </u>{" "}
            for the design.
          </p>
          <div className="flex justify-center mx-4">
            <Link
              className="mr-3 font-logo text-white bg-slate-900  p-2 px-4 rounded-3xl md:text-[17px] text-[15px] hover:bg-slate-700"
              to="/jokescenter"
            >
              Live Demo {">"}
            </Link>
            <a
              className=" font-logo text-white  bg-slate-900  p-2 rounded-3xl md:text-[17px] text-[15px] px-4 md:px-2 hover:bg-slate-700"
              href="https://github.com/EnacheAdrian12/JokesCenter"
            >
              GitHub {">"}
            </a>
          </div>
        </div>
        {/* jokes*/}
        <div className="text-black bg-white md:w-[17rem] w-[18rem] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out">
          <img alt="imagea" src={button} className="h-[11rem] " />
          <h1 className="font-logo md:text-[1.5rem] text-[1.2rem] mx-4  my-[1rem]">
            Hack 2003
          </h1>
          <p className=" mx-4 mb-[1.5rem] text-[0.83rem] md:text-[1rem]">
            This project wants to bring a hack from 2003, which caused a lot of
            errors and controversies. Because once it was called, it deleted
            everything from the computer it was on. This was a .exe file, but I
            managed to bring it back in web format. I wanted to test my
            knowledge of animations.
          </p>
          <div className="flex justify-center mx-4">
            <Link
              className="mr-3 font-logo text-white bg-slate-900 p-2 px-4 rounded-3xl md:text-[17px] text-[15px] hover:bg-slate-700"
              to="/hack"
            >
              Live Demo {">"}
            </Link>
            <a
              className="  font-logo text-white  bg-slate-900  p-2 rounded-3xl md:text-[17px] text-[15px] px-4 md:px-2 hover:bg-slate-700"
              href="https://github.com/EnacheAdrian12/ExHack"
            >
              GitHub {">"}
            </a>
          </div>
        </div>
        {/* Button */}
        <div className="text-black bg-white md:w-[17rem] rounded-xl overflow-hidden invisible md:visible ">
          <img alt="imagea" className="h-[11rem] blur" src={spotify} />
          <h1 className="font-logo text-[1.5rem] mx-4 mt-[1rem]">
            Spotify Clone
          </h1>
          <h1 className="mb-[1rem]  mx-4 text-red-700 font-bold">
            Coming Soon...
          </h1>
          <div className="blur-sm">
            <p className=" mx-4 mb-[1.5rem] text-[0.83rem] md:text-[1rem] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and asdas asfg asgfa asga asdfga.
            </p>
          </div>
          <div className="flex justify-center mx-4 blur">
            <button className="mr-3 font-logo text-white bg-slate-900  p-2 rounded-3xl text-[17px] ">
              Live Demo {">"}
            </button>
            <button className=" font-logo text-white  bg-slate-900 p-2 rounded-3xl text-[17px]">
              GitHub {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
