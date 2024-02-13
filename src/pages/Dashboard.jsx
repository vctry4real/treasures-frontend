import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { PiHandWavingFill } from 'react-icons/pi';
import { IoBookSharp } from 'react-icons/io5';
import { IoFolderSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import progress from '../assets/progress.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import LateefatOdubanjo from '../assets/LateefatOdubanjo.jpg';
import DevonLane from '../assets/DevonLane.jpg';
import KathrynMurphy from '../assets/KathrynMurphy.jpg';
import CameronWilliams from '../assets/CameronWilliams.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DoctorCardDisplay from '../components/(doctorCards)/DoctorCardDisplay';
import HealthCardDisplay from '../components/(healthPractioners)/HealthCardDisplay';

const Dashboard = () => {
  const ProfileData = [
    {
      id: 1,
      name: 'Gabriel Samuel',
      email: 'gabrielsmauel@gmail.com',
      phoneNumber: '(12) 98765-4321',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavDropdown = () => {
    setNavOpen(!navOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
                        <Link
                          to="/sign-out"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* The entire profile menu begins here */}
            <div className="relative">
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
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <li>Sign out</li>
                  </Link>
                </ul>
              </div>
              {/* Profile dropdown menu ends here */}
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar navigation ends here */}

      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* The aside DASHBOARD menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </li>
              '
            </Link>

            {/* The aside KANBAN menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </li>
            </Link>

            {/* The aside INBOX menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Notifications
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </li>
            </Link>

            {/* The aside USERS menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Profiles</span>
              </li>
            </Link>

            {/* The aside PRODUCTS menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Premium Package
                </span>
              </li>
            </Link>

            {/* The aside Help and Feedback  */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Help & Feedback
                </span>
              </li>
            </Link>

            {/* Child(ren) profiles */}
            <div>
              <h3>Child(ren) profiles</h3>
            </div>

            {/* The aside SIGN IN menu link */}
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <li className="flex items-center p-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex flex-col items-center gap-2 text-left p-2 h-auto mb-9 rounded-xl bg-primary">
            <p className="w-full text-md text-white text-left">
              Get Started with Treasure Consultant
            </p>
            <h3 className="w-full flex items-center text-white text-left text-md font-bold">
              Browse Health Professional{' '}
              <span className="pl-2 mr-2">
                <FaLongArrowAltRight />
              </span>
            </h3>
          </div>
          <div className="flex flex-row gap-8 mb-6">
            <div className="flex flex-col items-center justify-center rounded bg-transparent">
              <div className="text-left w-full">
                {' '}
                {/* Add text-left class here */}
                <h3 className="text-xl text-gray-800 flex flex-grow items-center font-semibold">
                  Welcome{' '}
                  <span className="ml-2">
                    <PiHandWavingFill className="text-yellow-500" />
                  </span>
                </h3>
                <p className="text-md text-gray-900">
                  You have an upcoming session
                </p>
              </div>
            </div>
            <div className="">
              <button className="p-2 rounded-2xl border  ml-auto w-[120px] bg-slate-100">
                See upcoming
              </button>
            </div>
          </div>

          {/* Children's profiles */}
          <div className="flex flex-row gap-2 mb-4">
            <div className="flex flex-col items-center justify-center rounded bg-transparent">
              <div className="text-left">
                {' '}
                {/* Add text-left class here */}
                <h3 className="text-lg text-gray-800">
                  Your children's profiles
                </h3>
                <p className="text-[13px] text-gray-900 ">
                  You have no child profile, please tap the add button to add
                  your child(ren)
                </p>
              </div>
            </div>
            <div className="">
              <FaGreaterThan />
            </div>
          </div>

          {/* Add child profile Icon */}

          <div className="flex flex-col items-center rounded h-28">
            <div className="flex flex-col items-start justify-start w-full ">
              <Link to="/">
                <div className="flex items-center justify-center bg-gray-200 w-[64px] h-[64px] rounded-full px-4 py-2 border-2 border-gray-900 shadow-sm ">
                  <svg
                    className="w-3.5 h-3.5 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </div>
              </Link>
              <p className="text-md text-left text-gray-900">Add child</p>
            </div>
          </div>

          {/* Add child profile  ends here*/}

          {/*Book An Appointment*/}
          <div className="flex items-center justify-center p-4 mb-7 rounded-2xl bg-gray-100">
            <div>
              <p className=" flex flex-row items-center text-2xl text-gray-400 dark:text-gray-500">
                {' '}
                <span className="mr-3">
                  <IoBookSharp />
                </span>
                Book Appointment
              </p>
            </div>
          </div>
          {/* Book An Appointment Ends Here */}

          {/* Features Carousel */}
          <Swiper
            slidesPerView={'1'}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-pink-50 h-28">
                <Link to={'/'} className="w-full mb-3">
                  <div className="w-full flex items-center">
                    <h3 className=" font-bold">Schedule</h3>
                    <div className="ml-auto">
                      <FaGreaterThan />
                    </div>
                  </div>
                </Link>
                <div className="w-full flex items-center gap-4">
                  <div>
                    <IoFolderSharp />
                  </div>
                  <div className="">
                    <p className="text-md text-gray-400">
                      You Have no schedules.
                    </p>
                    <p className="font-bold ">Browse Health professionals</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-gray-100 h-28">
                <Link to={'/'} className="w-full mb-3">
                  <div className="w-full flex items-center">
                    <h3 className="mb-3 font-bold">Consultations</h3>
                    <div className="ml-auto">
                      <FaGreaterThan />
                    </div>
                  </div>
                </Link>
                <div className="w-full flex items-center gap-4">
                  <div>
                    <FaPhoneAlt />
                  </div>
                  <div className="">
                    <p className="text-md text-gray-400">Completed 0 Mins.</p>
                    <svg
                      width="90"
                      height="12"
                      viewBox="0 0 90 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1326_4629)">
                        <rect
                          y="0.5"
                          width="122"
                          height="11"
                          rx="2"
                          fill="#1A96F0"
                        />
                        <rect
                          x="40"
                          y="0.5"
                          width="82"
                          height="11"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1326_4629">
                          <rect
                            y="0.5"
                            width="122"
                            height="11"
                            rx="2"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center rounded p-2 mb-7 bg-pink-50 h-28">
                <Link to={'/'} className="w-full mb-3">
                  <div className="w-full flex items-center">
                    <h3 className="mb-3 font-bold">Schedule</h3>
                    <div className="ml-auto">
                      <FaGreaterThan />
                    </div>
                  </div>
                </Link>
                <div className="w-full flex items-center gap-4">
                  <div>
                    <IoFolderSharp />
                  </div>
                  <div className="">
                    <p className="text-md text-gray-400">
                      You Have no schedules.
                    </p>
                    <p className="font-bold ">Browse Health professionals</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Features Carousel End */}

          <DoctorCardDisplay />

          <HealthCardDisplay />

          {/* Consultatants section */}

          <div className="flex flex-col gap-5 items-center w-full justify-center h-auto mb-4 rounded">
            <div className="flex w-full items-center">
              <h1 className="text-xl text-left font-bold">
                Recent Consultations
              </h1>
              <p className="text-md font-light ml-auto">View all</p>
            </div>
            <div className="flex w-full flex-col gap-7">
              {/* Consultants N0 1 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={LateefatOdubanjo}
                      alt="/"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Latifat Odubanjo</p>
                    <p className="text-md font-medium">
                      Senior Physiotherapist
                    </p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 2 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={DevonLane}
                      alt="/"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Devon Lane</p>
                    <p className="text-md font-medium">Senior Dental Officer</p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 3 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={CameronWilliams}
                      alt="/"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Cameron Williamson</p>
                    <p className="text-md font-medium">Paediatrics Dentist</p>
                  </div>
                </div>
                <button className="w-1/4 px-2 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>

              {/* Consultants N0 4 */}
              <div className=" w-full flex flex-row items-center">
                <div className=" flex items-center justify-start text-lef m">
                  <div className="w-[40px] h-[40px] mr-2 rounded-full border overflow:hidden">
                    <img
                      src={KathrynMurphy}
                      alt="/"
                      className="w-[40px] rounded-full h-[40px]"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Kathryn Murphy</p>
                    <p className="text-md font-medium">Paediatrics Surgeon</p>
                  </div>
                </div>
                <button className="w-1/4 px-1 py-1 border border-gray-300 rounded-xl ml-auto ">
                  Message
                </button>
              </div>
            </div>

            {/* Sucess Tips */}
            <div className="flex flex-col items-center justify-center rounded p-3 my-7 bg-blue-200 h-auto">
              <div className="w-full mb-3">
                <div className="w-full flex items-center">
                  <h3 className=" font-bold">#1 Tips for Success</h3>
                  <div className="ml-auto">
                    <FaGreaterThan />
                  </div>
                </div>
                <h2 className="text-lg font-bold my-3">
                  How to prepare for your first meeting?
                </h2>
              </div>
              <div className="w-full flex items-center gap-4">
                <div>
                  <p className="text-md text-gray-700">
                    Plan an agenda! Plan out the questions and topics you’d like
                    to discuss. If you’d like to work together on long-terms
                    goals, set some time to discuss expectation for each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
