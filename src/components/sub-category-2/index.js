import React, { useState } from "react";
import styled from "styled-components";
// import Menu from "../../commonComponents/Menu";
// import MenuIcon from "../../assets/images/studio/menu.svg";
import submenu from "../../assets/sub-cat-menu-1.svg";

const SubMenu2Wrapper = styled.div`
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

export default function SubMenu2() {
  //   const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <SubMenu2Wrapper>
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
        <div className="body col-12">
          <div className="row">
            <div className="col-md-3">
              <div className="box">
                <h5>BEAUTY</h5>
                <div className="row">
                  <div className="col-md-6">
                    <h6>FACE</h6>
                    <p>FOUNDATION</p>
                    <p>BB & CC Creams</p>
                    <p>concealer</p>
                    <p>primer</p>
                    <p>setting sprays</p>
                    <p>highlighter</p>
                    <p>contour</p>
                    <p>color correctors</p>
                    <br />
                    <h6>CHEEK</h6>
                    <p>BRUSHES</p>
                    <p>BRONZERS</p>
                    <p>CHEEK PALETTES </p>
                  </div>
                  <div className="col-md-6">
                    <h6>EYES</h6>
                    <p>EYE PALETTES</p>
                    <p>MASCARA</p>
                    <p>EYE LINERS</p>
                    <p>EYEBROWS</p>
                    <p>EYE LASHES</p>
                    <p>EYE SHADOWS</p>
                    <p>SERUMS</p>
                    <br />
                    <h6>LIPS</h6>
                    <p>LIPSTICKS</p>
                    <p>LIPGLOSS</p>
                    <p>LIP BALM</p>
                    <p>LIP LINER</p>
                    <p>PLUMPERS</p>
                    <p>LIP CREAMS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <h5>SKIN</h5>
                <div className="row">
                  <div className="col-md-4">
                    <h6>MOISTURIZERS</h6>
                    <p>NIGHTCREAM</p>
                    <p>FACE OILS</p>
                    <p>MISTS</p>
                    <br />
                    <h6>CLEANSERS</h6>
                    <p>FACEWASH</p>
                    <p>EXFOLIATING SCRUBS</p>
                    <p>FASK MASKS</p>
                    <p>MAKEUP REMOVER</p>
                    <p>FACE WIPES</p>
                    <h6>TREATMENTS</h6>
                    <p>FACE SERUMS</p>
                    <p>BLEMISH & ACNE</p>
                    <p>FACE PEELS</p>
                  </div>
                  <div className="col-md-4">
                    <h6>MASKS</h6>
                    <p>FACE MASKS</p>
                    <p>SHEET MASKS</p>
                    <p>EYE MASKS</p>
                    <br />
                    <h6>EYE CARE</h6>
                    <p>EYE CREAMS</p>
                    <p>EYE MASKS</p>
                    <p>EYE MASKS</p>
                    <br />
                    <h6>LIPS</h6>
                    <p>LIP CARE KIT</p>
                    <p>LIP BALMS</p>
                    <p>LIP TREATMENTS</p>
                  </div>
                  <div className="col-md-4">
                    <h6>SUNCARE & SELF-TAN</h6>
                    <br />
                    <h6>TOOLS</h6>
                    <p>BRUSHES</p>
                    <p>APPLICATORS</p>
                    <p>ACCESSORIES</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <h5>HAIR</h5>
                <div className="row">
                  <div className="col-md-6">
                    <h6>SHAMPOO</h6>
                    <br />
                    <h6>CONDITIONERS</h6>
                    <br />
                    <h6>SCALP SCRUBS</h6>
                    <br />
                    <h6>HAIR TREATMENT</h6>
                    <p>BRUSHES</p>
                    <p>HAIR MASKS</p>
                    <p>HAIR OILS</p>
                    <p>HAIR SERUMS</p>
                    <p>SCALP TREATMENTS</p>
                    <p>HAIR SUPPLEMENTS</p>
                    <p>HAIR THINNING & HAIR LOSS</p>
                  </div>
                  <div className="col-md-6">
                    <h6>STYLING</h6>
                    <p>CREAMS</p>
                    <p>DRY SHAMPOO</p>
                    <p>HEAT PROTECTORS</p>
                    <p>HAIR SPRAYS</p>
                    <p>HAIR DYES</p>
                    <p>ROOT TOUCH-UPS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>all designer & Brand</h4>
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        </div>
      </div>
    </SubMenu2Wrapper>
  );
}