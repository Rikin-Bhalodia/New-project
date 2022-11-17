import React from "react";
import { useLocation } from "react-router-dom";

const Nfts = () => {
  const location = useLocation();
  return (
    <svg
      width="40"
      height="60"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3984 0.420898C17.6961 0.420898 16.9937 0.601343 16.3672 0.96228L2.92969 8.72168C1.67656 9.44668 0.898438 10.7935 0.898438 12.2404V27.7561C0.898438 29.203 1.67656 30.5498 2.92969 31.2748L16.3672 39.0342C16.9922 39.3967 17.6953 39.578 18.3984 39.578C19.1016 39.578 19.8047 39.3967 20.4297 39.0342L33.8672 31.2748C35.1203 30.5529 35.8984 29.206 35.8984 27.7592V12.2404C35.8984 10.7935 35.1203 9.44668 33.8672 8.72168L20.4297 0.96228C19.8031 0.601343 19.1008 0.420898 18.3984 0.420898ZM18.3984 2.29407C18.7766 2.29407 19.1547 2.39172 19.4922 2.58704L32.9297 10.3464C33.6047 10.7371 34.0234 11.4622 34.0234 12.2404V27.7561C34.0234 28.5374 33.6047 29.2625 32.9297 29.6531L19.4922 37.4125C18.8172 37.8031 17.9797 37.8031 17.3047 37.4125L3.86719 29.6531C3.19219 29.2625 2.77344 28.5373 2.77344 27.7592V12.2404C2.77344 11.4622 3.19219 10.7339 3.86719 10.3464L17.3047 2.58704C17.6422 2.39172 18.0203 2.29407 18.3984 2.29407ZM18.3984 4.98877C18.2367 4.98877 18.075 5.03074 17.9297 5.11511C17.6391 5.28386 17.4609 5.59373 17.4609 5.9281V34.0745C17.4609 34.5932 17.8797 35.012 18.3984 35.012C18.9172 35.012 19.3359 34.5932 19.3359 34.0745V20.9373H23.0859C23.6047 20.9373 24.0234 20.5185 24.0234 19.9998C24.0234 19.481 23.6047 19.0623 23.0859 19.0623H19.3359V7.5498L27.1606 12.0682C27.1544 12.1089 27.1484 12.1466 27.1484 12.1873V27.8123C27.1484 28.331 27.5672 28.7498 28.0859 28.7498C28.6047 28.7498 29.0234 28.331 29.0234 27.8123V13.1437L30.7422 14.1373C31.1922 14.3967 31.7639 14.2437 32.0233 13.7937C32.2827 13.3437 32.1266 12.7713 31.6797 12.512L18.8672 5.11511C18.7219 5.03074 18.5602 4.98877 18.3984 4.98877ZM13.0859 9.68726C12.5672 9.68726 12.1484 10.106 12.1484 10.6248V24.9155L7.07031 13.3713C6.89219 12.9651 6.45488 12.7406 6.02051 12.8312C5.58301 12.9249 5.27344 13.306 5.27344 13.7498V26.2498C5.27344 26.7685 5.69219 27.1873 6.21094 27.1873C6.72969 27.1873 7.14844 26.7685 7.14844 26.2498V18.209L12.2266 29.7532C12.3797 30.0969 12.7203 30.3123 13.0859 30.3123C13.1484 30.3123 13.2138 30.3058 13.2794 30.2933C13.7138 30.1996 14.0234 29.8185 14.0234 29.3748V10.6248C14.0234 10.106 13.6047 9.68726 13.0859 9.68726Z"
        fill={location.pathname === "/nft-metaverse" ? "white" : "black"}
      />
    </svg>
  );
};

export default Nfts;