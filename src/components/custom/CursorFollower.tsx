import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateFollower = () => {
      setFollowerPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        // Lazy follow effect - adjust the 0.1 value to make it faster (higher) or slower (lower)
        const lag = 0.1;

        return {
          x: prev.x + dx * lag,
          y: prev.y + dy * lag,
        };
      });
    };

    const animationFrame = requestAnimationFrame(animateFollower);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, followerPosition]);

  return (
    <div
      className="hidden md:block fixed pointer-events-none z-1000"
      style={{
        left: followerPosition.x - 20,
        top: followerPosition.y - 20,
      }}
    >
      <div className="w-10 h-10 border-2 border-white/30 rounded-full opacity-80 shadow-lg">
        {/* Magnifier glass reflection effect */}
        {/* <div className="absolute top-2 left-2 w-3 h-3 bg-white/30 rounded-full blur-sm"></div> */}
        {/* Center dot to show magnification point */}
      </div>
    </div>
  );
};

export default CursorFollower;
