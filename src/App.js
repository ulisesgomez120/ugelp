import React from "react";
import "./App.css";
import { yelp_key } from "./private";
import Map from "./controllers/Map/Map";
function App() {
  return (
    <div className="flex-container">
      <div>Yelp!</div>
      <Map />
    </div>
  );
}

export default App;
