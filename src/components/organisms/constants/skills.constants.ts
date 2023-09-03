import pageIcon from "../../../assets/page.svg"
import dbIcon from "../../../assets/db.svg"
import devopsIcon from "../../../assets/devops.svg"

export type SkillsData = {
  heading: string
  skills: {
    title: string
    description: string
    img: string
  }[]
}

export const skillsDataPT: SkillsData = {
  heading: 'Tecnologias e Habilidades',
  skills: [
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
  ]
}

export const skillsDataEN: SkillsData = {
  heading: 'Technologies and Skills',
  skills: [
    {
      title: "Front end",
      description:
        "Developing responsive and interactive websites using modern technologies, including React, Next, Tailwind CSS, and Styled Components.",
      img: pageIcon,
    },
    {
      title: "Back end",
      description:
        "Creating server-side solutions with Node.js and the NestJS framework, applying Test-Driven Development (TDD) and clean architecture principles to build efficient and scalable APIs.",
      img: dbIcon,
    },
    {
      title: "Devops",
      description:
        "Getting started in the field, focusing on microservices and pipeline creation to configure services, pods, deployments, and gateways. My goal is to enhance my DevOps skills by contributing to the implementation and maintenance of development environments.",
      img: devopsIcon,
    }
  ]
}