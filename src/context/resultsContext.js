import React from "react";

const resultsContext = React.createContext({
  results: [],
  term: "food",
  location: "Irvine,CA"
});

export default resultsContext;
