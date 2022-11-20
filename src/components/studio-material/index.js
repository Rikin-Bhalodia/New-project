import React, { useState } from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-material/video.svg";
import Polygon from "../../assets/images/polygon-left.svg";
import { useLocation } from "react-router-dom";
import Menu from "../../commonComponents/Menu";
import { motion } from "framer-motion";
const SimillerVideo = React.lazy(() => import("./SimillerVideo"));
const ProductImgSlider = React.lazy(() => import("./ProductSlider"));

const StudioProductMaterialWrapper = styled.div`
  position: relative;
  .polygon-left {
    position: absolute;
    z-index: -1;
  }
  .studio-material-head {
    display: flex;
    position: relative;
    height: 170px;
    align-items: center;
    justify-content: space-between;
    .leftside-area {
      .goback-link {
        a {
          font-size: 20px;
          text-decoration: underline;
          color: #000;
        }
      }
      .product-head {
        p {
          font-size: 18px;
          margin: 30px 0 10px;
        }
      }
    }
  }
  .studio-material-body {
    img {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    .studio-material-head {
      margin: 0 !important;
    }
    .studio-material-body {
      width: 100%;
      position: absolute;
      height: 400px !important;
      top: 0;
      img {
        width: 100%;
        height: 400px;
      }
    }
    .material-wrapper {
      margin: 0;
      padding: 0;
    }
  }
`;

export default function StudioProductMaterial() {
  const { pathname } = useLocation();
  const [isInView, setIsInView] = useState(false);
  return (
    <StudioProductMaterialWrapper>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "60vh" }}
        animate={
          isInView && {
            y: 0,
            transition: {
              duration: 0.6,
            },
          }
        }
      >
        {pathname === "/studio-material" && (
          <img
            loading="lazy"
            src={Polygon}
            alt="polygon-left"
            className="polygon-left"
          />
        )}
        <div className="container-fluid material-wrapper">
          <div className="studio-material-head mt-5">
            <div className="leftside-area">
              <div className="goback-link">
                <a href="/">Go Back</a>
              </div>
              <div className="product-head">
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ x: "-100vw" }}
                  animate={
                    isInView && {
                      x: 0,
                      transition: {
                        duration: 0.7,
                      },
                    }
                  }
                >
                  STUDIO / VERSACE BAG / LEATHER
                </motion.p>
              </div>
            </div>
            <div className="rightside-area">
              <Menu />
            </div>
          </div>
          <div className="studio-material-body">
            <img loading="lazy" src={Video} alt="video" />
          </div>
        </div>
        {pathname === "/studio-material" && (
          <>
            <SimillerVideo />
            <ProductImgSlider />
          </>
        )}
      </motion.div>
    </StudioProductMaterialWrapper>
  );
}
