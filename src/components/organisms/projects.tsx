import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Project } from "../molecules/project";
import { Section } from "../molecules/section";
import amawFinanceApi from "../../assets/amaw-finance-api.png"
import amawFinanceWeb from "../../assets/amaw-finance-web.png"
import amawFinanceMobile from "../../assets/amaw-finance-mobile.png"
import typescriptIcon from "../../assets/ts.svg"
import nodejsIcon from "../../assets/nodejs.svg"
import postgresqlIcon from "../../assets/postgresql.svg"
import dockerIcon from "../../assets/docker.svg"
import reactIcon from "../../assets/react.svg"
import flutterIcon from "../../assets/flutter.svg"
import jestIcon from "../../assets/jest.svg"
import dartIcon from "../../assets/dart.svg"

export const Projects = () => {
  const projects = [
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
  ];
  
  return (
    <Section>
      <div className="flex flex-col w-[100%] ">
        <div className="flex flex-col gap-6">
          <EmojiText>{"🔗 Portfólio"}</EmojiText>
          <Heading>{"Projetos"}</Heading>
        </div>
        <div className="w-full overflow-x-auto mt-10">
          <div className="flex w-fit gap-8 md:w-full md:grid-cols-fluid md:grid sm:gap-10 xl2:grid-cols-fluid2 xl3:grid-cols-fluid3 justify-evenly">
            {projects.map((p, n: number) => (
              <Project
                key={n}
                title={p.title}
                description={p.description}
                icons={p.icons}
                img={p.img}
                link={p.link}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
