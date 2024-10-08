import React, { useEffect, useState } from "react";
import MapComponent from "../../components/map/Map";
import { Quake } from "../../types/Quake/Quake";
import fetchQuakes from "../../services/fetchQuakes/fetchQuakes";

const Map: React.FC = () => {
  const [quakes, setQuakes] = useState<Quake[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getQuakes = async () => {
      try {
        const data = await fetchQuakes();
        setQuakes(data);
      } catch (error) {
        console.error("Deprem verileri çekilirken bir hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    getQuakes();
  }, []);
  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      <h1 className="font-bold">Son Depremler Haritası</h1>
      <div className="divider"></div>
      {loading ? (
        <span className="mx-auto loading loading-ring loading-xs"></span>
      ) : (
        <MapComponent lat={39.1667} lon={35.6667} zoom={6} quakes={quakes} />
      )}
    </div>
  );
};

export default Map;
