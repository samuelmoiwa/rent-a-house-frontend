/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="">
      <div className="md:hidden flex justify-between m-2">
        <div onClick={() => setNav(!nav)}><FaBars size={30} color="green" /></div>
        <div className="w-10 h-10"><img src={logo} alt="logo-image" className="object-contain" /></div>
      </div>
      <div className="hidden md:block fixed top-0 bottom-0 p-2 w-[200px] overflow-y-auto text-center bg-white shadow h-screen border-r-3 border-gray-400">
        <div className="w-44 pt-8 flex justify-center items-center"><img src={logo} alt="logo-image" className="w-32" /></div>
        <ul className="mt-30 font-montserrat font-bold text-left text-font-color pl-2">
          <li className="my-7"><NavLink to="/">HOME</NavLink></li>
          <li className="my-7"><NavLink to="/reserve">RESERVE</NavLink></li>
          <li className="my-7"><NavLink to="/myreservations">RESERVATIONS</NavLink></li>
          <li className="my-7"><NavLink to="/additem">ADD</NavLink></li>
          <li className="my-7"><NavLink to="/deleteitem">DELETE</NavLink></li>
        </ul>
      </div>
      {nav && (
        <div className="fixed top-0 bottom-0 p-2 w-screen overflow-y-auto text-center bg-white shadow h-screen">
          <div onClick={() => setNav(!nav)} className="m-4"><FaTimes size={30} color="green" /></div>
          <ul className="flex-col font-montserrat font-bold text-font-color">
            <li onClick={() => setNav(!nav)} className="my-5"><NavLink to="/">HOME</NavLink></li>
            <li onClick={() => setNav(!nav)} className="my-5"><NavLink to="/reserve">RESERVE</NavLink></li>
            <li onClick={() => setNav(!nav)} className="my-5"><NavLink to="/myreservations">RESERVATIONS</NavLink></li>
            <li onClick={() => setNav(!nav)} className="my-5"><NavLink to="/additem">ADD</NavLink></li>
            <li onClick={() => setNav(!nav)} className="my-5"><NavLink to="/deleteitem">DELETE</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
