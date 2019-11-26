import React, { Component } from "react";
import Result from "../../views/Result/Result";

export default class Companies extends Component {
  state = {
    results: []
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <form>
          <input type="text" name="term-search" id="term-search"></input>
          <input
            type="text"
            name="location-search"
            id="location-search"
          ></input>
          <button type="submit">Search</button>
        </form>
        <div>all Companies</div>
      </div>
    );
  }
}
