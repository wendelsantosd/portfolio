import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Skill } from "../molecules/skill";
import { Section } from "../molecules/section";
import pageIcon from "../../assets/page.svg"
import dbIcon from "../../assets/db.svg"
import devopsIcon from "../../assets/devops.svg"
export const Skills = () => {
  const skills = [
    {
      title: "Front end",
      description:
        "Desenvolvimento de sites responsivos e interativos com tecnologias modernas, incluindo React, Next, Tailwind CSS e Styled Components.",
      img: pageIcon,
    },
    {
      title: "Back end",
      description:
        "Desenvolvimento de soluções no servidor com Node.js e o framework NestJS, aplicando Desenvolvimento Orientado a Testes (TDD) e arquitetura limpa para criar APIs eficientes e escaláveis.",
      img: dbIcon,
    },
    {
      title: "Devops",
      description:
        "Iniciando na área, concentrado em microserviços e criação de pipelines para configurar serviços, pods, deployments e gateways. Meu objetivo é aprimorar minhas habilidades em DevOps, contribuindo na implementação e manutenção de ambientes de desenvolvimento.",
      img: devopsIcon,
    }
  ];
  return (
    <Section>
      <div className="flex flex-col items-center gap-5 w-full text-center">
        <EmojiText>🧑‍💻 skills</EmojiText>
        <Heading>Tecnologias e Habilidades</Heading>
        <div className="overflow-x-auto w-full">
          <div className="mt-6 flex w-fit gap-5 md:w-full md:justify-center md:flex-wrap xl:gap-7 xl2:gap-10">
            {skills.map((s, n: number) => (
              <Skill
                key={n}
                title={s.title}
                description={s.description}
                img={s.img}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
