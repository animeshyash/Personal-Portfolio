import React from "react";
import "../About/About.css";

import Desc from "../../Assets/Desc";

export const About = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center">
      <div className="w-[75%] mt-5 mb-5">
        {Desc.map((paragraph, index) => (
          <p
            key={index}
            className={`text-[22px] leading-9 tracking-wide my-8 tracking-in-contract-bck ${
              paragraph.para === 2 ? "text-[#f3867f]" : "text-white"
            }`}
          >
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  );
};
