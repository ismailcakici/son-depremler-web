import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/QuakeDetail/QuakeDetail";
import NotFound from "../pages/NotFound/NotFound";
import Map from "../pages/Map/Map";
import Cities from "../pages/Cities/Cities";
import CityDetail from "../pages/CityDetail/CityDetail";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/harita" element={<Map />} />
      <Route path="/sehirler" element={<Cities />} />
      <Route path="/sehirler/sehir-detay/:cityId" element={<CityDetail />} />
      <Route path="/deprem-detay/:eventId" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
