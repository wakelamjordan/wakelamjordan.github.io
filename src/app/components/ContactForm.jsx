"use client";

import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // L'URL de ton script Google Apps
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzshls6yne_miTLKJOpWVc8ttl-9Q80z6N9TyKzRAAb5CSUkJBgjNfvtq_bf72I794l/exec";

    // Envoie les données via une requête POST
    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => alert("Message envoyé avec succès !"))
      .catch((error) =>
        console.error("Erreur lors de l'envoi du formulaire !", error)
      );
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form max-w-xl grid gap-2">
      <div className="">
        <label className="input input-bordered flex items-center gap-2 w-full">
          Name
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
      <div className="">
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
      <div>
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
      <button type="submit" className="btn btn-primary rounded-lg w-full">
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
