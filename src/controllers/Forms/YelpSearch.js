import React, { useState, useEffect } from "react";

const YelpSearch = props => {
  const [termState, updateTermState] = useState();
  const [locationState, updateLocationState] = useState();

  return (
    <form>
      <input
        type="text"
        name="term-search"
        id="term-search"
        placeholder="Food"
      ></input>
      <input
        type="text"
        name="location-search"
        id="location-search"
        placeholder="Irvine, CA"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default YelpSearch;
