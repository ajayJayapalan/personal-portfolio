import React from "react";
import { motion } from "motion/react";

const AvailableMarquee = () => {
  const text = "• Open to work • Available in Dubai ";

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
      className="overflow-hidden  fixed top-0 w-full py-3 z-100 bg-black/20 backdrop-blur-sm cursor-default"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 5,
            duration: 20, // adjust speed
          },
        }}
      >
        {/* duplicate enough text so it loops seamlessly */}
        <span className="text-white font-light tracking-[0.2em] pr-6">
          {text.repeat(10)}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default AvailableMarquee;
