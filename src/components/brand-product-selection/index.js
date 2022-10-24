import React from "react";
import styled from "styled-components";
import ProductSection from "../product-section";

const BrandProductSectionWrapper = styled.div``;

const BrandProductSection = () => {
  return (
    <BrandProductSectionWrapper>
      <ProductSection />
    </BrandProductSectionWrapper>
  );
};

export default BrandProductSection;
