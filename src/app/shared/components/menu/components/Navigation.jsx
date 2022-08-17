import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FindStoreIcon } from "../../find-store-icon/FindStoreIcon";
import { LogoutButton } from "../../logout-button/LogoutButton";
import { SignInButton } from "../../signin-button/SignInButton";
import { SignUpButton } from "../../signup-button/SignUpButton";
import { MenuLinkList } from "./MenuLinkList";
import { normalMenuLinkList, categoriesMenuLinkList } from "../menuLinkList";

const mainVariants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: 0 },
  },
};

const secondaryVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const [showMenuCategories, setShowMenuCategories] = useState(false);
  const user = useSelector((state) => state.user);

  const changeShowMenu = (value, doToggle) => {
    setShowMenuCategories(value);
    doToggle && toggle();
  };
  return (
    <>
      {showMenuCategories ? (
        <motion.ul variants={mainVariants}>
          <MenuLinkList
            linkList={normalMenuLinkList}
            changeShowMenu={changeShowMenu}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={mainVariants}>
          <MenuLinkList
            linkList={categoriesMenuLinkList}
            changeShowMenu={changeShowMenu}
          />

          <motion.hr variants={secondaryVariants} />
          <motion.div
            className="navigation__button"
            variants={secondaryVariants}
          >
            {!user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <LogoutButton />
            )}
          </motion.div>

          <motion.div variants={secondaryVariants}>
            <FindStoreIcon />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};
