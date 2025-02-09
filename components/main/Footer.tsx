import { SOCIALMEDIA } from "@/data/socialMedia";
import ContactMeForm from "../sub/ContactMeForm";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="Decorative grid background"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="heading lg:max-w-[45vw] text-black-100 dark:text-white"
        >
          Contact <span className="text-purple">me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="dark:text-white-200 md:mt-10 my-5 text-center text-black-200"
        >
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <ContactMeForm />
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="flex mt-4 md:flex-row justify-center flex-col items-center"
      >
        <div className="flex items-center gap-6 md:gap-3 justify-center">
          {SOCIALMEDIA.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${icon.href} profile`} // Adds screen reader-friendly text
              className="hover:scale-110 transition duration-200 w-11 h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-95 dark:bg-black-200 rounded-full border border-black-300 bg-gradient-to-br from-violet-400 to-purple"
            >
              {icon.img}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
