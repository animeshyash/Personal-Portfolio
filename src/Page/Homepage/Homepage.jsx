import React from "react";
import "../Homepage/Homepage.css";
import { Skills } from "../../Components/Skills/Skills";

export const Homepage = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="w-11/12 mx-auto flex flex-col items-center">
          <div className="w-[80%]">
            <p className="md:text-[4.375rem] text-[2.375rem] text-[#FF857C] font-bold tracking-wider my-[1.5rem] md:my-[2.5rem] animate-charcter focus-in-contract-bck">
              I’m Animesh Yash, a developer who loves to innovate.
            </p>
            <div className=" md:block flex flex-col flex-wrap gap-y-4">
              <button className="border-2 bounce-in-top md:rounded-sm border-[#F2962F] mt-4 text-[1.375rem] font-semibold md:font-normal py-2 tracking-wider px-2 md:w-[19%] w-[100%] h-[3.438rem] rounded-md hover:bg-[#b3752f] hover:border-[#b3752f] bg-[#F2962F]">
                <a
                  href={require("../../Assets/Animesh_yash_Resume.pdf")}
                  download="Animesh_yash_Resume"
                >
                  Resume
                </a>
              </button>
              <button
                onClick={() => window.open("mailto:animeshyash1912@gmail.com")}
                className="bounce-in-top border-2 md:rounded-sm border-[#F2962F] text-[1.375rem] font-semibold md:font-normal tracking-wider py-2 px-2 md:w-[19%] w-[100%] md:ml-5 h-[3.438rem] rounded-md hover:bg-[#b3752f] hover:border-[#b3752f] bg-[#F2962F]"
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
