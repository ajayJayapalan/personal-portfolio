import React from "react";

const AvailableMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-3">
      <div className="flex animate-marquee">
        <div className="flex-shrink-0 text-white font-light tracking-[0.2em] pr-3">
          • Open to work • Available in Dubai
        </div>
        <div className="flex-shrink-0 text-white font-light tracking-[0.2em] pr-3">
          • Open to work • Available in Dubai
        </div>
        <div className="flex-shrink-0 text-white font-light tracking-[0.2em] pr-3">
          • Open to work • Available in Dubai
        </div>
        <div className="flex-shrink-0 text-white font-light tracking-[0.2em] pr-3">
          • Open to work • Available in Dubai
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AvailableMarquee;
