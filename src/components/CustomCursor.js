"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, .project-card, .project-card-featured, .btn, [role='button']";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleOver = (e) => {
      setIsHovering(Boolean(e.target.closest(INTERACTIVE_SELECTOR)));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: isHovering ? 4.5 : 1,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isHovering ? "rgba(250, 204, 21, 0.15)" : "rgba(255, 255, 255, 1)",
        borderColor: isHovering ? "rgba(250, 204, 21, 0.9)" : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
