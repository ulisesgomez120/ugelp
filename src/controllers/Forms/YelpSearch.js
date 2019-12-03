import React, { Component } from "react";
import ResultsContext from "../../context/resultsContext";

export default class YelpSearch extends Component {
  static contextType = ResultsContext;

  render() {
    return (
      <form onSubmit={this.context.search}>
        <input
          type="text"
          name="term-search"
          id="term-search"
          placeholder="Food"
        ></input>
        <input
          type="text"
          name="location-search"
          id="location-search"
          placeholder="Irvine, CA"
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
