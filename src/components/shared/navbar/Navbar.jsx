import React from 'react';
import { NavLink, Link } from 'react-router';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import Logo from "../../../assets/logo.png";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isActive 
            ? "bg-green-800 text-white" 
            : "text-gray-700 hover:bg-green-100 hover:text-green-800"
        }`;

    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkStyles}>
                    <FaHome className="text-lg" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={navLinkStyles}>
                    <RiTimeLine className="text-lg" />
                    <span>Timeline</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={navLinkStyles}>
                    <GoGraph className="text-lg" />
                    <span>Stats</span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="navbar container mx-auto px-4">
                {/* Logo Section with small screen */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;