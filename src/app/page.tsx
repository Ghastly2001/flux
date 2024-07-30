"use client";
import Wrapper from "@/components/layout/Wrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import { people } from "../../lib/constants";
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
          <div className="flex gap-4">
            <span>in the market</span>
            <div className="flex flex-row items-center justify-center ">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
