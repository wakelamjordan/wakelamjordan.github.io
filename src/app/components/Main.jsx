import Section from "./Section";
import Badge from "./Badge";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import Languages from "./Languages";
import Framworks from "./Framworks";
import Card from "./Card";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Main = ({ listSocial }) => {
  const ListCard = [
    {
      src: "/img/mairie.png",
      alt: "Site Mairie",
      title: "Site Mairie",
      link: "https://github.com/wakelamjordan/mairie",
      content:
        "site web moderne pour une mairie, permettant aux citoyens d&apos;accéder aux services municipaux, aux actualités locales, et de réaliser certaines démarches en ligne.",
      badgeList: [{ name: "php" }, { name: "js" }],
    },
    {
      src: "/img/mairie.png",
      alt: "Site Mairie",
      title: "Site Mairie",
      link: "https://github.com/wakelamjordan/mairie",
      content:
        "site web moderne pour une mairie, permettant aux citoyens d&apos;accéder aux services municipaux, aux actualités locales, et de réaliser certaines démarches en ligne.",
      badgeList: [{ name: "php" }, { name: "js" }],
      empty: true,
    },
    {
      src: "/img/mairie.png",
      alt: "Site Mairie",
      title: "Site Mairie",
      link: "https://github.com/wakelamjordan/mairie",
      content:
        "site web moderne pour une mairie, permettant aux citoyens d&apos;accéder aux services municipaux, aux actualités locales, et de réaliser certaines démarches en ligne.",
      badgeList: [{ name: "php" }, { name: "js" }],
      empty: true,
    },
  ];
  let classTransition = [
    "transition",
    "duration-1000",
    "ease-in-out",
    "transform",
  ].join(" ");

  return (
    <main>
      <Section>
        <div className="lg:grid grid-cols-2 lg:grid-cols-3 gap-16 lg:px-10">
          <div className="md:px-24 lg:px-0">
            <div className="mask mask-squircle w-auto min-h-9 group">
              <Image
                src="/img/original.jpg"
                alt="Portrait de Jordan Wakelam Développeur Web"
                className={`object-contain w-full h-full group-hover:opacity-0 ${classTransition}`}
                width={500}
                height={500}
                priority
              />
              <Image
                src="/img/reverse.jpg"
                alt="Portrait de Jordan Wakelam Développeur Web"
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${classTransition}`}
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* <div className="flex justify-center max-w-full">
            <Image
              src={principalPic}
              alt="Portrait de Jordan Wakelam Développeur Web"
              className="rounded-full w-full h-full object-cover p-4"
            />
          </div> */}
          <div className="col-span-2 flex flex-col justify-center my-5 lg:px-20s">
            <div className="md:flex items-center">
              <h1 className="text-4xl me-4">Développeur Web</h1>
              {/* <h2 className="text-2xl md:me-5">
                <nobr>orienté back-end</nobr>
              </h2> */}
              <Badge>En recherche d&apos;un poste!</Badge>
            </div>
            <p className="my-10">
              <span className="text-xl bg-info p-1 text-info-content rounded-lg">
                Jordan Wakelam
              </span>{" "}
              – Après 12 ans dans l&apos;armée, où j&apos;ai appris à résoudre
              des problèmes sous pression {"("}parfois littéralement{")"},
              j&apos;ai troqué l&apos;uniforme pour le code. Aujourd&apos;hui,
              en tant que développeur{" "}
              <bold className="text-info-content bg-info rounded-lg p-1">
                back-end
              </bold>
              , j&apos;apporte la même rigueur et détermination à chaque projet.
              À la recherche d&apos;une nouvelle mission, toujours prêt à coder
              !
            </p>
            <a
              href="/file/cv_wakelam_jordan_dev.pdf"
              download="cv_wakelam_jordan_dev"
              className="btn btn-secondary w-32 rounded-lg text-xl"
            >
              Mon cv
            </a>
          </div>
        </div>
        <div>
          <SocialLinks listSocial={listSocial} />
        </div>
      </Section>
      <Section title="My Stack">
        <div className="">
          <Languages />
          <div className="divider"></div>
          <Framworks />
        </div>
      </Section>
      <Section title="Mes Projets">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12">
          {ListCard.map((card, key) => (
            <Card
              src={card.src}
              alt={card.alt}
              title={card.title}
              link={card.link}
              content={card.content}
              badgeList={card.badgeList}
              key={key}
              empty={card.empty}
            />
          ))}
        </div>

        <div className="text-center mt-9">
          <a href="#" className="btn btn-primary rounded-lg">
            Autres projets
          </a>
        </div>
        {/* <div className="divider"></div>
        <div className="flex justify-center my-10">
          <GitHubCalendar username="wakelamjordan" year={"2024"} />
        </div> */}
      </Section>
      <Section title="Me contacter">
        {/* <div className=""> */}
        <div className="md:grid grid-cols-2 py-12 gap-12" id="MeContacter">
          <ContactForm />
          <div className="ms-12">
            <ul className="list-disc">
              <li className="my-5">
                <a
                  href="tel:+0641162313"
                  className="flex gap-3"
                  aria-label="Numéros de téléphone mobile"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-5" /> 06 41 16 23
                  13
                </a>
              </li>
              <li className="my-5">
                <span className="flex gap-3" aria-label="Ville de domicile">
                  <FontAwesomeIcon icon={faHouse} className="w-5" />
                  Étampes
                </span>
              </li>
              <li className="my-5">
                <a
                  href="mailto:jwakelams@gmail.com"
                  className="flex gap-3"
                  aria-label="Adresse mail"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                  jwakelams@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* </div> */}
      </Section>
    </main>
  );
};

export default Main;
