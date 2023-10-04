import React from "react";
import projects from "../../Assets/Projects";
import "../Projects/Projects.css";

export const Projects = () => {
  return (
    <div className="w-full h-[1250px]">
      <div className="w-11/12 mx-auto flex justify-center">
        <div className="w-[80%] flex justify-center flex-col items-center">
          <h1 className="my-10 text-[80px] font-bold tracking-wider animate-charcter slide-in-elliptic-top-fwd">
            PROJECTS
          </h1>
          {projects.map((project, index) => (
            <div className="my-4 text-[25px] text-white slide-in-elliptic-top-fwd">
              <p className="mb-2">
                <span className="text-[#F69334]">
                  {project.No}. {project.title}:-
                </span>{" "}
                <span className="text-[20px]">{project.desc}</span>
              </p>
              <p>
                Link:-{" "}
                <a
                  className=" hover:underline-offset-8 hover:underline text-[22px]"
                  href={project.link}
                >
                  <span className="text-[#f3867f]">{project.link}</span>
                </a>
              </p>
            </div>
          ))}
          <h1 className="my-10 text-[40px] font-bold tracking-wider animate-charcter slide-in-elliptic-top-fwd">
            AND MORE....
          </h1>
        </div>
      </div>
    </div>
  );
};
