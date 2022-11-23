import React, { useState } from "react";
import styled from "styled-components";
import Buy from "../../../assets/images/nfts/buy.svg";
import Sell from "../../../assets/images/nfts/sell-nft.svg";
import Cash from "../../../assets/images/nfts/cash.svg";
import Price from "../../../assets/images/nfts/price-icon.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
const BuySellWrapper = styled.div``;

export default function BuySell() {
  const [isInView, setIsInView] = useState(false);

  return (
    <BuySellWrapper>
      <div className="buttons">
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "-40vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 1.3,
              },
            }
          }
          style={{ position: "relative" }}
        >
          <img src={Buy} alt="buy" height={130} />
          <img src={Price} alt="price" className="price" />
          <div className="para-content">Buy amazing collections of NFT</div>
        </motion.div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "40vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 1.3,
              },
            }
          }
        >
          <img src={Cash} alt="price" className="cash" />
          <img src={Sell} alt="sell" height={130} />
          <div className="para-content-right">
            Put up your NFT Collections on Sale!
          </div>
        </motion.div>
      </div>
    </BuySellWrapper>
  );
}
