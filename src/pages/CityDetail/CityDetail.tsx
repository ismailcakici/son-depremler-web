import React from "react";
import cityList from "../../constants/cities.json";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import QuakeList from "../../components/quakeList/quakeList";
import { useQuakeContext } from "../../context/AppLevelContext";
import { Quake } from "../../types/Quake/Quake";

const CityDetail: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityList.find((c) => c.id.toString() === cityId);
  const { quakes, loading } = useQuakeContext();

  if (!city) {
    return (
      <div className="w-full h-min p-4 bg-base-300 rounded-box text-center font-bold">
        Şehir bulunamadı.
      </div>
    );
  }

  const filteredQuakes: Quake[] = quakes.filter((quake) => {
    if (quake.province && city?.name) {
      return quake.province.toLowerCase() === city.name.toLowerCase();
    }
    return false;
  });

  return (
    <div className="w-full min-h-screen flex flex-col p-4 bg-base-300 rounded-box">
      <h1 className="font-bold">{city.name} ili deprem haritası</h1>
      <div className="divider"></div>
      <Map
        lat={city.coordinates.lat}
        lon={city.coordinates.longitude}
        zoom={8}
        quakes={filteredQuakes}
      />
      <div className="overflow-x-auto">
        <QuakeList quakes={filteredQuakes} loading={loading} />
      </div>
    </div>
  );
};

export default CityDetail;
