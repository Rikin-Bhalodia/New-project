import React from "react";
import styled from "styled-components";
import youMayLike from "../../assets/images/product-section/you-may-like.svg";
import likeProduct1 from "../../assets/images/product-section/like-product-sample1.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const YouMayLikeWrapper = styled.div`
  .you-also-like--container {
    margin: 106px 81px 67px;
  }
  .you-also-like--container .like-text {
    padding-bottom: 62px;
  }
`;

const YouMayLike = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <YouMayLikeWrapper>
      {" "}
      <section className="you-also-like--container">
        <div className="like-text">
          <img loading="lazy" src={youMayLike} alt="" />
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "20vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.3,
              },
            }
          }
          className="d-flex justify-content-between"
        >
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
          <div style={{ overflow: "hidden", borderRadius: "50%" }}>
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
            />
          </div>
        </motion.div>
      </section>
    </YouMayLikeWrapper>
  );
};

export default YouMayLike;
