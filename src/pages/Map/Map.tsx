import React from "react";
import MapComponent from "../../components/map/Map";

const Map: React.FC = () => {
  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      <h1 className="font-bold">Son Depremler Haritası</h1>
      <div className="divider"></div>
      <MapComponent lat={39.1667} lon={35.6667} zoom={6} />
    </div>
  );
};

export default Map;
