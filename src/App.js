import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";

class App extends Component {
  state = {
    results: [],
    term: "food",
    location: "Irvine,CA"
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.term}&location=${this.state.location}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY
        }
      }
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ results: jsonRes["businesses"] });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  searchHandler = event => {
    event.persist();
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };
  render() {
    return (
      <div className="flex-container">
        <ResultsContext.Provider
          value={{
            results: this.state.results,
            term: this.state.term,
            location: this.state.location,
            search: this.searchHandler
          }}
        >
          <Companies />
          {/* <Map /> */}
        </ResultsContext.Provider>
      </div>
    );
  }
}

export default App;
