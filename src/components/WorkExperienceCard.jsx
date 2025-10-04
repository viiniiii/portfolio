import React from "react";

export default function WorkExperienceCard({
  logo,
  alt,
  work,
  position,
  period,
  location,
  description,
}) {
  return (
    <div className="relative flex flex-col p-4 transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 to-white z-10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={alt}
            className="object-cover w-16 h-16 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-1">
            <h3 className="text-xl font-black text-white sm:text-2xl">
              {position}
            </h3>
            <p className="text-lg font-bold text-white">{work}</p>
          </div>
          <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:gap-0 sm:justify-between lg:mr-15">
            <span className="self-start px-3 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
              {period}
            </span>
            <span className="self-start px-3 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
              {location}
            </span>
          </div>
          <p className="text-xs text-gray-500 sm:text-sm sm:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
