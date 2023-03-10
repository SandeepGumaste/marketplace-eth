import detectEthereumProvider from "@metamask/detect-provider";
import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

const Web3Context = createContext({});

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isInitialized: false,
  });
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api((prevWeb3Api) => ({
          ...prevWeb3Api,
          provider,
          web3,
          isInitialized: true,
        }));
      } else {
        setWeb3Api((prevWeb3Api) => ({ ...prevWeb3Api, isInitialized: true }));
        console.error("please install metamask");
      }
    };
    loadProvider();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
