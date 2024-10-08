import React, { useEffect, useState } from "react";
import fetchQuakes from "../../services/fetchQuakes/fetchQuakes";
import { Quake } from "../../types/Quake/Quake";

const Home: React.FC = () => {
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
      {loading ? (
        <span className="mx-auto loading loading-ring loading-xs"></span>
      ) : quakes.length > 0 ? (
        <div className="overflow-x-auto">
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
        </div>
      ) : (
        <p className="mx-auto font-bold">Hiç deprem verisi bulunamadı.</p>
      )}
    </div>
  );
};

export default Home;
