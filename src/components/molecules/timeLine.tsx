import { useLanguage } from "../../contexts/language";
import { timeLineDataEN, timeLineDataPT } from "./constants/timeLine.constants";
import { TimeLineElement } from "./timeLineElement";

export const TimeLine = () => {
  const { isPT } = useLanguage()
  const timeLine = isPT ? timeLineDataPT : timeLineDataEN
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
