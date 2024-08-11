"use client";
import Wrapper from "@/components/layout/Wrapper";
import { Progress } from "@/components/ui/progress";
import { useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);
  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    setScrollY(window.scrollY / 10);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Wrapper className="flex justify-between lg:pt-24 flex-col items-center h-[91vh] ">
      <div className="flex justify-center flex-col w-full mt-16">
        <main className="flex justify-between items-center flex-wrap">
          <div className="flex flex-col w-1/2">
            <h1 className="text-7xl font-extrabold text-slate-50">
              Buy, Sell your Fav. NFT's
            </h1>
            <p className="text-lg font-medium text-foreground">
              Connect with the community, trade crypto among each other. Play
              Quests and earn FluxDot tokens.
            </p>
          </div>
          <div>right</div>
        </main>
      </div>
      <div>Swipe to show</div>
    </Wrapper>
  );
}
