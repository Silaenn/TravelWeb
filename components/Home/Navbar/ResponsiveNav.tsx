"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <Nav openNav={openNav} isOpen={isOpen} />
      <MobileNav closeNav={closeNav} isOpen={isOpen} />
    </>
  );
};

export default ResponsiveNav;
