import {
  projectExperiences,
  technologies,
  userDetails,
  userDetailsSidebar,
} from "@/src/staticData/home/home";
import { CiUser } from "react-icons/ci";
import AboutTechnologies from "./AboutTechnologies";
import ProjectExperience from "./ProjectExperience";
import UserDetail from "./UserDetail";

const AboutMe = () => {
  return (
    <div
      data-scroll-index="1"
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <CiUser className="text-theme" size={14} />
          SOBRE MIM
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Sobre <span className="font-semibold text-theme">Mim</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Olá, meu nome é{" "}
            <span className="text-black dark:text-white">
              {userDetailsSidebar?.userName}
            </span>{" "}
            sou desenvolvedor de soluções à mais de 4 anos, atuando com a Stack{" "}
            <span className="text-black dark:text-white"> Javascript (node/react/react native), Genexus e Java</span> para
            construir soluções escaláveis e práticas.
          </p>
        </div>
        <div className="mt-6 section-content">
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
            {technologies?.map((tech) => (
              <AboutTechnologies key={tech?.id} {...tech} />
            ))}
          </div>

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            {userDetails?.map((singlInfo, i) => (
              <UserDetail key={i} {...singlInfo} />
            ))}
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {projectExperiences?.map((exp, i) => (
              <ProjectExperience key={i} {...exp} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
