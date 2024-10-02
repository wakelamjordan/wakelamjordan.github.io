import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import {
  faGithub,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const listSocial = [
    {
      href: "https://github.com/wakelamjordan",
      ariaLabel: "lien profil GitHub",
      icon: faGithub,
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/jordan-wakelam-350a24241",
      ariaLabel: "Lien Profil Linkedin",
    },
    {
      icon: faSkype,
      href: "https://join.skype.com/invite/FbzCKQwUAiYx",
      ariaLabel: "Lien de contacte Skype",
    },
    {
      icon: faEnvelope,
      href: "#MeContacter",
      ariaLabel: "Lien Profil GitHub a faire",
      target: "_self",
    },
  ];
  console.log("kjhskdhq")
  return (
    // <div className="grid grid-rows-[20px_1fr_20px]s items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className=""><button className="btn btn-secondary">hhhh</button></div>
    // </div>
    <div className="sm:container mx-auto">
      <div className="lg:mx-6">
        {/* <Header /> */}
        <Main listSocial={listSocial} />
        <Footer listSocial={listSocial} />
      </div>
    </div>
  );
}
