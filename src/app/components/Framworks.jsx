import Image from "next/image";
import SymfonyPic from "../../img/symfony_black_03.svg";
import ReactPic from "../../img/React-icon.svg";
import ApiPlateFormPic from "../../img/Logo_Circle webby blue.svg";
import BootstrapPic from "../../img/Bootstrap_logo.svg";
import TailwindPic from "../../img/Tailwind_CSS_Logo.svg";
const Framworks = () => {
  const classList = ["w-auto", "h-20","mx-auto"].join(" ");
  return (
    <ul className="grid grid-cols-2 gap-12 my-10 md:grid-cols-5">
      <li>
        <Image src={SymfonyPic} alt="" className={classList} />
      </li>
      <li>
        <Image src={ReactPic} alt="" className={classList} />
      </li>
      <li>
        <Image src={ApiPlateFormPic} alt="" className={classList} />
      </li>
      <li>
        <Image src={BootstrapPic} alt="" className={classList} />
      </li>
      <li>
        <Image src={TailwindPic} alt="" className={classList} />
      </li>
    </ul>
  );
};

export default Framworks;
