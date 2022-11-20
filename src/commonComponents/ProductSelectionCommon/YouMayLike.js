import React from "react";
import styled from "styled-components";
import youMayLike from "../../assets/images/product-section/you-may-like.svg";
import likeProduct1 from "../../assets/images/product-section/like-product-sample1.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductImgSlider from "../../components/studio-material/ProductSlider";
import { useMediaQuery } from "react-responsive";

const YouMayLikeWrapper = styled.div`
  .you-also-like--container {
    margin: 106px 81px 67px;
  }
  .you-also-like--container .like-text {
    padding-bottom: 62px;
  }
  @media (max-width: 1200px) {
    .you-also-like--container {
      margin: 106px 60px 67px;
    }
    .images {
      width: 150px;
      height: 150px;
    }
    .images-you-may-like {
      width: 500px;
    }
  }
  @media (max-width: 1000px) {
    .you-also-like--container {
      margin: 70px 40px 30px;
    }
    .images {
      width: 120px;
      height: 120px;
    }
    .images-you-may-like {
      width: 400px;
    }
  }
  @media (max-width: 800px) {
    .you-also-like--container {
      margin: 60px 30px 30px;
      display: none;
    }
    .images {
      width: 100px;
      height: 100px;
    }
    .images-you-may-like {
      width: 350px;
    }
  }
  @media (max-width: 650px) {
    .you-also-like--container {
      margin: 50px 20px 20px;
    }
    .images {
      width: 100px;
      height: 100px;
    }
    .images-you-may-like {
      width: 300px;
    }
  }
`;

const YouMayLike = () => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <YouMayLikeWrapper>
      <section className="you-also-like--container">
        <div className="like-text">
          <img
            loading="lazy"
            src={youMayLike}
            alt=""
            className="images-you-may-like"
          />
        </div>
        <div className="d-flex justify-content-between">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-40vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 2,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
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
              className="images"
            />
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-40vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.7,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
              loading="lazy"
              src={likeProduct1}
              alt=""
              className="images"
            />
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-40vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.5,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
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
              className="images"
            />
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
                  duration: 1.5,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
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
              className="images"
            />
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
                  duration: 1.7,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
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
              className="images"
            />
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
                  duration: 2,
                },
              }
            }
            style={{ overflow: "hidden", borderRadius: "50%" }}
          >
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
              className="images"
            />
          </motion.div>
        </div>
      </section>
      {isResponsive && <ProductImgSlider image={youMayLike} />}
    </YouMayLikeWrapper>
  );
};

export default YouMayLike;
