import React from "react";
import {
  LocationMarkerIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Underline from "./Underline";
import Button from "./Button";

type CommodityCardProps = {
  image: string;
  name: string;
  description: string;
  location: string;
  establishedIn: number;
  relationship: string;
};

const CommodityCard = ({
  image,
  name,
  description,
  location,
  establishedIn,
  relationship,
}: CommodityCardProps) => {
  return (
    <div className="grid sm:grid-cols-2 w-full shadow mb-12 sm:mb-6 px-3 md:px-0 py-6 md:py-0 rounded-md">
      <div className="col-span-1 px-2 sm:px-0 ">
        <img
          src={`assets/pictures/${image}`}
          alt={name}
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="col-span-1 px-2 sm:px-6 flex items-center">
        <div className="my-auto">
          <Underline width={150} height={5} className="hidden sm:block" />
          <h3 className="font-semibold text-2xl mt-3 mb-2">{name}</h3>
          <p className="text-md mb-2">{description}</p>
          <div className="grid grid-cols-12 text-md mb-2">
            <LocationMarkerIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">{location}</span>
          </div>
          <div className="grid grid-cols-12 text-md mb-2">
            <ClockIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">Sejak {establishedIn}</span>
          </div>
          <div className="grid grid-cols-12 text-md mb-4">
            <UserGroupIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">{relationship}</span>
          </div>
          <Button
            onClick={() => console.log("object")}
            className="border-2 border-blue-primary text-blue-primary text-sm font-medium"
          >
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommodityCard;
