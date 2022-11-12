import React from "react";
import { useLocation } from "react-router-dom";

const Culture = () => {
  const location = useLocation();
  return (
    <svg
      width="40"
      height="60"
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3977 0.600098C14.5852 0.600098 10.4695 0.800098 6.95391 2.61885C3.43828 4.43447 0.597656 8.00322 0.597656 14.2001C0.597656 22.1126 5.66953 25.8188 7.06953 26.6907C7.31641 28.0376 8.11641 29.6907 9.28516 31.347C10.557 33.1407 12.2758 34.8688 14.3102 35.8407C15.0445 36.7626 16.1352 37.4001 17.3977 37.4001C18.6602 37.4001 19.7477 36.7626 20.482 35.8438C22.5133 34.8688 24.232 33.1407 25.5039 31.3438C26.6758 29.6907 27.4758 28.0376 27.7258 26.6907C29.1258 25.8188 34.1977 22.1126 34.1977 14.2001C34.1977 8.00322 31.3477 4.43135 27.8258 2.61572C24.3289 0.809473 20.2477 0.603222 17.4539 0.600098C17.4352 0.600098 17.4164 0.600098 17.3977 0.600098ZM17.3977 2.2001C18.9477 2.2001 20.8852 2.2876 22.8383 2.65322C20.7133 4.52822 16.2133 8.79697 12.4102 14.4501C12.3477 14.5157 12.2945 14.5907 12.257 14.6751C10.2008 17.7688 8.37578 21.247 7.30703 24.9532C5.66641 23.8032 2.19766 20.6188 2.19766 14.2001C2.19766 8.46885 4.58828 5.6376 7.68828 4.0376C10.7883 2.4376 14.6695 2.2001 17.3977 2.2001ZM24.757 3.1126C25.5633 3.35322 26.3508 3.65322 27.0945 4.0376C30.1977 5.6376 32.5977 8.47197 32.5977 14.2001C32.5977 20.572 29.1758 23.7626 27.5227 24.9345C25.6758 17.522 20.0883 11.1095 18.4477 9.3501C21.3352 6.09072 23.8852 3.84697 24.757 3.1126ZM17.3945 10.5782C17.9414 11.1813 18.8445 12.2438 19.9102 13.647C19.1883 13.5063 18.3352 13.4001 17.3977 13.4001C16.4977 13.4001 15.6883 13.497 14.9945 13.6251C15.7852 12.547 16.5914 11.5282 17.3945 10.5782ZM17.3977 15.0001C19.5633 15.0001 21.1758 15.6157 21.3977 15.7032C23.3664 18.6126 25.3883 22.3282 26.1695 26.1751C26.1695 26.2032 26.1695 26.2313 26.1695 26.2595C26.0977 26.722 25.8695 27.3938 25.5039 28.1688C25.0164 28.5188 24.4477 28.5876 23.8852 28.5876C22.5727 28.5876 20.957 27.1813 20.5195 26.7376C20.1445 26.3876 19.6508 26.1907 19.1383 26.1876C18.4758 26.1907 17.8539 26.5188 17.4727 27.072C17.0945 26.5188 16.4727 26.1907 15.807 26.1876C15.2945 26.1907 14.8039 26.3845 14.4289 26.7376L14.4258 26.7345C13.9914 27.1813 12.3727 28.5876 11.0602 28.5876C10.3914 28.5876 9.71328 28.4907 9.17266 27.9376C8.86953 27.2563 8.69141 26.6751 8.62578 26.2563C8.62578 26.2376 8.62891 26.2157 8.62578 26.197C9.58828 22.4313 11.4477 18.8376 13.5852 15.6345C14.132 15.4345 15.5477 15.0001 17.3977 15.0001ZM12.9977 20.6001C12.3352 20.6001 11.7977 21.1376 11.7977 21.8001C11.7977 22.4626 12.3352 23.0001 12.9977 23.0001C13.6602 23.0001 14.1977 22.4626 14.1977 21.8001C14.1977 21.1376 13.6602 20.6001 12.9977 20.6001ZM21.7977 20.6001C21.1352 20.6001 20.5977 21.1376 20.5977 21.8001C20.5977 22.4626 21.1352 23.0001 21.7977 23.0001C22.4602 23.0001 22.9977 22.4626 22.9977 21.8001C22.9977 21.1376 22.4602 20.6001 21.7977 20.6001ZM17.4727 29.422C17.4977 29.4595 17.5227 29.4938 17.5477 29.5282C17.5508 29.5313 17.557 29.5345 17.5602 29.5376C17.6414 29.6407 17.732 29.7345 17.832 29.822C18.7133 30.6438 20.0633 30.9876 21.8508 30.9876C22.7352 30.9876 23.4383 30.8657 24.007 30.6657C22.8477 32.2345 21.3289 33.7032 19.7195 34.4501C19.5883 34.5126 19.4727 34.6126 19.3945 34.7345C18.9602 35.3782 18.2352 35.8001 17.3977 35.8001C16.5602 35.8001 15.8352 35.3782 15.4039 34.7345C15.3227 34.6126 15.2102 34.5157 15.0758 34.4532C13.4289 33.6907 11.8789 32.1782 10.7133 30.5751C11.3164 30.8251 12.0852 30.9876 13.0945 30.9876C14.8883 30.9876 16.2414 30.6407 17.1227 29.8126C17.2195 29.7282 17.307 29.6376 17.3883 29.5376C17.3914 29.5313 17.3945 29.5313 17.3977 29.5251C17.4227 29.4907 17.4508 29.4563 17.4727 29.422Z"
        fill={location.pathname === "/nft-metaverse" ? "white" : "black"}
      />
    </svg>
  );
};

export default Culture;
