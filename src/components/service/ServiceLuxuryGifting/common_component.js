import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const GiftCommonWrapper = styled.div``;

export default function GiftCommon({ OccasionGifts }) {
  const [isInView, setIsInView] = useState(false);
  return (
    <GiftCommonWrapper>
      <div className="occation-gifts">
        {OccasionGifts.map((ele) => {
          return (
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ rotateY: ele.animation }}
              animate={
                isInView && {
                  rotateY: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
              className=""
            >
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              >
                <motion.img
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  loading="lazy"
                  src={ele.img}
                  alt="img"
                  // height={250}
                  className="gift-for-him-image"
                />
              </div>
              <div className="for-him-text">{ele.name}</div>
            </motion.div>
          );
        })}
      </div>
    </GiftCommonWrapper>
  );
}
