import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Fade = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
