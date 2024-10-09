import React from "react";
import { useQuakeContext } from "../../context/AppLevelContext";
import QuakeList from "../../components/quakeList/quakeList";

const Home: React.FC = () => {
  const { quakes, loading } = useQuakeContext();

  return (
    <div className="rounded-box flex flex-col p-4 w-full min-h-screen bg-base-300">
      <h1 className="font-bold">Son Depremler Listesi</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <QuakeList quakes={quakes} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
