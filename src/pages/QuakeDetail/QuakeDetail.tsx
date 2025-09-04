import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quake } from "../../types/Quake/Quake";
import { useQuakeContext } from "../../context/AppLevelContext";
import Loading from "../../components/loading/Loading";
import Map from "../../components/map/Map";

const QuakeDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [quake, setQuake] = useState<Quake | null>(null);
  const { quakes, loading } = useQuakeContext();

  useEffect(() => {
    const selectedQuake = quakes.find((q) => q.eventID === eventId);
    if (selectedQuake) {
      setQuake(selectedQuake);
    }
  }, [eventId, quakes]);

  if (!quake) {
    return <p>Deprem detayı bulunamadı.</p>;
  }

  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-bold">Deprem Detayları</h1>
          <div className="divider"></div>
          <Map
            zoom={7}
            lat={Number(quake.geojson.coordinates[1])}
            lon={Number(quake.geojson.coordinates[0])}
            quakes={[quake]}
          />
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Şehir</th>
                <th>Büyüklük</th>
                <th>Derinlik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{new Date(quake.date).toLocaleString()}</td>
                <td>{quake.location_properties.epiCenter.name}</td>
                <td> {quake.magnitude}</td>
                <td> {quake.depth}km</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default QuakeDetail;
