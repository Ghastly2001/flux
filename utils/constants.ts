import { createThirdwebClient, defineChain } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;
export const client = createThirdwebClient({
  clientId,
});

const chainId = process.env.BASE_SEPOLIA_CHAIN_ID || 1;

export const chain = defineChain(chainId as number);
