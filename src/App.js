import React, { Component } from "react";
import "./App.css";
import Map from "./controllers/Map/Map";
import Companies from "./controllers/Companies/Companies";
import ResultsContext from "./context/resultsContext";
import CompanyModal from "./views/CompanyModal/CompanyModal";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

class App extends Component {
  state = {
    results: [],
    showModal: false,
    singleBusiness: undefined,
    singleBusinessReviews: undefined,
    mapLat: 33.6846,
    mapLng: -117.8265
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

    window.onclick = event => {
      if (event.target.className === "modal") {
        this.setState({ showModal: false });
      }
    };
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

  searchHandler = async event => {
    event.preventDefault();
    const term = event.target[0].value;
    const location = event.target[1].value;
    const geoCode = Geocode.fromAddress(location)
      .then(res => res.results[0].geometry.location)
      .catch(err => {
        console.error(err);
      });
    const searchResults = fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
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
    await Promise.all([geoCode, searchResults]).then(value => {
      this.setState({
        results: value[1]["businesses"],
        mapLat: value[0]["lat"],
        mapLng: value[0]["lng"]
      });
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
          <Map lat={this.state.mapLat} lng={this.state.mapLng} />
        </ResultsContext.Provider>
      </div>
    );
  }
}

export default App;
