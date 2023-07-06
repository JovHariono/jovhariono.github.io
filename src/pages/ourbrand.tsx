import * as React from "react";
import Navbar from "./components/header/navbar";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import Mudkip2 from "../../public/assets/mudkip2.jpg";
import Brand1 from "../../public/assets/Brand1(2).png";
import Brand2 from "../../public/assets/Brand2(2).png";
import Brand3 from "../../public/assets/Brand3(2).png";
import Brand4 from "../../public/assets/Brand4(2).png";
import Brand5 from "../../public/assets/Brand5(2).png";

import Footer from "./components/cards/productCards/footer/Footer";
import { BrandType } from "../type";


interface IOurBrandProps {}

const OurBrand: React.FunctionComponent<IOurBrandProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataImagePopUp, setDataImagePopUp] = useState<StaticImageData>()
  const [isDataJudulPopUp, setDataJudulPopUp] = useState('')
  const [isDataDeskripsiPopUp, setDataDeskripsiPopUp] = useState('')

  const Brands: BrandType[] = [
    {
      image: Brand1,
      judul: "SOD Festival",
      imagePopup: Brand1,
      judulPopUp: "SOD Festival",
      deskripsiPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: Brand2,
      judul: "Chakra Live Asia",
      imagePopup: Brand1,
      judulPopUp: "SOD Festival",
      deskripsiPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: Brand3,
      judul: "Waku-Waku Festival",
      imagePopup: Brand1,
      judulPopUp: "SOD Festival",
      deskripsiPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: Brand4,
      judul: "Marvellous Festival",
      imagePopup: Brand1,
      judulPopUp: "SOD Festival",
      deskripsiPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: Brand5,
      judul: "On The Ground",
      imagePopup: Brand1,
      judulPopUp: "SOD Festival",
      deskripsiPopUp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ];

  const togglePop = (brand: BrandType) => {
    setIsClicked(!isClicked);
    setDataImagePopUp(brand.image);
    setDataJudulPopUp(brand.judul);
    setDataDeskripsiPopUp(brand.deskripsiPopUp);
  };

  return (
    <div className="container">
      <div className={`containerContent ${isClicked ? "blurContainer" : ""}`} >
        <div className="header">
          <Navbar />
        </div>
        <div className="subHeader2">
          <h1>OUR BRAND</h1>
          <div className="seperator"></div>
        </div>
        <div className="contentOurBrand">
          {Brands.map((brand, index) => {
            return (
              <div className="containerBrand" onClick={() => togglePop(brand)}>
                <Image className="imgBrand" src={brand.image} alt="unknown" />
                <h2 className="judulBrand"> {brand.judul} </h2>
                <div className="seperatorBrand"></div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
      { isClicked && <div className="popUpBrand">
        <div className="containerPopUpBrand" onClick={() => setIsClicked(!isClicked)}>
          <div className="containerButtonPopUp">
          <button className="buttonPopUp">X</button>
          </div>
          <div className="containerImagePopUp">
          <Image className="imagePopUp" src={isDataImagePopUp ? isDataImagePopUp : ""} alt="unknown" />
          </div>
          <h2 className="judulPopUp"> { isDataJudulPopUp } </h2>
          <div> { isDataDeskripsiPopUp } </div>
        </div>
      </div> }
    </div>
  );
};

export default OurBrand;
