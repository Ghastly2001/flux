import { createThirdwebClient, defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;
export const client = createThirdwebClient({
  clientId,
});

export const chain = sepolia;
