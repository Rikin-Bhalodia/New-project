import React, { useState } from "react";
import styled from "styled-components";
import Buy from "../../../assets/images/nfts/buy.svg";
import Sell from "../../../assets/images/nfts/sell-nft.svg";
import Cash from "../../../assets/images/nfts/cash.svg";
import Price from "../../../assets/images/nfts/price-icon.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
const BuySellWrapper = styled.div`
  .buy_sell {
    height: 130px;
  }
  .price,
  .cash {
    height: 140px;
  }

  @media (max-width: 1200px) {
    .buy_sell {
      height: 110px;
    }
    .price,
    .cash {
      height: 120px;
    }
  }

  @media (max-width: 1000px) {
    .buy_sell {
      height: 100px;
    }
    .price,
    .cash {
      height: 110px;
    }
    .buttons {
      margin-top: 50px;
      gap: 50px;
      padding-bottom: 100px;
    }
    .para-content {
      padding-left: 20px;
      font-size: 12px;
    }
    .para-content-right {
      font-size: 12px;
      padding-right: 20px;
    }
  }
  @media (max-width: 850px) {
    .buttons {
      margin-top: 50px;
      gap: 50px;
      padding-bottom: 50px;
      flex-direction: column;
      align-items: center;
    }
    .buy_sell {
      height: 80px;
    }
    .price,
    .cash {
      height: 90px;
    }
  }
`;

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
          <img src={Buy} alt="buy" className="buy_sell" />
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
          <img src={Sell} alt="sell" className="buy_sell" />
          <div className="para-content-right">
            Put up your NFT Collections on Sale!
          </div>
        </motion.div>
      </div>
    </BuySellWrapper>
  );
}
