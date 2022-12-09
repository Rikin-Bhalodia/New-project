import React from "react";
import styled from "styled-components";
import Banner1 from "../../assets/images/brand-product/banner1.svg";
import BackWhiteArrow from "../../assets/images/product/back-white-arrow.svg";
import FooterImage from "../../assets/images/product/footer.svg";
import Filters from "../../commonComponents/Filters";
import { motion } from "framer-motion";
const TopProduct = React.lazy(() => import("../brand/TopProduct"));
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const BrandProductWrapper = styled.div`
  background: #fcf9f2;
  padding: 0 0 50px;
  input:focus {
    outline-offset: 0px;
    outline: none;
  }
  .input {
    width: 210px !important;
    z-index: 9999;
    margin-left: 15px;
    color: white;
    ::placeholder {
      color: white;
      opacity: 1;
    }
  }
  .banner-section {
    .banner {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
    .img {
      background: #000000;
      .inside-data {
        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 98vw;
          position: relative;
          padding-top: 40px;
          .goback {
            position: absolute;
            left: 50px;
            img {
              width: 20px;
            }
            a {
              font-family: "Arial";
              font-weight: 400;
              font-size: 20px;
              line-height: 23px;
              text-decoration: underline;
              color: #ffffff;
            }
          }

          h3 {
            margin: auto;
            text-align: center;
            color: white;
            font-family: Coral-Blush;
            font-weight: 400;
            font-size: 130px;
            line-height: 179px;
            text-align: center;
            color: #ffffff;
          }
        }
        .footer {
          width: 98vw;
        }
      }
    }
  }
  .grid {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px; */
    /* margin: 50px 100px; */
    .body {
      .cad {
        padding: 20px 30px;
        background: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;
        .cad-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .new {
            background: #a75b41;
            border-radius: 0px 74px 74px 0px;
            font-family: "Arial";
            font-weight: 700;
            font-size: 20px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #ffffff;
            padding: 8px 20px;
            position: relative;
            left: -30px;
          }
          a {
            i {
              font-size: 20px;
            }
          }
        }
        .cad-body {
        }
        .cad-footer {
          h6 {
            padding: 10px 0 15px;
            font-family: "Arial";
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.408px;
            text-transform: uppercase;
            color: #000000;
          }
          small {
            font-family: "Arial";
            font-weight: 400;
            font-size: 9px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #b0b0b0;
          }
          p {
            font-family: "Arial";
            font-weight: 700;
            font-size: 11px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #000000;
          }
        }
      }
    }
  }
  .filter {
    padding: 0 50px 20px 70px;
  }
  @media (max-width: 1200px) {
    .banner-section .img .inside-data {
      .body {
        padding-top: 30px;
        h3 {
          font-size: 90px;
        }
      }
    }
    .filter {
      padding: 0 50px 30px 70px;
    }
  }
  @media (max-width: 1000px) {
    .banner-section .img .inside-data {
      .body {
        padding-top: 20px;
        h3 {
          font-size: 70px;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .banner-section .img .inside-data {
      .body {
        padding-top: 0px;
        display: block;
        h3 {
          font-size: 50px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .banner-section .img .inside-data {
      .body {
        h3 {
          font-size: 40px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .banner-section .img .inside-data {
      .body {
        h3 {
          font-size: 50px;
          line-height: 90px;
          display: flex;
          justify-content: center;
          padding-top: 30px;
        }
        a {
          font-size: 12px;
          padding-top: 5px;
          font-style: italic;
          left: 15px;
        }
      }
    }
    .filter {
      padding: 0 10px 30px 10px;
    }
  }
`;
const FiltersName = [
  { name: "COLLECTION NAME", option: ["Dry Food", "Wet Food"] },
  {
    name: "CATEGORY",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "COLOR", option: ["Puppy", "Adult Dog", "Senior Dog"] },
];
const BrandProduct = () => {
  return (
    <BrandProductWrapper>
      <div>
        <div className="banner-section">
          <img loading="lazy" src={Banner1} alt="" className="banner" />
          <div className="testing"></div>
          <div className="img">
            <div className="inside-data">
              <div className="body">
                <div className="goback">
                  <img src={BackWhiteArrow} alt="back-white-arrow" />
                  <a href="" className="">
                    Go Back
                  </a>
                </div>
                <h3>
                  <AnimatedTextWord text="FENDI" />
                </h3>
              </div>
              <div className="footer">
                <Filters FiltersName={FiltersName} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <TopProduct />
          <TopProduct />
          <TopProduct />
          <TopProduct />
        </div>
        <div className="d-flex justify-content-center">
          <img
            loading="lazy"
            src={FooterImage}
            alt="image"
            className="footer"
            style={{ width: "145vw" }}
          />
        </div>
      </div>
    </BrandProductWrapper>
  );
};

export default BrandProduct;
