import React, { useState } from "react";
import styled from "styled-components";
import submenu from "../../assets/sub-cat-menu-1.png";
import { motion } from "framer-motion";
const SubMenu1Wrapper = styled.div`
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
  @media (max-width: 850px) {
    .body {
      display: flex;
      justify-content: center;
      width: 100%;
    }
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

export default function SubMenu1() {
  const [isInView, setIsInView] = useState(false);
  return (
    <SubMenu1Wrapper>
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
              women
            </motion.h5>
            <div className="row">
              <div className="col-md-6">
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
                  western wear
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
                  dresses
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
                  tops & tshirts
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
                  knitwear
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
                  sweaters
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
                  jackets
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
                  pants
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
                  blouse
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
                  coats & blazers
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
                  jeans & denims
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
                  beachwear
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
                  active wear
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
                  jumpsuits & playsuits
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
                  lingerie, shapewear, loungewear
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
                  swinwear
                </motion.p>
              </div>
              <div className="col-md-6">
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
                  ethnic wear
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
                  kurta sets
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
                  lehenga sets
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
                  kurta & tunics
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
                  sets
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
                  sarees & blouses
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
                  dresses
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
                  kaftans
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
                  bottoms
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
                  jackets
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
                  gowns
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
              men
            </motion.h5>
            <div className="row">
              <div className="col-md-6">
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
                  western wear
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
                  dresses
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
                  tops & tshirts
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
                  knitwear
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
                  sweaters
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
                  jackets
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
                  pants
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
                  blouse
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
                  coats & blazers
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
                  jeans & denims
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
                  beachwear
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
                  active wear
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
                  jumpsuits & playsuits
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
                  lingerie, shapewear, loungewear
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
                  swinwear
                </motion.p>
              </div>
              <div className="col-md-6">
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
                  ethnic wear
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
                  kurta sets
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
                  lehenga sets
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
                  kurta & tunics
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
                  sets
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
                  sarees & blouses
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
                  dresses
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
                  kaftans
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
                  bottoms
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
                  jackets
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
                  gowns
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
              UNISEX
            </motion.h5>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <h4>all designer & Brand</h4>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        </div> */}
      </div>
    </SubMenu1Wrapper>
  );
}
