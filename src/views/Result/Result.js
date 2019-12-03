import React from "react";

const Result = props => {
  const cats = props.categories.map(cat => cat.title);
  return (
    <article className="result-card">
      <div className="company-details">
        <img src={props.imgUrl} alt="a business" />
        <div>
          <h3 className="company-name">{props.name}</h3>
          <div className="rating">
            {props.rating} out of {props.revCount}
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
