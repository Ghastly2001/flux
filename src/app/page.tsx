"use client";
import Wrapper from "@/components/layout/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <Wrapper className="flex justify-start items-start  h-screen lg:pt-24">
      <main className="flex flex-col items-start text-4xl lg:text-7xl font-semibold lg:font-bold tracking-tight">
        <div>
          <span>Find Biggest NFT</span>
          <div className="flex gap-2 w-full items-center">
            <span>Digital Artwork</span>
            <img
              src="/assets/verified.png"
              alt="verified"
              className="w-12 h-12"
            />
          </div>
          <span> in the market</span>
          <div className="flex gap-2"></div>
        </div>
      </main>
    </Wrapper>
  );
}
