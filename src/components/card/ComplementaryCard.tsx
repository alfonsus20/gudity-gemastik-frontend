import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

type ComplementaryCardProps = {
  title: string;
  description: string;
  buttonName: string;
  buttonPathname: string;
  image: string;
};

const ComplementaryCard = ({
  title,
  description,
  buttonName,
  buttonPathname,
  image,
}: ComplementaryCardProps) => {
  return (
    <div className="shadow w-full rounded-md p-8 max-w-sm">
      <div className="mb-4">
        <img
          src={`/assets/pictures/${image}`}
          className="w-full"
          alt={buttonName}
        />
      </div>
      <div>
        <h3 className="text-md font-medium mb-2">{title}</h3>
        <p className="text-sm mb-8">{description}</p>
        <Link
          to={`/${buttonPathname}`}
          className="flex flex-row text-blue-primary items-center text-sm"
        >
          {buttonName} <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ComplementaryCard;
