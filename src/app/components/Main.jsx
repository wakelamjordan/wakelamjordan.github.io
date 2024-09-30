import Section from "./Section";
import Badge from "./Badge";
import SocialLinks from "./SocialLinks";
import Languages from "./Languages";
import Framworks from "./Framworks";
import Image from "next/image";
import principalPic from "../../img/original.jpg";

const Main = () => {
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
          <SocialLinks />
        </div>
      </Section>
      <Section title="My Stack">
        <div className="">
          <Languages />
          <Framworks />
        </div>
      </Section>
      <Section title="Mes Projets">ddddd</Section>
    </main>
  );
};

export default Main;
