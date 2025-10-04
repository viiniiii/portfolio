import React from "react";

export default function SkillCard({ Icon, name }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-1 py-4 transition-all duration-300 rounded-lg shadow-2xl sm:p-6 w-35 h-35 sm:w-45 sm:h-45 hover:shadow-cyan-200 hover:-translaw-auto">
      <Icon
        style={{ color: "rgb(97, 219, 251)" }}
        className="mb-3 transition-transform duration-300 transform w-25 h-25 hover:scale-110"
      />
      <span className="text-sm font-bold text-gray-400">{name}</span>
    </div>
  );
}
