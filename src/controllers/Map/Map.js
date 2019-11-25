import React, { Component } from "react";

export default class Map extends Component {
  state = {
    markers: [],
    coords: { lat: 43, lng: 34 }
  };
  render() {
    return <div id="map">Map</div>;
  }
}
