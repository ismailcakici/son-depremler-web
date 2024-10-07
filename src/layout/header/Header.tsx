import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-secondary-light dark:bg-secondary-dark shadow-md">
      <h1 className="text-2xl text-textPrimary-light dark:text-textPrimary-dark">
        Son Depremler
      </h1>
      <button
        onClick={toggleTheme}
        className="text-xl text-accent dark:text-darkSecondary p-2 rounded-full"
      >
        {theme === 'light' ? <FiMoon className='text-primary-dark'/> : <FiSun className='text-primary-light'/>}
      </button>
    </header>
  );
};

export default Header;
