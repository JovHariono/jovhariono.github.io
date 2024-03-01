import * as React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="containerFooter">
      <div className="deskripsiFooter">
        <h1 className="textFooter">CONTACT US :</h1>
        <div className="contentFooter">
          <div className="containerContentFooter">
            <Link className="contentFooter" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbgzcTsfflzTCtBcgxHFbwjKtMzPKlDcqHPxQqfFNbVpWqqKNvxKfmLDQJlGrfwhdsgjnC">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <div>hello.sodfestival@gmail.com</div>
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
