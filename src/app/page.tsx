"use client";
import { Progress } from "@/components/ui/progress";
import { MoveDownIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
export default function Home() {
  const [scrollY, setScrollY] = useState<number>(10);
  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    setScrollY(window.scrollY / 10 + 10);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <section className="w-full pt-4 md:pt-8 lg:pt-16">
      <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Unlock the Power of Web3 in Staking
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Earn passive income by staking your crypto assets on our secure
              and user-friendly platform.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Start Staking here
          </Link>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] rounded-xl opacity-50 blur-3xl" />
          <img
            src="/assets/bg/Gradients.png"
            width="600"
            height="500"
            alt="Web3 Staking"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-contain sm:w-full relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
