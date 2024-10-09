import Section from "./Section";
import Badge from "./Badge";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import Languages from "./Languages";
import Framworks from "./Framworks";
import Card from "./Card";
import Avatar from "./Avatar";
// import GitHubCalendar from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = ({ listSocial, listCard, sectionData }) => {
  // const textIntro = sectionData.textIntro;

  return (
    <main>
      <Section additionalClass={["px-0"]}>
        <div className="grid lg:grid-cols-3 gap-8 px-10 items-center">
          <Avatar sectionData={sectionData} />
          <div className="lg:col-span-2">
            <div className="">
              <h1 className="text-4xl">{sectionData.title}</h1>
              {sectionData.badge ? <Badge>{sectionData.badge}</Badge> : null}
            </div>
            <div dangerouslySetInnerHTML={{ __html: sectionData.textIntro }} />
            <a
              href="/file/cv_wakelam_jordan_dev.pdf"
              download="cv_wakelam_jordan_dev"
              className="btn btn-secondary w-full md:w-1/2 lg:w-1/3 rounded-lg text-xl"
            >
              Mon cv
            </a>
          </div>
        </div>
        <div className="">
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
        <div className="md:grid grid-cols-2 md:py-12 gap-12" id="MeContacter">
          <ContactForm email={sectionData.email} />
          <div className="ms-12">
            <ul className="list-disc">
              <li className="my-5 md:text-xl lg:text-2xl">
                <a
                  href={`tel:+${sectionData.phoneNumber.replace(/\s/g, "")}`}
                  className="flex gap-3 link-hover"
                  aria-label="Numéros de téléphone mobile"
                >
                  <FontAwesomeIcon icon={"fa-solid fa-phone"} className="" />{" "}
                  {sectionData.phoneNumber}
                </a>
              </li>
              <li className="my-5 md:text-xl lg:text-2xl">
                <span className="flex gap-3" aria-label="Ville de domicile">
                  <FontAwesomeIcon icon={"fa-solid fa-house"} className="" />
                  {sectionData.location}
                </span>
              </li>
              <li className="my-5 md:text-xl lg:text-2xl">
                <a
                  href={`mailto:${sectionData.email}`}
                  className="flex gap-3 link link-hover"
                  aria-label="Adresse mail"
                >
                  <FontAwesomeIcon icon={"fa-solid fa-at"} className="" />
                  {sectionData.email}
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
