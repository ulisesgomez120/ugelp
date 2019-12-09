import React from "react";
import Star from "../Star/Star";
const Review = props => {
  return (
    <div className="review-container">
      <div className="user-info">
        <h4>{props.name}</h4>
        <img src={props.image} />
      </div>
      <div className="review-content">
        <div>
          <Star rating={props.rating} imgPath="../../images/" />{" "}
          {props.created_on}
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Review;
