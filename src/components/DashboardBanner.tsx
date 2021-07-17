import React from "react";

type DashboardBannerProps = {
  description: string;
};

const DashboardBanner = ({ description }: DashboardBannerProps) => {
  return (
    <div
      className="px-12 py-8 rounded-md mb-6"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <h3 className="font-semibold text-2xl mb-2">
        Selamat Datang Bocah Mozaik!
      </h3>
      <p className="text-md text-purple">{description}</p>
    </div>
  );
};

export default DashboardBanner;
