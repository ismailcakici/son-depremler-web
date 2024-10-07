import React from 'react';
import Header from './layout/header/Header'
import AppRoutes from './routes/Routes';
import {BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className='w-5/6 sm:w-3/4 lg:w-3/5 min-h-screen mx-auto'>
      <Header />
      <AppRoutes/>
    </div>
    </Router>
  );
};

export default App;
