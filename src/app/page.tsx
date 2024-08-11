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
    <Wrapper className="flex justify-center items-start lg:pt-24 flex-col h-[200vh] ">
      <main>They are watching</main>
      <Progress value={scrollY * 2} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
        necessitatibus esse, harum dolorem libero vero, exercitationem nesciunt
        fugit eveniet aut nobis ducimus. Exercitationem odio earum quam, aliquam
        mollitia nobis temporibus et sed culpa at facilis eveniet amet quibusdam
        nulla. Fugiat, repudiandae sed laudantium esse saepe similique
        dignissimos temporibus quidem nulla ut soluta reiciendis quos nesciunt.
        Commodi temporibus illo aspernatur consequatur, sit ut incidunt numquam
        in necessitatibus sed dolor cumque sequi velit? Nihil incidunt sint
        laudantium aliquid labore minus dolor perspiciatis, reprehenderit soluta
        harum eaque. Velit eos blanditiis, aperiam laboriosam culpa corporis
        quis libero praesentium, debitis, cumque officia cupiditate doloremque
        cum.
      </p>
    </Wrapper>
  );
}
