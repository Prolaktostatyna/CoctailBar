import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhone,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <aside className="footer__contact">
        <div className="footer__contact--div">
          <FontAwesomeIcon icon={faSquarePhone} /> +12 345 678 910
        </div>
        <div className="footer__contact--div">
          <FontAwesomeIcon icon={faSquareEnvelope} /> example@mail.com
        </div>
      </aside>
      <aside className="footer__social">
        <p className="footer__social--p">Get in touch:</p>
        <a
          className="footer__social--a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
        </a>
        <a
          className="footer__social--a"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareInstagram} /> Instagram
        </a>
        <a
          className="footer__social--a"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareTwitter} /> Twitter
        </a>
      </aside>
    </div>
  );
};

export default Footer;
