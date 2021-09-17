import React from "react";
import {
  MapContainer,
  Popup,
  TileLayer,
  CircleMarker,
} from "react-leaflet";
import Button from "../../components/Button";
import DashboardBanner from "../../components/DashboardBanner";
import TextField from "../../components/TextField";

const CommodityMap = () => {
  const [commodity, setCommodity] = React.useState<string>("");
  const [locations, setLocations] = React.useState<
    Array<{ lat: number; lng: number }>
  >([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTimeout(() => {
      setLocations([
        { lat: -7.266245670653063, lng: 112.66284432595177 },
        { lat: -7.325754909862289, lng: 112.6822495981488 },
        { lat: -7.290066019760505, lng: 112.80296020658977 },
        { lat: -7.331623538481095, lng: 112.80440359178007 },
        { lat: -7.23022044347666, lng: 112.76458036439315 },
      ]);
    }, 3000);
  };

  return (
    <div className="flex flex-col flex-auto">
      <h2 className="text-2xl font-semibold mb-5">Peta Komoditas</h2>
      <DashboardBanner description="Cari pesebaran komoditas pada peta komoditas ini untuk membantu dalam mempersiapkan usahamu di kemudian hari." />
      <form className="flex flex-row gap-2 mb-8" onSubmit={handleSubmit}>
        <div className="flex items-center flex-auto">
          <TextField
            variant="tertiary"
            className="w-full"
            placeholder="Komoditas"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
          />
        </div>
        <Button variant="primary" type="submit" text="Cari" className="w-40 " />
      </form>

      <div className="h-full">
        <MapContainer
          center={[-7.264794797261607, 112.7376809162472]}
          zoom={12}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            accessToken="pk.eyJ1IjoiYWxmb25zdXMtMjAiLCJhIjoiY2t0b2ZubW9iMGNiMjMwbGdkNjdpdjg5dCJ9.HQ_Omlv_5yqCrX4NOYwMaQ"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.length > 0 &&
            locations.map((location) => (
              <CircleMarker center={[location.lat, location.lng]} radius={40}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </CircleMarker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CommodityMap;
