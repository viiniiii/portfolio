import React from "react";

export default function EducationCard({
  logo,
  alt,
  university,
  degree,
  period,
  description,
}) {
  return (
    <div className="relative z-10 flex flex-col p-4 transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 to-white">
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
              {university}
            </h3>
            <p className="text-lg font-bold text-white">{degree}</p>
          </div>
          <div className="mb-2">
            <span className="px-3 py-1 text-sm font-medium text-white bg-blue-400 rounded-full">
              {period}
            </span>
          </div>
          <p className="text-sm text-gray-500 sm:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
