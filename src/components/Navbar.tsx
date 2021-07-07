import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row fixed w-full  z-20">
      <div className="w-20 flex-shrink-0">LOGO</div>
      <div className="flex-auto flex flex-row justify-end">
        <div className="flex flex-row">
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-green-400 rounded-md px-3 py-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div>
          <span>Akses Cepat</span>
        </div>
        <div className="flex items-center">
          <button className="border-4 border-blue-primary px-3 py-1 rounded-full hover:bg-blue-primary text-white ">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
