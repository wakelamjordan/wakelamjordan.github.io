"use client";

import {
  faCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  // passe en true directement à l'exécution afin de transformer le button envoyer en loader
  const [isLoading, setLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("Merci!");
  const [modalContent, setModalContent] = useState(
    "Je vous recontacte au plus vite 👍"
  );
  const [disabled, setDisabled] = useState();

  const [sendButtonMessage, setSendButtonMessage] = useState("Envoyer");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function successSubmit() {
    // alert("Message envoyé avec succès !");
    setLoading(false);
    setSendButtonMessage(
      <FontAwesomeIcon icon={faCheck} className="text-success text-4xl" />
    );
    setDisabled(true);
    // modal.showModal();
  }

  function errorSubmit(error) {
    console.error("Erreur lors de l'envoi du formulaire !", error);
    setModalTitle(<span className="text-error">Une erreur est survenue</span>);
    setModalContent(
      <>
        Vous pouvez me contacter à l&apos;adresse suivante:{" "}
        <a href="mailto:jwakelams@gmail.com">jwakelams@gmail.com</a>
      </>
    );

    setSendButtonMessage(
      <FontAwesomeIcon
        icon={faCircleExclamation}
        className="text-error text-4xl"
      />
    );
    setLoading(false);
    setDisabled(true);
  }

  const handleSubmit = (e) => {
    // passe en true directement à l'exécution afin de transformer le button envoyer en loader
    setLoading(true);
    e.preventDefault();
    // L'URL de ton script Google Apps
    const scriptURL =
      //   "https://script.google.com/macros/s/AKfycbzshls6yne_miTLKJOpWVc8ttl-9Q80z6N9TyKzRAAb5CSUkJBgjNfvtq_94l/exec";
      "https://script.google.com/macros/s/AKfycbzshls6yne_miTLKJOpWVc8ttl-9Q80z6N9TyKzRAAb5CSUkJBgjNfvtq_bf72I794l/exec";

    // Envoie les données via une requête POST
    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => successSubmit())
      .catch((error) => errorSubmit(error));
    setTimeout(document.getElementById("my_modal_2").showModal(), 2000000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form min-h-full">
        <div className="my-5">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Nom
            <input
              className=""
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="my-5">
          {/* <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        /> */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            Email
            <input
              className=""
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* <input type="text" className="grow" placeholder="Email" /> */}
          </label>
        </div>
        <div className="my-5">
          <textarea
            className="textarea textarea-secondary min-w-full"
            placeholder="Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          id="buttonSend"
          type="submit"
          className="btn btn-primary rounded-lg w-full"
          disabled={disabled}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            sendButtonMessage
          )}
        </button>

        {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      </form>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 id="modalTitle" className="font-bold text-lg">
            {modalTitle}
          </h3>
          <p id="modalContent" className="py-4">
            {modalContent}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                className="btn btn-primary text-primary-content rounded-lg"
                aria-label="Retour"
              >
                Retour
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ContactForm;
