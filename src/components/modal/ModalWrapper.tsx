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
      } min-h-screen w-full fixed top-0 left-0 z-30 flex items-center justify-center `}
    >
      <div
        className="w-full h-screen absolute bg-black bg-opacity-60 text-white"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className="relative z-40 mx-6 max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
