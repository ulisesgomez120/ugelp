import React, { Component } from "react";
import Result from "../../views/Result/Result";

export default class Companies extends Component {
  state = {
    results: []
  };
  componentDidMount() {}
  render() {
    return (
      <section className="companies">
        <form>
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
        <Result />
      </section>
    );
  }
}
