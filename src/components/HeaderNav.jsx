import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "./Input";

function HeaderNav({ darkMode, setDarkMode }) {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <Input />
      </div>
      <div className="navbar-center w-2/4 flex justify-between gap-3">
        <Link
          to={`infoJobs`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Jobs!
        </Link>

        <Link
          to={`infoBlog`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Blog
        </Link>

        <Link
          to={`infoCompany`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Company
        </Link>

        <Link
          to={`infoStory`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Story
        </Link>
      </div>

      <div className="navbar-end">
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-xl md:text-2xl xl:text-3xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-xl md:text-2xl xl:text-3xl cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
