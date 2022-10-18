import React from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-material/video.svg";
import Polygon from "../../assets/images/polygon-left.svg";
import SimillerVideo from "./SimillerVideo";
import ProductImgSlider from "./ProductSlider";
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
`;

export default function StudioProductMaterial() {
  return (
    <StudioProductMaterialWrapper>
      <img src={Polygon} alt="" className="polygon-left" />

      <div className="container-fluid">
        <div className="studio-material-head">
          <div className="leftside-area">
            <div className="goback-link">
              <a href="/">Go Back</a>
            </div>
            <div className="product-head">
              <p>STUDIO / VERSACE BAG / LEATHER</p>
            </div>
          </div>
          <div className="rightside-area"></div>
        </div>
        <div className="studio-material-body">
          <img src={Video} alt="" />
        </div>
      </div>
      <SimillerVideo />
      <ProductImgSlider />
    </StudioProductMaterialWrapper>
  );
}
