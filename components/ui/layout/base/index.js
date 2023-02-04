import { Navbar, Footer } from "components/ui";
import { Web3Provider } from "components/providers";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <Web3Provider>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
};

export default BaseLayout;
