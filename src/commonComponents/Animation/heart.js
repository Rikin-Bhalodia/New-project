import React from "react";
import { nanoid } from "nanoid";
import "./heart.css";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Like = ({ fill }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
        fill={fill}
      />
    </svg>
  );
};

export function InstaLike() {
  const [likes, setLikes] = React.useState(0);
  const currentLikes = React.useRef([]);
  const interval = React.useRef(null);

  const setReaction = () => {
    const id = nanoid(6);
    const like = {
      id,
      type: `t-${getRandomInt(1, 60)}`,
    };
    setLikes(likes + 1);
    currentLikes.current = [...currentLikes.current, like];
    setTimeout(() => {
      currentLikes.current = currentLikes.current.filter((l) => l.id !== id);
    },800);
  };

  clearInterval(interval.current);
  interval.current = setInterval(setReaction, 180);

  return (
    <div className="grad">
      <div className="relative h-20">
        <div className="animations">
          {currentLikes.current.map((l) => {
            return (
              <div key={l.id} className={`like ${l.type}`}>
                <Like fill={"red"} />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setReaction()}
          style={{ display: "none" }}
          className="like-btn w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center"
        >
          <Like fill={"#C850C0"} />
        </button>
        <p
          className="text-white tracking-wider uppercase text-xs text-center opacity-0 mt-4"
          style={{ display: "none" }}
        >
          press me
        </p>
      </div>
    </div>
  );
}
