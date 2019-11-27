import React from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
function App() {
  console.log(process.env);
  return (
    <div className="flex-container">
      <Companies />
      <Map />
    </div>
  );
}

export default App;
