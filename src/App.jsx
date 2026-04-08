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
import { PiNetworkFill } from "react-icons/pi";
import { MdOutlineTimeline } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
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
        about: `I’m a Data Science student passionate about building models and analyzing datasets to uncover hidden 
        patterns and useful information. My curiosity pushes me to explore complex datasets and identify 
        important patterns. With a background in frontend development, I possess a sharp eye for detail 
        to dashboards and data visualization, making sure that insights are accurate and easily understood. 
        I'm now totally committed to developing my abilities in predictive modeling and data analysis.`,
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
          period: "September 2025 - February 2026",
          location: "Munich, Germany - Remote",
          description:
            "Worked as a Frontend Developer on a real-world commercial application, which is going to be released soon in Germany. Built the client-side using JavaScript, React, and Tailwind CSS. Collaborated closely with a UI/UX Designer to refine the interface and improve user experience. Coordinated frontend tasks with another front-end developer and resolved merge conflicts. Communicated with the backend developer to define and refine API requests and responses. Worked alongside a QA engineer to resolve bugs and other issues.",
        },
        softwareBusiness: {
          work: "Software Business S.r.l",
          position: "Fullstack Developer Intern",
          period: "June 2025 - August 2025",
          location: "Tirana, Albania - Onsite",
          description: `I implemented a client-server architecture in Python and containerized it with Docker.
            In addtion, I debugged AI-generated Express.js server code executing Python scripts for a 
            battery system and analyzed a Node.js codebase in order to refactor it by removing 
            unused dependencies which improved maintainability and performance. 
            I also implemented addiotional features based on client requests.`,
        },
        division5: {
          work: "Division5",
          position: "3D Web Developer Intern",
          period: "March 2025 - May 2025",
          location: "Tirana, Albania - Onsite",
          description: `I researched technologies for text-to-speech and mapping speech to 3D character animations, 
            then developed an interactive 3D web application using Babylon.js and Express.js that allows 
            users to generate speaking 3D character models from text input. `,
        },
      },
      education: {
        fub: {
          university: "Free University of Berlin",
          degree: "M.Sc Data Science",
          period: "October 2025 - ongoing",
          description: `Grade: 1.7
            Activities and societies: Main subjects: Advanced Machine Learning, Advanced Statistics, Deep Learning, Computer Vision, Programming in Python, Data Analytics, Databases, etc.`,
        },
        ut: {
          university: "University of Tirana",
          degree: "B.Sc Business Informatics",
          period: "October 2022 - June 2025",
          description: `Grade: 1.1
            Main subjects: Algorithms, Data structures, Computer Architecture, Operating Systems, Databases, Networking, Management of Information Systems, Web Programming, Econometrics, Statistics, etc.`,
        },
      },
      projects: {
        rent: {
          title: "Rent Price Predictor in Berlin",
          description:
            "Wrote a script to scrape over 22000 listings in Berlin with 28 features. Cleaned the data set and performed detailed EDA. Trained, tested and compared different ML models with a final dataset of 15500 samples and 22 features. Interpreted the models using SHAP values and deployed the best model.",
          technologies: [
            "Python",
            "Machine Learning",
            "Data Analytics",
            "Selenium",
          ],
        },
        keyword: {
          title: "Albanian Keyword Extractor",
          description:
            "Built a complete NLP pipeline for Albanian keyword extraction. Labeled a custom dataset using Label Studio with over 500 annotated text samples. Trained a spaCy NER model with supervised learning, achieving high precision on keyword extraction tasks.",
          technologies: ["Python", "spaCy", "NLP", "Label Studio"],
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
        about: `Ich bin Student der Data Science und leidenschaftlich daran interessiert, 
        Modelle zu entwickeln und Datensätze zu analysieren, um verborgene Muster und nützliche Informationen 
        zu entdecken. Meine Neugier treibt mich dazu, komplexe Datensätze zu untersuchen und relevante Zusammenhänge 
        zu identifizieren. Durch meine Erfahrung in der Frontend-Entwicklung habe ich ein ausgeprägtes Auge für Details 
        in Dashboards und Datenvisualisierungen, sodass Erkenntnisse sowohl präzise als auch leicht verständlich 
        präsentiert werden. Ich konzentriere mich nun vollständig darauf, meine Fähigkeiten in Predictive Modeling 
        und Datenanalyse weiterzuentwickeln.`,
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
          period: "September 2025 - Februar 2026",
          location: "München, Deutschland - Remote",
          description:
            "Tätig als Frontend-Entwickler an einer realen, kommerziellen Anwendung, die bald in Deutschland veröffentlicht wird. Client-Seite mit JavaScript, React und Tailwind CSS aufgebaut. Eng mit einem UI/UX-Designer zusammengearbeitet, um die Oberfläche zu verfeinern und die Nutzererfahrung zu verbessern. Frontend-Aufgaben mit einem weiteren Frontend-Entwickler koordiniert und Merge-Konflikte gelöst. Mit dem Backend-Entwickler kommuniziert, um API-Anfragen und -Antworten zu definieren und zu verfeinern. Gemeinsam mit einem QA Engineer Bugs und andere Probleme behoben.",
        },
        softwareBusiness: {
          work: "Software Business S.r.l",
          position: "Praktikant Fullstack-Entwicklung",
          period: "Juni 2025 - August 2025",
          location: "Tirana, Albanien - Vor Ort",
          description: `Ich habe eine Client-Server-Architektur in Python implementiert und diese mit Docker containerisiert.
          Zusätzlich habe ich AI-generierten Express.js-Servercode, der Python-Skripte für ein Batteriesystem ausführt, 
          debuggt und eine Node.js-Codebasis analysiert, um ungenutzte Abhängigkeiten zu entfernen, 
          wodurch die Wartbarkeit und Performance verbessert wurde.
          Außerdem habe ich zusätzliche Funktionen basierend auf Kundenanforderungen implementiert.`,
        },
        division5: {
          work: "Division5",
          position: "Praktikant 3D-Webentwicklung",
          period: "März 2025 - Mai 2025",
          location: "Tirana, Albanien - Vor Ort",
          description: `Ich habe Technologien für Text-zu-Sprache und die Zuordnung von Sprache zu 3D-Charakteranimationen recherchiert.
          Anschließend entwickelte ich eine interaktive 3D-Webanwendung mit Babylon.js und Express.js, die es Nutzern ermöglicht, aus Texteingaben sprechende 3D-Charaktermodelle zu generieren.
          `,
        },
      },
      education: {
        fub: {
          university: "Freie Universität Berlin",
          degree: "M.Sc Data Science",
          period: "Oktober 2025 - laufend",
          description: `Note: 1,7
          Hauptfächer: Advanced Machine Learning, Advanced Statistics, Deep Learning, Computer Vision, Programmierung in Python, Datenanalyse, Datenbanken, etc.`,
        },
        ut: {
          university: "Universität Tirana",
          degree: "B.Sc Wirtschaftsinformatik",
          period: "Oktober 2022 - Juni 2025",
          description: `Note: 1,1
          Hauptfächer: Algorithmen, Datenstrukturen, Rechnerarchitektur, Betriebssysteme, Datenbanken, Netzwerke, Management von Informationssystemen, Webprogrammierung, Ökonometrie, Statistik, etc.`,
        },
      },
      projects: {
        rent: {
          title: "Mietpreisprognose in Berlin",
          description:
            "Ein Skript geschrieben, um über 22000 Inserate in Berlin mit 28 Features zu scrapen. Den Datensatz bereinigt und detaillierte EDA durchgeführt. Verschiedene ML-Modelle trainiert, getestet und verglichen mit einem finalen Datensatz von 15500 Samples und 22 Features. Die Modelle mit SHAP-Werten interpretiert und das beste Modell deployed.",
          technologies: [
            "Python",
            "Machine Learning",
            "Data Analytics",
            "Selenium",
          ],
        },
        keyword: {
          title: "Albanischer Schlüsselwort-Extraktor",
          description:
            "Eine vollständige NLP-Pipeline für die albanische Schlüsselwort-Extraktion entwickelt. Einen benutzerdefinierten Datensatz mit über 500 annotierten Text-Samples in Label Studio gelabelt. Ein spaCy NER-Modell mit überwachtem Lernen trainiert und eine hohe Präzision bei der Schlüsselwort-Extraktion erreicht.",
          technologies: ["Python", "spaCy", "NLP", "Label Studio"],
        },
      },
    },
  };
  const skills = [
    { icon: FaPython, name: "Python" },
    { icon: SiNumpy, name: "NumPy" },
    { icon: SiJupyter, name: "Jupyter" },
    { icon: VscGraph, name: "Data Analytics" },
    { icon: BsDatabaseFill, name: "SQL" },
    { icon: VscGraphScatter, name: "Machine Learning" },

    { icon: PiNetworkFill, name: "Deep Learning" },
    { icon: TbReportAnalytics, name: "Econometrics" },
    { icon: MdOutlineTimeline, name: "Time Series" },
    { icon: TbReportMoney, name: "Financial Analytics" },

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
      <div className="flex flex-col gap-5 px-2 pb-15 sm:pb-20 md:pb-25 sm:px-5 md:px-10 xl:px-60">
        <h1 className="text-3xl font-extrabold text-center text-blue-300">
          {translations[language].sections.projects}
        </h1>
        <div className="flex flex-row flex-wrap justify-around gap-7 xl:gap-10">
          <ProjectCard
            key="rent"
            image="images/rent_prediction.png"
            title={translations[language].projects.rent.title}
            description={translations[language].projects.rent.description}
            technologies={translations[language].projects.rent.technologies}
            gitHublink="https://github.com/viiniiii/rent_prices_prediction"
            link="https://rentpricesprediction.vercel.app/"
          />

          <ProjectCard
            key="keyword"
            image="images/KeywordExtraction.png"
            title={translations[language].projects.keyword.title}
            description={translations[language].projects.keyword.description}
            technologies={translations[language].projects.keyword.technologies}
            link="https://github.com/viiniiii/albanian_Keyword_Extraction_AI"
            gitHublink="https://github.com/viiniiii/albanian_Keyword_Extraction_AI"
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
