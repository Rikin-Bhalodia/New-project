import React, { useState } from "react";
import styled from "styled-components";
import Star from "../../assets/images/nfts/star.svg";
import Upload from "../../assets/images/nfts/upload.svg";
import { motion } from "framer-motion";

const FromWrapper = styled.div`
  .form-inputs {
    background: #665e2f;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 120px;
    height: 450px;
    row-gap: 10px;
    flex: 1 1;
    justify-content: center;
  }
  .custom-select {
    position: relative;
    font-family: Arial;
    width: 294px;
    height: 60px;
    border: 1px solid #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  .custom-select::-ms-expand {
    display: none;
  }

  .custom-select select {
    display: none;
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items div,
  .select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
  }

  /*style items (options):*/
  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  /*hide the items when the select box is closed:*/
  .select-hide {
    display: none;
  }
  .custom-input {
    background: #ffffff;
    border: 1px solid #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
    width: 294px;
    height: 60px;
    padding: 0 15px;
    flex: 1;
  }
  .custom-input:focus {
    outline: none;
  }
  .upload-file {
    display: none;
  }
  .star {
    position: relative;
    right: 15px;
  }
  .fields-marked {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    margin-left: 170px;
    margin-top: 100px;
  }
  .select-star {
    position: relative;
    right: 15px;
    top: -20px;
  }
  .add-item {
    background: #ffffff;
    border: 1px solid #665e2f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 90px;
    width: 250px;
    height: 60px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #665e2f;
    margin-top: 30px;
  }
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .fields-marked {
      font-size: 13px;
      margin: 30px 30px 0 !important;
    }
  }
`;

const Fields = [
  {
    placeholder: "FIRST NAME",
    img: <img src={Star} alt="star" />,
    type: "text",
    width: "30%",
    delay: 0,
  },
  {
    placeholder: "MIDDLE NAME",
    img: "",
    type: "text",
    width: "30%",
    delay: 0.1,
  },
  {
    placeholder: "LAST NAME",
    img: <img src={Star} alt="star" />,
    type: "text",
    width: "30%",
    delay: 0.2,
  },
  {
    placeholder: "EMAIL ADDRESS",
    img: <img src={Star} alt="star" />,
    type: "text",
    width: "60%",
    delay: 0.3,
  },
  {
    placeholder: "CATEGORY",
    img: <img src={Star} alt="star" />,
    type: "select",
    width: "30%",
    delay: 0.4,
  },
  {
    placeholder: "BRAND",
    img: <img src={Star} alt="star" />,
    type: "select",
    width: "30%",
    delay: 0.5,
  },
  {
    placeholder: "ITEM TYPE",
    img: <img src={Star} alt="star" />,
    type: "select",
    width: "30%",
    delay: 0.6,
  },
  {
    placeholder: "COST",
    img: <img src={Star} alt="star" />,
    type: "select",
    width: "30%",
    delay: 0.7,
  },
  {
    placeholder: "UPLOAD ITEM IMAGES (PNG/JPG/SVG)",
    img: <img src={Star} alt="star" />,
    type: "file",
    width: "60%",
    delay: 0.8,
  },
];
const From = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <FromWrapper>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ rotateX: "-90deg" }}
        animate={
          isInView && {
            rotateX: 0,
            transition: {
              duration: 1,
            },
          }
        }
        className="fields-marked"
      >
        Fields marked with
        <img src={Star} alt="star" />
        compulsory to fill.
      </motion.div>
      <div className="form-inputs">
        {Fields.map(({ img, placeholder, type, width, delay }) => {
          return (
            <>
              {type === "text" || type === "file" ? (
                <>
                  {type === "file" ? (
                    <motion.div
                      style={{
                        width: width,
                        display: "flex",
                        margin: "0 50px 0 0",
                      }}
                      whileInView={() => {
                        setIsInView(true);
                      }}
                      initial={{ rotateX: "90deg" }}
                      animate={
                        isInView && {
                          rotateX: 0,
                          transition: {
                            duration: 1,
                            delay: delay,
                          },
                        }
                      }
                    >
                      <>
                        <label
                          htmlFor="actual-btn"
                          className="custom-input"
                          style={{
                            width: "100%",
                            // display: "flex",
                            // justifySelf: "left",
                            float: "left",
                          }}
                        >
                          <img src={Upload} alt="upload" />
                          {placeholder}
                        </label>
                        <div className="star">{img}</div>
                        <input
                          placeholder={placeholder}
                          type={type}
                          id="actual-btn"
                          hidden
                        />
                      </>
                    </motion.div>
                  ) : (
                    <div
                      style={{
                        width: width,
                        display: "flex",
                        margin: "0 10px 0 0",
                      }}
                    >
                      <>
                        <motion.input
                          whileInView={() => {
                            setIsInView(true);
                          }}
                          initial={{ rotateX: "90deg" }}
                          animate={
                            isInView && {
                              rotateX: 0,
                              transition: {
                                duration: 1,
                                delay: delay,
                              },
                            }
                          }
                          placeholder={placeholder}
                          className="custom-input"
                          id="actual-btn"
                          style={{ width: "100%" }}
                        />
                        <div className="star">{img}</div>
                      </>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <motion.select
                    whileInView={() => {
                      setIsInView(true);
                    }}
                    initial={{ rotateX: "90deg" }}
                    animate={
                      isInView && {
                        rotateX: 0,
                        transition: {
                          duration: 1,
                          delay: delay,
                        },
                      }
                    }
                    className="custom-select"
                    style={{ width: width }}
                  >
                    <option value="0">{placeholder}</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                  </motion.select>
                  <div className="select-star">{img}</div>
                </>
              )}
            </>
          );
        })}
      </div>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "50vh", opacity: 0 }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
            },
          }
        }
        className="button-wrapper"
      >
        <div className="add-item">ADD ITEM</div>
      </motion.div>
    </FromWrapper>
  );
};

export default From;
