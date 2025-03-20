import logo from "@/public/assets/img/site-logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaRegFileAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoBriefcaseOutline, IoHomeOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "LRB",
    url: "/",
    text: "LRB",
  },
  headersMenu: [
    {
      id: 1,
      title: "início",
      selector: "#home",
      url: "/",
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "Sobre",
      selector: "#about",
      url: "/",
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Serviços",
      selector: "#service",
      url: "/",
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "Skills",
      selector: "#skill",
      url: "/",
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "Resumo",
      selector: "#resume",
      url: "/",
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 6,
    //   title: "Portifólio",
    //   selector: "#portfolio",
    //   url: "/",
    //   Icon: <MdFormatListBulleted />,
    //   notVisibleRoutes: [],
    // },
    {
      id: 7,
      title: "Contato",
      selector: "#contact",
      url: "/",
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
  ],
  socialMedias: [
    {
      id: 1,
      name: "Facebook",
      tooltip: "Share with Facebook",
      Icon: <FaFacebook />,
      url: "#",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "#",
    },
    {
      id: 3,
      name: "X",
      tooltip: "Share with X",
      Icon: <FaTwitter />,
      url: "#",
    },
    {
      id: 4,
      name: "Instagram",
      tooltip: "Share with Instagram",
      Icon: <FaInstagram />,
      url: "#",
    },
  ],
  preloader: {
    image: logo?.src,
  },
};
