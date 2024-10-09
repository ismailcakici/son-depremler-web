import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Popup, Circle } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Quake } from "../../types/Quake/Quake";

interface MapProps {
  lat: number;
  lon: number;
  zoom: number;
  quakes: Quake[];
}

const Map: React.FC<MapProps> = ({ lat, lon, zoom, quakes }) => {
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
      {quakes.map((quake) => {
        const position: LatLngTuple = [
          parseFloat(quake.latitude),
          parseFloat(quake.longitude),
        ];
        const magnitude = parseFloat(quake.magnitude);

        const radius = magnitude * 10000;
        const fillOpacity = 0.4;
        const strokeOpacity = 0.2;

        return (
          <Circle
            key={quake.eventID}
            center={position}
            radius={radius}
            pathOptions={{
              color: "red",
              fillColor: "red",
              fillOpacity: fillOpacity,
              opacity: strokeOpacity,
            }}
          >
            <Popup>
              <div>
                <strong>{quake.location}</strong>
                <br />
                Büyüklük: {quake.magnitude}
                <br />
                Derinlik: {quake.depth} km
                <br />
                Ülke: {quake.country}
                <br />
                İl: {quake.province}
                <br />
                Tarih: {new Date(quake.date).toLocaleString()}
              </div>
            </Popup>
          </Circle>
        );
      })}
    </MapContainer>
  );
};

export default Map;
