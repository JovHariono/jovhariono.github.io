import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

import LogoSod from "../../../../public/assets/LogoSod.png";
import Head from "next/head";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else if (window.innerWidth >= 900) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="containerNav">
      <Head>
        <title>Serikat Orang Dalam - sod.group</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
      {isMobile ? (
        <div className="navbarMobile">
          <div className="burgerBarNav">
            <Menu>
              {/* <Link id="home" className="menu-item" href="/">
                HOME
              </Link> */}
              <Link className="menu-item" href="/ourbrand">
                OUR BRAND
              </Link>
              <Link className="menu-item" href="/eventplanner">
                EVENT PLANNER
              </Link>
              <Link className="menu-item" href="/pastevent">
                PAST EVENT
              </Link>
              <Link className="menu-item" href="/ourpartner">
                OUR PARTNER
              </Link>
            </Menu>
          </div>
          <div className="navbarMobileImg">
            <Link href="/" className="navbar-img">
              <Image
                className="imgNav"
                src={LogoSod}
                alt="Sounds of Downtown - sod"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <Link href="/" className="navbar-img">
            <Image
              className="imgNav"
              src={LogoSod}
              alt="Sounds of Downtown - sod"
            />
          </Link>
          <div className="navvar-content">
            <ul className="ul-bar">
              {/* <li className="li-bar">
                <Link className="link" href="/" color="white">
                  HOME
                </Link>
              </li> */}
              <li className="li-bar">
                <Link
                  className="linkabout"
                  href="/#about-us"
                  color="white"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="li-bar">
                <Link className="link" href="/ourbrand" color="white">
                  OUR BRAND
                </Link>
              </li>
              <li className="li-bar">
                <Link className="link" href="/eventplanner" color="white">
                  EVENT PLANNER
                </Link>
              </li>
              <li className="li-bar">
                <Link className="link" href="/pastevent" color="white">
                  PAST EVENTS
                </Link>
              </li>
              <li className="li-bar">
                <Link className="link" href="/ourpartner">
                  OUR PARTNER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
