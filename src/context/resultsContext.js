import React from "react";

const resultsContext = React.createContext({
  results: [],
  term: "food",
  location: "Irvine,CA",
  search: () => {}
});

export default resultsContext;
