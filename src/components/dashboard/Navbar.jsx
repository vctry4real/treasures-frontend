import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../../providers/DashboardProvider';
import { useSelector } from 'react-redux';
import useProfile from '../../hooks/useProfile';
import { useAlertContext } from '../../providers/AlertProvider';

const ProfileData = [
  {
    id: 1,
    name: 'Gabriel Samuel',
    email: 'gabrielsmauel@gmail.com',
    phoneNumber: '(12) 98765-4321',
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { currentProfile, handleLogout } = useDashboardContext();

  const toggleNavDropdown = () => {
    setNavOpen(!navOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="relative">
              {/* Hamburger menu */}
              <div className="relative">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  onClick={toggleNavDropdown}
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  {/* Hamburger menu  svg*/}
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                {/* Hamburger dropdown menu */}
                <div
                  className={`absolute left-0 mt-2 ${navOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 z-50`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-user"
                  style={{ top: 'calc(100% + 0.5rem)', left: 0 }}
                >
                  <ul>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Bookings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/earnings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/childprofile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Create Profile
                      </Link>
                    </li>
                    <li>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleLogout()}
                      >
                        Sign out
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The entire profile menu begins here */}
          <div className="relative flex items-center gap-4">
            <span className="text-white">
              Welcome {currentProfile?.username}
            </span>
            {/* Profile menu image */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>

            {/* Profile icon dropdown menu */}
            <div
              className={`absolute top-full right-0 mt-2 ${isOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-user"
            >
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900 dark:text-white">
                  {ProfileData.name}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  {ProfileData.email}
                </p>
              </div>
              <ul className="py-1" role="none">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <li>Dashboard</li>
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  {' '}
                  <li>Profile</li>
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <li>Savings</li>
                </Link>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  onClick={() => handleLogout()}
                >
                  <li>Sign out</li>
                </div>
              </ul>
            </div>
            {/* Profile dropdown menu ends here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
