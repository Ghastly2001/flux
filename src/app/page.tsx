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
        className="grid grid-cols-4 gap-10 mt-10"
      >
        Home
      </motion.main>
    </Wrapper>
  );
}
