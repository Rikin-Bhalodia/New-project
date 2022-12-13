import React from "react";
import styled from "styled-components";
// import Menu from "../../commonComponents/Menu";
// import MenuIcon from "../../assets/images/studio/menu.svg";
import submenu from "../../assets/sub-cat-menu-1.svg";

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
    justify-content: space-between;
    width: inherit;
    flex: 1;
    gap: 10px;
    flex-wrap: wrap-reverse;
    padding: 0 10px;
  }
  .head2 {
    display: flex;
    justify-content: space-between;
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
`;

export default function SubMenu1() {
  return (
    <SubMenu1Wrapper>
      <div className="head">
        <div className="head1">
          <div>clothing</div>
          <div>BAGS</div>
          <div>FOOTWEAR</div>
          <div>JEWELLERY</div>
          <div>kids</div>
        </div>
        <div className="center">EXPLORE THE STORE</div>
        <div className="head2">
          <div>BEAUTY</div>
          <div>ACCESSORIES</div>
          <div>FOOD & DRINKS</div>
          <div>GAMES</div>
          <div>KIDS</div>
        </div>
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
        {/* <div className="footer">
          <h4>all designer & Brand</h4>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        </div> */}
      </div>
    </SubMenu1Wrapper>
  );
}
