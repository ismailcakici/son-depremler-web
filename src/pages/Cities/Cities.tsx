import React, { useState } from "react";
import cityList from "../../constants/cities.json";
import { FaSearch } from "react-icons/fa";
import { City } from "../../types/City/City";
import { useNavigate } from "react-router-dom";

const Cities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredCities: City[] = cityList.filter((city: City) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCityClick = (city: City) => {
    navigate(`/sehirler/sehir-detay/${city.id}`, { state: city });
  };

  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      <label className="input input-bordered flex items-center rounded-box gap-2 my-2 w-full lg:mx-auto lg:w-3/6">
        <input
          type="text"
          className="grow"
          placeholder="Şehir Ara..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch />
      </label>
      <div className="overflow-x-auto w-full lg:w-3/6 lg:mx-auto">
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
      </div>
    </div>
  );
};

export default Cities;
