import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import QuickAccess from "./quick-access/QuickAccess";
import { ROUTES_WITHOUT_NAVBAR } from "../utils/constants";

const Navbar = () => {
  const [isBackgroundBlack, setIsBackgroundBlack] =
    React.useState<boolean>(false);
  const [quickAccessShown, showQuickAccess] = React.useState<boolean>(false);
  const location = useLocation();

  const backgroundVariants = {
    shown: {
      backgroundColor: "rgba(0,0,0,1)",
    },
    hidden: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  React.useEffect(() => {
    const checkViewPort = () => {
      if (window.scrollY > 80) {
        setIsBackgroundBlack(true);
      } else {
        setIsBackgroundBlack(false);
      }
    };
    window.addEventListener("scroll", checkViewPort);
    return () => {
      window.removeEventListener("scroll", checkViewPort);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-row fixed w-full z-30 px-12 py-6 top-0"
      variants={backgroundVariants}
      initial="hidden"
      animate={
        isBackgroundBlack ||
        !ROUTES_WITHOUT_NAVBAR.includes(location.pathname.replace("/", ""))
          ? "shown"
          : "hidden"
      }
      transition={{ duration: 0.5 }}
    >
      <QuickAccess showQuickAccess={showQuickAccess} shown={quickAccessShown} />
      <Link to="/" className="w-20 flex-shrink-0 text-white my-auto">
        LOGO
      </Link>
      <div className="flex-auto flex flex-row justify-end gap-x-4">
        <button
          className="flex flex-row text-white items-center gap-x-2 "
          id="quickAccessButton"
          onClick={() => showQuickAccess(true)}
        >
          <span className="text-xs neon-text">
            Akses
            <br /> Cepat
          </span>
          <img
            src="/assets/icons/akses-cepat.svg"
            alt="Akses Cepat"
            className="w-7 h-7"
          />
        </button>
        <div className="flex items-center">
          <Link
            to="/login"
            className="border-4 border-blue-primary px-4 py-1 rounded-full hover:bg-blue-primary text-white "
          >
            Masuk
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
