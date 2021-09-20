import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import QuickAccess from "./quick-access/QuickAccess";
import { ROUTES_WITHOUT_NAVBAR } from "../utils/constants";
import LogoutModal from "./modal/LogoutModal";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import {
  ShoppingBagIcon,
  PresentationChartLineIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { fetchUserInfo, logout } from "../store/actions/userActions";

const Navbar = () => {
  const [isBackgroundBlack, setIsBackgroundBlack] =
    React.useState<boolean>(false);
  const [quickAccessShown, showQuickAccess] = React.useState<boolean>(false);
  const [logoutModalShown, showLogoutModal] = React.useState<boolean>(false);
  const [dropdownShown, showDropdown] = React.useState<boolean>(false);

  const location = useLocation();

  const { isAuthenticated, userInfo, loading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const backgroundVariants = {
    shown: {
      backgroundColor: "rgba(0,0,0,1)",
    },
    hidden: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  React.useEffect(() => {
    const checkViewPort = () => {
      if (window.scrollY > 80) {
        setIsBackgroundBlack(true);
      } else {
        setIsBackgroundBlack(false);
      }
    };
    window.addEventListener("scroll", checkViewPort);

    if (isAuthenticated && Object.keys(userInfo).length === 0) {
      dispatch(fetchUserInfo());
    }

    return () => {
      window.removeEventListener("scroll", checkViewPort);
    };
  }, [dispatch, userInfo, isAuthenticated]);

  return (
    <motion.div
      className="flex flex-row fixed w-full z-30 px-6 md:px-12 py-6 top-0"
      variants={backgroundVariants}
      initial="hidden"
      animate={
        isBackgroundBlack ||
        !ROUTES_WITHOUT_NAVBAR.includes(location.pathname.replace("/", ""))
          ? "shown"
          : "hidden"
      }
      transition={{ duration: 0.5 }}
    >
      <QuickAccess showQuickAccess={showQuickAccess} shown={quickAccessShown} />
      <LogoutModal
        shown={logoutModalShown}
        onClose={() => showLogoutModal(false)}
      />
      <Link to="/" className="w-28 flex-shrink-0 text-white my-auto">
        <img src="/assets/pictures/logo.png" alt="logo" />
      </Link>
      <div className="flex-auto flex flex-row justify-end gap-x-4">
        <button
          className="flex flex-row text-white items-center gap-x-2 "
          id="quickAccessButton"
          onClick={() => showQuickAccess(true)}
        >
          <span className="text-xs neon-text">
            Akses
            <br /> Cepat
          </span>
          <img
            src="/assets/icons/akses-cepat.svg"
            alt="Akses Cepat"
            className="w-7 h-7"
          />
        </button>

        {isAuthenticated ? (
          <div
            className="flex flex-row items-center gap-x-1 text-white relative px-2 cursor-pointer"
            onClick={() => showDropdown(!dropdownShown)}
          >
            <div>
              <img
                src={
                  !loading && userInfo.thumbnail
                    ? userInfo.thumbnail
                    : "/assets/icons/user.png"
                }
                className="w-12 h-12 rounded-full mr-1"
                alt="user"
              />
            </div>
            <p className="">Hi, {loading ? "Loading..." : userInfo.name}</p>
            <ChevronDownIcon className="w-5 h-5" />
            <dl
              className={`${
                dropdownShown ? "block" : "hidden"
              } bg-white text-black px-4 py-2 rounded-md text-xs absolute top-12`}
            >
              <dd>
                <Link
                  to="/orders"
                  className="flex flex-row py-2 items-center"
                  onClick={() => showDropdown(false)}
                >
                  <ShoppingBagIcon className="w-5 h-5 mr-2" /> Daftar Pesanan
                </Link>
              </dd>
              <dd>
                <Link
                  to="/keranjang"
                  className="flex flex-row py-2 items-center"
                  onClick={() => showDropdown(false)}
                >
                  <ShoppingCartIcon className="w-5 h-5 mr-2" /> Keranjang
                </Link>
              </dd>
              <dd>
                <Link
                  to="/dashboard"
                  className="flex flex-row py-2 items-center"
                  onClick={() => showDropdown(false)}
                >
                  <PresentationChartLineIcon className="w-5 h-5 mr-2" />
                  Dashboard
                </Link>
              </dd>
              <dd
                className=" py-2 border-gray-200 border-t-2 items-center"
                onClick={() => showDropdown(false)}
              >
                <button
                  className="flex flex-row items-center"
                  onClick={() => dispatch(logout())}
                >
                  <LogoutIcon className="w-5 h-5 mr-2" />
                  Keluar
                </button>
              </dd>
            </dl>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              to="/login"
              className="border-4 border-blue-primary px-4 py-1 rounded-full hover:bg-blue-primary text-white "
            >
              Masuk
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
