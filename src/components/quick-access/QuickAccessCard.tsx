import React from "react";
import { Link } from "react-router-dom";
import { QuickAccessFeature } from "../../utils/constants";
import { QuickAccessProps } from "./QuickAccess";
import { ArrowRightIcon } from "@heroicons/react/outline";

const QuickAccessCard = ({
  title,
  image,
  colspan,
  path,
  showQuickAccess,
}: QuickAccessFeature & QuickAccessProps) => {
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
        className={`col-span-1 ${
          colspan === 1
            ? "md:col-span-1"
            : colspan === 2
            ? "md:col-span-2"
            : "md:col-span-3"
        } text-center h-28 sm:h-40 md:h-60 bg-cover bg-center flex flex-col items-center justify-center transition transform duration-150 ease-out hover:scale-110 `}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 8, 40, 0.4), rgba(17, 8, 40, 0.6) ),url(assets/pictures/${image}.jpg)`,
        }}
      >
        <h3 className="text-md md:text-xl font-medium">{title}</h3>
        <Link
          to={path}
          className="mt-2 border-2 border-white rounded-full p-1 transition transform duration-150 ease-in-out hover:scale-110"
          onClick={() => showQuickAccess(false)}
        >
         <ArrowRightIcon className='h-4 w-4 md:h-6 md:w-6'/>
        </Link>
      </div>
    </div>
  );
};

export default QuickAccessCard;
