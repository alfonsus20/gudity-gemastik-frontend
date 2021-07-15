import {
  QuestionMarkCircleIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <div className='w-full mb-4'>
      <div className="flex flex-row items-center justify-end gap-x-5">
        <Link to="/dashboard">
          <QuestionMarkCircleIcon className="h-6 w-6" />
        </Link>
        <Link to="/dashboard">
          <CogIcon className="h-6 w-6" />
        </Link>
        <Link to="/dashboard">
          <BellIcon className="h-6 w-6" />
        </Link>
        <div className="flex flex-row items-center gap-x-1">
          <div>
            <img
              src="/assets/pictures/user-random.jpg"
              className="w-12 h-12 rounded-full mr-1"
              alt="user"
            />
          </div>
          <p>Bocah</p>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
