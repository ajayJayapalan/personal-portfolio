import React from "react";
import { motion } from "motion/react";

const HRGlow = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-md mt-3 mb-5 absolute -bottom-6  ml-0 mr-auto"
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="relative h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-md mt-3 mb-5 ml-0 mr-auto"
        style={{
          filter: "blur(3px)",
          boxShadow: `
      0 0 15px rgba(6, 182, 212, 0.9),
      0 0 30px rgba(6, 182, 212, 0.7),
      0 0 60px rgba(6, 182, 212, 0.5),
      0 -5px 20px rgba(6, 182, 212, 0.4),
      0 -10px 40px rgba(6, 182, 212, 0.35),
      0 -15px 60px rgba(6, 182, 212, 0.3),
      0 -20px 80px rgba(6, 182, 212, 0.25),
      0 2px 8px rgba(6, 182, 212, 0.05)
    `,
        }}
      >
        {/* Center-focused upward glow overlay */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/5 h-px"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.8) 0%, rgba(34, 211, 238, 0.6) 30%, transparent 70%)",
            filter: "blur(12px)",
            boxShadow: `
        0 -5px 15px rgba(6, 182, 212, 0.6),
        0 -10px 30px rgba(34, 211, 238, 0.5),
        0 -15px 45px rgba(56, 189, 248, 0.4),
        0 -20px 60px rgba(59, 130, 246, 0.3)
      `,
          }}
        />
      </motion.div>
    </div>
  );
};

export default HRGlow;
