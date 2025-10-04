import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  link,
  gitHublink,
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-2 pb-5 w-80 sm:w-90 rounded-2xl bg-blue-50">
      <img src={image} alt={title} className="w-full h-full rounded-2xl" />
      <h1 className="font-bold text-center text-blue-300">{title}</h1>
      <p className="px-4 font-medium text-justify text-gray-400">
        {description}
      </p>
      <div className="flex flex-wrap gap-5 p-5">
        {technologies.map((technology) => (
          <p className="px-4 py-1.5 bg-blue-200 rounded-lg text-white font-black">
            {technology}
          </p>
        ))}
      </div>
      <div className="flex gap-7">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <MdWeb className="w-8 h-8 text-blue-200" />
          </a>
        )}

        {gitHublink && (
          <a href={gitHublink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-blue-200 w-7 h-7" />
          </a>
        )}
      </div>
    </div>
  );
}
