"use client";
import { Progress } from "@/components/ui/progress";
import { MoveDownIcon } from "lucide-react";
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
    <div className="flex justify-between flex-col items-center h-[91vh] bg-hero">
      <div className="flex justify-center flex-col w-full lg:pt-12 lg:px-20">
        <main className="flex justify-between items-center ">
          <div className="flex flex-col w-1/2 justify-center items-center">
            <h1 className="text-7xl font-extrabold text-slate-50">
              Buy, Sell your Fav. NFT's
            </h1>
            <p className="text-lg font-medium text-foreground">
              Connect with the community, trade crypto among each other. Play
              Quests and earn FluxDot tokens.
            </p>
          </div>
          <div className="flex flex-col mb-8 justify-center items-center">
            <img
              src="/assets/hero-image.png"
              className="h-full w-full"
              alt="mountain"
            />
            <Progress
              value={scrollY}
              className="w-1/2 backdrop-blur-sm bg-transparent"
            />
          </div>
        </main>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1>Let's Go</h1>
        <MoveDownIcon className="animate-bounce" />
      </div>
    </div>
  );
}
