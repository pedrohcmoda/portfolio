import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "C",
    Image: "/c.png",
    width: 50,
    height: 50,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 50,
    height: 50,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 50,
    height: 50,
  },
  {
    name: "Postgresql",
    Image: "/postgres.png",
    width: 50,
    height: 50,
  },
  {
    name: "Vue",
    Image: "/vue.png",
    width: 65,
    height: 65,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 50,
    height: 50,
  },
  {
    name: "Flask",
    Image: "/flask.png",
    width: 60,
    height: 60,
  },
  {
    name: "Spring",
    Image: "/spring.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/pedrohcmoda/"
  },
  {
    name: "Github",
    src: "/github.png",
    link: "https://github.com/pedrohcmoda"
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com"
  },
];
export const Projects = [
  {
    title: "CryptoWeb",
    text: "Projeto desenvolvido em grupo, que utiliza uma combinação de tecnologias para oferecer uma experiência completa aos usuários interessados em acompanhar o mercado de criptomoedas. (Em desenvolvimento)",
    src: "/cryptoweb.png",
  },
  {
    title: "Stocklite",
    text: "Projeto desenvolvido com Java e PostgreSQL, visando otimizar a gestão de estoques, auxiliando os gerentes no controle e planejamento de suas atividades.",
    src: "/stocklite.png",
  },
  {
    title: "Back-end clean architecture",
    text: "CRUD simples desenvolvido em TypeScript utilizando o framework Elysia e banco de dados postgreSQL, seguindo o padrão de arquitetura limpa.",
    src: "/cleanBackend.png",
  },
  {
    title: "CRUD de produto",
    text: "CRUD simples de produtos desenvolvido em C# utilizando o framework .NET e banco de dados mySQL.",
    src: "/cruddotnet.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/minhas-skills",
    icon: RxPerson,
    link: "/minhas-skills/",
  },
  {
    name: "/meus-projetos",
    icon: RxDashboard,
    link: "/meus-projetos/",
  },
  {
    name: "/me-contate",
    icon: RxClipboard,
    link: "/me-contate/",
  },
];