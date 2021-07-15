import React from "react";
import { motion } from "framer-motion";
import { QUICK_ACCESS_FEATURES } from "../../utils/constants";
import QuickAccessCard from "./QuickAccessCard";
import Underline from "../Underline";
import { XIcon } from "@heroicons/react/outline";

export type QuickAccessProps = {
  shown: boolean;
  showQuickAccess: (shown: boolean) => void;
};

const QuickAccess = ({ shown, showQuickAccess }: QuickAccessProps) => {
  const variants = {
    shown: {
      maxHeight: "auto",
      top: 0,
      overflow: "auto",
    },
    hidden: {
      maxHeight: 0,
      top: "-200%",
      overflow: "hidden",
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full fixed top-0 left-0 z-40 bg-gradient-to-b from-black to-violet text-white flex items-center justify-center"
      initial="hidden"
      animate={shown ? "shown" : "hidden"}
      transition={{ stiffness: 0, duration: 0.5 }}
      variants={variants}
    >
      <div className="relative w-full max-w-screen-xl py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-medium text-center mb-3">AKSES CEPAT</h2>
          <Underline backgroundColor="#fff" width={60} height={2} center />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 px-4">
          {QUICK_ACCESS_FEATURES.map((feature, i) => (
            <QuickAccessCard
              key={i}
              {...feature}
              shown={shown}
              showQuickAccess={showQuickAccess}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute right-4 top-4 md:right-8 md:top-8"
        onClick={() => showQuickAccess(false)}
      >
        <XIcon className="w-8 h-8 text-white" />
      </button>
    </motion.div>
  );
};

export default QuickAccess;
