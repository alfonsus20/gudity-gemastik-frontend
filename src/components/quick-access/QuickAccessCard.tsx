import React from "react";
import { Link } from "react-router-dom";
import { QuickAccessFeature } from "../../../types";

const QuickAccessCard = ({
  title,
  image,
  colspan,
  path,
}: QuickAccessFeature) => {
  return (
    <div
      className={`overflow-hidden ${
        colspan === 1
          ? "col-span-1"
          : colspan === 2
          ? "col-span-2"
          : "col-span-3"
      } `}
    >
      <div
        className={`${
          colspan === 1
            ? "col-span-1"
            : colspan === 2
            ? "col-span-2"
            : "col-span-3"
        } text-center h-48 bg-cover bg-center flex flex-col items-center justify-center transition transform duration-150 ease-out hover:scale-110 `}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 8, 40, 0.4), rgba(17, 8, 40, 0.6) ),url(assets/pictures/${image}.jpg)`,
        }}
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <Link
          to={path}
          className="mt-2 border-2 border-white rounded-full p-1 transition transform duration-150 ease-in-out hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default QuickAccessCard;
