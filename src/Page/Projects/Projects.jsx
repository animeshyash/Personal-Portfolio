import React from "react";
import projects from "../../Assets/Projects";
import "../Projects/Projects.css";

export const Projects = () => {
  return (
    <div className="w-full lg:h-[78.125rem]">
      <div className="w-11/12 mx-auto flex justify-center">
        <div className="w-[90%] md:w-[80%] flex justify-center flex-col items-center">
          <h1 className="md:my-10 my-6 text-[3rem] md:text-[5rem] font-bold tracking-wider animate-charcter slide-in-elliptic-top-fwd">
            PROJECTS
          </h1>
          {projects.map((project, index) => (
            <div className="my-4 md:text-[1.563rem] text-[1.0rem] text-white slide-in-elliptic-top-fwd md:w-full w-[98%]">
              <p className="mb-2">
                <span className="text-[#F69334]">
                  {project.No}. {project.title}:-
                </span>{" "}
                <span className="md:text-[1.25rem] text-[1.0rem]">
                  {project.desc}
                </span>
              </p>
              <p>
                Link:-{" "}
                <a
                  className=" hover:underline-offset-8 hover:underline md:text-[1.375rem] text-[0.84rem]"
                  href={project.link}
                >
                  <span className="text-[#f3867f]">{project.link}</span>
                </a>
              </p>
            </div>
          ))}
          <h1 className="my-10 text-[1.75rem] md:text-[2.5rem] font-bold tracking-wider animate-charcter slide-in-elliptic-top-fwd">
            AND MORE....
          </h1>
        </div>
      </div>
    </div>
  );
};
