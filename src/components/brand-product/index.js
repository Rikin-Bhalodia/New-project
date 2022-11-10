import React from "react";
import styled from "styled-components";
import Banner1 from "../../assets/images/brand-product/banner1.svg";
import Banner2 from "../../assets/images/brand-product/banner2.svg";
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
    }
    .img {
      position: relative;
      .inside-data {
        position: absolute;
        top: 0;
        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 98vw;
          position: relative;
          padding-top: 40px;
          a {
            position: absolute;
            left: 50px;
            font-family: "Arial";
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-decoration: underline;
            color: #ffffff;
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
          position: absolute;
          bottom: -100px;
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
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="banner-section">
          <img loading="lazy" src={Banner1} alt="" className="banner" />
          <div className="img">
            <img loading="lazy" src={Banner2} alt="" className="banner" />
            <div className="inside-data">
              <div className="body">
                <a href="">Go Back</a>
                <h3>
                  <AnimatedTextWord text="FENDI" />
                </h3>
              </div>
              <motion.div
                initial={{ y: "-60vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="footer"
              >
                <Filters FiltersName={FiltersName} />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="grid">
          <TopProduct />
          <TopProduct />
          <TopProduct />
          <TopProduct />
        </div>
        <div>
          <img
            loading="lazy"
            src={FooterImage}
            alt="image"
            className="footer"
            style={{ width: "98vw" }}
          />
        </div>
      </motion.div>
    </BrandProductWrapper>
  );
};

export default BrandProduct;
