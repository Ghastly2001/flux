"use client";
import React from "react";
import Wrapper from "../layout/Wrapper";
import Image from "next/image";
import { navLinks } from "@/lib/navLinks";
import NavLink from "./NavLink";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import CustomConnectButton from "../connect/CustomConnectButton";

const Navbar = () => {
  return (
    <Wrapper className="z-[100]">
      <div className="flex justify-between items-center w-full ">
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="px-2 lg:px-4 flex gap-1 items-center cursor-pointer relative"
        >
          <img src="/assets/logo.svg" alt="logo" className="h-16 w-16 z-10" />
          <span className="text-pink-600 font-bold text-2xl">
            Flux<span className="text-white font-semibold text-2xl">Dot</span>
          </span>

          <div className="absolute h-10 w-10 bg-pink-500 rounded-full filter blur-xl left-6" />
        </motion.div>
        {/* links */}
        <div className="flex gap-4 lg:gap-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div>
          <CustomConnectButton />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
