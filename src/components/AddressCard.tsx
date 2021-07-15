import React from "react";
import Button from "./Button";
import Underline from "./Underline";

type AddressCardProps = {
  name: string;
  detail: string;
  main?: boolean;
};

const AddressCard = ({ name, detail, main }: AddressCardProps) => {
  return (
    <div className="w-48 p-4 shadow flex-shrink-0 relative transition transform">
      {main && (
        <div className="bg-blue-progress absolute top-0 right-0 rounded-bl-lg rounded-tr-lg text-xs text-white px-4 py-2">
          Utama
        </div>
      )}
      <Underline width={25} height={3} />
      <h4 className="text-md mb-2 mt-1 font-semibold">{name}</h4>
      <p className="text-xs mb-2">{detail}</p>
      <div className="flex justify-end">
        <Button
          pathName="profile"
          text="UBAH"
          variant="plain-blue"
          size="sm"
        />
      </div>
    </div>
  );
};

export default AddressCard;
