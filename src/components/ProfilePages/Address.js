import React from "react";
import styled from "styled-components";
import Sidebar from "../../commonComponents/SidebarOfProfilePage/index";

const AddressWrapper = styled.div`
  display: flex;
  .desktop-content {
    width: 100%;
    margin-top: 165px;
  }
  .desktop-top {
    margin-left: 50px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .desktopAddress {
    margin-left: 15px;
    height: 150px;
    background: rgba(167, 149, 134, 0.22);
  }
  .address-name {
    padding-top:15px;
    padding-left: 10px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #665e2f;
  }
  .addresses{
    font-family: 'Coral Blush';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #665e2f;
padding:15px 0px 0px 20px;
  }
  .addressNumber{
    padding-left: 20px;
    padding-bottom: 10px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .desktop-top2{
    margin-top: 30px;
    margin-left: 50px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .desktopLast{
    margin-top: 10px;
    margin-left: 15px;
    height: 150px;
    background: rgba(167, 149, 134, 0.22);
  }
  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    .desktop-content{
      margin-top: 50px;
    }
  }
`;

const Address = () => {
  return (
    <div>
      <AddressWrapper>
        <Sidebar />
        <div className="desktop-content">
          <div className="desktop-top">DEFAULT ADDRESS</div>
          <div className="desktopAddress">
            <div className="address-name">AKANSHA DAGAR</div>
            <div className="addresses">123 HOUSE, ABC STREET, XYZ CITY-110088 </div>
            <div className="addressNumber">098765433221</div>
          </div>
          <div className="desktop-top2">OTHER ADDRESS</div>
          <div className="desktopAddress">
            <div className="address-name">AKANSHA DAGAR</div>
            <div className="addresses">123 HOUSE, ABC STREET, XYZ CITY-110088 </div>
            <div className="addressNumber">098765433221</div>
          </div>

          <div className="desktopLast">
            <div className="address-name">AKANSHA DAGAR</div>
            <div className="addresses">123 HOUSE, ABC STREET, XYZ CITY-110088 </div>
            <div className="addressNumber">098765433221</div>
          </div>
        </div>
      </AddressWrapper>
    </div>
  );
};

export default Address;
