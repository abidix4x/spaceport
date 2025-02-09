import React from "react";

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  type = "button",
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  type?: "reset" | "submit" | "button";
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[2px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
      type={type}
      role="button"
      aria-label={title || "Button"}
    >
      {/* Background animation */}
      <span
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        aria-hidden="true"
      />

      {/* Button Content */}
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
             dark:bg-slate-950 bg-transparent px-7 text-lg font-medium text-white backdrop-blur-3xl gap-2"
      >
        {position === "left" && icon}
        {title && <span>{title}</span>}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
