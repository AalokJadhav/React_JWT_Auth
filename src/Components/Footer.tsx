import React from "react";
import footer_image from "../assets/footer_logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <span
          className="footer_span"
          style={{ float: "left", paddingLeft: "8%" }}
        >
          <img
            src={footer_image}
            style={{ height: "35px", paddingBottom: "1%" }}
            alt=""
          />
        </span>
        <div className="footer__copyright">
          Made with <span style={{ color: "red" }}>❤️</span>&nbsp; by&nbsp;
          <a
            className="footer_link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AalokJadhav"
          >
            {" "}
            Alok Jadhav
          </a>
          <span
            className="footer_span"
            style={{ float: "right", paddingRight: "10%" }}
          >
            {" "}
            © {year} | All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
