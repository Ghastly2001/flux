import telos from "./chains/telos";
import telosTestnet from "./chains/telosTestnet";

export const chain =
  process.env.NEXT_PUBLIC_CHAIN === "40" ? telos : telosTestnet;
