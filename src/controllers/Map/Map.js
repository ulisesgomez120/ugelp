import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "../../views/Marker/Marker";
import ResultsContext from "../../context/resultsContext";

class GoogleMap extends Component {
  static contextType = ResultsContext;

  render() {
    // console.log(this.context.results, company.coordinates.latitude,company.coordinates.longitude, company.name);
    let markers;
    if (this.context.results.length !== 0) {
      markers = this.context.results.map(business => {
        return (
          <Marker
            key={business.id}
            name={business.name}
            lat={business.coordinates.latitude}
            lng={business.coordinates.longitude}
          />
        );
      });
    }
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_KEY,
          language: "en"
        }}
        defaultZoom={12}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
      >
        {markers}
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
