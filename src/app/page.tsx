"use client";
import Wrapper from "@/components/layout/Wrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import { people } from "../../lib/constants";
export default function Home() {
  return (
    <Wrapper className="flex justify-center items-start lg:pt-24 ">
      <main className="flex flex-col items-start text-4xl lg:text-7xl font-semibold lg:font-bold tracking-tight transition-all">
        <img
          src="/assets/bg/robot.png"
          alt="logo"
          className="h-[30rem] z-10 absolute bottom-0 left-20 transition-all"
        />
        <div className="uppercase text-center">
          <span>They are</span>
          <div className="flex gap-2 w-full items-center">
            <span className="tracking-wide font-extrabold text-7xl ">
              Watching
            </span>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
