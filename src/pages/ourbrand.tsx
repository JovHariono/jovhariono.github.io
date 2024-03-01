import * as React from "react";
import Navbar from "./components/header/navbar";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Brand1 from "../../public/assets/Brand1(2).png";
import Brand2 from "../../public/assets/Brand2(2).png";
import Brand3 from "../../public/assets/Brand3(2).png";
import Brand4 from "../../public/assets/Brand4(2).png";
import Brand5 from "../../public/assets/Brand5(2).png";
import Brand6 from "../../public/assets/Brand6(2).png";
import Brand7 from "../../public/assets/Brand7(2).png";
import sod1 from "../../public/assets/sod1.png";
import sod2 from "../../public/assets/sod2.png";
import sod3 from "../../public/assets/sod3.jpeg";
import sod4 from "../../public/assets/sod4.jpeg";
import sod5 from "../../public/assets/sod5.jpeg";
import sod6 from "../../public/assets/sod6.jpeg";
import sod7 from "../../public/assets/sod7.jpeg";
import sod8 from "../../public/assets/sod8.jpeg";
import sod9 from "../../public/assets/sod9.jpeg";
import sod10 from "../../public/assets/sod10.jpeg";
import sod11 from "../../public/assets/sod11.jpeg";
import sod12 from "../../public/assets/sod12.jpeg";
import waku from "../../public/assets/waku.jpeg";
import waku2 from "../../public/assets/waku2.jpeg";
import waku3 from "../../public/assets/waku3.jpeg";
import waku4 from "../../public/assets/waku4.png";
import waku5 from "../../public/assets/waku5.jpeg";
import waku6 from "../../public/assets/waku6.jpeg";
import waku7 from "../../public/assets/waku7.jpeg";
import waku8 from "../../public/assets/waku8.jpeg";
import waku9 from "../../public/assets/waku9.jpeg";
import waku10 from "../../public/assets/waku10.jpeg";
import mls1 from "../../public/assets/mls1.png";
import mls2 from "../../public/assets/mls2.png";
import cla_ap1 from "../../public/assets/cla-ap1.jpeg";
import cla_ap2 from "../../public/assets/cla-ap2.jpeg";
import cla_ap3 from "../../public/assets/cla-ap3.jpeg";
import cla_i1 from "../../public/assets/cla-i1.jpeg";
import cla_i2 from "../../public/assets/cla-i2.jpeg";
import cla_i3 from "../../public/assets/cla-i3.jpeg";
import cla_b1 from "../../public/assets/cla-b1.jpeg";
import cla_b2 from "../../public/assets/cla-b2.jpeg";
import cla_b3 from "../../public/assets/cla-b3.jpeg";
import cla_b4 from "../../public/assets/cla-b4.jpeg";
import cla_b5 from "../../public/assets/cla-b5.jpeg";
import cla_b6 from "../../public/assets/cla-b6.jpeg";
import sodLive_Rai1 from "../../public/assets/Rai1.jpeg";
import sodLive_Rai2 from "../../public/assets/Rai2.jpeg";
import sodLive_Rai3 from "../../public/assets/Rai3.jpeg";
import sodLive_Rai4 from "../../public/assets/Rai4.jpeg";
import sodLive_Rai5 from "../../public/assets/Rai5.jpeg";
import otg1 from "../../public/assets/otg1.jpg";
import otg2 from "../../public/assets/otg2.jpg";
import otg3 from "../../public/assets/otg3.jpg";
import otg4 from "../../public/assets/otg4.jpg";
import otg5 from "../../public/assets/otg5.jpg";
import otg6 from "../../public/assets/otg6.jpg";
import otg7 from "../../public/assets/otg7.jpg";
import otg8 from "../../public/assets/otg8.jpg";
import otg9 from "../../public/assets/otg9.jpg";
import otg10 from "../../public/assets/otg10.jpg";
import collectives1 from "../../public/assets/collectives1.jpeg";


import Footer from "./components/cards/productCards/footer/Footer";
import { BrandType } from "../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
      imagePopup: [Brand1, sod1, sod2, sod3, sod4, sod5, sod6, sod7, sod8, sod9, sod10, sod11, sod12],
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
      imagePopup: [Brand2, cla_ap1, cla_ap2, cla_ap3, cla_i1, cla_i2, cla_i3, cla_b1, cla_b2, cla_b3, cla_b4, cla_b5, cla_b6],
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
      imagePopup: [Brand3, waku, waku2, waku3, waku4, waku5, waku6, waku7, waku8, waku9, waku10],
      judulPopUp: "Waku-Waku Festival",
      deskripsiPopUp:
        "Events that consists of Japanese Themed Music, Arts, Foods and Culture Festival. Aiming to create a full experience of japanese culture in one place.",
      instagram: "https://www.instagram.com/wakuwakufest/",
      twitter: "",
      tiktok: "https://www.tiktok.com/@wakuwakufest7",
      youtube: "",
    },
    {
      image: Brand5,
      judul: "On The Ground",
      imagePopup: [Brand5, otg1, otg2, otg3, otg4, otg5, otg6, otg7, otg8, otg9, otg10],
      judulPopUp: "SOD Festival",
      deskripsiPopUp:
        "A company that focuses on helping to provide and create the best experience for audience through our first-class event handling services.",
      instagram: "https://www.instagram.com/onthegrnd.id/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: Brand6,
      judul: "SOD Live",
      imagePopup: [Brand6, sodLive_Rai1, sodLive_Rai2, sodLive_Rai3,sodLive_Rai4, sodLive_Rai5],
      judulPopUp: "SOD Live",
      deskripsiPopUp:
        "SOD LIVE is here to bridge local communities to musicians to brands through music collective events.",
      instagram: "https://www.instagram.com/sodliveid/",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    {
      image: Brand7,
      judul: "Collectives",
      imagePopup: [Brand7, collectives1],
      judulPopUp: "Collectives",
      deskripsiPopUp:
        "Collectives is a Community Services specializes in comprehensive annual book, offering top-notch services such as conceptualization, photography, design, editing, and printing.",
      instagram: "https://www.instagram.com/collectivesbysod",
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
    setInstagram(brand.instagram);
    setisTwitter(brand.twitter);
    setTiktok(brand.tiktok);
    setYoutube(brand.youtube);
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
                <Image
                  className="imgBrand"
                  src={brand.image}
                  alt="Sounds of Downtown - sod"
                />
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
          >
            <div className="containerButtonPopUp">
              <button
                className="buttonPopUp"
                onClick={() => setIsClicked(!isClicked)}
              >
                X
              </button>
            </div>
            <div className="containerUtamaImagePopUp">
              <div className="containerImagePopUp">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  freeMode={true}
                  speed={1500}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation, FreeMode]}
                  className="mySwiper"
                >
                  {isDataImagePopUp.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        // className="imagePopUp"
                        src={image ? image : ""}
                        alt="Sounds of Downtown - sod"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <h2 className="judulPopUp"> {isDataJudulPopUp} </h2>
            <div className="deskripsiPopUp"> {isDataDeskripsiPopUp} </div>
            <div className="containerIconPopup">
              {isInstagram ? (
                <Link href={isInstagram}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faInstagram}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
              {isTiktok ? (
                <Link href={isTiktok}>
                  {" "}
                  <FontAwesomeIcon className="iconPopUp" icon={faTiktok} />{" "}
                </Link>
              ) : (
                ""
              )}
              {isTwitter ? (
                <Link href={isTwitter}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faTwitter}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
              {isYoutube ? (
                <Link href={isYoutube}>
                  {" "}
                  <FontAwesomeIcon
                    className="iconPopUp"
                    icon={faYoutube}
                  />{" "}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBrand;
