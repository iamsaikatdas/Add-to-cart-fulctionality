import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ ratings, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i)} style={style}>
            {ratings > i ? (
              <AiFillStar fontSize={"15px"} />
            ) : (
              <AiOutlineStar fontSize={"15px"} />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Ratings;
