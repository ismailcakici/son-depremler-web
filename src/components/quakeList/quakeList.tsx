import React from "react";
import { Quake } from "../../types/Quake/Quake";
import Loading from "../../components/loading/Loading";

interface QuakeListProps {
  quakes: Quake[];
  loading: boolean;
}

const QuakeList: React.FC<QuakeListProps> = ({ quakes, loading }) => {
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
    <table className="table table-zebra w-full">
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
          <tr key={quake.eventID}>
            <td>{new Date(quake.date).toLocaleString()}</td>
            <td>{quake.location}</td>
            <td>{quake.magnitude}</td>
            <td>{quake.depth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuakeList;
