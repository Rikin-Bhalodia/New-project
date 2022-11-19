import React from "react";
import { useLocation } from "react-router-dom";

const AssiPets = () => {
  const location = useLocation();
  return (
    <svg
      width="40"
      height="60"
      viewBox="0 0 49 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pets-icon"
    >
      <path
        d="M7.35598 0.988423C7.17377 0.994432 6.99667 1.05013 6.84382 1.1495C6.69097 1.24888 6.56819 1.38814 6.48876 1.55223C6.40933 1.71633 6.37626 1.89901 6.39313 2.08054C6.41001 2.26207 6.47618 2.43553 6.58449 2.58217C11.53 9.50586 21.5818 13.413 29.6763 13.9044L27.9087 16.0255C27.5073 16.0475 23.9185 16.2432 19.9068 16.4708C17.7917 16.5909 15.6713 16.715 14.0669 16.8126C13.2647 16.8615 12.5915 16.9025 12.1099 16.9357C11.9523 16.9465 11.8485 16.9542 11.7329 16.963C10.6356 16.1626 9.54102 15.2444 8.87746 14.3947C8.87681 14.394 8.87616 14.3934 8.87551 14.3927C8.30133 13.662 7.84912 12.9743 7.54348 12.4708C7.39065 12.2191 7.27473 12.0121 7.19777 11.8712C7.15929 11.8008 7.12942 11.7471 7.11184 11.713C7.10723 11.7041 7.10694 11.7012 7.10402 11.6955C7.10336 11.6942 7.10263 11.6926 7.10207 11.6915C7.10078 11.6896 7.09947 11.6876 7.09817 11.6857V11.6837C7.0952 11.6774 7.09528 11.6779 7.09621 11.6798C7.09121 11.6687 7.086 11.6576 7.08059 11.6466C6.33627 10.1879 4.52782 9.58317 3.06106 10.3165C3.0604 10.3172 3.05975 10.3178 3.0591 10.3185C1.59114 11.0599 0.981971 12.8713 1.71535 14.338C1.7179 14.3439 1.7205 14.3498 1.72316 14.3556C1.79599 14.494 1.91076 14.69 2.15285 15.0783C2.39495 15.4665 2.73568 15.9902 3.16457 16.5939C3.90067 17.63 5.00546 18.9169 6.20949 20.1408C4.50999 23.0999 4.41145 26.0667 4.41067 28.8009L0.449727 40.6837C0.366432 40.9337 0.385149 41.2065 0.501812 41.4427C0.618475 41.679 0.823658 41.8596 1.07277 41.9455L6.69777 43.881C6.69973 43.8817 6.70168 43.8823 6.70363 43.883C8.2468 44.4047 9.99218 43.6102 10.5239 42.0373V42.0353C11.0181 40.5704 10.2675 38.9885 8.85012 38.3712L10.6724 35.3107C11.2407 35.2346 11.8206 35.1528 12.3989 35.008V45.0001C12.399 45.2654 12.5043 45.5197 12.6919 45.7072C12.8794 45.8947 13.1337 46.0001 13.3989 46.0001H19.3989C19.4035 46.0002 19.4081 46.0002 19.4126 46.0001C21.041 45.978 22.4215 44.6477 22.3989 42.9865C22.3779 41.4407 21.1427 40.2009 19.6001 40.09L20.2974 36.6037C21.1679 36.1643 22.0849 35.7282 22.856 34.9572C23.7172 34.096 24.327 32.8511 24.3872 31.254L26.3989 31.0861V45.0001C26.399 45.2654 26.5043 45.5197 26.6919 45.7072C26.8794 45.8947 27.1337 46.0001 27.3989 46.0001H33.3989C34.2113 46.0001 34.9702 45.6658 35.5142 45.1115C36.1228 44.5112 36.4524 43.6537 36.3872 42.7638C36.2752 41.2238 34.9621 40.1916 33.5083 40.0802L34.3462 32.5216C34.5806 32.3339 34.7924 32.1254 35.0122 31.924L41.3892 34.6564L41.3716 35.9591C41.3493 37.6047 42.6863 38.9778 44.3306 39.0001C45.693 39.0187 46.6805 38.0126 47.0571 36.7638C47.1595 36.671 47.2414 36.558 47.2979 36.432C47.3544 36.3059 47.3841 36.1695 47.3853 36.0314L47.395 33.008C47.395 33.0073 47.395 33.0067 47.395 33.006V32.9904V32.9865C47.3988 31.3982 46.5001 29.9376 45.0806 29.2248L45.0767 29.2228L44.9048 29.1349L39.0044 25.2013C39.2584 24.1632 39.3989 23.0921 39.3989 22.0021V22.2365L42.0161 17.0001H45.3989C45.6089 17.0003 45.8135 16.9343 45.9839 16.8116C46.1543 16.6889 46.2817 16.5157 46.3482 16.3165L48.3482 10.3165C48.3983 10.1662 48.412 10.006 48.3881 9.84934C48.3641 9.69265 48.3033 9.54388 48.2106 9.41531C48.1179 9.28674 47.996 9.18204 47.8548 9.10986C47.7137 9.03768 47.5575 9.00007 47.3989 9.00014H43.813L41.106 6.29311C40.9185 6.10557 40.6641 6.00019 40.3989 6.00014H38.6763L33.9126 3.14272C33.7695 3.05644 33.607 3.00742 33.44 3.00014C33.3018 2.99461 33.164 3.01779 33.0352 3.06821C32.9065 3.11864 32.7896 3.19522 32.6919 3.29311C30.6345 5.35056 30.3862 8.6302 32.1294 10.963L31.2681 11.9962C23.6095 11.9521 12.8888 7.96369 8.2134 1.41811C8.11793 1.28039 7.98937 1.16886 7.83955 1.09378C7.68973 1.0187 7.52345 0.982474 7.35598 0.988423ZM33.6743 5.33022L37.8853 7.85756C38.0404 7.95069 38.218 7.99997 38.3989 8.00014H39.9849L42.6919 10.7072C42.8794 10.8947 43.1337 11.0001 43.3989 11.0001H46.0103L44.6782 15.0001H41.3989C41.2132 15.0001 41.0312 15.0518 40.8732 15.1495C40.7152 15.2471 40.5875 15.3868 40.5044 15.5529L39.7583 17.0451L33.1196 12.8966L34.1665 11.6408C34.31 11.4689 34.3916 11.2538 34.3984 11.03C34.4051 10.8062 34.3365 10.5866 34.2036 10.4064L33.7544 9.79702C33.7518 9.79309 33.7492 9.78919 33.7466 9.7853C32.7334 8.44821 32.7713 6.67999 33.6743 5.33022ZM4.34035 12.0001C4.72611 11.9756 5.1061 12.1799 5.29738 12.5548C5.29853 12.5572 5.30012 12.5602 5.30129 12.5626C5.31109 12.5826 5.32137 12.6036 5.33449 12.629C5.36074 12.68 5.39633 12.7468 5.44192 12.8302C5.53308 12.9971 5.66482 13.2284 5.83449 13.508C6.17349 14.0664 6.66643 14.8169 7.30129 15.6251C8.22135 16.8033 9.51824 17.9001 10.8228 18.8185C10.9307 18.8942 11.0525 18.9479 11.1812 18.9764C11.3099 19.0049 11.443 19.0076 11.5728 18.9845C11.5746 18.9842 11.5819 18.9831 11.5845 18.9826C11.6073 18.9802 11.6458 18.9775 11.7017 18.9728C11.8247 18.9625 12.011 18.948 12.2466 18.9318C12.7179 18.8993 13.3885 18.8574 14.188 18.8087C15.787 18.7114 17.9064 18.5889 20.02 18.4689C24.2474 18.229 28.4536 17.9982 28.4536 17.9982C28.5906 17.9907 28.7246 17.9551 28.8472 17.8936C28.9699 17.8321 29.0786 17.7461 29.1665 17.6408L31.8286 14.4474L38.8599 18.8419L37.5044 21.5529C37.435 21.6918 37.3989 21.8449 37.3989 22.0001V22.0021C37.3989 25.4901 35.8145 28.7883 33.0904 30.9669L32.7739 31.2189C32.567 31.3845 32.4342 31.6254 32.4048 31.8888L31.4048 40.8888C31.3892 41.0287 31.4032 41.1703 31.446 41.3043C31.4888 41.4384 31.5595 41.5619 31.6533 41.6668C31.7472 41.7717 31.8621 41.8556 31.9906 41.9131C32.119 41.9705 32.2582 42.0002 32.3989 42.0001H33.2896C33.8617 42.0001 34.3573 42.4174 34.3931 42.9103C34.4175 43.2429 34.306 43.5022 34.1099 43.6935C34.1039 43.6999 34.0981 43.7064 34.0923 43.713C33.9169 43.8933 33.6823 44.0001 33.3989 44.0001H28.3989V30.0001C28.3989 29.8618 28.3701 29.7249 28.3144 29.5983C28.2588 29.4716 28.1774 29.3578 28.0755 29.2642C27.9737 29.1706 27.8535 29.0991 27.7225 29.0544C27.5916 29.0096 27.4528 28.9924 27.315 29.004L15.315 30.004C15.123 30.0202 14.9397 30.0915 14.7873 30.2093C14.6348 30.3271 14.5196 30.4864 14.4556 30.6681C14.0272 31.8812 13.46 32.4156 12.7173 32.7892C11.9747 33.1628 10.9957 33.32 9.89699 33.4572C9.74577 33.4759 9.60081 33.5289 9.4732 33.6122C9.34558 33.6954 9.23869 33.8068 9.16066 33.9376L6.55324 38.3205C6.47785 38.4476 6.43158 38.5899 6.41777 38.7371C6.40396 38.8843 6.42296 39.0327 6.47339 39.1717C6.52382 39.3107 6.60443 39.4367 6.70943 39.5408C6.81442 39.6449 6.94118 39.7244 7.08059 39.7736L8.02199 40.1076C8.02654 40.1089 8.0311 40.1102 8.03567 40.1115C8.55372 40.2863 8.81549 40.8463 8.62941 41.3966C8.45458 41.9147 7.8946 42.1745 7.34426 41.9884L2.66067 40.3771L6.34817 29.3165C6.38199 29.2145 6.39914 29.1077 6.39895 29.0001C6.39895 26.0001 6.40166 23.2988 8.23098 20.5548C8.36166 20.3583 8.41863 20.1219 8.39183 19.8874C8.36502 19.653 8.25616 19.4355 8.08449 19.2736C6.73726 18.0025 5.60014 16.5683 4.79543 15.4357C4.39307 14.8694 4.07333 14.3777 3.85012 14.0197C3.63143 13.6689 3.48716 13.406 3.50246 13.4357C3.26157 12.944 3.45008 12.3609 3.95949 12.1037C4.08261 12.0427 4.21177 12.0083 4.34035 12.0001ZM38.3482 27.1681L43.8443 30.8322C43.8775 30.8544 43.9121 30.8746 43.9478 30.8927L44.1763 31.008C44.1776 31.0086 44.1789 31.0093 44.1802 31.0099C44.9277 31.3837 45.3978 32.1467 45.395 32.9826C45.395 32.9839 45.395 32.9852 45.395 32.9865V33.004L45.3892 35.0275H46.3716C46.1087 35.0275 45.8565 35.131 45.6693 35.3156C45.4822 35.5001 45.3752 35.751 45.3716 36.0138C45.364 36.5769 44.9208 37.0078 44.3579 37.0001C43.7942 36.9925 43.3639 36.5509 43.3716 35.9865L43.3989 34.0138C43.4018 33.8157 43.3458 33.6212 43.238 33.455C43.1302 33.2888 42.9755 33.1584 42.7935 33.0802L36.4829 30.3751C37.257 29.3986 37.8723 28.3124 38.3482 27.1681ZM22.3657 31.422C22.2887 32.4178 21.9615 33.0235 21.4419 33.5431C20.8491 34.136 19.9517 34.6056 18.9517 35.1056C18.8154 35.1738 18.6965 35.2723 18.6041 35.3935C18.5117 35.5147 18.4482 35.6554 18.4185 35.8048L17.4185 40.8048C17.3896 40.9498 17.3933 41.0994 17.4292 41.2429C17.4651 41.3863 17.5323 41.52 17.6261 41.6343C17.7199 41.7486 17.8378 41.8407 17.9715 41.904C18.1051 41.9672 18.2511 42.0001 18.3989 42.0001H19.3989C19.4035 42.0002 19.4081 42.0002 19.4126 42.0001C19.9594 41.9927 20.3911 42.4342 20.3989 43.0138C20.4064 43.5606 19.9649 43.9923 19.3853 44.0001H14.3989V34.049C15.0231 33.534 15.5637 32.8263 15.9868 31.9533L22.3657 31.422Z"
        fill={location.pathname === "/nft-metaverse" ? "white" : "black"}
      />
    </svg>
  );
};

export default AssiPets;
