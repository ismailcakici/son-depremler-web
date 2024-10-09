import React from "react";
import MapComponent from "../../components/map/Map";
import { useQuakeContext } from "../../context/AppLevelContext";
import QuakeList from "../../components/quakeList/quakeList";

const Map: React.FC = () => {
  const { quakes, loading } = useQuakeContext();

  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      <h1 className="font-bold">Son Depremler Haritası</h1>
      <div className="divider"></div>
      {loading ? (
        <span className="mx-auto loading loading-ring loading-xs"></span>
      ) : (
        <MapComponent lat={39.1667} lon={35.6667} zoom={6} quakes={quakes} />
      )}
      <div className="overflow-x-auto">
        <QuakeList quakes={quakes} loading={loading} />
      </div>
    </div>
  );
};

export default Map;
