import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbLuggage } from "react-icons/tb";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`${
        navBg ? "bg-gray-800 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-600 rounded-full border border-white flex items-center justify-center flex-col">
            <TbLuggage className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            TravEase
          </h1>
        </div>
        {/* NavLinks */}
        <div className=" hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center  space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white border border-white hover:bg-white/90 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
