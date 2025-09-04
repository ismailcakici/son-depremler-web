import React from "react";
import { Quake } from "../../types/Quake/Quake";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";

interface QuakeListProps {
  quakes: Quake[];
  loading: boolean;
}

const QuakeList: React.FC<QuakeListProps> = ({ quakes, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (quakes.length === 0) {
    return (
      <p className="text-center mx-auto font-bold my-5">
        Hiç deprem verisi bulunamadı.
      </p>
    );
  }

  return (
    <table className="table table-xs table-zebra lg:table lg:table-zebra w-full">
      <thead>
        <tr>
          <th>Tarih</th>
          <th>Şehir</th>
          <th>Büyüklük</th>
          <th>Derinlik (km)</th>
        </tr>
      </thead>
      <tbody>
        {quakes.map((quake) => (
          <tr
            className="cursor-pointer"
            key={quake.eventID}
            onClick={() => {
              navigate(`/deprem-detay/${quake.eventID}`);
            }}
          >
            <td>{new Date(quake.date).toLocaleString()}</td>
            <td>{quake.location_properties.epiCenter.name}</td>
            <td>{quake.magnitude}</td>
            <td>{quake.depth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuakeList;
