import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navlinks from "../../Assets/Navlinks";

export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    !location.pathname.split("/").pop() === ""
      ? location.pathname.split("/").pop()
      : "HOME"
  );
  const [burger, setBurger] = useState(false);
  return (
    <div className="h-[6rem] text-richblack-5 flex justify-center items-center pt-4">
      <div
        className={`w-11/12 justify-around md:items-baseline items-center md:flex hidden`}
      >
        <Link to="/">
          <p
            className="md:text-[1.8rem] text-[1.55rem] font-normal tracking-wider"
            onClick={() => setActive("HOME")}
          >
            <span className="md:text-[3rem] text-[2.5rem] font-semibold text-[#F69334]">
              A
            </span>
            NIMESH
          </p>
        </Link>
        <div className="flex md:text-[1.6rem] text-[1.25rem] md:gap-x-10 gap-x-5 tracking-wider">
          {navlinks.map((page, index) => (
            <Link to={page.link} key={index}>
              <p
                className={`${
                  active.toLowerCase() === page.title.toLowerCase() &&
                  "text-yellow-100"
                }`}
                onClick={() => setActive(page.title.toLowerCase())}
              >
                {page.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden visible flex justify-between w-3/4 items-center flex-col ${
          burger ? "border-b-2" : ""
        }`}
      >
        <div
          className={`${
            burger ? "hidden" : "flex"
          } justify-between items-center w-[100%]`}
        >
          <Link to="/">
            <p
              className="md:text-[1.8rem] text-[1.55rem] font-normal tracking-wider"
              onClick={() => setActive("HOME")}
            >
              <span className="md:text-[3rem] text-[2.5rem] font-semibold text-[#F69334]">
                A
              </span>
              NIMESH
            </p>
          </Link>
          <div
            className="flex flex-col gap-1 mt-3"
            onClick={() => {
              setBurger(true);
              setTimeout(() => {
                setBurger(false);
              }, 5000);
            }}
          >
            <div className="h-[5px] w-[40px] bg-white"></div>
            <div className="h-[5px] w-[40px] bg-white"></div>
            <div className="h-[5px] w-[40px] bg-white"></div>
          </div>
        </div>
        <div
          className={`${
            burger ? "flex" : "hidden"
          } md:text-[1.6rem] text-[1.25rem] md:gap-x-10 gap-x-5 tracking-wider items-center mb-2`}
        >
          {navlinks.map((page, index) => (
            <Link to={page.link} key={index}>
              <p
                className={`${
                  active.toLowerCase() === page.title.toLowerCase() &&
                  "text-yellow-100"
                }`}
                onClick={() => setActive(page.title.toLowerCase())}
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
