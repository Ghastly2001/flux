import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../../utils/constants";

const CustomConnectButton = () => {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  );
};

export default CustomConnectButton;
