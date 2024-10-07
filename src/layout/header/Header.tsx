import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="navbar bg-base-100 dark:bg-base-300 rounded-lg top-3 sticky z-10">
      <div className='flex-1'>
        <a href='#' className='btn btn-ghost text-xl'>Son Depremler</a>
      </div>
      <div className='flex-none'>
      <button onClick={toggleTheme} className="btn btn-ghost">
        {theme === 'light' ? <FaMoon className="text-primary" /> : <FaSun className="text-primary" />}
      </button>
      </div> 
    </header>
  );
};

export default Header;
