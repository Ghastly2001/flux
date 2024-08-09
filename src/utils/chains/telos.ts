export default {
  chain: "TLOS",
  chainId: 40,
  explorers: [
    {
      name: "teloscan",
      url: "https://teloscan.io",
      standard: "EIP3091",
    },
  ],
  features: [],
  infoURL: "https://telos.net",
  name: "Telos",
  nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
  redFlags: [],
  rpc: ["https://mainnet.telos.net/evm"],
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
