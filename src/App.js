import React from "react";
import "./App.css";
import { yelp_key } from "./private";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
function App() {
  return (
    <div className="flex-container">
      <Companies />
      <Map />
    </div>
  );
}

export default App;
