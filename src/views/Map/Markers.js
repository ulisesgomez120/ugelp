import React, { Component } from "react";
import ResultsContext from "../../context/resultsContext";

export default class Markers extends Component {
  static contextType = ResultsContext;
  render() {
    console.log(this.context.results);

    return <div></div>;
  }
}
