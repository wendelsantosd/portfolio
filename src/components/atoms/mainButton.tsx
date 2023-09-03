import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onclick?: () => void;
}
export const MainButton = ({ children, onclick }: props) => {
  return (
    <button
      onClick={() => onclick && onclick()}
      className="dark:text-dprimary dark:border-dprimary border-solid border-2 border-primary  text-primary text-xs px-6 py-1  md:text-sm md:px-10 xl2:text-base xl2:px-10 transition-colors font-medium hover:shadow-light dark:hover:shadow-dark"
    >
      {children}
    </button>
  );
};
