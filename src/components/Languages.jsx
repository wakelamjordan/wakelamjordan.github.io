import Image from "next/image";
const PhpPic = "/image/php-svgrepo-com.svg";
const JavascriptPic = "/image/Unofficial_JavaScript_logo_2.svg";

const Languages = () => {
  const classList = ["w-auto", "h-32"].join(" ");
  return (
    <ul className="flex justify-around mt-6 border sm:border-none px-5 rounded-lg">
      <li>
        <Image
          src={PhpPic}
          alt=""
          className={classList}
          width={200}
          height={200}
        />
      </li>
      <li>
        <Image
          src={JavascriptPic}
          alt=""
          className={classList}
          height={200}
          width={200}
        />
      </li>
    </ul>
  );
};

export default Languages;
