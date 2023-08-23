import * as React from "react";
import Navbar from "./components/header/navbar";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import Value from "./components/cards/productCards/Value";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Mudkip2 from "../../public/assets/mudkip2.jpg";
import Header1 from "../../public/assets/Header1.png";
import Header2 from "../../public/assets/Header2.png";
import Header3 from "../../public/assets/Header3.png";
import Header4 from "../../public/assets/Header4.png";
import HeaderM1 from "../../public/assets/HeaderM1.jpeg";
import HeaderM2 from "../../public/assets/HeaderM2.png";
import HeaderM3 from "../../public/assets/HeaderM3.png";
import HeaderM4 from "../../public/assets/HeaderM4.png";
import sampleHeader from "../../public/assets/sampleHeader.png";
import sampleHeader2 from "../../public/assets/sampleHeader2.png";
import Homeimg from "./components/cards/productCards/Homeimg";
import Footer from "./components/cards/productCards/footer/Footer";
import Video from "./components/cards/productCards/Video";

import {
  faChildren,
  faHandHoldingHeart,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Divide } from "hamburger-react";
import Head from "next/head";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    console.log("im here");
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
    console.log(isMobile);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Homeimgs = [
    // {
    //   link: 'https://www.tiket.com/to-do/sounds-of-downtown-vol5?utm_page=globalSearch&utm_section=globalSearchTyping',
    //   gambar: Header1,
    // },
    // {
    //   link: 'https://www.loket.com/event/inquisitiveliveinjakarta',
    //   gambar: Header3,
    // },
    {
      link: 'https://www.goersapp.com/events/waku-waku-festival-vol-2--wakuwaku2sby',
      gambar: Header4,
    },
  ];

  const HomeimgMs = [
    // {
    //   link: 'https://www.tiket.com/to-do/sounds-of-downtown-vol5?utm_page=globalSearch&utm_section=globalSearchTyping',
    //   gambar: HeaderM1,
    // },
    // {
    //   link: 'https://www.loket.com/event/inquisitiveliveinjakarta',
    //   gambar: HeaderM3,
    // },
    {
      link: 'https://www.goersapp.com/events/waku-waku-festival-vol-2--wakuwaku2sby',
      gambar: HeaderM4,
    },
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
      link: "https://www.youtube.com/embed/t7_RI8c3cBw",
      judul: "SOD VOL 1",
    },
    {
      link: "https://www.youtube.com/embed/MqMk6GsGeFI",
      judul: "SOD VOL 3",
    },
    {
      link: "https://www.youtube.com/embed/xtT-8Y5fZg4",
      judul: "SOD VOL 4",
    },
    {
      link: "https://www.youtube.com/embed/QdErAvz32rE",
      judul: "Misellia Penyendiri Showcase",
    },
    {
      link: "https://www.youtube.com/embed/OmgQ0wxYEDg",
      judul: "Mini Waku-Waku",
    },
    {
      link: "https://www.youtube.com/embed/CBDYT21iiPE",
      judul: "Marvellous Festival",
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

  // const formatCountdown = (time: number) => {
  //   const seconds = Math.floor((time / 1000) % 60);
  //   const minutes = Math.floor((time / 1000 / 60) % 60);
  //   const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 30);
  //   const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));

  //   const formattedMonths = months.toString().padStart(2, "0");
  //   const formattedDays = days.toString().padStart(2, "0");
  //   const formattedHours = hours.toString().padStart(2, "0");
  //   const formattedMinutes = minutes.toString().padStart(2, "0");
  //   const formattedSeconds = seconds.toString().padStart(2, "0");

  //   // return (
  //   //   <div className="counter">
  //   //     <div className="counterCountent">
  //   //       <div className="angkaCounter">{formattedMonths}</div>
  //   //       <div className="textCounter">MONTHS</div>
  //   //     </div>
  //   //     <div className="separatorCounter"> : </div>
  //   //     <div className="counterCountent">
  //   //       <div className="angkaCounter">{formattedDays}</div>
  //   //       <div className="textCounter">DAYS</div>
  //   //     </div>
  //   //     <div className="separatorCounter"> : </div>
  //   //     <div className="counterCountent">
  //   //       <div className="angkaCounter">{formattedHours}</div>
  //   //       <div className="textCounter">HOURS</div>
  //   //     </div>
  //   //     <div className="separatorCounter"> : </div>
  //   //     <div className="counterCountent">
  //   //       <div className="angkaCounter">{formattedSeconds}</div>
  //   //       <div className="textCounter">SECONDS</div>
  //   //     </div>
  //   //   </div>
  //   // );
  // };

  // const countdown = formatCountdown(remainingTime);

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
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
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
          {/* {Homeimgs.map((homeimg, index) => {
            return (
              <SwiperSlide key={index}>
                <Homeimg gambar={homeimg.gambar} />
              </SwiperSlide>
            );
          })} */}
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
      {/* <div className="countdown">
        <div className="contentCountdown">
        <h1 className="countdownText">COUNTDOWN SOD VOL 5</h1>
        <h1 className="containerCounter"> {countdown} </h1>
        </div>
      </div> */}
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
