import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Treasures from '../assets/Treasure.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[94px] z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex pb-2 justify-between items-center w-full h-full">
        <div className="w-auto h-auto first-letter:text-3xl font-bold mr-4 sm:text-4xl">
          <img src={Treasures} alt="Logo" />
        </div>
        <ul className="hidden md:flex flex-row gap-10 ml-auto ">
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth={true}
              offset={-200}
              duration={500}
              className="py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={true}
              offset={50}
              duration={500}
              className="py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              smooth={true}
              offset={-50}
              duration={500}
              className="py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 "
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to="platforms"
              smooth={true}
              offset={-100}
              duration={500}
              className="py-2 pl-3 pr-4 text-gray-900  md:hover:text-blue-700"
            >
              Articles
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex pr-4 ml-20">
          <button className="w-[147px] h-[60px] border-none rounded bg-primary text-white mr-4">
            <Link href="/joinas">Get started</Link>
          </button>
        </div>

        <div className="md:hidden  mr-4 " onClick={handleClick}>
          {!nav ? (
            <GiHamburgerMenu className="w-5" />
          ) : (
            <IoClose className="w-5" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute bg-zinc-200 w-full flex flex-col mt-2 gap-3 px-8 pt-2'
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/"
            smooth={true}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/about"
            smooth={true}
            offset={-200}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/contact"
            smooth={true}
            offset={50}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Contact
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/parners"
            smooth={true}
            offset={-50}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Partners
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/articles"
            smooth={true}
            offset={-100}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Articles
          </Link>
        </li>

        <div className="flex flex-row pt-4 items-center justify-center">
          <button className="w-[147px] h-[60px] mb-4 mt-4 border-none rounded bg-primary text-white mr-4">
            <Link>Get started</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
