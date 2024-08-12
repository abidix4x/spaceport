
import { SOCIALMEDIA } from "@/data/socialMedia";
import ContactMeForm from "../sub/ContactMeForm";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-black-100 dark:text-white">
          Contact <span className="text-purple">me</span>
        </h1>
        <p className="dark:text-white-200 md:mt-10 my-5 text-center text-black-200">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <ContactMeForm />
      </div>
      <div className="flex mt-4 md:flex-row justify-center flex-col items-center">
        {/* <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024
        </p> */}

        <div className="flex items-center gap-6 md:gap-3 justify-center">
          {SOCIALMEDIA.map((icon) => (
            <div
              key={icon.id}
              className="hover:scale-110 transition duration-200 w-11 h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-95 dark:bg-black-200 rounded-full border border-black-300 bg-gradient-to-br from-violet-400 to-purple"
            >
              <a href={icon.href} target="balnk">
               {icon.img}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
