const { createContext, useContext } = require("react");

const web3Context = createContext({});

export default function web3Provider({ children }) {
  return (
    <web3Context.Provider value={{ test: "Hello" }}>
      {children}
    </web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(web3Context);
}
