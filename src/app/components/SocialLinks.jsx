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
    <nav className="my-10">
      <div className="grid grid-cols-2s md:grid-cols-none grid-flow-col gap-2 md:gap-4 justify-items-center">
        {listSocial.map((item, key) => (
          <a
            className={classTransition}
            key={key}
            target={item.target ? item.target : "_blank"}
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            href={item.href}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-primary w-12 h-12 mx-autos"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SocialLinks;
