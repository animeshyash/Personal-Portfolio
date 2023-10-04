import React from "react";
import "../Homepage/Homepage.css";
import { Skills } from "../../Components/Skills/Skills";

export const Homepage = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="w-11/12 mx-auto flex flex-col items-center">
          <div className="w-[80%]">
            <p className="text-[70px] text-[#FF857C] font-bold tracking-wider my-[40px] animate-charcter focus-in-contract-bck">
              I’m Animesh Yash, a developer who loves to innovate.
            </p>
            <div className="">
              <button className="border-2 bounce-in-top rounded-sm border-[#F2962F] mt-4 text-[22px] font-normal py-2 tracking-wider px-2 w-[19%] h-[55px] hover:bg-[#b3752f] hover:border-[#b3752f] bg-[#F2962F]">
                <a
                  href={require("../../Assets/Animesh_yash_Resume.pdf")}
                  download="Animesh_yash_Resume"
                >
                  Resume
                </a>
              </button>
              <button
                onClick={() => window.open("mailto:animeshyash1912@gmail.com")}
                className="bounce-in-top border-2 rounded-sm border-[#F2962F] text-[22px] font-normal tracking-wider py-2 px-2 w-[19%] ml-5 h-[55px] hover:bg-[#b3752f] hover:border-[#b3752f] bg-[#F2962F]"
              >
                Email Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};
