import Image from "next/image";
// import SymfonyPic from "/img/symfony_black_03.svg";
// import ReactPic from "/img/React-icon.svg";

const SymfonyPic = "/img/symfony_black_03.svg";
const ReactPic = "/img/React-icon.svg";
const ApiPlateFormPic = "/img/Logo_Circle webby blue.svg";
const BootstrapPic = "/img/Bootstrap_logo.svg";
const TailwindPic = "/img/Tailwind_CSS_Logo.svg";

const Framworks = () => {
  const classList = ["w-auto", "h-20", "mx-auto"].join(" ");
  return (
    <ul className="grid grid-cols-2 gap-12 my-10 md:grid-cols-5 text-center">
      <li>
        <Image
          src={SymfonyPic}
          alt=""
          className={classList}
          width={20}
          height={20}
        />
        Symfony
      </li>
      <li>
        <Image
          src={ReactPic}
          alt=""
          className={classList}
          width={20}
          height={20}
        />
        React
      </li>
      <li>
        <Image
          src={ApiPlateFormPic}
          alt=""
          className={classList}
          width={20}
          height={20}
        />
        Api Platform
      </li>
      <li>
        <Image
          src={BootstrapPic}
          alt=""
          className={classList}
          width={20}
          height={20}
        />
        BootStrap
      </li>
      <li>
        <Image
          src={TailwindPic}
          alt=""
          className={classList}
          width={20}
          height={20}
        />
        Tailwind
      </li>
    </ul>
  );
};

export default Framworks;
