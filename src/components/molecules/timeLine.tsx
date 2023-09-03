import { TimeLineElement } from "./timeLineElement";

export const TimeLine = () => {
  const timeLine = [
    {
      title: "2020",
      description:
        "Iniciei minha carreira com um estágio em que desenvolvemos uma plataforma de monitoramento para usinas fotovoltaicas, utilizando React e Node.",
    },
    {
      title: "2021",
      description:
        "Fui convidado a fazer parte de uma equipe que desenvolveu uma plataforma de educação alimentar, atuando tanto no back-end quanto no front-end para as versões web e mobile.",
    },
    {
      title: "2022",
      description:
        "Participei de um projeto dedicado à gestão de pedidos para empresas de transporte rodoviário, envolvendo a criação e manuntenção de vários microfrontends e microsserviços.",
    },
    {
      title: "2023",
      description: "Trabalhei como analista e desenvolvedor de sistemas em empresas financeiras renomadas, incluindo a XP Inc. e o Banco Modal. Minha atuação se concentrou no desenvolvimento de aplicativos financeiros de alto desempenho, com foco na antecipação de recebíveis e créditos.",
    },
  ];
  return (
    <div className="xl:flex xl:w-full">
      {timeLine.map((i, n: number) => (
        <TimeLineElement
          position={n}
          key={n}
          title={i.title}
          description={i.description}
          last={n === timeLine.length - 1}
        />
      ))}
    </div>
  );
};
