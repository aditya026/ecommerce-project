// CustomCursor.jsx

import React, { useEffect } from 'react';
import './CustomC.css'; // Import your CSS file

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
      cursorOutline.style.transform = `translate(${posX - 15}px, ${posY - 15}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default CustomCursor;
