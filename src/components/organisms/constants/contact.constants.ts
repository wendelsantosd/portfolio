import mailIcon from "../../../assets/mail.svg";
import lnIcon from "../../../assets/ln.svg";
import gitIcon from "../../../assets/git.svg";

export type Contacts = {
  img: string
  title: string
  content: string
}[]

export const contacts: Contacts =  [
  { img: mailIcon, title: "Email", content: "wendelwcsantos@gmail.com" },
  {
    img: lnIcon,
    title: "LinkedIn",
    content: "https://www.linkedin.com/in/engwendelsantos",
  },
  {
    img: gitIcon,
    title: "GitHub",
    content: "https://github.com/wendelsantosd",
  },
];