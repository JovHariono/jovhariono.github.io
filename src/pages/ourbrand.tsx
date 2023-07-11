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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface IOurBrandProps {}

const OurBrand: React.FunctionComponent<IOurBrandProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataImagePopUp, setDataImagePopUp] = useState<StaticImageData[]>([]);
  const [isDataJudulPopUp, setDataJudulPopUp] = useState("");
  const [isDataDeskripsiPopUp, setDataDeskripsiPopUp] = useState("");
  const [isInstagram, setInstagram] = useState("");
  const [isTwitter, setisTwitter] = useState("");
  const [isTiktok, setTiktok] = useState("");
  const [isYoutube, setYoutube] = useState("");

  const Brands: BrandType[] = [
    {
      image: Brand1,
      judul: "SOD Festival",
      imagePopup: [Brand1],
      judulPopUp: "SOD Festival",
      deskripsiPopUp:
        "Events that are organized by PT. Serikat Orang Dalam (SOD), combining music, arts, foods and fashion in one place.",
      instagram: "https://www.instagram.com/sodfestival/",
      twitter: "https://twitter.com/sodfestival?s=21&t=KLf2POP_e5uImzVPbbePQQ",
      tiktok: "https://www.tiktok.com/@sodfestival?lang=en",
      youtube: "https://www.youtube.com/@sodfestival",
    },
    {
      image: Brand2,
      judul: "Chakra Live Asia",
      imagePopup: [Brand2],
      judulPopUp: "Chakra Live Asia",
      deskripsiPopUp:
        "International music promoter in South East Asia, Indonesia, bringing the best talents and performers across the globe.",
      instagram: "https://www.instagram.com/chakraliveasia/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: Brand3,
      judul: "Waku-Waku Festival",
      imagePopup: [Brand3],
      judulPopUp: "Waku-Waku Festival",
      deskripsiPopUp:
        "Events that consists of Japanese Themed Music, Arts, Foods and Culture Festival. Aiming to create a full experience of japanese culture in one place.",
      instagram: "https://www.instagram.com/wakuwakufest/",
      twitter: "",
      tiktok: "https://www.tiktok.com/@wakuwakufest7",
      youtube: "",
    },
    {
      image: Brand4,
      judul: "Marvellous Festival",
      imagePopup: [Brand4],
      judulPopUp: "Marvellous Festival",
      deskripsiPopUp:
        "Marvellous Fest is a music festival that is the result of a collaboration between PT Serikat Orang Dalam and PT Mitra Literasi Sejahtera, and it will be enlivened by various musicians, both national and local. Marvellous Fest also serves as a platform for various communities to socialize and interact with each other in South Kalimantan, especially in Banjarmasin.",
      instagram: "https://www.instagram.com/marvellous.fest/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: Brand5,
      judul: "On The Ground",
      imagePopup: [Brand5],
      judulPopUp: "SOD Festival",
      deskripsiPopUp:
        "A company that focuses on helping to provide and create the best experience for audience through our first-class event handling services.",
      instagram: "https://www.instagram.com/onthegrnd.id/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
  ];

  const togglePop = (brand: BrandType) => {
    setIsClicked(!isClicked);
    setDataImagePopUp(brand.imagePopup);
    setDataJudulPopUp(brand.judul);
    setDataDeskripsiPopUp(brand.deskripsiPopUp);
    setInstagram(brand.instagram)
    setisTwitter(brand.twitter)
    setTiktok(brand.tiktok)
    setYoutube(brand.youtube)
  };

  return (
    <div className="container">
      <div className={`containerContent ${isClicked ? "blurContainer" : ""}`}>
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
              <div
                className="containerBrand"
                onClick={() => togglePop(brand)}
                key={index}
              >
                <Image className="imgBrand" src={brand.image} alt="unknown" />
                <h2 className="judulBrand"> {brand.judul} </h2>
                <div className="seperatorBrand"></div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
      {isClicked && (
        <div className="popUpBrand">
          <div
            className="containerPopUpBrand"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className="containerButtonPopUp">
              <button className="buttonPopUp">X</button>
            </div>
            <div className="containerImagePopUp">
              {isDataImagePopUp.map((image, index) => (
                <Image
                  key={index}
                  className="imagePopUp"
                  src={image ? image : ""}
                  alt="unknown"
                />
              ))}
              {/* <Image
                className="imagePopUp"
                src={isDataImagePopUp ? isDataImagePopUp : ""}
                alt="unknown"
              /> */}
            </div>
            <h2 className="judulPopUp"> {isDataJudulPopUp} </h2>
            <div className="deskripsiPopUp"> {isDataDeskripsiPopUp} </div>
            <div className="containerIconPopup">
            { isInstagram ? ( <Link href={isInstagram}> <FontAwesomeIcon className="iconPopUp" icon= {faInstagram} /> </Link>) : ""}
            { isTiktok ? ( <Link href={isTiktok}> <FontAwesomeIcon className="iconPopUp" icon= {faTiktok} /> </Link>) :  ""}
            { isTwitter ? ( <Link href={isTwitter}> <FontAwesomeIcon className="iconPopUp" icon= {faTwitter} /> </Link>) : ""}
            { isYoutube ? ( <Link href={isYoutube}> <FontAwesomeIcon className="iconPopUp" icon= {faYoutube} /> </Link>) : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBrand;
