import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_KEY,
          language: "en"
        }}
        defaultZoom={12}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
      />
    );
  }
}

export default GoogleMap;
