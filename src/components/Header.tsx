import React from "react";
import { HEADER_ITEMS } from "../utils/constants";
import Button from "./Button";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="bg-blue-light bg-opacity-10">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto px-8 py-6">
        <h2 className="text-4xl font-semibold py-5">{title}</h2>
        <div className="grid grid-cols-3">
          {HEADER_ITEMS.map((item, i) => (
            <div className="flex items-center justify-center" key={i}>
              <Button
                variant="plain"
                text={item.text}
                size="full"
                pathName={item.pathName ? item.pathName : ""}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
