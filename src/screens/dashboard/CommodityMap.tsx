import React from "react";
import DashboardBanner from "../../components/DashboardBanner";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

const CommodityMap = () => {
  const mapRef = React.useRef();
  return (
    <div className="flex flex-col flex-auto">
      <h2 className="text-2xl font-semibold mb-5">Peta Komoditas</h2>
      <DashboardBanner description="Cari pesebaran komoditas pada peta komoditas ini untuk membantu dalam mempersiapkan usahamu di kemudian hari." />
      <div style={{ height: "800px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDega5xcXj9wkIoYcpCDGAt4xme5QOg--o" }}
          defaultCenter={{ lat: -7.95491, lng: 112.624924 }}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={18}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default CommodityMap;
