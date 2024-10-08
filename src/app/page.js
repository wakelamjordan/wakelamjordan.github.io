"use client";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./resources/icons.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setcontent] = useState(null);
  useEffect(() => {
    fetch("/data/content.json")
      .then((response) => response.json())
      .then((data) => setcontent(data))
      .catch((error) =>
        console.log(`érreur de récupération du content: ${error}`)
      );
  }, []);

  if (!content)
    return (
      <div className="h-screen flex justify-center transition duration-300">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  // console.log(content);

  // if (content)
    return (
      <div className="sm:container mx-auto">
        {/* <div className="h-screen flex justify-center transition duration-300">
          <span className="loading loading-ring loading-lg"></span>
        </div> */}
        <div className="lg:mx-6">
          {/* <Header /> */}
          <Main
            listSocial={content.listSocial}
            listCard={content.listCard}
            section1={content.section1}
          />
          <Footer listSocial={content.listSocial} />
        </div>
      </div>
    );
}
