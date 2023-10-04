import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlinks from "../../Assets/Navlinks";

export const Navbar = () => {
  const [active, setActive] = useState("HOME");
  return (
    <div className="h-[100px] text-richblack-5 flex justify-center items-center">
      <div className="w-11/12 flex justify-around items-baseline">
        <Link to="/">
          <p
            className="text-[28px] font-normal tracking-wider"
            onClick={() => setActive("HOME")}
          >
            <span className="text-[50px] font-semibold text-[#F69334]">A</span>
            NIMESH
          </p>
        </Link>
        <div className="flex text-[25px] gap-x-10 tracking-wider">
          {navlinks.map((page, index) => (
            <Link to={page.link}>
              <p
                key={index}
                className={`${active === page.title && "text-yellow-100"}`}
                onClick={() => setActive(page.title)}
              >
                {page.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
