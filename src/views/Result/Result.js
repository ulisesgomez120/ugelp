import React from "react";

const Result = props => {
  const cats = props.categories.map(cat => cat.title);
  return (
    <article className="result-card">
      {/* <img src={props.imgUrl} alt="a business"></img> */}
      <div className="company-info">
        <p className="secondary-color">{props.phone ? props.phone : null}</p>
        <p className="secondary-color">{props.address}</p>
      </div>
      <h3>{props.name}</h3>
      <div className="rating">
        {props.rating} out of {props.revCount}
      </div>
      <p className="general-desc secondary-color">
        {props.price ? props.price + " - " : null}
        {cats.join(", ")}
      </p>
    </article>
  );
};

export default Result;
