import React from "react";

const AvailableMarquee = () => {
  return (
    <div className="overflow-hidden  whitespace-nowrap w-full bg-black py-3">
      <div
        className="inline-block animate-marquee text-white font-light tracking-[0.2em]"
        style={{ animation: "marquee 30s linear 1" }}
      >
        • Open to work • Available in Dubai • Open to work • Available in Dubai
        • Open to work • Available in Dubai • Open to work • Available in Dubai
        •
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default AvailableMarquee;
