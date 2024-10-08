import React from "react";
import cityList from "../../constants/cities.json";
import { useParams } from "react-router-dom";

const CityDetail: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityList.find((c) => c.id.toString() === cityId);

  if (!city) {
    return <div>Şehir bulunamadı.</div>;
  }

  return <div>{city.name}</div>;
};

export default CityDetail;
