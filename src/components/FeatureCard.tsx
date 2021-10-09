import React from "react";
import Underline from "./Underline";

export type FeatureCardProps = {
  image: string;
  title: string;
  description: string;
};

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="col-span-1 bg-white rounded-2xl pt-7 pb-8 px-6 max-w-xs mx-auto h-full">
      <div className="mb-4">
        <img
          src={`assets/pictures/${image}.png`}
          alt={title}
          className="w-52 mx-auto"
        />
      </div>
      <div className="text-center">
        <h3 className="text-blue-secondary font-semibold text-xl mb-1">
          {title}
        </h3>
        <Underline width={40} center backgroundColor="#175F88" />
        <p className="mt-2 text-md">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
