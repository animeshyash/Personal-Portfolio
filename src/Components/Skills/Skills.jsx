import React from "react";
import css from "../../Assets/Tech-Stack/CSS.png";
import express from "../../Assets/Tech-Stack/Express.png";
import git from "../../Assets/Tech-Stack/Git.svg";
import github from "../../Assets/Tech-Stack/Github.svg";
import html from "../../Assets/Tech-Stack/HTML.png";
import javascript from "../../Assets/Tech-Stack/Javascript.svg";
import mongo from "../../Assets/Tech-Stack/MongoDB.svg";
import node from "../../Assets/Tech-Stack/NodeJs.svg";
import react from "../../Assets/Tech-Stack/React.png";
import redux from "../../Assets/Tech-Stack/Redux.svg";
import tailwind from "../../Assets/Tech-Stack/Tailwind.png";
import java from "../../Assets/Tech-Stack//icons8-java-150 (1).png";
import "../Skills/Skills.css";

export const Skills = () => {
  return (
    <div className="bg-richblue-300 h-[75rem] flex flex-col justify-center items-center">
      <p className="md:text-[5rem] text-[3rem] text-center font-bold tracking-wider animate-charcter mb-10">
        TECHNICAL SKILLS
      </p>
      <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap md:gap-10 gap-6">
        <img
          src={html}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={css}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={express}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={git}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={github}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={javascript}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={mongo}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={node}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={react}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={redux}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={tailwind}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
        <img
          src={java}
          width={220}
          className="m-5 heartbeat md:w-[220px] w-[90px]"
          alt="Technical Skill"
        />
      </div>
    </div>
  );
};
