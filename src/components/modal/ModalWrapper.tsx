import { XIcon } from "@heroicons/react/solid";
import React from "react";

type ModalWrapperProps = {
  shown: boolean;
  children: React.ReactNode;
  onClose(): void;
};

const ModalWrapper = ({ shown, children, onClose }: ModalWrapperProps) => {
  return (
    <div
      className={`${
        shown ? "block" : "hidden"
      } min-h-screen w-full fixed top-0 z-30 flex items-center justify-center`}
    >
      <div
        className="w-full h-screen absolute bg-black bg-opacity-60 text-white"
        onClick={() => {
          onClose();
        }}
      >
        <button
          className="absolute right-2 top-6 md:right-10 md:top-10"
          onClick={() => {
            onClose();
          }}
        >
          <XIcon className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="relative z-40 max-w-3xl">{children}</div>
    </div>
  );
};

export default ModalWrapper;
