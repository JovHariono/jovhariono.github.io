import * as React from "react";
import Navbar from "./components/header/navbar";
import Footer from "./components/cards/productCards/footer/Footer";

interface IOurPartnerProps {}

const OurPartner: React.FunctionComponent<IOurPartnerProps> = (props) => {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader2">
        <h1>OUR PARTNER</h1>
        <div className="seperator"></div>
      </div>
      <Footer />
    </div>
  );
};

export default OurPartner;
