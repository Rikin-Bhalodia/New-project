import React, { Suspense } from "react";
import styled from "styled-components";
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
`;

const LuxuryProduct = () => {
  return (
    <LuxuryProductWrapper>
      <Suspense fallback="Loading...">
        <ProductSelectionCommon />
        <div className="slider">
          <div className="head">PAIR IT WITH</div>
          <ProductImgSlider />
        </div>
        <YouMayLike />
      </Suspense>
    </LuxuryProductWrapper>
  );
};

export default LuxuryProduct;
