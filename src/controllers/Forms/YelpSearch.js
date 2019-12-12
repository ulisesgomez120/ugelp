import React, { Component } from "react";
import ResultsContext from "../../context/resultsContext";
import { FaSearch } from "react-icons/fa";
export default class YelpSearch extends Component {
  static contextType = ResultsContext;

  render() {
    return (
      <form onSubmit={this.context.search} id="yelp-search">
        <input
          type="text"
          name="term-search"
          id="term-search"
          placeholder="Food, Bar, Bowling ..."
        />
        <input
          type="text"
          name="location-search"
          id="location-search"
          placeholder="City, State ..."
        />

        <button type="submit" className="search-button">
          <FaSearch className="search-svg" />
        </button>
      </form>
    );
  }
}
