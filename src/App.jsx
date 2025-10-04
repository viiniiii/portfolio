import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkExperienceCard from "./components/WorkExperienceCard";
import EducationCard from "./components/EducationCard";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import SnowBackground from "./components/SnowBackground";
import MeshViewer from "./components/MeshViewer";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiBabylondotjs } from "react-icons/si";
import { VscGraphScatter } from "react-icons/vsc";
import { VscGraph } from "react-icons/vsc";
import { SiNumpy } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { PiBicycle } from "react-icons/pi";
import { FaChess } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { MdLaptopChromebook } from "react-icons/md";
import { FaPersonHiking } from "react-icons/fa6";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isSnowing, setIsSnowing] = useState(true);

  const snowConfig = {
    background: {
      color: "transparent",
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: "bottom",
        enable: true,
        random: false,
        speed: 2.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
      },
    },
    detectRetina: true,
  };

  const translations = {
    en: {
      navbar: {
        change: "Change",
        snowAdd: "Add",
        snowRemove: "Remove",
      },
      hero: {
        name: "Hey I'm Edvin Perfundi",
        title: "Data Scientist | Frontend Developer",
        about: `I'm a Data Science student who loves preparing models and analyzing
      data sets, driven by curiosity to discover hidden and interesting
      trends. I'm also a frontend developer with a passion for
      implementing designs to the last detail and paying attention to even
      the smallest elements. Another thing about me is that I enjoy
      challenging the stereotype that only black- and blue-themed websites
      can look cool.`,
      },
      sections: {
        work: "Work Experience",
        education: "Education",
        skills: "Skills",
        hobbies: "Hobbies",
        projects: "Projects",
      },
      work: {
        hopn: {
          work: "HOPn",
          position: "Frontend Developer Intern",
          period: "June 2025 - ongoing",
          location: "Munich, Germany - Remote",
          description:
            "Worked as a Frontend Developer on a real-world commercial application, which is going to be released soon in Germany. Built the client-side using JavaScript, React, and Tailwind CSS. Collaborated closely with a UI/UX Designer to refine the interface and improve user experience. Coordinated frontend tasks with another front-end developer and resolved merge conflicts. Communicated with the backend developer to define and refine API requests and responses. Worked alongside a QA engineer to resolve bugs and other issues.",
        },
        softwareBusiness: {
          work: "Software Business S.r.l",
          position: "Fullstack Developer Intern",
          period: "May 2025 - July 2025",
          location: "Tirana, Albania - Onsite",
          description:
            "Implemented a simple client-server architecture using gRPC and used Docker to containerize it. Resolved issues of AI-generated code and fixed bugs in a project that used an Express server to execute Python scripts for a battery setup machine. Analyzed the codebase to identify and remove unused Node.js dependencies in order to improve the performance of the server.",
        },
        division5: {
          work: "Division5",
          position: "3D Web Developer Intern",
          period: "March 2025 - May 2025",
          location: "Tirana, Albania - Onsite",
          description:
            "Developed interactive 3D web experiences using Babylon.js, allowing users to visualize and interact with dynamic 3D models in real-time. Set up backend endpoints to deliver generated 3D models through efficient API responses. Built and maintained backend endpoints to handle user input, process it, and return structured data. Connected with Azure services to process user-submitted text and receive corresponding structured JSON responses.",
        },
      },
      education: {
        fub: {
          university: "Free University of Berlin",
          degree: "M.Sc Data Science",
          period: "October 2025 - ongoing",
          description:
            "Focusing on Data Structures, Statistics, Programming in Python, Advanced Statistics, Artificial Intelligence, Machine Learning and Databases.",
        },
        ut: {
          university: "University of Tirana",
          degree: "B.Sc Business Informatics",
          period: "October 2022 - June 2025",
          description:
            "Took courses in Algorithms, Data Structures, Computer Architecture, Operating Systems, Databases, Networking, OOP, Web Programming, System Analysis, Calculus, Linear Algebra, Applied Mathematics, Statistics, Applied Statistics and Econometrics.",
        },
      },
      projects: {
        keyword: {
          title: "Albanian Keyword Extractor",
          description:
            "A trained scapy model with supervized learning for extracting keywords in albanian from text files.",
          technologies: ["Python", "Machine Learning", "NLP"],
        },
        ticket: {
          title: "Ticket Price Trackter",
          description:
            "A script that scrapes rental house listings from a newspaper website, filters them according to user preferences, and formats the results for better readability.",
          technologies: ["Python", "HTML", "CSS", "Selenium"],
        },
        rent: {
          title: "Renting House Posts Scraper",
          description:
            "A script that finds the cheapest flights from Tirana to anywhere for trips under a week, and neatly formats the results for easy reading.",
          technologies: ["Python", "HTML", "CSS", "Selenium"],
        },
      },
    },
    de: {
      navbar: {
        change: "Wechseln",
        snowAdd: "Hinzufügen",
        snowRemove: "Entfernen",
      },
      hero: {
        name: "Hallo, ich bin Edvin Perfundi",
        title: "Data Scientist | Frontend-Entwickler",
        about: `Ich bin Data-Science-Student und bereite gern Modelle vor und
      analysiere Datensätze, getrieben von der Neugier, verborgene und
      interessante Trends zu entdecken. Außerdem bin ich Frontend-Entwickler
      mit Leidenschaft fürs Detail und achte selbst auf kleinste Elemente.
      Außerdem macht es mir Spaß, das Klischee herauszufordern, dass nur
      schwarz- und blau-gedeckte Websites cool wirken können.`,
      },
      sections: {
        work: "Berufserfahrung",
        education: "Ausbildung",
        skills: "Fähigkeiten",
        hobbies: "Hobbys",
        projects: "Projekte",
      },
      work: {
        hopn: {
          work: "HOPn",
          position: "Praktikant Frontend-Entwicklung",
          period: "Juni 2025 - laufend",
          location: "München, Deutschland - Remote",
          description:
            "Tätig als Frontend-Entwickler an einer realen, kommerziellen Anwendung, die bald in Deutschland veröffentlicht wird. Client-Seite mit JavaScript, React und Tailwind CSS aufgebaut. Eng mit einem UI/UX-Designer zusammengearbeitet, um die Oberfläche zu verfeinern und die Nutzererfahrung zu verbessern. Frontend-Aufgaben mit einem weiteren Frontend-Entwickler koordiniert und Merge-Konflikte gelöst. Mit dem Backend-Entwickler kommuniziert, um API-Anfragen und -Antworten zu definieren und zu verfeinern. Gemeinsam mit einem QA Engineer Bugs und andere Probleme behoben.",
        },
        softwareBusiness: {
          work: "Software Business S.r.l",
          position: "Praktikant Fullstack-Entwicklung",
          period: "Mai 2025 - Juli 2025",
          location: "Tirana, Albanien - Vor Ort",
          description:
            "Eine einfache Client-Server-Architektur mit gRPC implementiert und mit Docker containerisiert. Probleme von KI-generiertem Code behoben und Bugs in einem Projekt gefixt, das einen Express-Server nutzte, um Python-Skripte für eine Batterie-Setup-Maschine auszuführen. Den Code analysiert, um ungenutzte Node.js-Abhängigkeiten zu identifizieren und zu entfernen, um die Serverleistung zu verbessern.",
        },
        division5: {
          work: "Division5",
          position: "Praktikant 3D-Webentwicklung",
          period: "März 2025 - Mai 2025",
          location: "Tirana, Albanien - Vor Ort",
          description:
            "Interaktive 3D-Web-Erlebnisse mit Babylon.js entwickelt, damit Nutzer dynamische 3D-Modelle in Echtzeit visualisieren und damit interagieren können. Backend-Endpunkte eingerichtet, um generierte 3D-Modelle effizient per API bereitzustellen. Backend-Endpunkte erstellt und gewartet, um Nutzereingaben zu verarbeiten und strukturierte Daten zurückzugeben. Anbindung an Azure-Dienste, um vom Nutzer übermittelten Text zu verarbeiten und entsprechende strukturierte JSON-Antworten zu erhalten.",
        },
      },
      education: {
        fub: {
          university: "Freie Universität Berlin",
          degree: "M.Sc Data Science",
          period: "Oktober 2025 - laufend",
          description:
            "Schwerpunkte: Datenstrukturen, Statistik, Programmierung in Python, Fortgeschrittene Statistik, Künstliche Intelligenz, Maschinelles Lernen und Datenbanken.",
        },
        ut: {
          university: "Universität Tirana",
          degree: "B.Sc Wirtschaftsinformatik",
          period: "Oktober 2022 - Juni 2025",
          description:
            "Kurse in Algorithmen, Datenstrukturen, Computerarchitektur, Betriebssysteme, Datenbanken, Netzwerke, OOP, Webprogrammierung, Systemanalyse, Analysis, Lineare Algebra, Angewandte Mathematik, Statistik, Angewandte Statistik und Ökonometrie.",
        },
      },
      projects: {
        keyword: {
          title: "Albanischer Schlüsselwort-Extraktor",
          description:
            "Ein trainiertes Scapy-Modell mit überwachten Lernverfahren zur Extraktion von Schlüsselwörtern aus albanischen Textdateien.",
          technologies: ["Python", "Machine Learning", "NLP"],
        },
        ticket: {
          title: "Ticketpreis-Tracker",
          description:
            "Ein Skript, das Wohnungsinserate von einer Zeitungswebsite scraped, sie nach Nutzerpräferenzen filtert und die Ergebnisse übersichtlich formatiert.",
          technologies: ["Python", "HTML", "CSS", "Selenium"],
        },
        rent: {
          title: "Scraper für Wohnungsanzeigen",
          description:
            "Ein Skript, das die günstigsten Flüge von Tirana aus für Reisen unter einer Woche findet und die Ergebnisse übersichtlich darstellt.",
          technologies: ["Python", "HTML", "CSS", "Selenium"],
        },
      },
    },
  };
  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: SiBabylondotjs, name: "Babylon.js" },

    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },

    { icon: FaGitAlt, name: "Git" },
    { icon: FaPython, name: "Python" },

    { icon: SiNumpy, name: "NumPy" },
    { icon: SiJupyter, name: "Jupyter" },
    { icon: VscGraph, name: "Data Analytics" },
    { icon: VscGraphScatter, name: "Machine Learning" },
  ];
  const hobbies = [
    { icon: PiBicycle, en: "Cycling", de: "Radfahren" },
    { icon: FaChess, en: "Board Games", de: "Brettspiele" },
    { icon: FaPersonHiking, en: "Hiking", de: "Wandern" },
    { icon: LuBookText, en: "Learning", de: "Lernen" },
    { icon: MdLaptopChromebook, en: "Computers", de: "Computer" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-l from-blue-100 to-blue-50">
      {isSnowing && (
        <>
          <SnowBackground
            id="background-snow"
            options={snowConfig}
            className="-z-10"
          />
          <SnowBackground
            id="foreground-snow"
            options={snowConfig}
            className="z-50 snow-layer"
          />
        </>
      )}

      <div className="flex flex-col-reverse min-h-screen px-4.5 pt-5 sm:mt-0 sm:pt-5 md:pt-20 md:flex-row sm:px-10 md:px-15 lg:px-20 xl:px-35">
        <div className="pt-5 pr-5 lg:pr-20 md:pt-25 flex-7 md:flex-5 h-[60vh] md:h-[80vh]">
          <MeshViewer modelPath="/models/snowman.glb" />
        </div>
        <div className="flex flex-col justify-center gap-1 mt-25 flex-5 md:flex-7 md:gap-2 lg:gap-3 md:mt-0">
          <h1 className="text-2xl sm:text-[32px] md:text-4xl lg:text-[44px] xl:text-5xl font-[900] text-blue-300">
            {translations[language].hero.name}
          </h1>
          <h1 className="mb-2 text-lg font-bold text-blue-300 sm:mb-10 md:text-2xl lg:text-3xl">
            {translations[language].hero.title}
          </h1>
          <p className="text-base font-medium text-justify text-blue-300 sm:font-semibold sm:text-base lg:mb-20 xl:mb-30">
            {translations[language].hero.about}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-5 pb-15 sm:pb-20 md:pb-25 sm:px-10 md:px-30 lg:px-40">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.work}
        </h1>
        <WorkExperienceCard
          logo="images/HOPn.png"
          alt="HopN Logo"
          work={translations[language].work.hopn.work}
          position={translations[language].work.hopn.position}
          period={translations[language].work.hopn.period}
          location={translations[language].work.hopn.location}
          description={translations[language].work.hopn.description}
        />

        <WorkExperienceCard
          logo="images/softwareBusiness.png"
          alt="Software Business Logo"
          work={translations[language].work.softwareBusiness.work}
          position={translations[language].work.softwareBusiness.position}
          period={translations[language].work.softwareBusiness.period}
          location={translations[language].work.softwareBusiness.location}
          description={translations[language].work.softwareBusiness.description}
        />

        <WorkExperienceCard
          logo="images/division5.png"
          alt="Division5 Logo"
          work={translations[language].work.division5.work}
          position={translations[language].work.division5.position}
          period={translations[language].work.division5.period}
          location={translations[language].work.division5.location}
          description={translations[language].work.division5.description}
        />
      </div>

      <div className="flex flex-col gap-3 px-5 pb-15 sm:pb-20 md:pb-25 sm:px-10 md:px-30 lg:px-40">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.education}
        </h1>
        <EducationCard
          logo="images/freie_universitat_berlin_logo.jpg"
          alt="Freie University logo"
          university={translations[language].education.fub.university}
          degree={translations[language].education.fub.degree}
          period={translations[language].education.fub.period}
          description={translations[language].education.fub.description}
        />

        <EducationCard
          logo="images/University_of_Tirana_logo.svg.png"
          alt="University of Tirana logo"
          university={translations[language].education.ut.university}
          degree={translations[language].education.ut.degree}
          period={translations[language].education.ut.period}
          description={translations[language].education.ut.description}
        />
      </div>
      <div className="flex flex-col gap-5 px-5 pb-15 sm:pb-20 md:pb-25 sm:px-10 md:px-30 lg:px-40">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.skills}
        </h1>
        <div className="flex flex-row flex-wrap justify-around gap-7">
          {skills.map((skill) => (
            <SkillCard key={skill.name} Icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 px-5 pb-15 sm:pb-20 md:pb-25 sm:px-10 md:px-30 lg:px-40">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.hobbies}
        </h1>
        <div className="flex flex-row flex-wrap justify-around gap-7">
          {hobbies.map((hobby) => (
            <SkillCard
              key={hobby.en}
              Icon={hobby.icon}
              name={hobby[language]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 px-2 pb-15 sm:pb-20 md:pb-25 sm:px-5 md:px-10 lg:px-40">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.projects}
        </h1>
        <div className="flex flex-row flex-wrap justify-around gap-7">
          <ProjectCard
            key="keyword"
            image="images/KeywordExtraction.png"
            title={translations[language].projects.keyword.title}
            description={translations[language].projects.keyword.description}
            technologies={translations[language].projects.keyword.technologies}
            link="https://github.com/viiniiii/albanian_Keyword_Extraction_AI"
            gitHublink="https://github.com/viiniiii/albanian_Keyword_Extraction_AI"
          />

          <ProjectCard
            key="ticket"
            image="images/ticketPrices.png"
            title={translations[language].projects.ticket.title}
            description={translations[language].projects.ticket.description}
            technologies={translations[language].projects.ticket.technologies}
            gitHublink="https://github.com/viiniiii/shtepi_me_qera"
          />

          <ProjectCard
            key="rent"
            image="images/rentNotification.jpg"
            title={translations[language].projects.rent.title}
            description={translations[language].projects.rent.description}
            technologies={translations[language].projects.rent.technologies}
            link="https://github.com/viiniiii/shtepi_me_qera"
            gitHublink="https://github.com/viiniiii/shtepi_me_qera"
          />
        </div>
      </div>

      <Navbar
        language={language}
        setLanguage={setLanguage}
        isSnowing={isSnowing}
        setIsSnowing={setIsSnowing}
        translations={translations}
      />
    </div>
  );
}
