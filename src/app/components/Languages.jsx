import Image from "next/image";

const Languages = () => {
  const classList = ["w-auto", "h-32"].join(" ");
  return (
    <ul className="flex justify-around mt-6 border sm:border-none px-5 rounded-lg">
      <li>
        <Image
          src="/img/php-svgrepo-com.svg"
          alt="Logo Php"
          className={classList}
          width={50}
          height={50}
        />
      </li>
      <li>
        <Image
          src="/img/Unofficial_JavaScript_logo_2.svg"
          alt="Logo JavaScript"
          className={classList}
          width={50}
          height={50}
        />
      </li>
    </ul>
  );
};

export default Languages;
