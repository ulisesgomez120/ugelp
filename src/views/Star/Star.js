import React from "react";

const Star = props => {
  let starImg = "../../images/";
  switch (props.rating) {
    case 5:
      starImg += "small_5@2x.png";
      break;
    case 4.5:
      starImg += "small_4_half@2x.png";
      break;
    case 4:
      starImg += "small_4@2x.png";
      break;
    case 3.5:
      starImg += "small_3_half@2x.png";
      break;
    case 3:
      starImg += "small_3@2x.png";
      break;
    case 2.5:
      starImg += "small_2_half@2x.png";
      break;
    case 2:
      starImg += "small_2@2x.png";
      break;
    case 1.5:
      starImg += "small_1_half@2x.png";
      break;
    case 1:
      starImg += "small_1@2x.png";
      break;
    default:
      starImg += "small_0@2x.png";
  }
  return (
    <img
      className="star-img"
      src={starImg}
      alt={props.rating + "star rating"}
    />
  );
};

export default Star;
