import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import GB from "country-flag-icons/react/3x2/GB";
import DE from "country-flag-icons/react/3x2/DE";
import { IoSnowOutline } from "react-icons/io5";

export default function Navbar({
  language,
  setLanguage,
  isSnowing,
  setIsSnowing,
  translations,
}) {
  return (
    <nav className="fixed z-50 flex items-center gap-2 px-5 py-3 font-medium text-blue-300 transform -translate-x-1/2 bg-white rounded-full shadow-lg sm:px-10 sm:gap-3 top-4 left-1/2">
      <a
        href="https://www.linkedin.com/in/edvin-perfundi-7a0b2827a/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
      >
        <FaLinkedin className="w-5 h-5 my-0.5" />
        <p className="hidden md:flex">Linkedin</p>
      </a>
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      <a
        href="https://github.com/viiniiii"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
      >
        <FaGithub className="w-5 h-5 my-0.5" />
        <p className="hidden md:flex">GitHub</p>
      </a>
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      <a
        href="https://www.instagram.com/edvinperfundi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
      >
        <FaInstagram className="w-5 h-5 my-0.5" />
        <p className="hidden md:flex">Instagram</p>
      </a>
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      <a
        href="mailto:edvinperfundi21@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
      >
        <MdOutlineMailOutline className="w-5 h-5 my-0.5" />
        <p className="hidden md:flex">Email</p>
      </a>
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      {language === "en" ? (
        <a
          href="files/CvEdvinPerfundi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
        >
          <SiReaddotcv className="w-5 h-5 my-0.5" />
          <p className="hidden md:flex">CV</p>
        </a>
      ) : (
        <a
          href="files/CvEdvinPerfundi(d).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1.5 hover:cursor-pointer text-inherit no-underline"
        >
          <SiReaddotcv className="w-5 h-5 my-0.5" />
          <p className="hidden md:flex">CV</p>
        </a>
      )}
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      <div
        className="flex gap-1.5 hover:cursor-pointer"
        onClick={() => setLanguage(language === "en" ? "de" : "en")}
      >
        {language === "en" ? (
          <>
            <DE title="German" className="w-5 h-5 my-0.5" />
            <p className="hidden md:flex">
              {translations[language].navbar.change}
            </p>
          </>
        ) : (
          <>
            <GB title="British" className="w-5 h-5 my-0.5" />
            <p className="hidden md:flex">
              {translations[language].navbar.change}
            </p>
          </>
        )}
      </div>
      <div className="w-[0.5px] h-5 mx-1 bg-blue-300"></div>
      <div
        className="flex gap-1.5 hover:cursor-pointer"
        onClick={() => setIsSnowing(!isSnowing)}
      >
        {isSnowing ? (
          <>
            <IoSnowOutline className="w-5 h-5 my-0.5 animate-spin-slow" />
            <p className="hidden w-18 md:flex">
              {translations[language].navbar.snowRemove}
            </p>
          </>
        ) : (
          <>
            <IoSnowOutline className="w-5 h-5 my-0.5 animate-wiggle" />
            <p className="hidden w-18 md:flex">
              {translations[language].navbar.snowAdd}
            </p>
          </>
        )}
      </div>
    </nav>
  );
}
