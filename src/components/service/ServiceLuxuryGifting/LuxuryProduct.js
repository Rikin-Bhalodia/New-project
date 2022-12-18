import React, { Suspense } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
const ProductSelectionCommon = React.lazy(() =>
  import("../../../commonComponents/ProductSelectionCommon")
);
const ProductImgSlider = React.lazy(() =>
  import("../../studio-material/ProductSlider")
);

const YouMayLike = React.lazy(() =>
  import("../../../commonComponents/ProductSelectionCommon/YouMayLike")
);

const LuxuryProductWrapper = styled.div`
  .slider {
    margin-top: 100px;
    .head {
      font-family: "Coral Blush";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      padding-left: 70px;
      margin-bottom: 30px;
    }
  }
  .gift {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 40px;
  }
  .card {
    background: #ffe600;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
  }
  .buy-gift {
    font-family: "Coral Blush";
    font-size: 40px;
  }
  .desc {
    font-family: "Mulish";
    font-size: 17px;
  }
  @media (max-width: 800px) {
    .slider {
      margin-top: 70px;
    }
  }
  @media (max-width: 600px) {
    .slider {
      margin-top: 60px;
    }
  }
  @media (max-width: 500px) {
    .slider {
      margin-top: 50px;
    }
  }
  @media (max-width: 450px) {
    .slider {
      margin-top: 20px;
    }
  }
`;

const LuxuryProduct = () => {
  return (
    <LuxuryProductWrapper>
      <Suspense fallback="Loading...">
        <ProductSelectionCommon />
        <div className="slider">
          <div className="head">
            <AnimatedTextWord text="PAIR IT WITH" />
          </div>
          <ProductImgSlider isNeededImg={false} />
        </div>
        <YouMayLike />
        <div>
          <div className="gift">Not sure what to gift? </div>
          <div className="card">
            <div className="buy-gift">
              <AnimatedTextWord text="buy a gift card" />
            </div>
            <div className="desc">and give them freedom to choose</div>
          </div>
        </div>
      </Suspense>
    </LuxuryProductWrapper>
  );
};

export default LuxuryProduct;
