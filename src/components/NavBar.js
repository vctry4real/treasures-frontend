import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Treasures from '../assets/Treasure.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };
  const navigate = useNavigate();

  return (
    <div className={`w-full h-[94px] z-10 fixed ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="px-2 flex pb-2 justify-between items-center w-full h-full">
        <div className="w-auto h-auto first-letter:text-3xl font-bold mr-4 sm:text-4xl">
          <img src={Treasures} alt="Logo" />
        </div>
        <ul className="hidden md:flex flex-row gap-10 ml-auto ">
          <li>
            <Link
              to="/"
              smooth={"true"}
              duration={500}
              className="py-2 pl-3 pr-4 text-white md:hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth={"true"}
              offset={-200}
              duration={500}
              className="py-2 pl-3 pr-4 text-white md:hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={"true"}
              offset={50}
              duration={500}
              className="py-2 pl-3 pr-4 text-white md:hover:text-blue-700"
            >
              Our programs
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              smooth={"true"}
              offset={-50}
              duration={500}
              className="py-2 pl-3 pr-4 text-white md:hover:text-blue-700 "
            >
              Our research
            </Link>
          </li>
          <li>
            <Link
              to="platforms"
              smooth={"true"}
              offset={-100}
              duration={500}
              className="py-2 pl-3 pr-4 text-white  md:hover:text-blue-700"
            >
              Support
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex pr-4 ml-20">

          <div className="md:w-full flex flex-row justify-center ">
            <button
              className="flex items-center justify-center font-bold text-primary bg-yellow-400 tracking-wider rounded-2xl w-[193px] h-[56px] m-10 py-2 px-4  "
              smooth={"true"} offset={-100} duration={500}
              onClick={() => {
                navigate('/register');
              }}
            >
              Get Started{' '}

            </button>
          </div>
        </div>

        <div className="md:hidden  mr-4 " onClick={handleClick}>
          {!nav ? (
            <GiHamburgerMenu className="w-auto h-auto text-[50px] text-yellow-500" />
          ) : (
            <IoClose className="w-auto h-auto text-[50px] text-yellow-500" />
          )}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full flex flex-col mt-2 gap-3 px-8 pt-2'}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/"
            smooth={"true"}
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
            smooth={"true"}
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
            smooth={"true"}
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
            smooth={"true"}
            offset={-50}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Our programs
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="/articles"
            smooth={"true"}
            offset={-100}
            duration={500}
            className="py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700"
          >
            Our research
          </Link>
        </li>

        <div className="flex flex-col pt-4 items-center justify-center">
          <button className="w-full h-[60px] mb-4 mt-4 border-[3px] border-green-900  rounded-xl bg-[#E5EEEE] font-bold text-primary mr-4">
            <Link to="/auth" smooth={"true"} offset={-200}>
              Log in
            </Link>
          </button>
          <button className="w-full h-[60px] mb-4 mt-4 border-none rounded-xl font-bold bg-primary text-white mr-4">
            <Link to="/auth" smooth={"true"} offset={-200}>
              Sign up
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
