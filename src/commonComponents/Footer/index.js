import React from "react";
import styled from "styled-components";
import Connect from "../../assets/images/studio/connect.svg";
import WithusText from "../../assets/images/studio/withus.svg";
import A from "../../assets/images/studio/royclan/A.svg";
import R from "../../assets/images/studio/royclan/R.svg";
import O from "../../assets/images/studio/royclan/O.svg";
import Y from "../../assets/images/studio/royclan/Y.svg";
import N from "../../assets/images/studio/royclan/N.svg";
import L from "../../assets/images/studio/royclan/L.svg";
import C from "../../assets/images/studio/royclan/C.svg";
import Leaf from "../../assets/images/studio/royclan/leaf.svg";

const FooterWrapper = styled.div``;

const Footer = () => {
  return (
    <FooterWrapper>
      <footer
        className="c-footer-w minHeightSec minBannerHeight d-flex align-items-center"
        style={{ backgroundColor: "#fff", position: "relative" }}
      >
        <div className="container">
          <h5>GET IN TOUCH</h5>
          <div className="footer-in">
            <div className="c-footer-box">
              <h2>
                <span>
                  <img
                    src={Connect}
                    alt="footer-image"
                    className="connect-image"
                  />
                  <img src={WithusText} className="with-us" />
                </span>
              </h2>
              <h2
                className="f-heading-m contact"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="f-line">
                  <div>
                    <div className="perspective">
                      <div className="cube">
                        <div>W</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>I</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>T</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>H</div>
                      </div>
                    </div>
                    <div className="perspective" style={{ marginLeft: "1rem" }}>
                      <div className="cube">
                        <div>U</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>S</div>
                      </div>
                    </div>
                  </div>
                </div>
              </h2>
              <ul className="c-footer-social-w">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <ul className="c-footer-info">
                <li>
                  <a href="#"> SEND US A MESSAGE </a>
                </li>
                <li>
                  <a href="tel:+91 9876543210">CALL +91 9876543210</a>
                </li>
                <li>
                  FIND US AT :<span>ABC StressT 981 Building Delhi-110088</span>
                </li>
                <li>
                  MAIL US AT :{" "}
                  <span>
                    <a href="#">abcd@royclan.com </a>
                  </span>
                </li>
              </ul>
              <div className="c-footer-info-other">
                <p>
                  KNOW THE WORLD OF LUXURY
                  <span>
                    ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
                  </span>
                </p>
                <ul>
                  <li>
                    <a href="#">TERMS & CONDITIONS </a>
                  </li>
                  <li>
                    <a href="#">FAQs </a>
                  </li>
                  <li>
                    <a href="#">NEWSLETTER </a>
                  </li>
                  <li>
                    <a href="#">SHIPPING & RETURNS </a>
                  </li>
                  <li>
                    <a href="#">ABOUT US </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="royclan">
          <div>
            <img src={R} />
            <img src={O} />
            <img src={Y} />
            <img src={Leaf} />
          </div>
          <div>
            <img src={C} />
            <img src={L} />
            <img src={A} />
            <img src={N} />
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
