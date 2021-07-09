import React from "react";
import {
  LocationMarkerIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/solid";

type UmkmCardProps = {
  title: string;
  description: string;
  location: string;
  telephone: string;
  weekdayOpenHours: string;
  weekendOpenHours: string;
};

const UmkmCard = ({
  title,
  description,
  location,
  telephone,
  weekdayOpenHours,
  weekendOpenHours,
}: UmkmCardProps) => {
  return (
    <div className="p-4 shadow">
      <div className="mb-2">
        <img
          src="assets/pictures/umkm-card.jpg"
          alt=""
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <div className="font-light text-sm space-y-2">
        <p className='text-justify'>{description}</p>
        <div className="flex flex-row">
          <LocationMarkerIcon className="h-5 w-5 mr-3" /> {location}
        </div>
        <div className="flex flex-row">
          <PhoneIcon className="h-5 w-5 mr-3" /> {telephone}
        </div>
        <div className="flex flex-row">
          <ClockIcon className="h-5 w-5 mr-3" />
          <span className="mr-2">Senin - Jumat</span>
          <time>{weekdayOpenHours}</time>
        </div>
        <div className="flex flex-row">
          <ClockIcon className="h-5 w-5 mr-3" />
          <span className="mr-2">Sabtu - Minggu</span>
          <time>{weekendOpenHours}</time>
        </div>
      </div>
    </div>
  );
};

export default UmkmCard;