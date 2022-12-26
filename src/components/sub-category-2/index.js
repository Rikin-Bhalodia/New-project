import React, { useState } from "react";
import styled from "styled-components";
import submenu from "../../assets/sub-cat-menu-1.png";
import { motion } from "framer-motion";

const SubMenu2Wrapper = styled.div`
  text-transform: uppercase;
  .head {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    align-items: center;
    margin-bottom: 20px;
    color: #665e2f;
    font-weight: 400;
  }
  .center {
    border: 1px solid black;
    border-radius: 50%;
    padding: 20px;
  }
  .body {
    display: flex;
    justify-content: space-around;
    padding: 10px 20px 10px 20px;
    gap: 15px;
  }
  .menu-area {
    height: fit-content;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        135.17deg,
        #000 1.41%,
        rgba(0, 0, 0, 0.7) 90.8%
      ),
      url(${submenu});
    background-size: cover;
  }
  .body h6 {
    color: white;
    font-size: 17px;
    padding: 15px 0;
  }

  .body p {
    color: white;
    font-size: 11px;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 3px;
  }
  .body h5 {
    color: white;
    font-size: 22px;
    padding: 10px 0;
  }
  .footer {
    padding: 10px 80px 10px 80px;
  }
  .footer h4 {
    font-size: 25px;
    color: white;
  }
  .footer p {
    color: white;
    letter-spacing: 10px;
  }
  .head1 {
    display: flex;
    justify-content: space-evenly;
    width: inherit;
    flex: 1;
    gap: 10px;
    flex-wrap: wrap-reverse;
    padding: 0 10px;
  }
  .head2 {
    display: flex;
    justify-content: space-evenly;
    width: inherit;
    flex: 1;
    gap: 10px;
    padding: 0 10px;
    flex-wrap: wrap;
  }
  .d_flex {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    .body h6 {
      font-size: 15px;
      padding: 10px 0;
    }

    .body p {
      font-size: 10px;
      margin-bottom: 5px;
      padding-top: 0px;
    }
    .body h5 {
      font-size: 18px;
      padding: 5px 0;
    }
  }
`;

export default function SubMenu2() {
  //   const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <SubMenu2Wrapper>
      <div className="head">
        <div className="head1">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            clothing
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            BAGS
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            FOOTWEAR
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            JEWELLERY
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            kids
          </motion.div>
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
          animate={
            isInView && {
              y: 0,
              opacity: 1,
              rotateX: "0deg",
              transition: {
                duration: 1,
              },
            }
          }
          className="center"
        >
          EXPLORE THE STORE
        </motion.div>
        <div className="head2">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            BEAUTY
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            ACCESSORIES
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            FOOD & DRINKS
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            GAMES
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
          >
            KIDS
          </motion.div>
        </div>
      </div>
      <div className="menu-area">
        <div className="body">
          <div className="box">
            <motion.h5
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  rotateX: "0deg",
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              BEAUTY
            </motion.h5>
            <div className="d_flex">
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FOUNDATION
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BB & CC Creams
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  concealer
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  primer
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  setting sprays
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  highlighter
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  contour
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  color correctors
                </motion.p>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  CHEEK
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BRUSHES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BRONZERS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  CHEEK PALETTES{" "}
                </motion.p>
              </div>
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYES
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE PALETTES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  MASCARA
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE LINERS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYEBS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE LASHES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE SHADOWS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SERUMS
                </motion.p>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIPS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIPSTICKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIPGLOSS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP BALM
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP LINER
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  PLUMPERS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP CREAMS
                </motion.p>
              </div>
            </div>
          </div>
          <div className="box">
            <motion.h5
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  rotateX: "0deg",
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              SKIN
            </motion.h5>
            <div className="d_flex">
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  MOISTURIZERS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  NIGHTCREAM
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE OILS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  MISTS
                </motion.p>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  CLEANSERS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACEWASH
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EXFOLIATING SCRUBS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FASK MASKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  MAKEUP REMOVER
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE WIPES
                </motion.p>
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  TREATMENTS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE SERUMS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BLEMISH & ACNE
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE PEELS
                </motion.p>
              </div>
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  MASKS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  FACE MASKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SHEET MASKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE MASKS
                </motion.p>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE CARE
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE CREAMS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE MASKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  EYE MASKS
                </motion.p>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIPS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP CARE KIT
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP BALMS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  LIP TREATMENTS
                </motion.p>
              </div>
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  NAILS
                </motion.h6>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SUNCARE & <br />
                  SELF-TAN
                </motion.h6>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  TOOLS
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BRUSHES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  APPLICATORS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  ACCESSORIES
                </motion.p>
              </div>
            </div>
          </div>
          <div className="box">
            <motion.h5
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  rotateX: "0deg",
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              HAIR
            </motion.h5>
            <div className="d_flex">
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SHAMPOO
                </motion.h6>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  CONDITIONERS
                </motion.h6>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SCALP SCRUBS
                </motion.h6>
                <br />
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR TREATMENT
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  BRUSHES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR MASKS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR OILS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR SERUMS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  SCALP TREATMENTS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR SUPPLEMENTS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR THINNING & HAIR LOSS
                </motion.p>
              </div>
              <div className="">
                <motion.h6
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  STYLING
                </motion.h6>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  CREAMS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  DRY SHAMPOO
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HEAT PROTECTORS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR SPRAYS
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  HAIR DYES
                </motion.p>
                <motion.p
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      rotateX: "0deg",
                      transition: {
                        duration: 1,
                      },
                    }
                  }
                >
                  ROOT TOUCH-UPS
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <h4>all designer & Brand</h4>
          <motion.p whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "3vh", rotateX: "-90deg", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                rotateX: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</motion.p>
        </div> */}
      </div>
    </SubMenu2Wrapper>
  );
}
