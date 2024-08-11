import React from "react";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { chain, client } from "../../../utils/constants";

const CustomConnectButton = () => {
  return (
    <div className="py-2">
      <ConnectButton
        client={client}
        chain={chain}
        connectButton={{
          label: "Connect Wallet",
        }}
        theme={darkTheme({
          colors: {
            accentText: "#DB2777",
            accentButtonBg: "#DB2777",
          },
        })}
        connectModal={{
          size: "wide",
          titleIcon: "",
          showThirdwebBranding: false,
        }}
      />
    </div>
  );
};

export default CustomConnectButton;
