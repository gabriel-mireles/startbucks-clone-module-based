import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimension";
import { MenuToggle } from "./MenuToggle";
import { Sidebar } from "./sidebar/Sidebar";
import { useState } from "react";
import useWindowDimensions from "app/shared/hooks/useWindowDimension";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 75% 0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 500,
      damping: 60,
    },
  },
};
let counter = 1;
let interval = null;

export const Menu = () => {
  const { width } = useWindowDimensions();
  sidebar.closed.clipPath = `circle(30px at ${
    width > 630 ? "75%" : width > 550 ? "60%" : "50%"
  } 0px)`;

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [showWidth, setShowWidth] = useState(true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  React.useEffect(() => {
    if (isOpen) {
      counter = 1;
      setShowWidth(false);
    } else {
      interval = setInterval(() => {
        counter--;
        if (counter <= 0) {
          setShowWidth(true);
          clearTimeout(interval);
        }
      }, 1000);
    }

    if (showWidth < 0) {
      interval && clearInterval(interval);
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [isOpen, showWidth]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`${showWidth ? "closed" : ""} `}
    >
      <motion.div className="background" variants={sidebar} />
      <Sidebar toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
