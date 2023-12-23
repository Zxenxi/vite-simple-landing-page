/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { HiBars3BottomRight, HiXCircle } from "react-icons/hi2";

export const Navbar = () => {
  const [Nav, SetNav] = useState(false);

  const toggleNav = () => {
    SetNav(!Nav);
  };

  const MenuItem = [
    { id: "1", name: "Home" },
    { id: "2", name: "About" },
    { id: "3", name: "Profile" },
    { id: "4", name: "Communities" },
  ];
  return (
    <header className=" container mx-auto text-white ">
      <nav>
        <div className="flex h-32 justify-between items-center mx-5 uppercase ">
          <img src={Logo} alt="logo" />
          <ul className="hidden md:flex space-x-6 ">
            {MenuItem.map(({ id, name }) => (
              <li
                key={id}
                className="realtive tracking-wider cursor-pointer hover:font-bold duration-200 "
              >
                {name}
              </li>
            ))}
          </ul>
          <button onClick={toggleNav} className="md:hidden z-20">
            {Nav ? <HiXCircle /> : <HiBars3BottomRight />}
          </button>
        </div>
        <div
          className={`${
            Nav ? "translate-y-0" : "-translate-y-full"
          } " left-0 top-0 h-fit transform-all transition-all ease-in-out duration-150 absolute"`}
        >
          {Nav && (
            <ul className="flex flex-col items-center justify-center space-y-6 h-[500px] uppercase font-serif text-2xl -mt-24">
              {MenuItem.map(({ id, name }) => (
                <li key={id} className="tracking-wider">
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
