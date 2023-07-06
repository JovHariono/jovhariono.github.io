import * as React from 'react';
import Image from 'next/image';
// import {Link} from 'react-scroll';
import Link from 'next/link';

import Mudkip from '../../../../public/assets/mudkip.jpg';
import LogoSod from "../../../../public/assets/LogoSod.png"

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className='navbar'>
        <Link href="/" className='navbar-img'>
            <Image className='imgNav' src={LogoSod} alt='unknown'/>
        </Link>
        <div className='navvar-content'>
        <ul className="ul-bar">
          <li className="li-bar">
            <Link className="link" href="/" color="white">
              HOME
            </Link>
          </li>
          <li className="li-bar">
            <Link className="linkabout" href="http://localhost:3000/#about-us" color="white">
              ABOUT US
            </Link>
          </li>
          <li className="li-bar">
            <Link className="link" href="/ourbrand" color="white">
              OUR BRAND
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
  );
};

export default Navbar;
