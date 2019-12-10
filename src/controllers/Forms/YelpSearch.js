import React, { Component } from "react";
import ResultsContext from "../../context/resultsContext";
import Autocomplete from "react-google-autocomplete";

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
        {/* <Autocomplete
          style={{ width: "90%", display: "block " }}
          onPlaceSelected={place => {
            console.log(place);
          }}
          types={["(regions)"]}
          componentRestrictions={{ country: "ru" }}
        /> */}
        <button type="submit">Search</button>
      </form>
    );
  }
}
