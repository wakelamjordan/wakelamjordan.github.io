import Section from "./Section";
import Badge from "./Badge";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import Languages from "./Languages";
import Framworks from "./Framworks";
import Card from "./Card";
import Image from "next/image";
import principalPic from "../../img/original.jpg";
import GitHubCalendar from "react-github-calendar";
import imageTest from "../../img/mairie.png";

const Main = () => {
  const listSocial = [
    {
      href: "https://github.com",
      title: "GitHub",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.88 1.51 2.31 1.08 2.88.82.09-.64.34-1.08.62-1.33-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.39-2 .1-2.72 0 0 .83-.27 2.73 1.03.8-.23 1.66-.34 2.51-.34.85 0 1.71.12 2.51.34 1.89-1.3 2.72-1.03 2.72-1.03.72.73.1 1.63.1 2.72 0 3.87-2.35 4.73-4.58 4.98.35.31.65.92.65 1.86v2.75c0 .27.16.58.67.48A9.995 9.995 0 0 0 22 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: "https://twitter.com",
      title: "Twitter",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M23.44 4.84c-.81.36-1.69.61-2.61.72.94-.56 1.66-1.45 2-2.51-.88.52-1.86.9-2.9 1.1a4.51 4.51 0 0 0-7.69 4.11A12.82 12.82 0 0 1 1.67 3.15a4.48 4.48 0 0 0-.61 2.27c0 1.56.8 2.94 2.02 3.75a4.47 4.47 0 0 1-2.04-.56v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.15-1.2.15-.29 0-.58-.03-.85-.09.58 1.8 2.26 3.12 4.26 3.16A9.06 9.06 0 0 1 1 18.08 12.75 12.75 0 0 0 6.92 20c8.3 0 12.84-6.88 12.84-12.84 0-.2-.01-.39-.02-.59.88-.64 1.64-1.45 2.24-2.37z" />
        </svg>
      ),
    },
  ];
  const ListCard = [
    {
      src: imageTest,
      alt: "text alternatif",
      title: "titre du projet",
      link: "lien du projet",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consequatur.",
      badgeList: [{ name: "php" }, { name: "js" }],
    },
    {
      src: imageTest,
      alt: "text alternatif",
      title: "titre du projet",
      link: "lien du projet",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consequatur.",
      badgeList: [{ name: "php" }, { name: "js" }],
    },
    {
      src: imageTest,
      alt: "text alternatif",
      title: "titre du projet",
      link: "lien du projet",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consequatur.",
      badgeList: [{ name: "php" }, { name: "js" }],
    },
  ];
  return (
    <main>
      <Section>
        <div className="lg:grid grid-cols-2 lg:grid-cols-3 gap-16 lg:px-10">
          <div className="md:px-24 lg:px-0">
            <div className="mask mask-squircle w-auto min-h-9">
              <Image
                src={principalPic}
                alt="Portrait de Jordan Wakelam Développeur Web"
                className="object-contain w-full h-full"
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
            <h1 className="text-4xl">Développeur Web</h1>
            <div className="md:flex items-center">
              <h2 className="text-2xl md:me-5">
                <nobr>orienté back-end</nobr>
              </h2>
              <Badge>Need Job!</Badge>
            </div>
            <p className="my-10">
              <span className="text-xl bg-accent p-1 text-accent-content rounded">
                Jordan Wakelam
              </span>{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              autem suscipit voluptate libero veniam dolorem quam fugiat qui
              odit rerum!
            </p>
          </div>
        </div>
        <div>
          <SocialLinks listSocial={listSocial} />
        </div>
      </Section>
      <Section title="My Stack">
        <div className="">
          <Languages />
          <Framworks />
        </div>
      </Section>
      <Section title="Mes Projets">
        <div className="flex justify-center my-10">
          <GitHubCalendar username="wakelamjordan" year={"2024"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
          {ListCard.map((card, key) => (
            <Card
              src={card.src}
              alt={card.alt}
              title={card.title}
              link={card.link}
              content={card.content}
              badgeList={card.badgeList}
              key={key}
            />
          ))}
        </div>
        <div className="text-center mt-9">
          <a href="#" className="btn btn-primary rounded-lg">
            Autres projets
          </a>
        </div>
      </Section>
      <Section title="Me contacter" additionalClass={["", ""]}>
        {/* <div className=""> */}
        <div className="grid grid-cols-2 py-12">
          <ContactForm />
          <div className="bg-primary">aa</div>
        </div>
        {/* </div> */}
      </Section>
    </main>
  );
};

export default Main;
