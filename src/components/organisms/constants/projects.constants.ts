import amawFinanceApi from "../../../assets/amaw-finance-api.png";
import amawFinanceWeb from "../../../assets/amaw-finance-web.png";
import amawFinanceMobile from "../../../assets/amaw-finance-mobile.png";
import typescriptIcon from "../../../assets/ts.svg";
import nodejsIcon from "../../../assets/nodejs.svg";
import postgresqlIcon from "../../../assets/postgresql.svg";
import dockerIcon from "../../../assets/docker.svg";
import reactIcon from "../../../assets/react.svg";
import flutterIcon from "../../../assets/flutter.svg";
import jestIcon from "../../../assets/jest.svg";
import dartIcon from "../../../assets/dart.svg";

export type projectsData = {
  emojiText: string;
  heading: string;
  projects: {
    title: string;
    description: string;
    img: string;
    icons: {
      title: string;
      path: string;
    }[];
    link: string;
  }[];
};

export const projectsDataPT: projectsData = {
  emojiText: "🔗 Portfólio",
  heading: "Projetos",
  projects: [
    {
      title: "Amaw Finance API",
      description:
        "Este projeto é API do projeto Amaw Finance, uma plataforma de controle financeiro pessoal em NodeJS, TypeScript e PostgreSQL.",
      img: amawFinanceApi,
      icons: [
        { title: "node js", path: nodejsIcon },
        { title: "typescript", path: typescriptIcon },
        { title: "postgreSQL", path: postgresqlIcon },
        { title: "docker", path: dockerIcon },
        { title: "jest", path: jestIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance-api",
    },
    {
      title: "Amaw Finance Mobile",
      description:
        "Este projeto é a interface da plataforma Amaw Finance, com a versão móvel criada usando Flutter e Dart.",
      img: amawFinanceMobile,
      icons: [
        { title: "flutter", path: flutterIcon },
        { title: "dart", path: dartIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance_mobile",
    },
    {
      title: "Amaw Finance Web",
      description:
        "Este projeto é a interface da plataforma financeira Amaw Finance, desenvolvida com ReactJS e TypeScript.",
      img: amawFinanceWeb,
      icons: [
        { title: "react js", path: reactIcon },
        { title: "typescript", path: typescriptIcon },
        { title: "jest", path: jestIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance-web",
    },
  ],
};

export const projectsDataEN: projectsData = {
  emojiText: "🔗 Portfolio",
  heading: "Projects",
  projects: [
    {
      title: "Amaw Finance API",
      description:
        "This project is the API of the Amaw Finance project, a personal financial control platform built with NodeJS, TypeScript, and PostgreSQL.",
      img: amawFinanceApi,
      icons: [
        { title: "node js", path: nodejsIcon },
        { title: "typescript", path: typescriptIcon },
        { title: "postgreSQL", path: postgresqlIcon },
        { title: "docker", path: dockerIcon },
        { title: "jest", path: jestIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance-api",
    },
    {
      title: "Amaw Finance Mobile",
      description:
        "This project is the interface of the Amaw Finance platform, with the mobile version created using Flutter and Dart.",
      img: amawFinanceMobile,
      icons: [
        { title: "flutter", path: flutterIcon },
        { title: "dart", path: dartIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance_mobile",
    },
    {
      title: "Amaw Finance Web",
      description:
        "This project is the interface of the financial platform Amaw Finance, developed with ReactJS and TypeScript.",
      img: amawFinanceWeb,
      icons: [
        { title: "react js", path: reactIcon },
        { title: "typescript", path: typescriptIcon },
        { title: "jest", path: jestIcon },
      ],
      link: "https://github.com/wendelsantosd/amawfinance-web",
    },
  ],
};
