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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus("Sending...");

    emailjs
      .send(
        "service_9b9j89l", // Replace with your EmailJS Service ID
        "template_j6btamb",
        {
            from_name: formData.name,
            reply_to: formData.email, // This should match the variable name in the template
            message: formData.message,
        } ,// Replace with your EmailJS Template ID
        "PKBV0t2Gqm72QIhPN" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setFormStatus("Thank you for reaching out!");
          setFormData({ name: formData.name, email: formData.email, message: formData.message });
        },
        (error) => {
          setFormStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="dark:bg-gradient-to-br dark:from-white dark:to-white flex flex-col items-center rounded-3xl justify-center py-10 px-4 md:px-8 bg-gradient-to-br from-black-100 to-[#10172e]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-[20px] p-6 shadow-lg z-50"
      >
        <div className="mb-2">
          <label
            className="block text-gray-300 text-sm font-semibold mb-2 dark:text-black-100"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 dark:text-black-100 border border-gray-600 rounded-full bg-gray-800 dark:bg-transparent text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-300 text-sm font-semibold mb-2 dark:text-black-100"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-full dark:bg-transparent bg-gray-800 text-white dark:text-black-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-300 text-sm font-semibold mb-2 dark:text-black-100"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border dark:text-black-100 border-gray-600 rounded-[25px] dark:bg-transparent bg-gray-800 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
            <MagicButton
              title="Send"
              icon={<FaLocationArrow />}
              position="right"
              type="submit"
            />
        </div>
          <p className="text-sm text-center text-green-400">{formStatus}</p>
      </form>
    </div>
  );
};

export default ContactForm;
