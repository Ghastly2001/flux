export default {
  chain: "TLOS",
  chainId: 41,
  explorers: [
    {
      name: "teloscan",
      url: "https://testnet.teloscan.io",
      standard: "EIP3091",
    },
  ],
  features: [],
  infoURL: "https://telos.net",
  name: "Telos",
  nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
  redFlags: [],
  rpc: ["https://testnet.telos.net/evm"],
  rpctest: ["https://mainnet.telos.net/evm"],
  shortName: "tlos",
  slug: "telos",
  testnet: false,
  icon: {
    url: process.env.NEXT_PUBLIC_APP_URL + "/images/Telos-logo-transparent.png",
    width: 512,
    height: 512,
    format: "png",
  },
};
