import React from "react";
import cityList from "../../constants/cities.json";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";

const CityDetail: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityList.find((c) => c.id.toString() === cityId);

  if (!city) {
    return (
      <div className="w-full h-min p-4 bg-base-300 rounded-box text-center font-bold">
        Şehir bulunamadı.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-4 bg-base-300 rounded-box">
      <h1 className="font-bold">{city.name} ili deprem haritası</h1>
      <div className="divider"></div>
      <Map
        lat={city.coordinates.lat}
        lon={city.coordinates.longitude}
        zoom={10}
      />
    </div>
  );
};

export default CityDetail;
