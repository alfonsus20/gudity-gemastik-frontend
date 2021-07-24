import {
  QuestionMarkCircleIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import {
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, logout } from "../store/actions/userActions";
import { RootState } from "../store";

const NavbarDashboard = ({
  showSidebar,
}: {
  showSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropdownShown, showDropdown] = React.useState<boolean>(false);

  const { userInfo, loading, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isAuthenticated && Object.keys(userInfo).length === 0) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, userInfo,isAuthenticated]);

  return (
    <div className="w-full mb-4">
      <div className="flex flex-row items-center justify-between md:justify-end gap-x-5">
        <button onClick={() => showSidebar(true)} className="md:hidden">
          <MenuIcon className="text-blue w-8 h-8" />
        </button>
        <div className="flex flex-row items-center space-x-4">
          <Link to="/dashboard">
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </Link>
          <Link to="/dashboard">
            <CogIcon className="h-6 w-6" />
          </Link>
          <Link to="/dashboard">
            <BellIcon className="h-6 w-6" />
          </Link>
          <div
            className="flex flex-row items-center gap-x-1 relative px-2 cursor-pointer"
            onMouseEnter={() => showDropdown(true)}
            onMouseLeave={() => showDropdown(false)}
          >
            <div className='flex-shrink-0'>
              <img
                src={
                  !loading && userInfo.profile_image
                    ? userInfo.profile_image
                    : "/assets/icons/user.png"
                }
                className="w-12 h-12 rounded-full mr-1"
                alt="user"
              />
            </div>
            <p className="flex-auto text-sm md:text-md">Hi, {loading ? "Loading..." : userInfo.name}</p>
            <ChevronDownIcon className="w-5 h-5 flex-shrink-0" />
            <dl
              className={`${
                dropdownShown ? "block" : "hidden"
              } bg-white text-black px-4 py-2 rounded-md text-xs absolute top-12 z-20`}
            >
              <dd>
                <Link
                  to="/dashboard/profil"
                  className="flex flex-row py-2 items-center"
                  onClick={() => showDropdown(false)}
                >
                  <UserCircleIcon className="w-5 h-5 mr-2" /> Profile
                </Link>
              </dd>
              <dd>
                <Link
                  to="/"
                  className="flex flex-row py-2 items-center"
                  onClick={() => showDropdown(false)}
                >
                  <HomeIcon className="w-5 h-5 mr-2" /> Halaman Utama
                </Link>
              </dd>
              <dd
                className="py-2 border-gray-200 border-t-2 "
                onClick={() => showDropdown(false)}
              >
                <button
                  onClick={() => dispatch(logout())}
                  className="flex flex-row items-center"
                >
                  <LogoutIcon className="w-5 h-5 mr-2" />
                  Keluar
                </button>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
