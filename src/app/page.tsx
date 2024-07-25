"use client";
import Wrapper from "@/components/layout/Wrapper";
import { motion } from "framer-motion";
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
      >
        Find biggest NFT digital Artwork in the market
      </motion.main>
    </Wrapper>
  );
}
