import Image from "next/image";
import PhpPic from "../../img/php-svgrepo-com.svg";
import JavascriptPic from "../../img/Unofficial_JavaScript_logo_2.svg";

const Languages = () => {
  const classList = ["w-auto", "h-32"].join(" ");
  return (
    <ul className="flex justify-around mt-6 border sm:border-none px-5 rounded-lg">
      <li>
        <Image src={PhpPic} alt="" className={classList} />
      </li>
      <li>
        <Image src={JavascriptPic} alt="" className={classList} />
      </li>
    </ul>
  );
};

export default Languages;
