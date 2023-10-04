import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="flex bg-richblue-600 text-richblack-5 gap-5">
      <div className="flex h-[230px] justify-around items-center w-11/12 mx-auto">
        <div className="">
          <p className="text-[70px] font-bold tracking-widest">
            Come say hello!
          </p>
        </div>
        <div className="flex items-center text-[60px] gap-5">
          <a
            href="https://github.com/animeshyash"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-all duration-300 ease-in"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/animesh-yash-5b1125217"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-all duration-300 ease-in"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/animeshyash1912/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-all duration-300 ease-in"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};
