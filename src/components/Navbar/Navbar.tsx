import React from "react";
import Wrapper from "../layout/Wrapper";
import Image from "next/image";
import { navLinks } from "@/lib/navLinks";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex justify-between items-center w-full border-b border-gray-800">
        <div className="px-2 lg:px-4 flex gap-1 items-center">
          <img src="/assets/logo.svg" alt="logo" className="h-16 w-16 z-10" />
          <span className="text-pink-600 font-bold text-2xl ">
            Flux<span className="text-white font-semibold text-2xl">Dot</span>
          </span>
        </div>
        {/* links */}
        <div className="flex gap-4 lg:gap-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
        {/* connect button */}
      </div>
    </Wrapper>
  );
};

export default Navbar;
