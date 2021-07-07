import { motion } from "framer-motion";
import React from "react";
import { QUICK_ACCESS_FEATURES } from "../../utils/constants";
import QuickAccessCard from "./QuickAccessCard";

const QuickAccess = () => {
  const [isShown, setIsShown] = React.useState(false);
  const variants = {
    open: {
      maxHeight: "auto",
      top: 0,
    },
    closed: {
      maxHeight: 0,
      top: "-100%",
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full absolute top-0 left-0 z-30 bg-gradient-to-b from-black to-violet text-white flex"
      initial="closed"
      animate={isShown ? "open" : "closed"}
      transition={{ stiffness: 0, duration: 1 }}
      variants={variants}
    >
      <div className="relative my-auto w-full max-w-7xl mx-auto pb-12">
        <div className="relative">
          <h2 className="text-4xl font-medium text-center mt-16 mb-8">
            AKSES CEPAT
          </h2>
          <button className="absolute right-0 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2 px-4">
          {QUICK_ACCESS_FEATURES.map((feature, i) => (
            <QuickAccessCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickAccess;
