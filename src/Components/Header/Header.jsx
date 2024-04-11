import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import Logo from "../../Images/Logo-Blue-1.png";

function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Update isActive based on the current location
    switch (location.pathname) {
      case "/":
        setIsActive(1);
        break;
      case "/about":
        setIsActive(2);
        break;
      case "/contact":
        setIsActive(3);
        break;
      case "/service":
        setIsActive(4);
        break;
      default:
        setIsActive(1);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id);
    setIsOpen(true);
  };



  return (
    <div className="fixed w-full z-50">
      <nav className="bg-white dark:bg-gray-900 w-full shadow-lg lg:px-20 md:px-7 px-4 font-family border-b">
        <div className=" flex flex-wrap items-center justify-between mx-auto">
          <div className="z-40">
          <img className="w-44 lg:w-48 md:w-44 z-40" src={Logo} alt="nishant" />
          </div>
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <NavLink 
            to="/register" 
            activeclassname="active"
            id="0"
            onClick={(e) => handleNavSelected(e)}
            className={`lg:px-8 md:px-8 px-6 z-40 bg-white hover:bg-[--three-color] outline outline-2 hover:text-white outline-[--three-color] text-[--three-color] font-medium rounded-md text-sm py-2 text-center ${
              isActive === "0" ? "active hover:text-white cursor-pointer" : "hover:text-white cursor-pointer"
            }`}
          >
            Sign In
          </NavLink>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden absolute md:right-8 right-6 top-7 cursor-pointer h-fit z-40"
              >
                {isOpen ? <FaBars className="text-2xl" /> : <AiOutlineClose className="text-2xl" />}
              </div>
            </button>
          </div>
          <div
            className={`nav-menu lg:flex lg:pb-0 lg:py-0 md:py-7 py-7 lg:items-center text-base absolute  lg:static lg:z-auto z-30 right-0 w-full lg:w-auto md:pl-0 transition-all duration-500 ease-in 
          ${isOpen ? "top-[-200px]" : "top-[29px]"}` }
            id="navbar-sticky"
          >
            <ul className="flex flex-col nav-menu p-4 lg::p-0 mt-4 lg:mb-0 md:mb-4 mb-4 font-medium rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-gray-400">
              <NavLink
                to="/"
                activeclassname="active"
                id="1"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "1"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Home
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/about"
                id="2"
                activeclassname="active"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "2"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                About US
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/contact"
                activeclassname="active"
                id="3"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "3"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Contact US
              </NavLink>
              </li>
              <li className="text-gray-400">
              <NavLink
                to="/service"
                activeclassname="active"
                id="4"
                onClick={(e) => handleNavSelected(e)}
                className={
                  isActive === "4"
                    ? "active mr-5  hover:text-black  cursor-pointer "
                    : "mr-5  hover:text-black  cursor-pointer "
                }
              >
                Services
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
