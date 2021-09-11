import React from "react";
import {
  LocationMarkerIcon,
  PhoneIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import Underline from "./Underline";
import Button from "./Button";

type SupplierCardProps = {
  image: string;
  name: string;
  description: string;
  location: string;
  store: string;
  phone: string;
  id: number;
};

const SupplierCard = ({
  image,
  name,
  description,
  location,
  store,
  phone,
  id,
}: SupplierCardProps) => {
  return (
    <div className="grid sm:grid-cols-2 w-full shadow mb-12 sm:mb-6 px-3 md:px-0 py-6 md:py-0 rounded-md">
      <div className="col-span-1 px-2 sm:px-0 ">
        <img
          src={
            !image || image === "http://image.com"
              ? `/assets/pictures/kopi.jpg`
              : image
          }
          alt={name}
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="col-span-1 px-2 sm:px-6 flex items-center">
        <div className="my-auto">
          <Underline width={150} height={5} className="hidden sm:block" />
          <h3 className="font-semibold text-2xl mt-3 mb-2">{name}</h3>
          <p className="text-md mb-2">{description}</p>
          <div className="grid grid-cols-12 text-md mb-2 gap-x-2">
            <LocationMarkerIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">{location}</span>
          </div>
          <div className="grid grid-cols-12 text-md mb-2 gap-x-2">
            <ArchiveIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">{store}</span>
          </div>
          <div className="grid grid-cols-12 text-md mb-4 gap-x-2">
            <PhoneIcon className="h-6 w-6 col-span-1" />
            <span className="ml-2 md:ml-0 col-span-11">{phone}</span>
          </div>
          <Button
            pathName={`suppliers/${id}`}
            variant="secondary"
            className="border-2 text-sm font-medium"
            text="Lihat Selengkapnya"
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;
