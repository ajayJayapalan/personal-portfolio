import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Main ScrollReveal component
const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0.2,
  duration = 0.6,
  distance = 60,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    margin: "-100px 0px -100px 0px", // Trigger when element is 100px from viewport
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "scale" ? 0.8 : 0.9,
      rotate: direction === "rotate" ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom cubic bezier for smooth animation
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // @ts-ignore
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
