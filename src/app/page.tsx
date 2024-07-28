"use client";
import Wrapper from "@/components/layout/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <Wrapper>
      <motion.main
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-start justify-center h-full text-4xl lg:text-7xl font-semibold lg:font-bold tracking-tight mt-10"
      >
        <span>Find Biggest NFT</span>
        <div className="flex gap-2 w-full items-center">
          <span>Digital Artwork</span>
          <img
            src="/assets/verified.png"
            alt="verified"
            className="w-12 h-12"
          />
        </div>
        <div className="flex gap-2"></div>
        <span> in the market</span>
      </motion.main>
    </Wrapper>
  );
}
