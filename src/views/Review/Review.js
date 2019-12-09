import React from "react";

const Review = props => {
  return (
    <div className="review-container">
      <div className="user-info">
        <h4>{props.name}</h4>
        <img src={props.image} />
      </div>
      <div>
        <span>
          {props.rating} {props.created_on}
        </span>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Review;
