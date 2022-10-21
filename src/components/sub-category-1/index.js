import React, { useState } from "react";
import styled from "styled-components";
// import Menu from "../../commonComponents/Menu";
// import MenuIcon from "../../assets/images/studio/menu.svg";
import submenu from "../../assets/sub-cat-menu-1.svg";

const SubMenu1Wrapper = styled.div`
  .head {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    align-items: center;
    margin-bottom: 30px;
  }
  .center {
    border: 1px solid black;
    border-radius: 50%;
    padding: 30px;
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 80px;
  }
  .menu-area {
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
    font-size: 18px;
  }
  .body p {
    color: white;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .body h5 {
    color: white;
    font-size: 22px;
  }
  .footer {
    padding: 50px 80px;
  }
  .footer h4 {
    font-size: 25px;
    color: white;
    text-transform: uppercase;
  }
  .footer p {
    color: white;
    letter-spacing: 10px;
  }
`;

export default function SubMenu1() {
  //   const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <SubMenu1Wrapper>
      <div className="head">
        <div>clothing</div>
        <div>BAGS</div>
        <div>FOOTWEAR</div>
        <div>JEWELLERY</div>
        <div>kids</div>
        <div className="center">EXPLORE THE STORE</div>
        <div>BEAUTY</div>
        <div>ACCESSORIES</div>
        <div>FOOD & DRINKS</div>
        <div>GAMES</div>
        <div>KIDS</div>
      </div>
      <div className="menu-area">
        <div className="body">
          <div className="box">
            <h5>women</h5>
            <div className="row">
              <div className="col-md-6">
                <h6>western wear</h6>
                <p>dresses</p>
                <p>tops & tshirts</p>
                <p>knitwear</p>
                <p>sweaters</p>
                <p>jackets</p>
                <p>pants</p>
                <p>blouse</p>
                <p>coats & blazers</p>
                <p>jeans & denims</p>
                <p>beachwear</p>
                <p>active wear</p>
                <p>jumpsuits & playsuits</p>
                <p>lingerie, shapewear, loungewear</p>
                <p>swinwear</p>
              </div>
              <div className="col-md-6">
                <h6>ethnic wear</h6>
                <p>kurta sets</p>
                <p>lehenga sets</p>
                <p>kurta & tunics</p>
                <p>sets</p>
                <p>sarees & blouses</p>
                <p>dresses</p>
                <p>kaftans</p>
                <p>bottoms</p>
                <p>jackets</p>
                <p>gowns</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h5>men</h5>
            <div className="row">
              <div className="col-md-6">
                <h6>western wear</h6>
                <p>dresses</p>
                <p>tops & tshirts</p>
                <p>knitwear</p>
                <p>sweaters</p>
                <p>jackets</p>
                <p>pants</p>
                <p>blouse</p>
                <p>coats & blazers</p>
                <p>jeans & denims</p>
                <p>beachwear</p>
                <p>active wear</p>
                <p>jumpsuits & playsuits</p>
                <p>lingerie, shapewear, loungewear</p>
                <p>swinwear</p>
              </div>
              <div className="col-md-6">
                <h6>ethnic wear</h6>
                <p>kurta sets</p>
                <p>lehenga sets</p>
                <p>kurta & tunics</p>
                <p>sets</p>
                <p>sarees & blouses</p>
                <p>dresses</p>
                <p>kaftans</p>
                <p>bottoms</p>
                <p>jackets</p>
                <p>gowns</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h5>UNISEX</h5>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>all designer & Brand</h4>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        </div>
      </div>
    </SubMenu1Wrapper>
  );
}
