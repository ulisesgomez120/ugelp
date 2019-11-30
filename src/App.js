import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";

class App extends Component {
  state = {
    results: []
  };
  api_key =
    "Bearer S7elWyjPsvQyJwo5NKCJ0nhpGyY7K7sMOIYaOb8XeudhWIVDYJHvFNJ3V-VbvKQW2vvOgg3Fa7KdmuFrbbmfL1Funp9s8fbhLH7uY2UyuueF4Tpmuh8_bRHjcYjQXXYx";
  componentDidMount() {
    function initMap() {
      new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=Irvine,CA",
    //   {
    //     headers: {
    //       Authorization: this.api_key
    //     }
    //   }
    // )
    //   .then(res => res.json())
    //   .then(jsonRes => {
    //     this.setState({ results: jsonRes["businesses"] });
    //   })
    //   .catch(err => {
    //     throw new Error(err);
    //   });
  }
  googlekey =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2WJgyx0aRsYBeYAoOyrR9vHH79JHkLdc&v=3.exp&libraries=geometry,drawing,places";

  render() {
    console.log(process.env);
    return (
      <div className="flex-container">
        <ResultsContext.Provider value={{ results: this.state.results }}>
          <Companies />
          <Map
            googleMapURL={this.googlekey}
            loadingElement={<section></section>}
            containerElement={<div />}
            mapElement={<div />}
          />
        </ResultsContext.Provider>
      </div>
    );
  }
}

export default App;
