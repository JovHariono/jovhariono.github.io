import * as React from "react";
import Navbar from "./components/header/navbar";
import { useEffect, useState, useRef } from "react";

import Value from "./components/cards/productCards/Value";
import Homeimg from "./components/cards/productCards/Homeimg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header9 from "../../public/assets/HeaderU9.png"
import Header10 from "../../public/assets/HeaderU10.png"
import HeaderM9 from "../../public/assets/HeaderM9.png";
import HeaderM10 from "../../public/assets/HeaderM10.png";
import Footer from "./components/cards/productCards/footer/Footer";
import Video from "./components/cards/productCards/Video";

import {
  faHandHoldingHeart,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
    } else if (window.innerWidth >= 450) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Homeimgs = [
    // {
    //   link: "",
    //   gambar: Header5,
    // },
    // {
    //   link: "",
    //   gambar: Header6,
    // },
    // {
    //   link: "",
    //   gambar: Header7,
    // },
    // {
    //   link: "",
    //   gambar: Header8,
    // },
    {
      link: "https://widget.loket.com/widget/yho1uzg57mjhrpj2p",
      gambar: Header9
    },
    // {
    //   link: "",
    //   gambar: Header10
    // },
  ];

  const HomeimgMs = [
    // {
    //   link: "",
    //   gambar: HeaderM5,
    // },
    // {
    //   link: "",
    //   gambar: HeaderM6,
    // },
    // {
    //   link: "",
    //   gambar: HeaderM7,
    // },
    // {
    //   link: "",
    //   gambar: HeaderM8,
    // },
    {
      link: "https://widget.loket.com/widget/yho1uzg57mjhrpj2p",
      gambar: HeaderM9,
    },
    // {
    //   link: "",
    //   gambar: HeaderM10,
    // },
  ];

  const Values = [
    {
      gambar: faUsers,
      judul: "CUSTOMER ORIENTED",
      text: `We are truly committed to make customers our top priority`,
    },
    {
      gambar: faHandHoldingHeart,
      judul: "IMPACTFUL",
      text: `Creating mutually beneficial relations \n with every parties related with our ecosystem`,
    },
    {
      gambar: faChartLine,
      judul: "CONTINUOUS IMPROVEMENT",
      text: `Always giving best efforts \n to improve our products, services, or processes`,
    },
  ];

  const Videos = [
    {
      link: "https://www.youtube.com/embed/bXZDRqvWNTA?si=7_LlxNVf6XugYznY",
      judul: "Waku Waku VOL 2",
    },
    {
      link: "https://www.youtube.com/embed/eUsc1hrxCyA?si=A-KEf5nUACoztKLw",
      judul: "Airplay In Jakarta",
    },
    {
      link: "https://www.youtube.com/embed/lmvGR8v8pKc?si=FybSA6vLd5wPvJpJ",
      judul: `Renung Resah Showcase`,
    },
    {
      link: "https://www.youtube.com/embed/xmI2TCLoI6k?si=n_8h-sV6dxS6IFz3",
      judul: "Bruno Major",
    },
    {
      link: "https://www.youtube.com/embed/cetYc2e-Gac?si=Gf2VbTLvkOYE_kPI",
      judul: "Inquisitive Live at Jakarta",
    },
    {
      link: "https://www.youtube.com/embed/zbAcvSQ1TDU?si=HKXxTmG3GushQ96R",
      judul: "SOD VOL 5",
    },
    {
      link: "https://www.youtube.com/embed/CBDYT21iiPE",
      judul: "Marvellous Festival",
    },
    {
      link: "https://www.youtube.com/embed/OmgQ0wxYEDg",
      judul: "Mini Waku Waku",
    },
    {
      link: "https://www.youtube.com/embed/QdErAvz32rE",
      judul: "Misellia Penyendiri Showcase",
    },
    {
      link: "https://www.youtube.com/embed/xtT-8Y5fZg4",
      judul: "SOD VOL 4",
    },
    {
      link: "https://www.youtube.com/embed/MqMk6GsGeFI",
      judul: "SOD VOL 3",
    },
    {
      link: "https://www.youtube.com/embed/t7_RI8c3cBw",
      judul: "SOD VOL 1",
    },
  ];

  useEffect(() => {
    const targetDate = new Date("2023-08-05").getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      setRemainingTime(timeRemaining);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Serikat Orang Dalam - sod.group</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>

      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
          speed={2000}
        >
          {isMobile ? (
            <div>
              {HomeimgMs.map((homeimg, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Homeimg gambar={homeimg.gambar} link={homeimg.link} />
                  </SwiperSlide>
                );
              })}
            </div>
          ) : (
            <div>
              {Homeimgs.map((homeimg, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Homeimg gambar={homeimg.gambar} link={homeimg.link} />
                  </SwiperSlide>
                );
              })}
            </div>
          )}
        </Swiper>
      </div>
      <div className="aboutUs" id="about-us">
        <div className="contentAboutUs">
          <h1 className="textJudul">ABOUT US</h1>
          <div className="seperator"></div>
          <div className="textContent">
            Established in 2022, SOD GROUP is a holding company, <br /> with a
            vision to build strong and everlasting lifestyle brands globally{" "}
            <br /> in the lifestyle, entertainment & hospitality industry.
          </div>
          <div className="textContent">
            It is our passion and objective to consistently create an
            outstanding and memorable experience for our customers every single
            day.
          </div>
          <div className="containerHomeValue">
            {Values.map((value, index) => {
              return (
                <Value
                  key={index}
                  gambar={value.gambar}
                  judul={value.judul}
                  text={value.text}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="containerVideoHome">
        {Videos.map((video, index) => {
          return <Video key={index} link={video.link} judul={video.judul} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
