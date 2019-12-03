import React from "react";

const resultsContext = React.createContext({
  results: [],
  search: () => {}
});

export default resultsContext;
