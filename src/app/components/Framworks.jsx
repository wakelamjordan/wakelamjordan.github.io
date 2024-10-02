import Image from "next/image";
const Framworks = () => {
  const classList = ["w-auto", "h-20", "mx-auto"].join(" ");
  return (
    <ul className="grid grid-cols-2 gap-12 my-10 md:grid-cols-5 text-center">
      <li>
        <Image
          src="/img/symfony_black_03.svg"
          alt="Logo Symfony"
          className={classList}
          width={50}
          height={50}
        />
        Symfony
      </li>
      <li>
        <Image
          src="/img/React-icon.svg"
          alt="Logo React"
          className={classList}
          width={50}
          height={50}
        />
        React
      </li>
      <li>
        <Image
          src="/img/Logo_Circle webby blue.svg"
          alt="Logo Api Plateforme"
          className={classList}
          width={50}
          height={50}
        />
        Api Platform
      </li>
      <li>
        <Image
          src="/img/Bootstrap_logo.svg"
          alt="Logo Bootstrap"
          className={classList}
          width={50}
          height={50}
        />
        BootStrap
      </li>
      <li>
        <Image
          src="/img/Tailwind_CSS_Logo.svg"
          alt="Logo Tailwind"
          className={classList}
          width={50}
          height={50}
        />
        Tailwind
      </li>
    </ul>
  );
};

export default Framworks;
