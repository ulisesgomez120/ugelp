import React from "react";
import Star from "../Star/Star";
const Result = props => {
  const cats = props.categories.map(cat => cat.title);
  return (
    <article
      className="result-card"
      id={props.businessId}
      onClick={props.openModal}
      tabIndex="0"
    >
      <div className="company-details">
        <img src={props.imgUrl} alt="a business" />
        <div>
          <h3 className="company-name">{props.name}</h3>
          <div className="rating">
            <Star rating={props.rating} />{" "}
            <span className="after-rating">{props.revCount}</span>
          </div>
          <p className="general-desc secondary-color">
            {props.price ? props.price + " - " : null}
            {cats.join(", ")}
          </p>
        </div>
      </div>
      <div className="company-info">
        <p className="secondary-color">{props.phone ? props.phone : null}</p>
        <p className="secondary-color">{props.address}</p>
      </div>
    </article>
  );
};

export default Result;
