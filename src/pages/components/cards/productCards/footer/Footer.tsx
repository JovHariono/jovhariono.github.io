import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Mudkip from "../../../../../../public/assets/mudkip.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="containerFooter">
      {/* <div className='imgFooter'>
        <Image src={Mudkip} alt='Sounds of Downtown - sod' />
        </div> */}
      <div className="deskripsiFooter">
        <h1 className="textFooter">CONTACT US :</h1>
        <div className="contentFooter">
          <div className="containerContentFooter">
            <Link className="contentFooter" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvpZxJxjpDPFfBTMQFkrzvGQnNKmRgBbQbnTqPMccKMSQzWbtqZCMPpgFCTGVvFlrJnsWL">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <div>hello@sodindonesia.com</div>
            </Link>
            <Link href="https://www.instagram.com/sod.group/" className="contentFooter">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <div>@sod.group</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
