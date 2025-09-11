import React from "react";

const AuroraTextEffect = ({ children }) => {
  return (
    <div className="">
      <div className="relative">
        {/* Main text with aurora effect */}
        <div className="aurora-wrapper">
          <h1 className="aurora-text" data-text="Ajay">
            Ajay
          </h1>
        </div>
      </div>

      <style jsx>{`
        .aurora-wrapper {
          text-align: left;
          position: relative;
          /* Added padding to prevent clipping */
        }

        .aurora-text {
          background: linear-gradient(
            45deg,
            #4f46e5,
            #7c3aed,
            #ec4899,
            #f59e0b,
            #ffffff,
            #10b981,
            #06b6d4,
            #8b5cf6,
            #f97316
          );
          background-size: 800% 800%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: aurora-flow 18s linear infinite;
          position: relative;
          line-height: 1.2;
        }

        /* Additional aurora layer for more depth */
        .aurora-text::before {
          content: "Ajay";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            -45deg,
            #06b6d4,
            #8b5cf6,
            #ec4899,
            #10b981,
            #ffffff,
            #f59e0b,
            #4f46e5,
            #7c3aed,
            #f97316
          );
          background-size: 600% 600%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: aurora-flow-reverse 18s ease-in-out infinite;
          opacity: 0.7;
          z-index: -1;
        }

        /* Third layer for even more complexity */
        .aurora-text::after {
          content: "Ajay";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #10b981,
            #06b6d4,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #ffffff,
            #4f46e5
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: aurora-flow-slow 25s linear infinite;
          opacity: 0.5;
          z-index: -2;
        }

        @keyframes aurora-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes aurora-flow-reverse {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes aurora-flow-slow {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Add subtle glow effect */
        .aurora-text {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.3));
        }
      `}</style>
    </div>
  );
};

const AuroraTextEffect2 = () => {
  return (
    <>
      <div className="text-center">
        {/* Main text with aurora effect */}
        <h1 className="aurora-text text-6xl md:text-8xl lg:text-9xl font-extrabold  tracking-widest relative">
          Ajay
          {/* Aurora overlay container */}
          <div className="aurora-overlay">
            <div className="aurora-item aurora-item-1"></div>
            <div className="aurora-item aurora-item-2"></div>
            <div className="aurora-item aurora-item-3"></div>
            <div className="aurora-item aurora-item-4"></div>
          </div>
        </h1>
      </div>

      <style jsx>{`
        .aurora-text {
          position: relative;
          overflow: hidden;
          background: #000000;
          color: #ffffff;
          margin: 0;
          line-height: 1;
          display: inline-block;
          padding: 0.1em 0.2em;
        }

        .aurora-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          mix-blend-mode: darken;
          pointer-events: none;
        }

        .aurora-item {
          position: absolute;
          width: 40vw;
          height: 40vw;
          border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          filter: blur(0.8rem);
          mix-blend-mode: multiply;
          overflow: hidden;
        }

        .aurora-item-1 {
          background-color: #00c2ff;
          top: -50%;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-1 12s ease-in-out infinite alternate;
        }

        .aurora-item-2 {
          background-color: #ffc640;
          right: 0;
          top: 0;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-2 12s ease-in-out infinite alternate;
        }

        .aurora-item-3 {
          background-color: #33ff8c;
          left: 0;
          bottom: 0;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-3 8s ease-in-out infinite alternate;
        }

        .aurora-item-4 {
          background-color: #e54cff;
          right: 0;
          bottom: -50%;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-4 24s ease-in-out infinite alternate;
        }

        @keyframes aurora-1 {
          0% {
            top: 0;
            right: 0;
          }
          50% {
            top: 100%;
            right: 75%;
          }
          75% {
            top: 100%;
            right: 25%;
          }
          100% {
            top: 0;
            right: 0;
          }
        }

        @keyframes aurora-2 {
          0% {
            top: -50%;
            left: 0%;
          }
          60% {
            top: 100%;
            left: 75%;
          }
          85% {
            top: 100%;
            left: 25%;
          }
          100% {
            top: -50%;
            left: 0%;
          }
        }

        @keyframes aurora-3 {
          0% {
            bottom: 0;
            left: 0;
          }
          40% {
            bottom: 100%;
            left: 75%;
          }
          65% {
            bottom: 40%;
            left: 50%;
          }
          100% {
            bottom: 0;
            left: 0;
          }
        }

        @keyframes aurora-4 {
          0% {
            bottom: -50%;
            right: 0;
          }
          50% {
            bottom: 0%;
            right: 40%;
          }
          90% {
            bottom: 50%;
            right: 25%;
          }
          100% {
            bottom: -50%;
            right: 0;
          }
        }

        @keyframes aurora-border {
          0% {
            border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          }
          25% {
            border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
          }
          50% {
            border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
          }
          75% {
            border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
          }
          100% {
            border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .aurora-item {
            width: 80vw;
            height: 80vw;
          }
        }

        @media (max-width: 480px) {
          .aurora-item {
            width: 100vw;
            height: 100vw;
          }

          .aurora-text {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default AuroraTextEffect;
