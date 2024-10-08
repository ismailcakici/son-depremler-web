import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import appIcon from "../../assets/icon/app-ic.png";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="navbar bg-base-300 rounded-box shadow-lg top-3 sticky mb-5 z-[9999]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-10 h-10" src={appIcon} alt="app-ic" /> Son Depremler
        </Link>
      </div>
      <div className="flex-none">
        <button onClick={toggleTheme} className="btn btn-ghost">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
