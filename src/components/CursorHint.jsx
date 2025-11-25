import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";

// this is my failed attempt at making a tooltip that follows the mouse around on the landing of each page, decided to leave out. made with motion

function CursorHint() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 500, damping: 15 });
  const springY = useSpring(x, { stiffness: 500, damping: 15 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move)
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
      transition={{ duration: 6, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
      className="fixed pointer-events-none z-[9999] text-xs text-white bg-black/70 px-2 py-1 rounded-full backdrop-blur-sm"
    >
      Click or scroll to see more
    </motion.div>
  );
}

export default CursorHint;