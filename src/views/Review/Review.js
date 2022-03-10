import React from "react";
import Star from "../Star/Star";
import { FaUser } from "react-icons/fa";
const Review = (props) => {
  const dateArray = props.created_on.split(" ")[0].split("-");
  const date = [dateArray[1], dateArray[2], dateArray[0]].join("/");
  return (
    <div className='review-container'>
      <div className='user-info'>
        {props.image ? (
          <img src={props.image} alt='user' />
        ) : (
          <FaUser className='user-svg' />
        )}
        <h4>{props.name}</h4>
      </div>
      <div className='review-content'>
        <div className='rating'>
          <Star rating={props.rating} />{" "}
          <span className='after-rating'>{date}</span>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Review;
