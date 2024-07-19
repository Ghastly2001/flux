import { cn } from "@/lib/utils";
import React from "react";

interface TWrapper {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: TWrapper) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
