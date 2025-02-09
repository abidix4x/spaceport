"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import MagicButton from "../main/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Sending...");
    setError(false);

    try {
      await emailjs.send(
        "service_9b9j89l", // Remplace avec ton Service ID
        "template_j6btamb", // Remplace avec ton Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "PKBV0t2Gqm72QIhPN" // Remplace avec ton User ID
      );

      setFormStatus("Thank you for reaching out!");
      setFormData({ name: "", email: "", message: "" }); // Réinitialisation du formulaire
    } catch (error) {
      setFormStatus("Failed to send message. Please try again later.");
      setError(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-white flex flex-col items-center rounded-3xl justify-center py-10 px-4 md:px-8 dark:bg-gradient-to-br dark:from-black-100 dark:to-[#10172e]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-[20px] p-6 shadow-drop dark:shadow-dropDarkin z-50"
        aria-labelledby="contact-form-title"
      >
        <h2 id="contact-form-title" className="sr-only">
          Contact Form
        </h2>

        {/* Champ Name */}
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-black-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-full bg-transparent text-black-100 dark:text-white shadow-drop dark:shadow-dropDarkin focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600"
            required
            aria-invalid={error ? "true" : "false"}
          />
        </div>

        {/* Champ Email */}
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-black-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-full bg-transparent text-black-100 dark:text-white shadow-drop dark:shadow-dropDarkin focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600"
            required
            aria-invalid={error ? "true" : "false"}
          />
        </div>

        {/* Champ Message */}
        <div className="mb-2">
          <label htmlFor="message" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-black-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="resize-none w-full px-4 py-2 border rounded-[25px] bg-transparent text-black-100 dark:text-white shadow-drop dark:shadow-dropDarkin focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600"
            required
            aria-invalid={error ? "true" : "false"}
          />
        </div>

        {/* Bouton Submit */}
        <div className="flex items-center justify-between">
          <MagicButton title="Send" icon={<FaLocationArrow />} position="right" type="submit" />
        </div>

        {/* Message de statut */}
        <p
          className={`text-sm text-center ${error ? "text-red-400" : "text-green-400"}`}
          aria-live="polite"
        >
          {formStatus}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
