import React from "react";
import styled from "styled-components";
import Photo from "../../../assets/images/service/pets/photo.svg";
import PhotoBack from "../../../assets/images/service/pets/photo-back.svg";

const ExploreShopWrapper = styled.div`
  background: #a75b41;
  margin-top: 80px;
  height: 650px;
  position: relative;
  .back {
    position: absolute;
    height: 700px;
    width: 100%;
  }
  .explore-shop {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    color: white;
    padding-top: 100px;
  }
  .card-label {
    color: white;
    border: 1px solid white;
    display: flex;
    height: 100px;
    width: 200px;
    justify-content: space-between;
  }
  .label-name {
    padding-top: 10px;
    padding-left: 10px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    padding: 100px;
    justify-content: center;
  }
`;

const ExploreShop = () => {
  return (
    <ExploreShopWrapper>
      <img src={PhotoBack} alt="photo" className="back" />
      <div className="explore-shop">EXPLORE SHOP</div>
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => {
          return (
            <div className="card-label">
              <div className="label-name">FOOD</div>
              <img src={Photo} alt="photo" loading="lazy" />
            </div>
          );
        })}
      </div>
    </ExploreShopWrapper>
  );
};

export default ExploreShop;
