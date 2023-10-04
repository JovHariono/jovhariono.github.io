import * as React from "react";
import Navbar from "./components/header/navbar";
import Footer from "./components/cards/productCards/footer/Footer";

//utama
import Partner1 from "../../public/assets/Partner1/1.png"
import Partner2 from "../../public/assets/Partner1/2.png"
import Partner3 from "../../public/assets/Partner1/3.png"

//services
import PartnerS1 from "../../public/assets/PartnerS/1.png"
import PartnerS2 from "../../public/assets/PartnerS/2.png"
import PartnerS3 from "../../public/assets/PartnerS/3.png"
import PartnerS4 from "../../public/assets/PartnerS/4.png"
import PartnerS5 from "../../public/assets/PartnerS/5.png"
import PartnerS6 from "../../public/assets/PartnerS/6.png"
import PartnerS7 from "../../public/assets/PartnerS/7.png"
import PartnerS8 from "../../public/assets/PartnerS/8.png"
import PartnerS9 from "../../public/assets/PartnerS/9.png"
import PartnerS10 from "../../public/assets/PartnerS/10.png"
import PartnerS11 from "../../public/assets/PartnerS/11.png"
import PartnerS12 from "../../public/assets/PartnerS/12.png"
import PartnerS13 from "../../public/assets/PartnerS/13.png"
import PartnerS14 from "../../public/assets/PartnerS/14.png"
import PartnerS15 from "../../public/assets/PartnerS/15.png"
import PartnerS16 from "../../public/assets/PartnerS/16.png"
import PartnerS17 from "../../public/assets/PartnerS/17.png"
import PartnerS18 from "../../public/assets/PartnerS/18.png"

//FnB
import PartnerFnB1 from "../../public/assets/PartnerFnB/1.png"
import PartnerFnB2 from "../../public/assets/PartnerFnB/2.png"
import PartnerFnB3 from "../../public/assets/PartnerFnB/3.png"
import PartnerFnB4 from "../../public/assets/PartnerFnB/4.png"
import PartnerFnB5 from "../../public/assets/PartnerFnB/5.png"
import PartnerFnB6 from "../../public/assets/PartnerFnB/6.png"
import PartnerFnB7 from "../../public/assets/PartnerFnB/7.png" 
import PartnerFnB8 from "../../public/assets/PartnerFnB/8.png" 

import Partner from "./components/cards/productCards/Partner";

interface IOurPartnerProps {}

const OurPartner: React.FunctionComponent<IOurPartnerProps> = (props) => {
  const partners = [
    {
      judul: 'Bank Jatim',
      gambar: Partner2,
    },
    {
      judul: 'Gaung Merah',
      gambar: PartnerS1,
    },
    {
      judul: 'Toyota',
      gambar: Partner1,
    },
    {
      judul: 'MS GLOW',
      gambar: Partner3,
    },
    {
      judul: 'MS GLOW MEN',
      gambar: PartnerS8,
    },
    {
      judul: 'Telkomsel',
      gambar: PartnerS11,
    },
    {
      judul: 'LA zone',
      gambar: PartnerS6,
    },
    {
      judul: 'GRAB',
      gambar: PartnerS4,
    },
    {
      judul: 'Tiket.com',
      gambar: PartnerS9,
    },
    {
      judul: 'Le Minerale',
      gambar: PartnerFnB1,
    },
    {
      judul: 'Teh Pucuk Harum',
      gambar: PartnerFnB7,
    },
    {
      judul: 'Mie Sedaap',
      gambar: PartnerFnB5,
    },
    {
      judul: 'Top Cappucino',
      gambar: PartnerFnB2,
    },
    {
      judul: 'KLT New',
      gambar: PartnerS16,
    },
    {
      judul: 'Chatime',
      gambar: PartnerFnB3,
    },
    {
      judul: 'JATINANGOR',
      gambar: PartnerFnB4,
    },
    {
      judul: 'MERCURE HOTEL',
      gambar: PartnerS13,
    },
    {
      judul: 'NOVOTEL',
      gambar: PartnerS12,
    },
    {
      judul: 'Photomatics',
      gambar: PartnerS10,
    },
    {
      judul: 'HARPER PRODUCTION',
      gambar: PartnerS18,
    },
    {
      judul: 'RUMAHKECE.NET',
      gambar: PartnerS17,
    },
    {
      judul: 'Suara Merdeka Network',
      gambar: PartnerS14,
    },
    {
      judul: 'Emina',
      gambar: PartnerS5,
    },
    {
      judul: 'Mandiri',
      gambar: PartnerS7,
    },
    {
      judul: 'Bank bjb',
      gambar: PartnerS2,
    },
    {
      judul: 'instpower',
      gambar: PartnerS3,
    },
    {
      judul: 'Softex',
      gambar: PartnerS15,
    },
    {
      judul: 'Nutriville',
      gambar: PartnerFnB6,
    },
    {
      judul: 'Sari Roti',
      gambar: PartnerFnB8,
    },
  ]

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader2">
        <h1>OUR PARTNER</h1>
        <div className="seperator"></div>
      </div>
      <div className="partnerContent">
        { partners.map((partner, index) => {
          return(
            <Partner key={index} judul={partner.judul} gambar={partner.gambar}/>
          )
        }) }
      </div>
      <Footer />
    </div>
  );
};

export default OurPartner;
