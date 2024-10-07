import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import NotFound from '../pages/NotFound/NotFound';
import Map from '../pages/Map/Map';
import Cities from '../pages/Cities/Cities';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deprem-detay" element={<Detail />} />
      <Route path="/harita" element={<Map />} />
      <Route path="/sehirler" element={<Cities />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
