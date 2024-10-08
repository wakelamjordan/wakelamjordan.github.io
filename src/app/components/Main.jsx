import Section from "./Section";
import Badge from "./Badge";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import Languages from "./Languages";
import Framworks from "./Framworks";
import Card from "./Card";
import Image from "next/image";
// import GitHubCalendar from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = ({ listSocial, listCard, section1 }) => {
  let classTransition = [
    "transition",
    "duration-1000",
    "ease-in-out",
    "transform",
  ].join(" ");

  // const textIntro = section1.textIntro;

  return (
    <main>
      <Section>
        <div className="lg:grid grid-cols-2 lg:grid-cols-3 gap-16 lg:px-10">
          <div className="md:px-24 lg:px-0">
            <div className="mask mask-squircle w-auto min-h-9 group">
              <Image
                src="/img/original.jpg"
                alt={section1.altFirstImageAvatar}
                className={`object-contain w-full h-full group-hover:opacity-0 ${classTransition}`}
                width={500}
                height={500}
                priority
              />
              <Image
                src="/img/reverse.jpg"
                alt={section1.altSecondImageAvatar}
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${classTransition}`}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-center my-5 lg:px-20s">
            <div className="md:flex items-center">
              <h1 className="text-4xl me-4">{section1.title}</h1>
              {section1.badge ? <Badge>{section1.badge}</Badge> : null}
            </div>
            <div dangerouslySetInnerHTML={{ __html: section1.textIntro }} />
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
      <Section title="Mes Compétences">
        <div className="">
          <Languages />
          <div className="divider"></div>
          <Framworks />
        </div>
      </Section>
      <Section title="Mes Projets">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12">
          {listCard.map((card, key) => (
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
          <a
            href="https://github.com/wakelamjordan?tab=repositories"
            className="btn btn-primary rounded-lg"
            target="_blank"
          >
            Autres projets
          </a>
        </div>
        {/* <div className="divider"></div>
        <div className="flex justify-center my-10">
          <GitHubCalendar username="wakelamjordan" year={"2024"} />
        </div> */}
      </Section>
      <Section title="Me contacter" additionalClass={["p-0", "md:p-10"]}>
        {/* <div className=""> */}
        <div className="md:grid grid-cols-2 py-12 gap-12" id="MeContacter">
          <ContactForm email={section1.email} />
          <ContactForm email={section1.email} />
          <div className="ms-12">
            <ul className="list-disc">
              <li className="my-5">
                <a
                  href={`tel:+${section1.phoneNumber.replace(/\s/g, "")}`}
                  className="flex gap-3"
                  aria-label="Numéros de téléphone mobile"
                >
                  <FontAwesomeIcon icon={"fa-solid fa-phone"} className="w-5" />{" "}
                  {section1.phoneNumber}
                </a>
              </li>
              <li className="my-5">
                <span className="flex gap-3" aria-label="Ville de domicile">
                  <FontAwesomeIcon icon={"fa-solid fa-house"} className="w-5" />
                  {section1.location}
                </span>
              </li>
              <li className="my-5">
                <a
                  href={`mailto:${section1.email}`}
                  className="flex gap-3 link link-hover"
                  className="flex gap-3 link link-hover"
                  aria-label="Adresse mail"
                >
                  <FontAwesomeIcon icon={"fa-solid fa-at"} className="w-5" />
                  <FontAwesomeIcon icon={"fa-solid fa-at"} className="w-5" />
                  {section1.email}
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
