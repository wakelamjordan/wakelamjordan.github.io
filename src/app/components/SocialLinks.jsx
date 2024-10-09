import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialLinks = ({ listSocial }) => {
  const classTransition = [
    "transition",
    "duration-300",
    "ease-in-out",
    "transform",
    "will-change-transform",
    "w-full",
    "hover:scale-125",
    "text-center",
  ].join(" ");
  return (
    <nav className="flex justify-between mt-11 md:mx-10">
      {/* <div className="bg-black"> */}
      {listSocial.map((item, key) => (
        <a
          className={classTransition}
          key={key}
          target={item.target ? item.target : "_blank"}
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          href={item.href}
        >
          <FontAwesomeIcon icon={item.icon} className="link-hover text-4xl md:text-6xl" />
        </a>
      ))}
      {/* </div> */}
    </nav>
  );
};

export default SocialLinks;
