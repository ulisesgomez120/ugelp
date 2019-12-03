import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";

class App extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=Irvine,CA`,
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
    event.preventDefault();
    const term = event.target[0].value;
    const location = event.target[1].value;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
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
