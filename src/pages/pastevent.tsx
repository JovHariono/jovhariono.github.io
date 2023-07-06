import * as React from "react";
import Navbar from "./components/header/navbar";
import CountUp from 'react-countup'

import Footer from "./components/cards/productCards/footer/Footer";
import Event from "./components/cards/productCards/Event";

import Mudkip2 from "../../public/assets/mudkip2.jpg";
import Event1 from "../../public/assets/Event1.png";
import Event2 from "../../public/assets/Event2.png";
import Event3 from "../../public/assets/Event3.png";
import Event4 from "../../public/assets/Event4.png";
import Event5 from "../../public/assets/Event5.png";
import Event6 from "../../public/assets/Event6.png";
import Event7 from "../../public/assets/Event7.png";
import Event8 from "../../public/assets/Event8.png";

interface IPastEventProps {}

const PastEvent: React.FunctionComponent<IPastEventProps> = (props) => {
  const Events = [
    {
      gambar: Event1,
    },
    {
      gambar: Event2,
    },
    {
      gambar: Event3,
    },
    {
      gambar: Event4,
    },
    {
      gambar: Event5,
    },
    {
      gambar: Event6,
    },
    {
      gambar: Event7,
    },
    {
      gambar: Event8,
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="subHeader2">
        <h1>PAST EVENT</h1>
        <div className="seperator"></div>
      </div>
      <div className="containerCounterUp">
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={6} duration={7} />
          </h1>
          <p>Main Event</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={200} duration={3} /> +
          </h1>
          <p>Partners</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={30} duration={4} /> +
          </h1>
          <p>Performers</p>
        </div>
        <div className="counterItem">
          <h1 className="countUpNum">
            <CountUp start={0} end={500} duration={4} separator="," /> K
          </h1>
          <p>Tickets Sold</p>
        </div>
      </div>
      <div className="contentPastEvents">
        {Events.map((event, index) => {
          return <Event key={index} gambar={event.gambar} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PastEvent;
