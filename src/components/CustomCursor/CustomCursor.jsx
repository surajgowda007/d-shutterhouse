import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  // Hide cursor completely on touch devices
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (isMobile) return null;

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 450,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 450,
    damping: 35,
  });

  const innerX = useSpring(mouseX, {
    stiffness: 700,
    damping: 40,
  });

  const innerY = useSpring(mouseY, {
    stiffness: 700,
    damping: 40,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    const elements = document.querySelectorAll(
      "button, a, video, input, textarea"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          width: hover ? 70 : 38,
          height: hover ? 70 : 38,
          borderColor: hover ? "#ef4444" : "#ffffff",
        }}
        transition={{ duration: 0.25 }}
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999]"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          scale: hover ? 0.4 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-red-500 pointer-events-none z-[10000] shadow-[0_0_20px_rgba(255,0,0,.8)]"
      />
    </>
  );
}

export default CustomCursor;