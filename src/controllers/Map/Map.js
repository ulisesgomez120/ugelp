import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "../../views/Marker/Marker";
import ResultsContext from "../../context/resultsContext";

class GoogleMap extends Component {
  static contextType = ResultsContext;

  render() {
    let markers;
    if (this.context.results.length !== 0) {
      markers = this.context.results.map(business => {
        return (
          <Marker
            businessId={business.id}
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
        style={{
          width: "40%",
          height: "100%",
          margin: "0px",
          padding: "0px",
          display: "inline-block",
          position: "fixed"
        }}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_KEY,
          language: "en"
        }}
        defaultZoom={11}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
        center={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {markers}
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
