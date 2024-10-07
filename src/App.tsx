// src/App.tsx

import React from 'react';
import Header from './layout/header/Header'

const App: React.FC = () => {
  return (
    <div className='w-5/6 sm:w-3/4 lg:w-3/5 min-h-screen mx-auto'>
      <Header />
    </div>
  );
};

export default App;
