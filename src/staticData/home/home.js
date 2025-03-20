import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";
import {
  FaBlog,
  FaBriefcase,
  FaFolderOpen,
  FaGraduationCap,
  FaMobileAlt,
  FaRegEnvelopeOpen
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";

import genexus from "@/public/assets/img/skill/genexus.png";
import java from "@/public/assets/img/skill/java.svg";
import node from "@/public/assets/img/skill/node-js.png";
import reactNative from "@/public/assets/img/skill/react-native (1).svg";
import react from "@/public/assets/img/skill/react.svg";
import tailwind from "@/public/assets/img/skill/tailwind.svg";

import compusis from "@/public/assets/img/partners/compusis.png";
import umpontodois from "@/public/assets/img/partners/umpontodois.png";

import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";
import userImage from "@/public/assets/img/user-sidebar-thumb.png";

import { default as portfolioImage1, default as portfolioImage1Thumb } from "@/public/assets/img/portfolio/portfolio-img1.png";

import { default as portfolioImage2, default as portfolioImage2Thumb } from "@/public/assets/img/portfolio/portfolio-img2.png";

import { default as portfolioImage3, default as portfolioImage3Thumb } from "@/public/assets/img/portfolio/portfolio-img3.png";

import { default as portfolioImage4, default as portfolioImage4Thumb } from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import { default as blog1Image, default as blog1Thumbnail } from "@/public/assets/img/blog/article1.png";
import { default as blog2Image, default as blog2Thumbnail } from "@/public/assets/img/blog/article2.png";
import { default as blog3Image, default as blog3Thumbnail } from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import { IoHomeOutline } from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INÍCIO",
  },
  heading: {
    heading1: "Eu Te Faço",
    heading2: "Mais Dígital",
  },
  desc: (
    <p>
      Eu sou um{" "}
      <span className="font-medium text-black dark:text-white/90">
        Desenvolvedor Full-Stack 
      </span>{" "}
      de coração e crio os recursos mais adequados para o seu trabalho em questão.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Disponível para trabalho",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Trabalho Freelancer",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: umpontodois,
    altText: "UmPontoDois Software de Gestão",
    link: "#",
  },
  {
    imgUrl: compusis,
    altText: "Compusis Software de Gestão Integrado",
    link: "#",
  },
  {
    imgUrl: umpontodois,
    altText: "UmPontoDois Software de Gestão",
    link: "#",
  },
  {
    imgUrl: compusis,
    altText: "Compusis Software de Gestão Integrado",
    link: "#",
  },
  {
    imgUrl: umpontodois,
    altText: "UmPontoDois Software de Gestão",
    link: "#",
  },
  {
    imgUrl: compusis,
    altText: "Compusis Software de Gestão Integrado",
    link: "#",
  },
  {
    imgUrl: umpontodois,
    altText: "UmPontoDois Software de Gestão",
    link: "#",
  },
  {
    imgUrl: compusis,
    altText: "Compusis Software de Gestão Integrado",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "Java",
    skill: "60",
    url: "#",
  },
  {
    id: 2,
    title: "Node.Js",
    skill: "60",
    url: "#",
  },
  {
    id: 3,
    title: "React/React Native",
    skill: "60",
    url: "#",
  },
  {
    id: 4,
    title: "TailwindCSS",
    skill: "60",
    url: "#",
  },
  {
    id: 5,
    title: "Genexus Java",
    skill: "60",
    url: "#",
  },
  {
    id: 6,
    title: "Genexus .NET",
    skill: "85",
    url: "#",
  },
];

export const userDetails = [
  {
    field: "Celular",
    value: "(15) 99136-0221",
  },
  {
    field: "Língua",
    value: "Português, Inglês e Espanhol",
  },
  {
    field: "Email",
    value: "lucas.r.bordignon@gmail.com",
  },
  {
    field: "GitHub",
    value: "/lucasrbordignon",
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Lucas R. Bordignon",
  designations: ["Web Developer", "Back-end Developer", "Mobile Developer", "GeneXus Developer"],
  basicInfo: [
    {
      id: 1,
      field: "País",
      value: "Brasil",
    },
    {
      id: 2,
      field: "Cidade",
      value: "Laranjal Paulista - SP",
    },
    {
      id: 3,
      field: "Idade",
      value: "21",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: "Java",
      value: 60,
    },
    {
      id: 2,
      name: "React",
      value: 60,
    },
    {
      id: 3,
      name: "Node js",
      value: 60,
    },
    {
      id: 4,
      name: "Genexus",
      value: 85,
    },
  ],
};

export const projectExperiences = [
  {
    title: "Anos de Experiência",
    count: 4,
    postFix: true,
  },
  {
    title: "Projetos Envolvidos",
    count: 25,
    postFix: true,
  },
  {
    title: "Clientes Satisfeitos",
    count: 25,
    postFix: false,
  },
];

export const services = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "SERVIÇOS",
    heading: "Meus",
    coloredHeading: "Serviços",
    description:
      "Eu desenho produtos que são mais do que bonitos. Eu os torno entregáveis ​​e utilizáveis.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "UI/UX Design",
      desc: "Eu desenho produtos que são mais do que bonitos. Eu os torno entregáveis.",
      icon: <UiUxIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "Desenvolvimento Web",
      desc: "Desenvolvimento Web ágil e sofisticado.",
      icon: <WebDevIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "Desenvolvimento Back-End",
      desc: "Aplicações escaláveis e robustas.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "Desenvolvimento Mobile",
      desc: "Eu desenvolvo aplicações mobile que cabem no seu bolso.",
      icon: <FaMobileAlt size={32} className="fill-theme"/>,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "Minhas",
    coloredHeading: "Vantagens",
    description:
      "Essas são as tecnologias que tenho experiência.",
  },
  skillsData: [
    {
      id: 1,
      image: java?.src,
      percent: 60,
      name: "Java",
    },
    {
      id: 2,
      image: genexus?.src,
      percent: 85,
      name: "Genexus",
    },
    {
      id: 3,
      image: tailwind?.src,
      percent: 60,
      name: "Tailwind",
    },
    {
      id: 4,
      image: react?.src,
      percent: 60,
      name: "React",
    },
    {
      id: 5,
      image: reactNative?.src,
      percent: 60,
      name: "React Native",
    },
    {
      id: 6,
      image: node?.src,
      percent: 60,
      name: "Node JS",
    },
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUMO",
    heading: "Experiência de",
    coloredHeading: "Trabalho",
    description:
      "Eu desenvolvi vários projetos completos, desde a sua análise, planejamento, desenvolvimento, implementação e treinamento.",
  },
  resumeData: [
    {
      platform: "Compusis Informática Ltda",
      duration: "Jan, 2025 - Até o momento",
      position: "Desenvolvedor de Software",
      description:
        "Manutenção de Softwares e padronização.",
    },
    {
      platform: "UmPontoDois Software de Gestão",
      duration: "Mai, 2022 - Out, 2024",
      position: "Desenvolvedor de Software",
      description:
        "Analisando e desenvolvendo Softwares de Gestão Comercial e Industrial.",
    }
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "Minha",
    coloredHeading: "Educação",
    description:
      "Comecei cedo na área tech, mas foi na faculdade que eu me apaixonei de vez por desenvolvimento.",
  },
  educationsData: [
    {
      institution: "UNIFRAN",
      duration: "2021-2024",
      degree: "Bacharel em Ciências da Computação",
      description:
        "Abrange programação, algoritmos, inteligência artificial, banco de dados, segurança da informação e redes.",
    },
    {
      institution: "Rocketseat",
      duration: "2025 - Até o momento",
      degree: "Especialização Java",
      description:
        "Desenvolvo aplicações completas e escaláveis com Java e Spring Boot",
    }
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
  ],
};

export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "Latest",
    coloredHeading: "Insights",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
  ],
};

export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
  ],
};

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTATO",
    heading: "Entre em",
    coloredHeading: "Contato",
    description:
      "Pequenas ideias, grandes ideias, pequenas grandes ideias? Não importa, da abstração à solução, eu desenvolvo para você. Vamos conversar?",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Localização",
      data: "Laranjal Paulista - SP",
      Icon: <LocationIcon className="text-theme" />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "lucas.r.bordignon@gmail.com",
      Icon: <EmailIcon className="text-theme" />,
    },
    {
      id: 3,
      field: "Celular",
      data: "(15) 99136-0221",
      Icon: <PhoneIcon className="text-theme" />,
    },
  ],
};
