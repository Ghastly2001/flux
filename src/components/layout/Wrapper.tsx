import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface TWrapper {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: TWrapper) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={cn(" mx-auto w-full max-w-screen-xl ", className)}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
