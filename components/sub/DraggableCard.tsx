"use client";
import React, { useState } from "react";

// DraggableCard Component
const DraggableCard = ({ item }:any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e:any) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e:any) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset position to 0, 0 to snap back to original place
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={`hover:scale-110 py-2 px-3 lg:py-3 lg:px-4 text-xs lg:text-sm bg-[#1C2A48] text-white rounded-full shadow-md cursor-pointer transition-transform duration-100`}
    >
      {item}
    </div>
  );
};

export default DraggableCard;