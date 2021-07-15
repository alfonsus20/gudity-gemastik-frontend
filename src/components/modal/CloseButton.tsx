import React from "react";
import { XIcon } from "@heroicons/react/solid";

type CloseButtonProps = {
  onClick(): void;
  color?: "white" | "gray";
};

const CloseButton = ({ color, onClick }: CloseButtonProps) => {
  return (
    <button className="absolute top-2 right-2" onClick={() => onClick()}>
      <XIcon
        className={`w-6 h-6 ${
          color === "white" ? "text-white" : "text-gray-400"
        }`}
      />
    </button>
  );
};

CloseButton.defaultProps = {
    color : 'white'
}

export default CloseButton;
