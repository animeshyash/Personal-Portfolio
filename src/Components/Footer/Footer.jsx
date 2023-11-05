import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="flex bg-richblue-600 text-richblack-5 gap-5">
      <div className="flex h-[14.375rem] justify-around items-center md:w-11/12 w-5/6 mx-auto">
        <div className="">
          <p className="md:text-[4.375rem] text-[2.375rem] font-bold tracking-widest">
            Come say hello!
          </p>
        </div>
        <div className="flex items-center md:text-[3.75rem] text-[2.75rem] md:gap-5 gap-3">
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
