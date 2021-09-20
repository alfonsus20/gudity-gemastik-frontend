import React from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="bg-blue-light bg-opacity-10">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto px-8 py-6">
        <h2 className="text-3xl md:text-4xl font-semibold py-5">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
