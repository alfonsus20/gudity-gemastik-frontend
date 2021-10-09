import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type DashboardBannerProps = {
  description: string;
  image?: string;
};

const DashboardBanner = ({ description, image }: DashboardBannerProps) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className="flex flex-row px-12 py-8 rounded-md mb-6"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="flex-auto">
        <h3 className="font-semibold text-2xl mb-2">
          Selamat Datang {userInfo!.name}!
        </h3>
        <p className="text-md text-purple">{description}</p>
      </div>
      {image && (
        <div className="flex-shrink-0 hidden lg:block ml-10">
          <img src={`/assets/pictures/${image}`} alt="analisis" />
        </div>
      )}
    </div>
  );
};

export default DashboardBanner;
