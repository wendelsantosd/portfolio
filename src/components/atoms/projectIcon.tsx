import { Icon } from "../../types/project";

export const ProjectIcon = ({ title, path }: Icon) => {
  return (
    <img
      className="w-[calc(27px)] rounded-md "
      src={path}
      title={title.charAt(0).toUpperCase() + title.slice(1)}
    ></img>
  );
};
