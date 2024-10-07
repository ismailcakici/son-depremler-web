import React from "react";
import { FaHome, FaMap, FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <ul className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 menu menu-horizontal bg-base-300 rounded-box z-10">
            <li>
                <Link to="/">
                    <FaHome/>
                </Link>
            </li>
            <li>
                <Link to="/harita">
                    <FaMap/>
                </Link>
            </li>
            <li>
                <Link to="/sehirler">
                    <FaCity/>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;