import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const SidebarItem = ({
  link,
  path,
  leftBackIcon,
  rightBackIcon,
  onClick,
  width,
  isMenu
}) => {
  return (
    <>
      <Link to={path || ""}>
        <motion.li
          style={{ width, display: "flex" }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {leftBackIcon && <ChevronLeftRounded fontSize="large" />}
          {isMenu && (
            <div style={{ width: "100%", textAlign: "center" }}>{link}</div>
          )}
          {!isMenu && link}
          {rightBackIcon && <ChevronRightRounded fontSize="large" />}
        </motion.li>
      </Link>
    </>
  );
};
