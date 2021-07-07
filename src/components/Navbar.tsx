import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);

  const searchInputVariants = {
    closed: {
      maxWidth: 0,
      padding: 0,
      borderColor: "transparent",
    },
    open: {
      maxWidth: "100%",
      padding: "0.5rem 1rem",
      borderColor: "rgba(256,256,256,0.5)",
      transition: {
        stiffness: 0,
      },
    },
  };

  return (
    <div className="flex flex-row fixed w-full z-20 px-12 py-8">
      <div className="w-20 flex-shrink-0 text-white">LOGO</div>
      <div className="flex-auto flex flex-row justify-end gap-x-4">
        <div className="flex flex-row gap-x-2 items-center justify-end">
          <motion.input
            type="text"
            name=""
            id=""
            variants={searchInputVariants}
            initial="closed"
            placeholder="Masukkan kata kunci"
            animate={searchOpen ? "open" : "close"}
            className="border-2 border-white rounded-lg bg-transparent text-white text-opacity-50 focus:text-opacity-100 text-xs outline-none"
          />
          <button onClick={() => setSearchOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 transform rotate-90 neon-image"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                color="#fff"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <button
          className="flex flex-row text-white items-center gap-x-2 "
          id="quickAccessButton"
        >
          <span className="text-xs neon-text">
            Akses
            <br /> Cepat
          </span>
          <img
            src="assets/icons/akses-cepat.svg"
            alt="Akses Cepat"
            className="w-7 h-7"
          />
        </button>
        <div className="flex items-center">
          <Link
            to="/"
            className="border-4 border-blue-primary px-4 py-1 rounded-full hover:bg-blue-primary text-white "
          >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
