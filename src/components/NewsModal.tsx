import React from "react";
import Underline from "./Underline";

export type NewsModalProps = {
  title: string;
  content: string;
};

const NewsModal = ({ title, content }: NewsModalProps) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center fixed bg-black bg-opacity-50 z-30 filter  text-white">
      <div className="flex flex-row rounded-lg" style={{ width: 800 }}>
        <div className="w-1/2 bg-blue-dark px-8 py-12">
          <Underline backgroundColor="#175F88" height={4} />
          <h2 className="mt-2 font-semibold text-2xl">{title}</h2>
        </div>
        <div className="w-1/2 bg-blue-secondary text-lg px-8 py-12">
          {content}
        </div>
      </div>
      <button
        className="absolute right-10 top-10"
        onClick={() => console.log("object")}
      >
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
  );
};

export default NewsModal;