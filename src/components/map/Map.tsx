import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapProps } from "../../types/Map/MapProps";
import "leaflet/dist/leaflet.css";

const Map: React.FC<MapProps> = ({ lat, lon, zoom }) => {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={zoom}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={false}
      fadeAnimation={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
