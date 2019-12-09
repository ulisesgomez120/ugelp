import React from "react";
const Star = props => {
  console.log(props.rating);
  let starImg;
  switch (props.rating) {
    case 5:
      starImg = props.imgPath + "small_5@2x.png";
      break;
  }
  return <img src="../../images/small_5@2x.png" />;
};

export default Star;
