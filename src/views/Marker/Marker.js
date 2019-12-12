import React from "react";

export const Marker = props => {
  const scrollAndFocus = () => {
    const result = document.getElementById(props.businessId);
    result.focus();
  };
  return (
    <div className="marker" onClick={scrollAndFocus} title={props.name}></div>
  );
};
