import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";
import CompanyModal from "./views/CompanyModal/CompanyModal";
class App extends Component {
  state = {
    results: [],
    showModal: false,
    singleBusiness: undefined,
    singleBusinessReviews: undefined
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
        console.log(err);
      });
  }
  modalHandler = async id => {
    const singleBusiness = fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY
        }
      }
    )
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
    const singleBusinessReviews = fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews`,
      {
        headers: {
          Authorization: process.env.REACT_APP_YELP_KEY
        }
      }
    )
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
    await Promise.all([singleBusiness, singleBusinessReviews]).then(value => {
      this.setState({
        showModal: true,
        singleBusiness: value[0],
        singleBusinessReviews: value[1]["reviews"]
      });
    });
  };

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
        console.log(err);
      });
  };
  render() {
    return (
      <div className="flex-container">
        <ResultsContext.Provider
          value={{
            results: this.state.results,
            search: this.searchHandler,
            modalHandler: this.modalHandler
          }}
        >
          {this.state.showModal ? (
            <CompanyModal
              business={this.state.singleBusiness}
              reviews={this.state.singleBusinessReviews}
            />
          ) : null}
          <Companies />
          <Map />
        </ResultsContext.Provider>
      </div>
    );
  }
}

export default App;
