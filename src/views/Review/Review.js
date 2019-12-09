import React from "react";
import Star from "../Star/Star";
const Review = props => {
  const dateArray = props.created_on.split(" ")[0].split("-");
  console.log(dateArray);
  const date = [dateArray[1], dateArray[2], dateArray[0]].join("/");
  return (
    <div className="review-container">
      <div className="user-info">
        <h4>{props.name}</h4>
        <img src={props.image} />
      </div>
      <div className="review-content">
        <div className="rating">
          <Star rating={props.rating} /> <span className="date">{date}</span>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Review;
