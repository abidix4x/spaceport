import React from "react";
import DraggableCard from "../sub/DraggableCard";

// Define the type for the props
interface DraggableCardsContainerProps {
  leftLists: string[]; // Array of strings for left column
  rightLists: string[]; // Array of strings for right column
}

const DraggableCardsContainer: React.FC<DraggableCardsContainerProps> = ({
  leftLists,
  rightLists,
}) => {
  return (
    <div className="flex gap-4 absolute right-0 lg:right-1 top-0">
      {/* Left Column */}
      <div className="flex flex-col gap-2">
        {leftLists.map((item, i) => (
          <DraggableCard key={i} item={item} />
        ))}
        <span className="py-2 px-3 lg:py-3 lg:px-4 bg-[#1C2A48] rounded-full shadow-md"></span>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2">
        <span className="py-2 px-3 lg:py-3 lg:px-4 bg-[#1C2A48] rounded-full shadow-md"></span>
        {rightLists.map((item, i) => (
          <DraggableCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DraggableCardsContainer;
