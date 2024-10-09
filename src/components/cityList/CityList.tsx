import React from "react";
import { City } from "../../types/City/City";

interface CityListProps {
  filteredCities: City[];
  handleCityClick: (city: City) => void;
}

const CityList: React.FC<CityListProps> = ({
  filteredCities,
  handleCityClick,
}) => {
  return (
    <table className="table table-zebra bg-base-100">
      <thead>
        <tr>
          <th className="pinned">Şehir Adı</th>
        </tr>
      </thead>
      <tbody>
        {filteredCities.map((city: City) => (
          <tr
            className="hover cursor-pointer"
            key={city.id}
            onClick={() => handleCityClick(city)}
          >
            <td>{city.name}</td>
          </tr>
        ))}
        {filteredCities.length === 0 && (
          <tr>
            <td className="text-center">Aradığınız şehir bulunamadı.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CityList;
